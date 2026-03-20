# Mumbai Indians Official Fan Hub

A static single-page fan portal for the Mumbai Indians IPL team. Designed as a modern, responsive UI with rich interactions and content sections for schedule, roster, stats, news, videos, gallery, and fan engagement.

## Project structure

- `index.html` - main page markup with nav, sections, header, cards, and modal.
- `styles.css` - fragrance-based custom styling, performance-friendly layout, responsive design.
- `script.js` - dynamic player listing (filtering), modal player detail, poll, event behavior, news filtering, and nav tracking.

## Features

- Hero banner with team stats and `Join Fan Club` call to action.
- Live ticker bar for match updates.
- Match schedule cards with team logos/actions.
- Filterable squad roster (bat/bowl/all-rounder/wk) with modal bio.
- Team statistics cards.
- News section with featured stories, filter buttons, horizontal news strip, and read-more links.
- Video highlights with linked clips and interactive hover.
- Photo gallery with top 6 player photos + modal interaction.
- Fan engagement / poll component.
- Footer with social links and navigation links.

## Setup and run

No build or dependencies required: open `index.html` in browser.

1. `git clone <repo>`
2. `cd IPL_TEAM`
3. Open `index.html` in browser or use live server extension.

## Modify content

- Update player profile data in `script.js` `players` array.
- Change section content in `index.html` markup.
- Update colors and layout in `styles.css`.

## Notes

- Image sources are currently using public CDN/Wikipedia images.
- Video links are configured to open in new tabs (`target="_blank"`).
- The modal is controlled through JavaScript methods `openModal(index)` and `closeModal()`.

## License

MIT License - free to use and adapt for portfolio/learning purposes.