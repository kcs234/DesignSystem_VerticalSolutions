# DataCard Component

## Description
A card for displaying key data metrics in four variants: number, number of total, percentage, and currency. Features fixed dimensions and matches the Figma design system.

## Usage

```jsx
import { DataCard } from './components/DataCard';

<DataCard variant="number" title="Total loans reviewed" value="1,234,567" />
<DataCard variant="numberOfTotal" title="Loans with Issues" value={23} total={100} />
<DataCard variant="percentage" title="High severity loans" value={12.5} unit="%" />
<DataCard variant="currency" title="Total loan flagged" value={123.4} unit="Million USD" />
```

## Props
| Name    | Type            | Description                                      |
|---------|-----------------|--------------------------------------------------|
| variant | string          | 'number' | 'numberOfTotal' | 'percentage' | 'currency' |
| title   | string          | Card title                                       |
| value   | string \| number| Main value to display                            |
| total   | string \| number| (numberOfTotal only) Total value                 |
| unit    | string          | (percentage/currency only) Unit or suffix        |

## Dimensions
- **Width**: 330px (including 24px padding on each side)
- **Height**: 160px (including 24px padding on each side)  
- **Content Area**: 282px × 112px
- **Padding**: 24px on all sides
- **Fixed Size**: Cards maintain consistent dimensions across all variants

## Styling
- **Background**: White card background with subtle shadow
- **Border Radius**: 12px rounded corners
- **Typography**: Uses design system font variants
- **Layout**: Flexbox with space-between distribution
- **Responsive**: Fixed dimensions for consistent grid layout

## Guidelines
- Use the correct variant for the type of data being displayed
- Titles should be concise and descriptive
- Values should be formatted for readability
- Cards work best in grid layouts with consistent spacing
- Fixed dimensions ensure uniform appearance across different data types

## AI Agent Instructions
- Use the `DataCard` component with the appropriate `variant` prop
- Provide `title` and `value` for all variants
- For `numberOfTotal`, also provide `total`
- For `percentage` and `currency`, provide `unit` as needed
- Cards have fixed 330px × 160px dimensions for consistent layout
- Use in grid layouts with 16px spacing between cards 