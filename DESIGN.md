---
name: Stellar Governance
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#41474e'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#72787f'
  outline-variant: '#c1c7cf'
  surface-tint: '#316288'
  primary: '#002a44'
  on-primary: '#ffffff'
  primary-container: '#004165'
  on-primary-container: '#7eadd7'
  inverse-primary: '#9ccbf6'
  secondary: '#57605f'
  on-secondary: '#ffffff'
  secondary-container: '#dbe4e3'
  on-secondary-container: '#5d6665'
  tertiary: '#6b5f00'
  on-tertiary: '#ffffff'
  tertiary-container: '#bdac47'
  on-tertiary-container: '#493f00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cce5ff'
  primary-fixed-dim: '#9ccbf6'
  on-primary-fixed: '#001d31'
  on-primary-fixed-variant: '#124a6f'
  secondary-fixed: '#dbe4e3'
  secondary-fixed-dim: '#bfc8c7'
  on-secondary-fixed: '#151d1d'
  on-secondary-fixed-variant: '#404848'
  tertiary-fixed: '#f7e478'
  tertiary-fixed-dim: '#d9c75f'
  on-tertiary-fixed: '#201c00'
  on-tertiary-fixed-variant: '#514700'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 30px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 20px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style
The design system is built for an institutional yet welcoming environment. It focuses on clarity, leadership, and professional growth. The brand personality is authoritative but encouraging, evoking an emotional response of confidence and community. 

The design style is **Corporate / Modern**, leaning heavily into structured layouts and high-quality whitespace. It prioritizes information hierarchy and ease of use, ensuring that members can navigate schedules, roles, and resources without friction. Subtle refinements, such as precise alignment and intentional use of accent colors, differentiate this from generic corporate templates, creating a premium feel for club members.

## Colors
The palette is rooted in a deep **Loyal Navy** (#004165), representing trust and authority. This is the primary color for headers, navigation, and primary actions. **Stellar Gold** (#F2DF74) is used sparingly as an accent for call-to-actions or to highlight "Star" moments, such as awards or upcoming milestones.

A **Silver Mist** (#A9B2B1) acts as the secondary color for borders, disabled states, and secondary iconography. The background remains a **Crisp White** to ensure maximum readability and a sense of openness, while a light neutral gray is used for section grounding and card backgrounds.

## Typography
The system utilizes **Inter** exclusively to maintain a highly systematic and utilitarian feel. The hierarchy is strictly enforced through weight and scale. 

- **Headlines:** Use Bold and Semi-Bold weights with tight letter spacing for a modern, impactful look. Mobile sizes are stepped down to prevent awkward line breaks in long speech titles.
- **Body Text:** Standardized at 16px for optimal legibility. Paragraphs utilize generous line heights (1.5x) to prevent eye strain during long-form reading of club news or role descriptions.
- **Labels:** Small caps or bolded uppercase styling is used for metadata, such as "SPEAKER" or "EVALUATOR" tags, to differentiate them from body content.

## Layout & Spacing
The layout follows a **Fluid Grid** model based on an 8px rhythm. 

- **Desktop:** A 12-column grid with 20px gutters. Wide margins (64px+) are encouraged to keep content centered and focused, reflecting an organized and professional document-like feel.
- **Tablet:** 8-column grid with 16px gutters.
- **Mobile:** 4-column grid with 16px margins.
- **Spacing Philosophy:** Use "Large" (48px) spacing between major sections and "Medium" (24px) for spacing between internal card components. This helps group related information like speech details, speaker bios, and evaluation forms clearly.

## Elevation & Depth
To maintain a professional and clean aesthetic, the design system utilizes **Tonal Layers** combined with **Ambient Shadows**. 

- **Level 0 (Surface):** The main background is pure white.
- **Level 1 (Cards):** Use a very soft, diffused shadow (0px 4px 12px, 5% opacity) to separate content sections from the background. 
- **Level 2 (Interactive):** Elements like dropdowns or active modal states use a slightly deeper shadow (0px 8px 24px, 10% opacity) to signify priority.
- **Outlines:** Use a thin 1px border (#E9ECEF) for input fields and containers to provide structure without adding the visual weight of heavy shadows.

## Shapes
The design system adopts a **Soft** shape language. This creates a balance between the rigid formality of an institution and the approachability of a local club. 

Standard components like buttons and cards use a 0.25rem (4px) radius. Larger containers or feature banners may use up to 0.75rem (12px) to feel more contemporary and inviting. Circular elements (pill-shapes) are reserved exclusively for status indicators, such as "Active" or "Completed" role statuses.

## Components

### Buttons
- **Primary:** Solid Navy background with White text. Used for "Sign Up for Role" or "Submit."
- **Secondary:** White background with a Navy border and Navy text. Used for "Cancel" or "View More."
- **Accent:** Solid Gold background with Navy text. Used sparingly for high-value conversions like "Join Our Club."

### Input Fields
Inputs are clean with a 1px Silver Mist border. Labels are placed above the field in `label-md` style. On mobile, touch targets for inputs are a minimum of 48px in height to ensure ease of filling out forms.

### Cards
Cards are the primary container for the agenda. Each card should have a white background, a soft Level 1 shadow, and a 4px corner radius. A 4px vertical color strip on the left edge of a card can be used to denote role categories (e.g., Green for Speakers, Blue for Evaluators).

### Lists & Tables
The Meeting Agenda is displayed as a clean list with 16px vertical padding between items and a subtle divider line. Typography for time-slots should be bolded to allow for quick scanning.

### Chips/Badges
Small, rounded-pill indicators for categories. Use low-saturation background tints (e.g., light blue background with dark blue text) to keep the UI from feeling cluttered.