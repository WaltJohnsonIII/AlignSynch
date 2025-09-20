import { usePostHog } from "posthog-js/react";

export function useFeatureFlag(flagName: string): boolean {
  const posthog = usePostHog();

  if (!posthog) {
    // Default ON so placeholders/gradients work even without PostHog
    return true;
  }

  return posthog.isFeatureEnabled(flagName) ?? false;
}
