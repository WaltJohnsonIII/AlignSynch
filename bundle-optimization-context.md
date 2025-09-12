# Bundle Size Optimization Context - AlignSynch Quiz Hub

## Current Problem
- **Bundle Size**: 1GB+ (should be <50MB for Next.js app)
- **Vercel Deployment**: 799MB (way too large)
- **Impact**: Slow cold starts, high costs, poor UX

## Completed Optimizations
✅ **Removed 8 unused Radix UI packages**:
- @radix-ui/react-aspect-ratio
- @radix-ui/react-collapsible
- @radix-ui/react-context-menu
- @radix-ui/react-hover-card
- @radix-ui/react-menubar
- @radix-ui/react-navigation-menu
- @radix-ui/react-toggle
- @radix-ui/react-toggle-group

✅ **Moved Checkly to devDependencies** (prevents production bundling)

✅ **Enabled webpackBuildWorker: true** in next.config.mjs

✅ **Added @next/bundle-analyzer** for detailed analysis

## Current Bundle Analysis
**Largest files in .next directory:**
- `1.pack`: 406MB
- `0.pack`: 256MB
- `index.pack`: 128MB
- `0.pack`: 120MB
- `index.pack`: 76MB

## Root Causes Identified
1. **Heavy dependencies**: Framer Motion, Recharts, Swiper, PostHog
2. **Multiple UI libraries**: CopilotKit + Radix + shadcn/ui
3. **Large development tools**: Some still bundled despite devDependencies
4. **Webpack cache bloat**: Massive .pack files

## Next Steps
1. **Run bundle analyzer**: `pnpm build:analyze` to see exact chunk sizes
2. **Remove unused heavy dependencies**: Framer Motion, Recharts, Swiper
3. **Optimize PostHog**: Client-side only, remove server-side bundling
4. **Code splitting**: Split large components
5. **Tree shaking**: Ensure unused code is eliminated

## Commands Ready
```bash
# Analyze bundle
pnpm build:analyze

# Check current size
Get-ChildItem .next -Recurse | Measure-Object -Property Length -Sum | Select-Object @{Name="Size(MB)";Expression={[math]::Round($_.Sum/1MB,2)}}

# Clean build
Remove-Item .next -Recurse -Force
pnpm build
```

## Files Modified
- `package.json`: Removed unused Radix packages, moved Checkly to devDependencies
- `next.config.mjs`: Enabled webpackBuildWorker, added bundle analyzer
- Added `build:analyze` script

## Target
Reduce bundle from 1GB+ to <50MB for proper Vercel deployment.
