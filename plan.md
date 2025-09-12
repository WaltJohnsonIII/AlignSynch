# Implementation Plan: Smart Image Component

## 1. Technical Approach

We will create a single, reusable React component named `<SmartImage />` that encapsulates all the logic for displaying an image or its appropriate fallback. This component will act as a "smart" wrapper around the standard Next.js `<Image />` component.

The core logic will be:
1.  Use a custom hook `useFeatureFlag('smart-image-replacement')` to check the feature's status.
2.  Use an internal state to track if the provided `src` URL successfully loads. The `onError` event of the underlying `<img>` tag will be used to detect broken image links.
3.  If the feature flag is disabled OR if a valid `src` is provided and loads correctly, render the Next.js `<Image />`.
4.  If the feature flag is enabled AND the `src` is missing or fails to load, render the fallback SVG.

## 2. Component Architecture

**Component:** `<SmartImage />`

**Props:**
-   `src: string | null | undefined`
-   `alt: string` (Required for accessibility)
-   `name?: string` (For generating avatar initials)
-   `type?: 'avatar' | 'generic'` (Defaults to 'generic')
-   `...rest`: All other props will be passed down to the Next.js `<Image />` component.

**Dependencies:**
-   A lightweight, minimal library for generating gradients (e.g., `tiny-gradient`) or a custom-built SVG/CSS utility to avoid adding significant bundle size. We will start with a simple CSS `linear-gradient`.
-   A utility function `getInitials(name: string): string` to extract initials from a user's full name.

## 3. File Structure

-   `components/ui/smart-image.tsx`: The main component file.
-   `lib/utils.ts`: To house `getInitials` and other helpers.
-   `hooks/use-feature-flag.ts`: A reusable hook to interact with PostHog.
-   `__tests__/components/smart-image.test.tsx`: Unit tests for the component.
-   `__checks__/smart-image.spec.ts`: E2E visual regression test.

## 4. Future Considerations (DAM Integration)

This component is inherently data-source agnostic. It only requires a URL string via the `src` prop. When we integrate Hygraph CMS, we will simply pass the asset URL from Hygraph into this component. No changes to the `<SmartImage />` component itself will be necessary, ensuring a seamless transition.