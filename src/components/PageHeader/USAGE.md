# PageHeader Component

## Description
A top-level navigation header component designed for application pages. Features customer branding, company branding, user actions, and responsive design. Built following the design system patterns with consistent typography and colors.

## Usage

```jsx
import { PageHeader } from './components/PageHeader';

<PageHeader
  customerName="Customer name"
  customerLogo="https://example.com/customer-logo.png"
  companyLogo="https://example.com/company-logo.svg"
  userInitial="M"
  onNotificationClick={() => console.log('Notification clicked')}
  onHelpClick={() => console.log('Help clicked')}
  onUserClick={() => console.log('User clicked')}
/>
```

## Props
| Name | Type | Description | Required |
|------|------|-------------|----------|
| customerName | string | Customer or company name displayed on the left | Yes |
| customerLogo | string | URL for customer logo image (32x32px) | No |
| companyLogo | string | URL for company logo image (83x24px) | No |
| userInitial | string | Single letter/character for user avatar | No (default: 'M') |
| poweredByText | string | Text before company logo | No (default: 'Powered by') |
| onNotificationClick | () => void | Callback for notification button click | No |
| onHelpClick | () => void | Callback for help button click | No |
| onUserClick | () => void | Callback for user avatar click | No |

## Dimensions
- **Height**: 48px fixed height
- **Width**: 100% of container
- **Customer Logo**: 32x32px with 8px border radius
- **Company Logo**: 83x24px (flexible dimensions)
- **User Avatar**: 32x32px circular
- **Icon Buttons**: 32x32px clickable area

## Features
- **Responsive Design**: Adapts to different screen sizes
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Interactive Elements**: Hover and focus states for all buttons
- **Consistent Styling**: Uses design system color tokens and typography
- **Flexible Branding**: Supports both customer and company logos
- **Built-in Icons**: Notification and help icons included

## Color Tokens Used
- `--color-header-background`: #4c5353 (dark grey background)
- `--color-header-text-primary`: #f7f7f7 (light grey text)
- `--color-header-text-secondary`: #efefef (secondary light grey)
- `--color-header-accent`: #fa4616 (orange accent for user avatar)
- `--color-header-white`: #ffffff (white text on avatar)

## Typography
- **Font Family**: 'Noto Sans', sans-serif
- **Customer Name**: 16px, 600 weight, 24px line height
- **Powered By Text**: 14px, 400 weight, 20px line height
- **User Avatar**: 14px, 600 weight, 20px line height

## Layout Structure
```
Header Container (48px height)
├── Left Section
│   └── Customer Info
│       ├── Customer Logo (optional, 32x32px)
│       └── Customer Name (16px semibold)
└── Right Section
    ├── Powered By Section
    │   ├── "Powered by" text (14px)
    │   ├── Company Logo (83x24px)
    │   └── Vertical Line Separator
    └── Action Buttons
        ├── Notification Button (32x32px)
        ├── Help Button (32x32px)
        └── User Avatar (32x32px, orange background)
```

## Best Practices
- Always provide a `customerName` as it's the primary identifier
- Use square images (32x32px) for customer logos
- Company logos should be horizontally oriented (83x24px recommended)
- Keep user initials to 1-2 characters for best appearance
- Implement click handlers for interactive elements
- Test responsive behavior on different screen sizes

## Responsive Behavior
- **Mobile (≤768px)**: Reduces padding and hides "Powered by" text
- **Small Mobile (≤600px)**: Further reduces padding and company logo size
- **Desktop**: Full layout with all elements visible

## Guidelines
- Use as the primary navigation header for application pages
- Position at the top of the page layout
- Ensure sufficient contrast for accessibility
- Test with different logo sizes and customer names
- Consider loading states for dynamic content

## AI Agent Instructions
- Always include required `customerName` prop
- Use placeholder images for logos during development
- Implement proper event handlers for interactive elements
- Test both with and without logo variants
- Ensure responsive behavior is maintained 