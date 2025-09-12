# PostHog Setup Instructions

## Issue
The dev server is showing PostHog 404 errors because the environment variables are not configured.

## Solution
Create a `.env.local` file in the project root with the following content:

```bash
# PostHog Configuration
NEXT_PUBLIC_POSTHOG_KEY=your_actual_posthog_key_here
NEXT_PUBLIC_POSTHOG_HOST=https://us.posthog.com
```

## Steps to Fix

1. **Create the environment file:**
   ```bash
   # In the project root directory
   touch .env.local
   ```

2. **Add the PostHog configuration:**
   ```bash
   # Copy this content to .env.local
   NEXT_PUBLIC_POSTHOG_KEY=your_actual_posthog_key_here
   NEXT_PUBLIC_POSTHOG_HOST=https://us.posthog.com
   ```

3. **Get your PostHog key:**
   - Go to [PostHog](https://posthog.com)
   - Sign up or log in
   - Create a new project or use an existing one
   - Copy the project API key from the project settings
   - Replace `your_actual_posthog_key_here` with your real key

4. **Restart the dev server:**
   ```bash
   pnpm dev
   ```

## Alternative: Disable PostHog Temporarily

If you don't want to use PostHog right now, you can temporarily disable it by:

1. Commenting out the PostHog provider in `app/layout.tsx` ✅ (Already done)
2. Commenting out PostHog initialization in `instrumentation-client.ts` ✅ (Already done)
3. Or setting a dummy key: `NEXT_PUBLIC_POSTHOG_KEY=disabled`

## Current Errors
The following 404 errors will be resolved once PostHog is properly configured:
- `POST /ingest/e?ip=0&_=...` (404)
- `POST /ingest/flags?v=2&config=true&ip=0&_=...` (404)
- `GET /ingest/static/exception-autocapture.js?v=1.261.7` (404)
- `GET /ingest/array/your_posthog_key_here/config.js` (404)
- `GET /ingest/array/your_posthog_key_here/config?ip=0&_=...` (404)
