# Доноры РЭУ Design System

## Overview

**Доноры РЭУ** (Donors of REU) is a donor community initiative at the Russian Economic University (РЭУ) dedicated to popularizing blood donation and saving lives. Operating since 2015, the organization works with partner institutions NFRZ and FMBA to organize regular donation drives and expand donor participation.

### Organization Context
- **Community**: Donor community at Russian Economic University
- **Mission**: Popularize blood donation and recruit new donors
- **Operating since**: 2015
- **Current reach**: 1,951 VK subscribers (goal: 2,500+); targeting 40% reach of 10,000 people
- **Partners**: NFRZ (National Donor Foundation), FMBA (Federal Medical-Biological Agency)

### Website Purpose
This design system supports the organization's main landing page, which serves as a conversion funnel to recruit new donors and provide essential information about the donation process, upcoming events, and ways to participate beyond blood donation (bone marrow registry, organizer roles, donor committee).

---

## Content Fundamentals

### Tone & Voice
- **Trustworthy & Reassuring**: The writing allays fears about the donation process and builds confidence in the organization's legitimacy
- **Community-Focused**: Emphasizes belonging ("ты – не один" / "you're not alone") and shared mission
- **Action-Oriented**: Direct calls-to-action ("Запишись", "Узнай", "Участвуй")
- **Humanizing**: Focuses on real impact (lives saved) rather than abstract statistics
- **Russian/Cyrillic**: Content is in Russian; formal but accessible tone (not overly academic)

