# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.2.0] - 2026-07-23

### Fixed
- Resolved a critical rendering issue where a non-standard class used in the `@apply` statement broke and halted the Tailwind CSS Play CDN compilation process, causing the form to render as plain HTML.

## [1.1.0] - 2026-07-22

### Added
- Created a robust browser-based CDN unit test suite (`tests.html`) powered by Mocha and Chai, offering zero-dependency test execution in any web browser.

### Changed
- Separated view structures from runtime logic by extracting inline JavaScript from `index.html` into a dedicated, modular `app.js` file.
- Updated the VP Education recipient email address and corresponding form defaults to `toastmaster.graeme@gmail.com`.
- Extracted the repetitive inline input styles into a central `.form-input` Tailwind utility class via `@apply`.
- Abstracted redundant local storage retrieval and parsing logic into a reusable `getHistory()` helper.

### Fixed
- Resolved a critical bug where dynamic project input fields would lose auto-save event handlers when `bindInputStyling()` replaced the input nodes.

### Removed
- Deleted the redundant, bug-inducing `bindInputStyling()` function.
- Eliminated redundant `updateProjectStateFromDOM()` calls on dynamic input changes, optimizing performance.

## [1.0.0] - 2026-07-22

### Added
- Initial high-fidelity, single-page responsive HTML application for the Stellar Governance "Path Level Completion" form.
- Custom Tailwind CSS design configuration based on Google Fonts (Inter) and Material Symbols.
- Dynamic Speech/Project Manager supporting dynamic addition/removal of speech cards and badge re-numbering.
- Auto-save and draft recovery mechanism using `localStorage` with draft restored alerts.
- Structured submission modal compiling details into a pre-formatted `mailto:` link for the VPE.
- Local submission history tracking with past level request logs in local storage.
- High-fidelity print-to-PDF stylesheet stripping interactive controls and adding physical signature lines.
- Comprehensive corporate design system specifications (`DESIGN.md`).

[Unreleased]: https://github.com/kibitzer/level-details-form/compare/v1.2.0...HEAD
[1.2.0]: https://github.com/kibitzer/level-details-form/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/kibitzer/level-details-form/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/kibitzer/level-details-form/releases/tag/v1.0.0
