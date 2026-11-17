# Feature Assessment: Screenshot Evidence Attachment

**Assessed:** 2026-11-17
**Feature:** Allow a screenshot to be attached in lieu of filling in one project's details.

## The One Hard Constraint

The submission flow is `mailto:` (plus clipboard copy and print). **`mailto:` links
cannot attach files.** A screenshot can travel *within the app* (drafts, history,
printed receipt), but at send time the member must still attach the image to their
email client by hand — unless the delivery mechanism itself changes. That decision is
where the effort lives, not the upload widget itself.

## Options

### Option A — In-app evidence only (recommended first step)

Per project card, add an "Attach evidence screenshot instead" toggle: a file input,
thumbnail preview, and when enabled the five text fields become optional (they are
currently hard-coded `required` in the card template, so validation must be
conditional). The project saves a flag, and the email body prints *"Evidence
screenshot attached separately"* for that project, with a modal reminder to attach
the saved image.

Work required, all in `app.js` plus small template changes:

- **State model:** add `evidence`/`evidenceAttached` to `createProjectState`,
  `updateProjectStateFromDOM` (file inputs cannot be re-read from the DOM — the value
  must be captured on `change`), draft save/restore, and history records
- **`renderProjects()` card template:** toggle + file input + preview; conditional
  `required`
- **`initForm`/`viewSubmission`:** restore previews from stored data
- **Email body + print stylesheet:** render the image on the printed receipt,
  annotate the text summary
- **`tests.html`:** extend `createProjectState` and state-sync tests

Storage caveat: screenshots as base64 data URLs hit `localStorage`'s ~5MB quota fast
(a phone screenshot can be 2–4MB raw, ~33% larger base64). A ~30-line canvas
downscale (max ~1000px wide, JPEG ~0.7 quality) brings each to ~100–200KB, plus a
`try/catch` for `QuotaExceededError`. Treat this as mandatory, not optional.

### Option B — Option A plus Web Share API

On mobile, `navigator.share({files})` *can* attach the image to Gmail, Notes, etc.
Small addition (~20 lines, feature-detected, falls back to `mailto:`). Good if
members mostly submit on phones; adds little.

### Option C — Real attachments via a backend

A Formspree/Google Apps Script endpoint POSTing multipart form data. Truly
automated, but breaks the zero-dependency, no-signup, static architecture the
project deliberately maintains, and loses the "lives in my Sent folder" guarantee
documented as a selling point. Bigger job and an architecture decision.

## Effort Estimate

| Scope | Rough effort |
|---|---|
| Option A (incl. image compression, validation, draft/history/print, tests) | ~150–250 changed lines; a focused half-day |
| Option B | ~1 hour on top of A |
| Option C | Day-plus, plus external service setup; avoid unless A/B proves annoying in practice |

## Summary

Moderate, not huge — the UI part is easy; the cost is in the storage/compression
handling and the ripple through the draft, history, email and print paths, because a
project record is currently a plain five-string object serialised everywhere.

## Open Questions

1. Is "attach manually to the email" acceptable, or should the attachment actually
   ride along automatically (which forces Option C)?
2. Should a screenshot replace *all* five fields, or just allow some (e.g. keep
   Project Name required so the email stays readable)?