### Key Messages
1. "Стань донором — спаси жизнь" (Become a donor – save a life)
2. "Доноры РЭУ: ты – не один" (Donors of REU: you're not alone)
3. Donation is quick, safe, and impactful

### Copy Style
- **Headings**: Short, imperative, benefit-focused
- **Body text**: Conversational, addresses reader directly ("Ты", "вы")
- **Buttons**: Action verbs ("Записаться", "Узнать", "Участвовать")
- **Lists**: Numbered processes and bullet-pointed options
- **Casing**: Title case for section headers, sentence case for body
- **Emoji**: Minimal/none; focuses on clean, serious imagery
- **Formality**: Semi-formal; approachable but credible

---

## Visual Foundations

### Color System

**Primary Palette** (Donor-focused, medical but warm)
- **Primary Red**: `#E63946` – Represents life, blood, urgency, and compassion; used for CTAs, highlights, and key messaging
- **Accent Crimson**: `#A4161A` – Darker red for hover states and emphasis
- **Accent Rose**: `#F77F88` – Lighter red for secondary accents and backgrounds

**Neutral Palette** (Professional, accessible)
- **Dark Text**: `#1D3557` – Deep navy for primary text; professional and readable
- **Medium Text**: `#457B9D` – Secondary text and muted elements
- **Light Text**: `#A8DADC` – Tertiary text and disabled states
- **Off-White**: `#F1FAEE` – Primary background, very light and clean
- **Pure White**: `#FFFFFF` – Cards, modals, input backgrounds

**Semantic Colors**
- **Success**: `#2A9D8F` – Teal for confirmations and positive states
- **Warning**: `#E9C46A` – Amber for alerts and attention
- **Error**: `#E63946` – Red (consistent with primary) for errors
- **Info**: `#457B9D` – Blue for informational messages

### Typography

**Font Families** (Google Fonts or system fallback)
- **Display/Headlines**: Roboto Bold (weights 700, 600) – Strong, modern, accessible
- **Body/Regular**: Roboto Regular (weights 400, 500) – Clean, highly readable
- **Mono/Code**: Roboto Mono (weight 400) – For any technical content

**Type Scale** (14px base)
- **Display 1**: 48px / 56px line-height (main hero heading)
- **Display 2**: 36px / 44px line-height (section headers, large CTAs)
- **Headline**: 28px / 36px line-height (subsection headers)
- **Title**: 24px / 32px line-height (card titles, form labels)
- **Body Large**: 18px / 28px line-height (body text, large body)
- **Body**: 16px / 24px line-height (standard body, form fields)
- **Body Small**: 14px / 20px line-height (secondary text, captions)
- **Label**: 12px / 16px line-height (form labels, badges, tags)

**Font Weights**
- 700 (Bold) – Headings, strong emphasis
- 600 (Semibold) – Subheadings, button text
- 500 (Medium) – Emphasis within body
- 400 (Regular) – Primary body text

### Spacing System

**Base Unit**: 8px (all spacing multiples of 8)

- **XS**: 4px (tight spacing, rare)
- **S**: 8px (padding inside buttons, small gaps)
- **M**: 16px (standard padding, section margins)
- **L**: 24px (larger section spacing)
- **XL**: 32px (major section dividers)
- **2XL**: 48px (page-level spacing)
- **3XL**: 64px (hero section spacing)

### Backgrounds & Imagery

- **Primary Background**: Off-white (`#F1FAEE`) for accessibility and lightness
- **Card Backgrounds**: Pure white with subtle shadows
- **Hero Section**: Full-bleed photograph from past donation event (warm, human, inspiring)
- **Icons & Illustrations**: Clean, simple line-style iconography; no gradients or heavy effects
- **Texture**: Minimal; clean and modern aesthetic preferred over textured backgrounds

### Shadows & Depth

- **Subtle Shadow** (cards): `0 2px 8px rgba(29, 53, 87, 0.12)`
- **Medium Shadow** (modals): `0 8px 24px rgba(29, 53, 87, 0.16)`
- **Elevation**: Use shadows, not gradients, for depth

### Border & Radius

- **Border Radius**: 8px (standard for buttons, cards, inputs)
- **Border Width**: 1px (standard) or 2px (focus states)
- **Border Color**: `#A8DADC` (light neutral for subtle dividers)

### Hover & Interactive States

- **Hover**: Darken primary color slightly (`#D62828`), add subtle shadow lift
- **Press/Active**: Darker red (`#A4161A`), no shadow lift
- **Focus**: 2px solid focus ring in primary red, 2px offset
- **Disabled**: `#E8E8E8` background, `#999999` text, no cursor interaction
- **Loading**: Spinner animation with primary red

### Animations & Transitions

- **Standard Easing**: `cubic-bezier(0.4, 0, 0.2, 1)` (Material Design easing)
- **Duration**: 
  - Quick interactions (hover, focus): 200ms
  - Page transitions: 300ms
  - Modals/dialogs: 400ms
- **Style**: Smooth, professional; no bouncy or playful easing
- **Reduced Motion**: Respect `prefers-reduced-motion` by disabling non-essential animations

### Layout Principles

- **Full-width sections** with contained content (max-width: 1200px) for large screens
- **Mobile-first responsive design** (320px+)
- **Vertical rhythm**: Consistent spacing between sections
- **Grid-based**: 12-column grid on desktop, 4-column on tablet, 1-column on mobile
- **Fixed header**: Sticky navigation for easy access to sections and CTA
- **Hero-to-funnel**: Large hero section at top to capture attention, then progressive disclosure of information

### Image Treatment

- **Hero Image**: Full-bleed, human-focused (past donation event), slightly darkened overlay for text legibility
- **Icons**: Monochrome (dark text color) or accent red for primary actions
- **Logos**: NFRZ and FMBA logos in footer; can be color or single-color on backgrounds
- **Illustrations**: Minimalist line-style or flat design; warm, inclusive color palette

### Accessibility & Contrast

- **Text Contrast**: All text must meet WCAG AA standards (4.5:1 for body, 3:1 for large text)
- **Focus States**: Visible 2px ring for keyboard navigation
- **Color Not Alone**: Never rely solely on color to convey meaning; use text labels, icons, or patterns
- **Alt Text**: All images include descriptive alt text
- **Form Labels**: Always associated with inputs via `<label>`

---

## Component Library

The design system includes reusable UI components built to support rapid development:

- **Button** – Primary CTA, secondary, ghost variants
- **Input** – Text fields, email, phone, with validation states
- **Select/Dropdown** – Single and multi-select options
- **Checkbox** – For multi-choice forms
- **Radio** – For single-choice options
- **Card** – Content containers with shadow and padding
- **Badge** – Labels and tags
- **Accordion** – Expandable FAQ sections
- **Modal/Dialog** – Forms and important notices
- **Header** – Sticky navigation with logo and links
- **Footer** – Links, contacts, social media
- **Form** – Complete form layout with labels and validation

---

## UI Kits

### Landing Page (`ui_kits/landing_page/`)
Full-screen recreation of the Доноры РЭУ landing page with interactive components:
- Hero section with CTA
- About the project
- Statistics and impact
- Donation process walkthrough
- Participation formats
- FAQ accordion
- Event details + registration form
- Footer with contacts and social links

---

## Tokens & Customization

### CSS Custom Properties (Design Tokens)

All colors, typography, spacing, and shadows are defined as CSS custom properties in `tokens/` files:

- `tokens/colors.css` – Color system
- `tokens/typography.css` – Font families, sizes, weights
- `tokens/spacing.css` – Spacing and sizing scale
- `tokens/shadows.css` – Shadow definitions

Update any token value and all components automatically reflect the change.

---

## Folder Structure

```
/
├── readme.md (this file)
├── styles.css (global imports)
├── tokens/
│   ├── colors.css
│   ├── typography.css
│   ├── spacing.css
│   └── shadows.css
├── components/
│   ├── buttons/
│   │   ├── Button.jsx
│   │   ├── Button.d.ts
│   │   ├── Button.prompt.md
│   │   └── buttons.card.html
│   ├── forms/
│   │   ├── Input.jsx
│   │   ├── Input.d.ts
│   │   ├── Select.jsx
│   │   ├── Checkbox.jsx
│   │   └── forms.card.html
│   ├── layout/
│   │   ├── Card.jsx
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── layout.card.html
│   └── feedback/
│       ├── Badge.jsx
│       ├── Accordion.jsx
│       └── feedback.card.html
├── assets/
│   ├── logos/
│   │   ├── donors-logo.svg
│   │   ├── nfrz-logo.svg
│   │   └── fmba-logo.svg
│   ├── icons/
│   │   └── (icon SVGs)
│   └── images/
│       └── (background and hero images)
├── guidelines/
│   ├── colors.card.html
│   ├── typography.card.html
│   ├── spacing.card.html
│   └── brand.card.html
├── ui_kits/
│   └── landing_page/
│       ├── index.html
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Statistics.jsx
│       ├── DonationProcess.jsx
│       ├── Formats.jsx
│       ├── FAQ.jsx
│       ├── Registration.jsx
│       └── ds-base.js
└── SKILL.md
```

---

## Usage

### For Designers
1. Review this readme and explore the guidelines folder for foundation cards
2. Reference the components in the component library for building mockups
3. Use the UI kits as a starting point for new landing page variations

### For Developers (Consuming Projects)
1. Link `styles.css` to load all design tokens
2. Import components via the compiled bundle `_ds_bundle.js`
3. Customize by overriding CSS custom properties in your project
4. Reference `SKILL.md` for implementation guidelines

---

## Next Steps & Notes

- [ ] Finalize logos and brand assets (placeholders currently used)
- [ ] Gather actual photography from past donation events
- [ ] Test color contrast ratios across all color combinations
- [ ] Expand component library based on use cases
- [ ] Create more UI kit screens as needed
- [ ] Set up live Figma library for ongoing design work

---

*Last updated: June 11, 2026*
