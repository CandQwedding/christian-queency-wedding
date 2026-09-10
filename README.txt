CHRISTIAN & QUEENCY — WEDDING WEBSITE

This is the website version (not Canva) and is designed for free static hosting.

FEATURES
- Brown and beige luxury wedding theme
- Opening invitation screen
- Smooth scrolling and scroll reveal animations
- Falling petals effect
- Responsive desktop/tablet/mobile layout
- Wedding countdown to October 10, 2026 at 7:30 AM (Philippines time)
- Google Maps direction buttons
- Add-to-calendar button (downloads an .ics file)
- RSVP email form
- Optional background music support
- Supplied wedding photos, with face-focused crop positions
- QR code reception section

IMPORTANT: RSVP
Open script.js and replace:
  const RSVP_EMAIL='YOUR_EMAIL@example.com';
with the email address that should receive RSVP messages.

OPTIONAL MUSIC
Add a royalty-free/local MP3 named:
  assets/wedding-music.mp3
The Music button will then work in the browser. Browsers generally require the visitor to tap the button before audio can play.

FREE HOSTING
See DEPLOY-FREE.txt for GitHub Pages instructions.


UPDATED 2026-09-10
- Organized wedding-day details and corrected ceremony timing: 7:30 AM guest arrival, 8:00 AM ceremony.
- Added a clearer Wedding Day Schedule heading.
- Reworked responsive image framing so faces stay visible on desktop, tablet, and mobile.
- Reduced gallery vertical scrolling on phones with a compact two-column layout.
- Added responsive overflow protection and mobile spacing refinements.


RSVP EMAIL DELIVERY
The RSVP form now submits by AJAX to FormSubmit and sends the response to queencypineda29@gmail.com without opening an email app. On the first submission, FormSubmit may send a confirmation email to the destination address; confirm it once to activate delivery. The guest email is included as Reply-To so the couple can reply directly.
