# ComplianceDashboard Component

## Description
A comprehensive compliance dashboard template built entirely with existing design system components and tokens. Features key metrics and loan application management with integrated search and filter functionality through the Table component.

## Usage

```jsx
import { ComplianceDashboard } from './components/ComplianceDashboard';

<ComplianceDashboard />
```

## Features
- **Pure Design System Implementation**: Uses only existing design system components and tokens
- **Key Metrics Dashboard**: 4 stat cards (330px × 160px) showing loans to review, high impact issues, loan volume, and risk assessment
- **Integrated Table**: Uses Table component with built-in search, filter, and sort functionality
- **Clean Layout**: No duplicate controls - all functionality is built into the Table component
- **Responsive Design**: Adapts to different screen sizes using design system patterns

## Design System Components Used
| Component | Purpose | Props Used | Dimensions |
|-----------|---------|------------|------------|
| Typography | All text elements | h2Bold, h4Bold | - |
| DataCard | Key metrics display | numberOfTotal, number, currency, percentage | 330px × 160px |
| Table | Complete loan applications with integrated controls | Default implementation | 1376px wide |

## Design System Tokens Used
- **Colors**: `colors.background` only
- **Typography**: Only through Typography component variants
- **Spacing**: Inline styles using consistent spacing values
- **Layout**: CSS Grid and Flexbox with design system patterns

## Layout Structure
1. **Header**: Typography component with h2Bold variant
2. **Stats Grid**: 4-column responsive grid using DataCard components (330px × 160px) with 16px spacing
3. **Table Section**: 
   - Typography component for section header
   - Table component with built-in search, filter, and sort controls
   - Complete data display with StatusPill and SeverityPill integration

## No Custom Code or Duplicate Controls
- ✅ **Zero custom CSS modules** - removed all custom styling
- ✅ **No duplicate controls** - Table component handles all search/filter UI
- ✅ **Integrated functionality** - Search and filters are built into Table component
- ✅ **Clean architecture** - Single responsibility for each component
- ✅ **Only design system tokens** - colors, typography, spacing

## Table Integration
The Table component now includes:
- **SearchInput** for filtering table data
- **DropdownButton** for sort and filter controls
- **IconLabelButton** for filter actions
- **StatusPill** and **SeverityPill** for data visualization
- **Responsive control layout** for mobile devices

## Component Dimensions
- **DataCard**: 330px × 160px (inclusive of 24px padding on all sides)
- **Table**: 1376px wide (inclusive of 24px padding on all sides)
- **Grid Spacing**: 16px between DataCard components
- **Content Areas**: DataCard (282px × 112px), Table (1328px content width)

## Responsive Behavior
- **Desktop (1400px+)**: 4-column DataCard grid, full table width
- **Tablet (1200px-1400px)**: 2-column DataCard grid, table with horizontal scroll
- **Mobile (768px-1200px)**: 1-column DataCard grid, table with horizontal scroll
- **All sizes**: Consistent 16px spacing maintained between components

## Guidelines
- **Design System First**: Always use existing components over custom implementations
- **No Duplicate Controls**: Let Table component handle all search/filter functionality
- **Component Integration**: Use components as designed without custom wrapper controls
- **Clean Architecture**: Single source of truth for each piece of functionality
- **Fixed Dimensions**: DataCard components maintain consistent 330px × 160px size

## AI Agent Instructions
- **Never add duplicate controls**: The Table component includes all necessary search/filter UI
- **Component Composition**: Build complex UIs by composing existing components
- **Integrated Functionality**: Use Table component's built-in controls instead of custom ones
- **Clean Implementation**: Avoid duplicate search bars or filter controls
- **Responsive Design**: Trust design system components to handle responsive behavior
- **Fixed Card Dimensions**: DataCard components are 330px × 160px for consistent layout 