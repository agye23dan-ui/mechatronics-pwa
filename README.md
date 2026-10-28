# Mechatronics Technician Study

An offline study PWA for the mechatronics technician trade: 20 modules, 104 lessons, flashcards with spaced review, a glossary, a formula sheet, search, module quizzes and a timed practice exam.

## Structure
- `data/m01.js` ... `m20.js`: one file per module (outcomes, lessons, quiz questions with explanations, flashcards, terms, formulas).
- `js/bank.js`: adds practice questions built from each module's own glossary terms and formulas, so the bank grows from 286 to 631 questions. Each module quiz draws 20 at random.
- `js/app.js`: the app. `css/`: styles. `sw.js`: offline cache.

## Maintaining
- When you change any file, change `VERSION` in `sw.js` (currently `mech-v2`). Files are re-downloaded fresh when the service worker installs.
- If you add a module file, register it in `index.html` (before `js/bank.js`) and in the `ASSETS` list in `sw.js`.

## Notes
This course is a study aid and is not accredited or approved by NVTI, COTVET or any other body. Confirm local electrical rules and the equipment maker's data before relying on any figure.
