import React, {
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";
import { PostHog, PostHogProvider } from "posthog-js/react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { posthog } from "posthog-js";
import dayjs from "dayjs";
import TrackRoute from "./TrackRoute";

export const AnalyticsContext = createContext<
  (eventName: string, eventProps?: Record<string, unknown>) => void
>(() => {});

export function AnalyticsProvider({ children }: PropsWithChildren) {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();
  const [client, setClient] = useState<PostHog | undefined>();

  const baseEventProps = useCallback(
    () => ({
      sent_at_local: dayjs().format(),
      posthog_project_id: customFields.posthogProjectId,
    }),
    [customFields.posthogProjectId]
  );

  const capture = useCallback(
    (
      eventName: string,
      eventProperties: Record<string | number, unknown> = {}
    ) => {
      client?.capture(eventName, {
        ...baseEventProps(),
        ...eventProperties,
      });
    },
    [client, baseEventProps]
  );

  useEffect(() => {
    const { posthogApiKey, posthogApiHost } = customFields;

    if (
      typeof posthogApiKey === "string" &&
      posthogApiKey &&
      typeof posthogApiHost === "string" &&
      posthogApiHost
    ) {
      setClient(
        posthog.init(posthogApiKey ?? "", {
          api_host: posthogApiHost,
          capture_pageleave: false,
          capture_pageview: false,
        }) as PostHog
      );
    }
  }, [customFields.posthogApiKey, customFields.posthogApiHost]);

  return (
    <PostHogProvider client={client}>
      <AnalyticsContext.Provider value={capture}>
        <TrackRoute />
        {children}
      </AnalyticsContext.Provider>
    </PostHogProvider>
  );
}
