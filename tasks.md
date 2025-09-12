# Tasks: Smart Image Component

**Prerequisites**: `spec.md` and `plan.md` are approved.

---

## Phase 1: Setup & Testing (Test-First)

- [ ] **T001**: [P] Create the feature branch `feature/004-smart-image-replacement` from `main`.
- [ ] **T002**: [P] Create the empty component file `components/ui/smart-image.tsx`.
- [ ] **T003**: [P] Create the `getInitials` utility function in `lib/utils.ts` with its own unit tests.
- [ ] **T004**: **[CRITICAL]** Write unit tests for `<SmartImage />` in `__tests__/components/smart-image.test.tsx`. The tests should cover all scenarios defined in the spec and MUST FAIL initially.
- [ ] **T005**: **[CRITICAL]** Write a visual regression test in `__checks__/smart-image.spec.ts` that captures a page with a placeholder. This test is EXPECTED TO FAIL later, proving our visual change was successful.

## Phase 2: Core Implementation (Make Tests Pass)

- [ ] **T006**: Implement the `<SmartImage />` component logic to handle the `src` prop, loading state, and `onError` handling.
- [ ] **T007**: Implement the feature flag check using the `useFeatureFlag` hook.
- [ ] **T008**: Implement the avatar fallback logic (SVG with initials).
- [ ] **T009**: Implement the generic fallback logic (CSS linear-gradient). At this point, all unit tests from T004 should pass.

## Phase 3: Integration & Verification

- [ ] **T010**: Replace a single placeholder instance in the UI (e.g., user avatar in the header) with the new `<SmartImage />` component.
- [ ] **T011**: Run the visual regression test from T005. Review the visual diff, and if correct, update the snapshot.
- [ ] **T012**: Replace all remaining placeholder images identified in the codebase.
- [ ] **T013**: Submit a Pull Request for review, linking to the `spec.md` and `tasks.md`.