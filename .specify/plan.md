# Implementation Plan: Component Library UI Kit

**Plan ID**: PLAN-001  
**Spec Reference**: [spec.md](.specify/spec.md)  
**Author**: Spec-Bot (Autonomous)  
**Created**: 2026-02-05  
**Status**: Draft

---

## 1. Architecture Overview

```
Logi-Slate-UI/
├── packages/
│   └── ui-kit/
│       ├── src/
│       │   ├── tokens/
│       │   │   ├── colors.ts        [NEW] Color palette definitions
│       │   │   ├── typography.ts    [NEW] Font families, sizes
│       │   │   ├── spacing.ts       [NEW] Spacing scale
│       │   │   ├── animations.ts    [NEW] Animation presets
│       │   │   └── index.ts         [NEW] Token exports
│       │   ├── atoms/
│       │   │   ├── Button/
│       │   │   │   ├── Button.tsx   [NEW]
│       │   │   │   ├── Button.test.tsx [NEW]
│       │   │   │   └── index.ts     [NEW]
│       │   │   ├── Input/           [NEW]
│       │   │   ├── Badge/           [NEW]
│       │   │   ├── Spinner/         [NEW]
│       │   │   └── index.ts         [NEW]
│       │   ├── molecules/
│       │   │   ├── Card/            [NEW]
│       │   │   ├── Modal/           [NEW]
│       │   │   ├── Toast/           [NEW]
│       │   │   └── index.ts         [NEW]
│       │   ├── context/
│       │   │   └── ThemeProvider.tsx [NEW]
│       │   └── index.ts             [NEW] Main exports
│       ├── package.json             [NEW]
│       └── tsconfig.json            [NEW]
├── apps/
│   └── storybook/
│       ├── .storybook/
│       │   ├── main.ts              [NEW]
│       │   └── preview.ts           [NEW]
│       ├── stories/
│       │   ├── Button.stories.tsx   [NEW]
│       │   └── ...
│       └── package.json             [NEW]
├── package.json                     [MODIFY] Add workspaces
├── tsconfig.json                    [MODIFY] Add path aliases
└── pnpm-workspace.yaml              [NEW] Workspace config
```

---

## 2. Proposed Changes

### Design Tokens Package

#### [NEW] `packages/ui-kit/src/tokens/colors.ts`
```typescript
export const colors = {
  primary: {
    amber: { 500: '#F59E0B', 600: '#D97706' },
    gold: '#FFD700',
    cyan: '#00D4FF',
  },
  semantic: {
    success: '#10B981',
    warning: '#F59E0B', 
    error: '#EF4444',
    info: '#3B82F6',
  },
  neutral: {
    50: '#FAFAFA',
    900: '#0A0A0A',
  }
} as const;
```

#### [NEW] `packages/ui-kit/src/tokens/typography.ts`
```typescript
export const typography = {
  fontFamily: {
    display: '"Bebas Neue", sans-serif',
    body: '"Outfit", sans-serif',
    mono: '"JetBrains Mono", monospace',
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
  }
} as const;
```

---

### Atom Components

#### [NEW] `packages/ui-kit/src/atoms/Button/Button.tsx`
- Props: `variant`, `size`, `disabled`, `loading`, `leftIcon`, `rightIcon`
- Variants: `primary`, `secondary`, `ghost`, `danger`
- Sizes: `sm`, `md`, `lg`
- Accessibility: `role="button"`, keyboard handlers, focus ring

#### [NEW] `packages/ui-kit/src/atoms/Input/Input.tsx`
- Props: `type`, `label`, `error`, `hint`, `disabled`
- Features: Floating label, error states, accessibility labels

---

### Theme System

#### [NEW] `packages/ui-kit/src/context/ThemeProvider.tsx`
```typescript
interface ThemeContextValue {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export const ThemeProvider: React.FC<PropsWithChildren>;
export const useTheme: () => ThemeContextValue;
```

---

## 3. Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^18.2.0 | Core framework |
| react-dom | ^18.2.0 | DOM rendering |
| typescript | ^5.0.0 | Type safety |
| @storybook/react-vite | ^8.0.0 | Component documentation |
| vitest | ^1.0.0 | Unit testing |
| @testing-library/react | ^14.0.0 | Component testing |

---

## 4. Verification Plan

### Automated Tests

| Test Type | Command | Coverage |
|-----------|---------|----------|
| Unit Tests | `npm run test` | Component logic, token exports |
| Storybook Build | `npm run build-storybook` | All stories compile |
| Type Check | `npm run typecheck` | TypeScript validity |

### Accessibility Testing

| Tool | Integration |
|------|-------------|
| axe-core | Storybook addon `@storybook/addon-a11y` |
| eslint-plugin-jsx-a11y | ESLint rules |

### Manual Verification

1. Run `npm run storybook` and verify all components render
2. Toggle dark/light mode and verify contrast ratios
3. Navigate with keyboard only (Tab, Enter, Space)
4. Test on mobile viewport (375px width)

---

## 5. Implementation Phases

| Phase | Duration | Deliverables |
|-------|----------|--------------|
| **1. Foundation** | 4 hours | Tokens, ThemeProvider, monorepo setup |
| **2. Atoms** | 8 hours | Button, Input, Badge, Spinner |
| **3. Molecules** | 10 hours | Card, Modal, Toast |
| **4. Storybook** | 6 hours | Stories for all components |
| **5. Testing** | 6 hours | Unit tests, a11y tests |
| **Total** | **34 hours** | |

---

*Last Updated: 2026-02-05 by Spec-Bot*
