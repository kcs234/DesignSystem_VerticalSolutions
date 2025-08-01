# @verticalsolutions/design-system

A reusable React component library for Vertical Solutions, providing consistent UI components and design tokens.

## Installation

```bash
npm install @verticalsolutions/design-system
# or
yarn add @verticalsolutions/design-system
```

## Usage

Import components directly:

```tsx
import { Buttons, Typography, PageHeader } from '@verticalsolutions/design-system';

function App() {
  return (
    <div>
      <PageHeader title="Dashboard" />
      <Buttons.FilledButton label="Click me" onClick={() => alert('Clicked!')} />
      <Typography variant="h2Bold">Welcome</Typography>
    </div>
  );
}
```

### Importing Global Styles

To apply the design system's global styles and fonts, import the bundled CSS in your app's entry point (e.g., `src/main.tsx` or `App.tsx`):

```ts
import '@verticalsolutions/design-system/src/style.css';
```

This will apply typography tokens, font imports, and base styles.

## Peer Dependencies

- `react`
- `react-dom`
- `@mui/material`
- `@mui/icons-material`
- `react-icons`

Ensure these are installed in your project.

## Development

- Run `npm run dev` to start the Storybook or dev server.
- Run `npm run build` to build the library for publishing.

## License

MIT 