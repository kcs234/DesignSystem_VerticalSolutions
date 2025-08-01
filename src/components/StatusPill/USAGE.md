# StatusPill Component

## Description
A pill-shaped badge for displaying status, as designed in Figma. Supports three status types: pending, reviewed, and done. Uses only design system color tokens.

## Usage

```jsx
import { StatusPill } from './components/StatusPill';

<StatusPill label="Pending Review" status="pending" />
<StatusPill label="Reviewed" status="reviewed" />
<StatusPill label="Done" status="done" />
```

## Props
| Name      | Type     | Description                                 |
|-----------|----------|---------------------------------------------|
| label     | string   | The text to display inside the pill.         |
| status    | 'pending' \| 'reviewed' \| 'done' | The status type, which determines the color. |
| className | string   | (optional) Additional class names.           |
| style     | object   | (optional) Inline styles.                    |

## Guidelines
- Use for displaying status in tables, cards, or lists.
- Use the correct status type to match the Figma design.
- Do not override the colors except for accessibility.

## AI Agent Instructions
- Use the `StatusPill` component with the `label` and `status` props.
- Only use the allowed status values: 'pending', 'reviewed', 'done'.
- Do not use custom colors; only use the design system tokens. 