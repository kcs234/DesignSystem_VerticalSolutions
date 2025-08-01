# Table Component

## Description
A comprehensive table component with built-in search and filter functionality. Features sorting, filtering, and search capabilities using design system components for consistent styling and behavior.

## Usage

```jsx
import { Table } from './components/Table';

<Table />
```

## Features
- **Built-in Search**: SearchInput component for filtering table data
- **Sort Controls**: DropdownButton for sort options
- **Filter Controls**: IconLabelButton and DropdownButton for filtering
- **Status Indicators**: StatusPill and SeverityPill for visual data representation
- **Responsive Design**: Adapts to different screen sizes
- **Design System Integration**: Uses only design system components and tokens

## Built-in Controls
| Control | Component Used | Purpose |
|---------|---------------|---------|
| Search Input | SearchInput | Filter table data by text |
| Sort Dropdown | DropdownButton | Sort table columns |
| Filter Button | IconLabelButton | Toggle filter options |
| Status Filter | DropdownButton | Filter by QC status |
| All Filters | IconLabelButton | Access all filter options |

## Design System Components Used
- **SearchInput**: For search functionality
- **DropdownButton**: For sort and filter dropdowns
- **IconLabelButton**: For filter and action buttons
- **StatusPill**: For status indicators
- **SeverityPill**: For severity indicators
- **FilterIcon**: For filter button icon

## Data Structure
The table expects data with the following structure:
```typescript
interface TableRow {
  rule: string;
  impact: 'Critical' | 'High' | 'Medium' | 'Low';
  status: 'Pending Review' | 'Reviewed' | 'Done';
  exceptions: number;
  date: string;
  sources: number;
}
```

## Styling
- **Colors**: Uses design system color tokens
- **Typography**: 'Noto Sans' font family, 14px size
- **Spacing**: Consistent padding and gaps
- **Width**: Fixed 1376px width inclusive of 24px padding (1328px content area)
- **Responsive**: Horizontal scroll and width adjustments on smaller screens

## Interactive Features
- **Sortable Columns**: Click column headers to sort
- **Search**: Real-time filtering as you type
- **Status Mapping**: Automatic status pill styling
- **Severity Indicators**: Color-coded severity levels

## Width Specifications
- **Total Width**: 1376px (including 24px padding on each side)
- **Content Area**: 1328px (actual table width)
- **Padding**: 24px on all sides
- **Responsive**: Maintains full width on screens >1400px, adapts on smaller screens

## Guidelines
- Use for data tables with filtering and sorting needs
- The component is self-contained with all necessary controls
- Status and severity indicators follow design system patterns
- Search filters across rule, status, and impact fields
- Table maintains fixed 1376px width for consistent layout
- Horizontal scrolling enabled for smaller viewports

## AI Agent Instructions
- Use the `Table` component when you need a data table with search and filter capabilities
- The component includes all necessary controls - don't add duplicate search/filter UI
- Status and severity data will be automatically styled with design system components
- The table has a fixed width of 1376px inclusive of padding for consistent layout
- The component handles responsive behavior automatically 