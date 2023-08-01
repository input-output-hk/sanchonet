import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import React, { FC } from "react";
import ReCaptcha from "react-google-recaptcha";
import { useController } from "react-hook-form";
import styles from "./styles.module.css";

type Props = {
  name: string;
};

const RecaptchaField: FC<Props> = ({ name }) => {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  const { field, fieldState, formState } = useController({
    name,
  });

  return (
    <div>
      <ReCaptcha
        {...field}
        sitekey={String(customFields.recaptchaSiteKey) ?? ""}
      />
      {fieldState.error && (
        <p className={styles.error}>{fieldState.error.message}</p>
      )}
    </div>
  );
};

export default RecaptchaField;
