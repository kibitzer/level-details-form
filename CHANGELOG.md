# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed
- Updated the VP Education recipient email address and corresponding form defaults to `toastmaster.graeme@gmail.com`.

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

[Unreleased]: https://github.com/kibitzer/level-details-form/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/kibitzer/level-details-form/releases/tag/v1.0.0
