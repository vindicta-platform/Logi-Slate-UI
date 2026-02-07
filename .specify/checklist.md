# Checklist: Component Library UI Kit

**Spec Reference**: [spec.md](.specify/spec.md)  
**Created**: 2026-02-05  
**Status**: Draft

---

## User Story Verification (English Unit Tests)

### US-001: Consistent UI Components
- [ ] **CHK-001**: Importing `Button` from `@ui-kit` works without errors
- [ ] **CHK-002**: Button renders with Vindicta amber-500 primary color
- [ ] **CHK-003**: All components use the same token values for spacing
- [ ] **CHK-004**: Typography uses Outfit font family consistently

### US-002: Interactive Documentation
- [ ] **CHK-005**: Running `npm run storybook` starts without errors
- [ ] **CHK-006**: All components have corresponding stories
- [ ] **CHK-007**: Stories include interactive controls for all props
- [ ] **CHK-008**: Code snippets are displayed for each component

### US-003: Accessibility Support
- [ ] **CHK-009**: All buttons are keyboard navigable (Tab, Enter, Space)
- [ ] **CHK-010**: All inputs have associated labels (visible or aria-label)
- [ ] **CHK-011**: Color contrast meets WCAG AA (4.5:1 for text)
- [ ] **CHK-012**: Focus indicators are visible on all interactive elements
- [ ] **CHK-013**: axe-core reports zero violations on all components

### US-004: Mobile-First Experience
- [ ] **CHK-014**: Touch targets are >=44px on mobile viewport
- [ ] **CHK-015**: Components render correctly at 320px width
- [ ] **CHK-016**: No horizontal overflow at any breakpoint
- [ ] **CHK-017**: Font sizes are readable on mobile (>=16px base)

---

## BDD Scenario Verification

### Scenario: Use themed button
- [ ] **CHK-018**: `<Button variant="primary">` renders amber styling
- [ ] **CHK-019**: Button responds to keyboard Enter/Space
- [ ] **CHK-020**: Button has `role="button"` or is native `<button>`

### Scenario: Browse Storybook documentation
- [ ] **CHK-021**: Button story shows all 4 variants
- [ ] **CHK-022**: Controls panel allows variant/size changes
- [ ] **CHK-023**: Docs tab shows usage documentation

### Scenario: Dark mode toggle
- [ ] **CHK-024**: `useTheme()` hook returns current theme
- [ ] **CHK-025**: `toggleTheme()` switches between dark/light
- [ ] **CHK-026**: All components update on theme change
- [ ] **CHK-027**: Contrast ratios maintained in both modes

### Scenario: Mobile touch targets
- [ ] **CHK-028**: Button minimum height is 44px on mobile
- [ ] **CHK-029**: Input minimum height is 44px on mobile
- [ ] **CHK-030**: Interactive elements have adequate spacing

---

## Non-Functional Requirements Verification

### Performance (Constitution Section IV)
- [ ] **CHK-031**: ui-kit bundle size < 50KB gzipped
- [ ] **CHK-032**: No render-blocking resources
- [ ] **CHK-033**: FCP < 1.5s on mobile with Storybook

### Accessibility (Constitution Section III)
- [ ] **CHK-034**: WCAG 2.1 AA compliance verified
- [ ] **CHK-035**: Screen reader announces button states
- [ ] **CHK-036**: Reduced motion preference respected

### Mobile-First (Constitution Section II)
- [ ] **CHK-037**: All components responsive 320px-1920px
- [ ] **CHK-038**: Touch gestures work on tablet
- [ ] **CHK-039**: Landscape orientation supported

---

*Total Checks: 39*  
*Last Updated: 2026-02-05 by Spec-Bot*
