# Stellar Governance - Pathways Level Completion Form

## Project Overview
This repository contains a high-fidelity, single-page responsive HTML application and its corresponding design system specifications for the **Stellar Governance** "Path Level Completion" form. This utility is custom-designed for **Guiding Stars Toastmasters Club** members to compile speech completions and submit them directly to the Vice President Education (VPE) for level approval. 

It is tailored specifically to solve dual-membership tracking issues (e.g., speech completions given as test speakers, in contests, or at external clubs) by creating a transparent, signed, and fully verifiable **evidence trail**.

The prototype features a modern, institutional aesthetic built using HTML, Tailwind CSS (via CDN), Google Fonts (Inter), and Material Symbols.

---

## Directory Structure and Key Files

*   **`index.html`**: The interactive application containing the HTML structural elements, custom Tailwind configuration, responsive dynamic layouts, local storage engines, modal menus, and printable receipt stylesheets.
*   **`DESIGN.md`**: The corporate design system specification documenting the brand personality, colour palettes, typography hierarchy, responsive layout guidelines, elevation styles, shape language, and component patterns.
*   **`screen.png`**: A high-resolution reference screenshot displaying the visual layout of the form.

---

## Technical Architecture & Setup

As a fully client-side, static web application, this project requires no compiler, package managers, or server-side databases (such as Node.js, npm, Webpack, or SQL).

### Running the Application
To load and interact with the form:
1. Open `index.html` directly in any modern desktop or mobile web browser.
2. Alternatively, serve it locally using a simple static web server (such as Python's `python3 -m http.server` or VS Code's Live Server extension).

### Core Features & Systems
1. **Dynamic Speech/Project Manager**: 
   - Generates a default of 3 project cards (standard for a Pathways level completion) on initial load.
   - Provides a dynamic "+ Add Another Project Speeches / Electives" interface to easily accommodate various custom paths and elective selections.
   - Allows surgical project card deletions with automatic badge re-numbering.
2. **Auto-Save & Form Drafts (`localStorage`)**:
   - Performs automated, debounced auto-saves on form input changes to safeguard member entries.
   - Automatically restores active drafts on page load and displays a custom warning alert banner with quick-reset options.
3. **Structured Submission Modal & VPE Email Flow (`mailto:`)**:
   - Compiles all entry parameters into a beautifully structured, plain-text email summary upon form submission.
   - Opens the member's native email client via a pre-formatted `mailto:` link addressing the VPE with structured project details (matching VPE evidence requirements).
   - *Advantage*: Guarantees **absolute submission assurance** as the sent record is safely saved inside the member's personal "Sent" mailbox.
4. **Local Submission History Tracking**:
   - Automatically maintains a persistent list of past level requests in the browser's local storage.
   - Renders a collapsible "Submission History" dashboard at the bottom of the page allowing members to view, edit, or re-print prior submissions.
5. **High-Fidelity Print-to-PDF Engine (`@media print`)**:
   - Embeds a custom print stylesheet that formats the active page into an official, clean, single-page paper receipt.
   - In print mode, all interactive controls (buttons, links, text inputs, radio toggles) are elegantly stripped away, leaving clean bold text labels and a formal **VPE Verification Signature and Date Trail** for paper-trail records.

---

## Design System Specifications & Conventions

Any future edits to the code or styling must adhere to the design guidelines outlined in `DESIGN.md`:

*   **Colour Palette**:
    *   **Primary (Loyal Navy)**: `#002a44` (used for headers, navigation, primary buttons).
    *   **Accent (Stellar Gold)**: `#f7e478` or `#FFD700` (used to highlight "Star" moments, level selectors, or category accents).
    *   **Secondary (Silver Mist)**: `#57605f` (used for neutral text, borders, and secondary states).
    *   **Background / Surfaces**: Crisp white (`#ffffff`) surfaces with Level 1 ambient shadows on soft light grey/white background.
*   **Typography**: Built entirely on **Inter** with standard weights and line-heights.
*   **Spacing**: Standardised on an 8px rhythm (e.g., 12px sm, 24px md, 48px lg spacing).
*   **Shapes**: Utilise a soft shape language, with inputs and button elements using a `0.25rem` (4px) or `0.5rem` (8px) border-radius.

---

## Maintenance & Contributions

When modifying the codebase:
1. **Maintain Semantic Layouts**: Ensure all interactive inputs, checkboxes, and select elements are fully accessible and properly labelled with appropriate ARIA tags or standard semantic HTML.
2. **Follow British English Conventions**: Ensure all text elements, placeholders, and documentation maintain British English spelling (e.g., "standardised", "colour", "labelled", "programme").
3. **Responsive Verification**: Always verify that additions scale gracefully from mobile viewports (minimum 320px width) up to desktop resolutions (1200px+).
