# Media Overhaul Migration Guide

This guide explains how to migrate from ad-hoc public assets to the organized `public/media` structure, and how to use the new `SmartImage` and `Avatar` components.

## New Components

- SmartImage: Drop-in image replacement with gradient/SVG fallbacks.
- Avatar: Wraps SmartImage for consistent avatar rendering.

## Configuration

- App Display Name: Set `NEXT_PUBLIC_APP_NAME` to change display name globally.

## Directory Structure

Place media under:

```
public/media/
  avatars/
  placeholders/
  illustrations/
  ...
```

Track assets in `public/media/media.manifest.json`.

## Codemod (find placeholders)

Search for placeholder references like `/placeholder.svg` and replace usages with SmartImage:

```tsx
import { SmartImage } from "@/components/ui/smart-image";

<SmartImage alt="..." src={maybeUrl} width={...} height={...} />
```

Avatars:

```tsx
import { Avatar } from "@/components/ui/avatar";

<Avatar name={user.name} src={user.avatar} size={40} />
```

## Standards

- Default sizes: cards 320x180, thumbnails 120x90, avatars 40x40/64x64/96x96.
- Use SVG placeholders in lists; CSS gradients for non-img backgrounds.

## Rollback

- Toggle feature flag `smart-image-replacement` off to restore default image behavior.
