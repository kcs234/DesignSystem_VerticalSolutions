# Typography Component

## Description
A component for rendering text with the design system's type ramp, as defined in Figma. Supports multiple variants for headings, body, and captions.

## Usage

```jsx
import { Typography } from 'your-design-system';

<Typography variant="h2Bold">Insights</Typography>
<Typography variant="h4Bold">Recent loan applications</Typography>
<Typography variant="mBold">75</Typography>
<Typography variant="m">Quality assurance testing</Typography>
<Typography variant="s">20%</Typography>
<Typography variant="xs">UiPath Agent</Typography>
```

## Variants
| Variant  | Font Family   | Size | Weight | Line Height | Color     | Example Text                 |
|----------|--------------|------|--------|-------------|-----------|------------------------------|
| h2Bold   | Noto Sans    | 32px | 400    | 40px        | #202020   | Insights                     |
| h4Bold   | Noto Sans    | 20px | 600    | 24px        | #4C5353   | Recent loan applications     |
| mBold    | Noto Sans    | 14px | 600    | 20px        | #434343   | 75                           |
| m        | Noto Sans    | 14px | 400    | 20px        | #434343   | Quality assurance testing    |
| s        | Noto Sans    | 12px | 400    | 16px        | #038108   | 20%                          |
| xs       | Noto Sans    | 10px | 400    | 16px        | #4C5353   | UiPath Agent                 |

## Guidelines
- Use the correct variant for each text role as defined in the Figma type ramp.
- Do not override the styles unless necessary for accessibility.
- Use semantic HTML tags (e.g., `<h2>`, `<p>`) where appropriate for accessibility.

## AI Agent Instructions
- Use the `Typography` component with the `variant` prop to match the Figma type ramp.
- For headings, use `h2Bold` or `h4Bold` as appropriate.
- For body or data, use `mBold`, `m`, `s`, or `xs` as shown in the table above. 