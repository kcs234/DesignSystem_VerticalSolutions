# SearchInput Component

## Description
A search input component with consistent styling and built-in search icon. Uses design system tokens and follows the established visual patterns.

## Usage

```jsx
import { SearchInput } from './components/SearchInput';

<SearchInput placeholder="Search..." />
<SearchInput placeholder="Filter by name" value={searchTerm} onChange={setSearchTerm} />
```

## Props
| Name        | Type     | Description                                    | Default |
|-------------|----------|------------------------------------------------|---------|
| placeholder | string   | Placeholder text for the input                | "Search" |
| value       | string   | Controlled input value                         | -       |
| onChange    | function | Callback when input value changes             | -       |
| className   | string   | Additional CSS classes                         | -       |

## Features
- **Built-in Search Icon**: Includes search icon from design system
- **Design System Tokens**: Uses consistent colors, fonts, and spacing
- **Responsive Design**: Adapts to different screen sizes
- **Controlled Input**: Supports controlled component pattern
- **Consistent Styling**: Matches other input components in the system

## Design System Integration
- **Colors**: Uses `colors.background`, `colors.backgroundCard`, `colors.foregroundPrimary`, `colors.foregroundSecondary`, `colors.border`
- **Typography**: Uses 'Noto Sans' font family with 14px size
- **Icons**: Uses SearchIcon from design system
- **Spacing**: 8px gap, 6px-12px padding, 3px border radius

## Guidelines
- Use for search functionality in tables, lists, and data views
- Keep placeholder text clear and descriptive
- Use controlled pattern for state management
- Maintain consistent width (240px default) across instances

## AI Agent Instructions
- Use the `SearchInput` component for all search functionality
- Always provide descriptive placeholder text
- Use controlled pattern with value and onChange props
- Do not override styling - use existing design system tokens only 