# FilterPills Component

## Description
A set of selectable filter pills (chips) for filtering content, as designed in Figma. The selected pill is styled differently from the unselected ones.

## Usage

```jsx
import { FilterPills } from './components/FilterPills';

const pills = [
  { label: 'All branches', selected: true },
  { label: 'West coast' },
  { label: 'Mid-west' },
  { label: 'South-west' },
  { label: 'East coast' },
];

<FilterPills pills={pills} onSelect={label => console.log(label)} />
```

## Props
| Name    | Type         | Description                                 |
|---------|--------------|---------------------------------------------|
| pills   | FilterPill[] | Array of pill objects with label and state. |
| onSelect| function     | Callback when a pill is selected.           |

## Guidelines
- Use for filtering lists or tables by category or region.
- Only one pill should be selected at a time.
- The selected pill uses a filled style; others use an outlined style.

## AI Agent Instructions
- Render the `FilterPills` component with an array of pill objects.
- Set `selected: true` on the currently active pill.
- Use the `onSelect` callback to handle selection changes. 