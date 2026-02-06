# Logi-Slate-UI Constraints

> Critical rules agents MUST follow when modifying this repository.

## ⛔ Hard Constraints

1. **TypeScript Strict Mode** - No `any` types allowed
2. **React 18+ Patterns** - Use concurrent features, Suspense
3. **Component Isolation** - No cross-feature imports
4. **Atomic Design** - Follow atoms → molecules → organisms

## 🎨 Design Rules

### Glass-Neon System
```css
/* Required token usage */
--glass-bg: rgba(0, 0, 0, 0.6);
--glass-border: rgba(255, 255, 255, 0.1);
--neon-primary: #00ffff;
--neon-accent: #ff00ff;
```

### Accessibility
- Minimum contrast ratio: 4.5:1
- All interactive elements keyboard accessible
- ARIA labels on icon-only buttons

### Responsive Breakpoints
```typescript
const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};
```

## 📐 Component Rules

### Props
- All props typed via interface
- Destructure with defaults
- No prop drilling > 2 levels (use context)

### State
- Local state for UI-only concerns
- Global state for shared data
- No state in atoms (pure presentation)

## 🧪 Testing Requirements

Before merging:
- [ ] `npm run typecheck` passes
- [ ] `npm run lint` passes
- [ ] Component tests via Testing Library
- [ ] Visual regression for design system changes
