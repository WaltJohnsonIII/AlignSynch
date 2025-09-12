import { usePostHog } from "posthog-js/react";

export function useFeatureFlag(flagName: string): boolean {
  const posthog = usePostHog();

  if (!posthog) {
    return false;
  }

  return posthog.isFeatureEnabled(flagName) ?? false;
}
