import CodeBlock from "@theme/CodeBlock";
import clsx from "clsx";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import RecaptchaField from "./RecaptchaField";
import styles from "./styles.module.css";

type Form = {
  "g-recaptcha-response": string;
  api_key: string;
  type: string;
} & (
  | {
      action: "funds";
      address: string;
      poolid: never;
    }
  | {
      action: "delegation";
      address: never;
      poolid: string;
    }
);

function getFormUrl(values: Form) {
  return values.action === "delegation"
    ? "https://faucet.sanchonet.world.dev.cardano.org/delegate"
    : "https://faucet.sanchonet.world.dev.cardano.org/send-money";
}

function parseServerError(error: string): string {
  switch (error) {
    case "FaucetWebErrorInvalidApiKey":
      return "Invalid API key";
    case "FaucetWebErrorKeyCantDelegate":
      return "Key can't delegate";
    case "FaucetWebErrorRateLimitExeeeded":
      return "Rate limit exceeded, please try later";
    case "FaucetWebErrorUtxoNotFound":
      return "UTXO not found";
    case "FaucetWebErrorStakeKeyNotFound":
      return "Stake key not found";
    case "FaucetWebErrorAlreadyDelegated":
      return "Already delegated";
    default:
      return error.replace("FaucetWebError", "");
  }
}

export default function Faucet() {
  const form = useForm<Form>({
    defaultValues: {
      type: "default",
      action: "funds",
    },
  });

  const ids = {
    address: "address",
    poolid: "poolid",
    apiKey: "apiKey",
    action: "action",
  };

  const action = form.watch("action");
  const [response, setResponse] = useState<any | null>(null);

  const submit = async (values: Form) => {
    console.log(values);
    if (!values["g-recaptcha-response"]) {
      form.setError("g-recaptcha-response" as any, {
        type: "manual",
        message: "Please complete the recaptcha",
      });

      return;
    }

    const searchParams = new URLSearchParams(values);
    const url = new URL(`${getFormUrl(values)}?${searchParams}`);

    const resp = await fetch(url, {
      method: "GET",
    });

    if (resp.status === 200) {
      const body = await resp.json();
      if (body.error) {
        form.setError("root", {
          type: "manual",
          message: parseServerError(body.error.tag),
        });
      } else {
        setResponse(body);
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(submit)} className={styles.form}>
          <input
            {...form.register("type")}
            type="hidden"
            name="type"
            value="default"
          />

          <label htmlFor={ids.action}>Action</label>
          <select
            {...form.register("action")}
            id={ids.action}
            className={styles.coin}
          >
            <option value="funds">Test ADA</option>
            <option value="delegation">Stake delegation</option>
          </select>

          <label
            className={clsx({ [styles.disabled]: action === "delegation" })}
            htmlFor={ids.address}
          >
            address (required)
          </label>
          <input
            {...form.register("address")}
            id={ids.address}
            disabled={action === "delegation"}
            required
            type="text"
          />

          <label
            className={clsx({ [styles.disabled]: action === "funds" })}
            htmlFor={ids.poolid}
          >
            pool id (required)
          </label>
          <input
            {...form.register("poolid")}
            id={ids.poolid}
            required
            disabled={action === "funds"}
            type="text"
          />

          <label htmlFor={ids.apiKey}>api key (optional)</label>
          <input {...form.register("api_key")} id={ids.apiKey} type="text" />

          <div className={styles.captcha}>
            <RecaptchaField name="g-recaptcha-response" />
          </div>

          <button className="button button--primary button--lg" type="submit">
            Submit
          </button>
        </form>

        {form.formState.errors.root && (
          <p className={styles.error}>{form.formState.errors.root.message}</p>
        )}

        {response && (
          <div className={styles.response}>
            <CodeBlock language="json">
              {JSON.stringify(response, null, 2)}
            </CodeBlock>
          </div>
        )}
      </FormProvider>
    </div>
  );
}
