# Logi-Slate-UI

A React/TypeScript component library & tactical management interface for competitive Warhammer 40k.

## Overview

Logi-Slate-UI provides the `@vindicta/ui-kit` component library and frontend interface for the Vindicta Platform, enabling players to manage army lists, track games, and analyze tactical decisions. Built with the **Glass-Neon** design system.

## `@vindicta/ui-kit` Components

### Design Tokens

```typescript
import { colors, typography, spacing, shadows, transitions } from '@vindicta/ui-kit';

// All tokens available as TypeScript constants with full type safety
colors.primary.amber[500]  // '#F59E0B'
typography.fontFamily.body  // '"Outfit", ...'
shadows.glow               // '0 0 20px rgba(245, 158, 11, 0.3)'
```

### ThemeProvider

Wrap your app root with `ThemeProvider` to enable dark/light mode:

```tsx
import { ThemeProvider, useTheme } from '@vindicta/ui-kit';

function App() {
  return (
    <ThemeProvider>
      <MyApp />
    </ThemeProvider>
  );
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>Mode: {theme}</button>;
}
```

### Atoms

| Component   | Import                                       | Props                                                                                                                                         |
| ----------- | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| **Button**  | `import { Button } from '@vindicta/ui-kit'`  | `variant`: `primary` \| `secondary` \| `ghost` \| `danger`<br>`size`: `sm` \| `md` \| `lg`<br>`loading`, `leftIcon`, `rightIcon`, `fullWidth` |
| **Input**   | `import { Input } from '@vindicta/ui-kit'`   | `label`, `error`, `hint`, `floating`, `required`                                                                                              |
| **Badge**   | `import { Badge } from '@vindicta/ui-kit'`   | `variant`: `info` \| `success` \| `warning` \| `error`<br>`size`: `sm` \| `md`                                                                |
| **Spinner** | `import { Spinner } from '@vindicta/ui-kit'` | `size`: `sm` \| `md` \| `lg`<br>`label`                                                                                                       |

### Molecules

| Component | Import                                                       | Props                                                                                    |
| --------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| **Card**  | `import { Card } from '@vindicta/ui-kit'`                    | `glass`, `interactive`, `compact`, `header`, `footer`                                    |
| **Modal** | `import { Modal } from '@vindicta/ui-kit'`                   | `open`, `onClose`, `title`, `size`, `footer`, `closeOnEscape`, `closeOnBackdrop`         |
| **Toast** | `import { ToastProvider, useToast } from '@vindicta/ui-kit'` | `variant`: `info` \| `success` \| `warning` \| `error`<br>`title`, `message`, `duration` |

### Quick Example

```tsx
import { ThemeProvider, ToastProvider, Button, Card, Modal, useToast } from '@vindicta/ui-kit';
import '@vindicta/ui-kit/styles';

function Demo() {
  const { toast } = useToast();

  return (
    <Card glass header="Glass Card" interactive>
      <Button
        variant="primary"
        onClick={() => toast({ variant: 'success', message: 'Action completed!' })}
      >
        Show Toast
      </Button>
    </Card>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <Demo />
      </ToastProvider>
    </ThemeProvider>
  );
}
```

## Tech Stack

- **React 18** with TypeScript (strict mode)
- **CSS Modules** with CSS custom properties for theming
- **Vite** for library build (dual CJS/ESM output)
- **Vitest** + React Testing Library for unit tests
- **pnpm** monorepo with workspaces

## Project Structure

```
Logi-Slate-UI/
├── packages/
│   └── ui-kit/
│       └── src/
│           ├── tokens/       # Design tokens (colors, typography, spacing, animations)
│           ├── context/      # ThemeProvider
│           ├── atoms/        # Button, Input, Badge, Spinner
│           ├── molecules/    # Card, Modal, Toast
│           ├── globals.css   # CSS custom properties + keyframes
│           └── index.ts      # Main exports
├── apps/
│   └── storybook/            # (planned)
├── pnpm-workspace.yaml
└── package.json
```

## Development

```bash
# Clone and install
git clone https://github.com/vindicta-platform/Logi-Slate-UI.git
cd Logi-Slate-UI
pnpm install

# Build library
pnpm --filter ui-kit run build

# Run tests
pnpm --filter ui-kit run test

# Type check
pnpm --filter ui-kit run typecheck
```

## Design System

- **Theme**: Glass-Neon — amber-500 accent, dark mode default
- **Typography**: Bebas Neue (display), Outfit (body), JetBrains Mono (code)
- **Effects**: Glassmorphism (`backdrop-filter: blur`), amber/cyan glow shadows, smooth transitions
- **Accessibility**: WCAG 2.1 AA — focus rings, aria attributes, keyboard navigation, screen reader support

## Related Repositories

| Repository                                                                | Relationship    |
| ------------------------------------------------------------------------- | --------------- |
| [platform-core](https://github.com/vindicta-platform/platform-core)       | Backend API     |
| [WARScribe-Parser](https://github.com/vindicta-platform/WARScribe-Parser) | Data validation |

## Platform Documentation

> **📌 Important:** All cross-cutting decisions, feature proposals, and platform-wide architecture documentation live in [**Platform-Docs**](https://github.com/vindicta-platform/Platform-Docs).
>
> Any decision affecting multiple repos **must** be recorded there before implementation.

- 📋 [Feature Proposals](https://github.com/vindicta-platform/Platform-Docs/tree/main/docs/proposals)
- 🏗️ [Architecture Decisions](https://github.com/vindicta-platform/Platform-Docs/tree/main/docs)
- 📖 [Contributing Guide](https://github.com/vindicta-platform/Platform-Docs/blob/main/CONTRIBUTING.md)

## License

MIT License - See [LICENSE](./LICENSE) for details.
