"use client";
import posthog from "posthog-js";
import { useEffect, useState } from "react";

export function SpecKitBanner() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Initial evaluation after hydration
    try {
      setEnabled(Boolean(posthog.isFeatureEnabled("spec_kit_ui")));
    } catch {
      setEnabled(false);
    }

    // React to flag updates
    const off = posthog.onFeatureFlags((_, __) => {
      try {
        setEnabled(Boolean(posthog.isFeatureEnabled("spec_kit_ui")));
      } catch {
        setEnabled(false);
      }
    });

    return () => {
      if (typeof off === "function") off();
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-live="polite"
      className="w-full bg-emerald-600 px-3 py-1 text-sm text-white"
    >
      Spec Kit UI feature flag is active.
    </div>
  );
}
