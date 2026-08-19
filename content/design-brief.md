# Brothers Pest Control — Design Brief

**Prepared by:** Content Dev
**For:** Frontend Dev (build reference) / QA (review reference)
**Source:** `/home/claude/brotherspest/existing/brotherspestcontrolllc-main/docs/logo.png` (existing brand mark) + `/home/claude/brotherspest/existing/brotherspestcontrolllc-main/src/App.jsx` (existing, real, must-preserve content)

> This is a **visual upgrade of a live site**, not a from-scratch build. Every fact, phone number, address, testimonial, and service name in the current `App.jsx` is real and stays. Nothing below changes the sitemap, the section order, or the anchor IDs (`#services`, `#why-us`, `#locations`, `#contact`) that the nav links depend on. Light copy tightening is fine; changing facts is not.

---

## 1. Color Palette

The current site uses Tailwind's stock `emerald` scale (`#f0fdf4` → `#145231`) and plain `slate` grays/white — generic, default-framework colors with no relationship to the actual brand mark. The logo (`docs/logo.png`) is a black brush-script "Brothers" wordmark, small-caps "PEST CONTROL" underneath, and a single small red accent dot. That's the real identity: hand-lettered, personal, family-owned, warm — not corporate-emerald. The palette below is built from that ink + that dot, paired with a deeper, more distinctive green than generic Tailwind emerald so the brand still reads clearly as "pest control / nature-adjacent" without looking like a template default.

| Swatch | Name | Hex | Role / Usage |
|---|---|---|---|
| ⬛ | **Brush Ink** | `#1A1712` | Warm near-black (not pure `#000`) — hero/CTA-band gradient base, footer background, primary body text color on light surfaces. Echoes the logo's brush-script ink. |
| 🟩 | **Pine Green** | `#1F5C46` | **Primary accent** — replaces generic `emerald-600`. Primary buttons ("Schedule Service", "Call Now"), links, active nav state, icon fills, section eyebrows. Deeper and more specific than stock emerald. |
| 🟢 | **Moss Green** | `#3E8F68` | Secondary/hover accent — button hover states, lighter icon-badge fills, secondary borders. Replaces `emerald-500`/`emerald-700` hover pairs. |
| 🟥 | **Barn Red** | `#A8342A` | **Used sparingly**, pulled directly from the logo's red accent dot. Reserve for small, deliberate accents only: the active-nav-link underline, the military/first-responder discount badge, a decorative dot motif next to section eyebrows, urgency touches (e.g. termite/wildlife icon accent). Do **not** use as a large background or a competing CTA color — it's a punctuation mark, not a second primary. |
| 🟨 | **Wheat Gold** | `#D9A441` | Star-rating fill in testimonials (replaces plain `amber-400`), small highlight accents. Warms up the palette without introducing a fourth unrelated hue. |
| ⬜ | **Warm Cream** | `#FAF6EE` | Primary light background (replaces plain white `#ffffff`/`slate-50`) — has a hint of warmth instead of clinical white, pairs with the logo sitting on a light ground. |
| ▫️ | **Parchment** | `#F1EADC` | Alternating section background (replaces `slate-50`) — one step deeper than Warm Cream, for zebra-striping sections (Services, Locations) the same way the current site alternates white/slate-50. |
| ◻️ | **Card Surface** | `#FFFFFF` | Card backgrounds sitting on Parchment/Cream sections, with a soft warm-gray border (`#E7DFCE`) and shadow — keeps cards feeling lifted without stock `shadow-md` gray. |
| 🩶 | **Warm Slate (muted text)** | `#5C5648` | Body copy / muted text on light backgrounds — replaces `slate-600`. Slightly warm rather than cool-gray, ties back to the ink of the logo. |
| ⬜ | **Cream-on-dark** | `#F5F0E4` | Text color on dark surfaces (hero, footer, CTA band) — replaces plain white text, keeps the warm palette consistent even in dark sections. |

**Usage guidance:**
- **Backgrounds:** Warm Cream `#FAF6EE` is the default light-section background; alternate with Parchment `#F1EADC` section-to-section (same rhythm as the current white/`slate-50` alternation). Dark sections (hero, CTA band, footer) use a Brush Ink `#1A1712` base.
- **Primary accent (buttons, links, active states):** Pine Green `#1F5C46`, hover to Moss Green `#3E8F68`. This is the one color that should feel "branded" everywhere — nav CTA, service card accents, footer link hovers.
- **Secondary/red accent:** Barn Red `#A8342A` is intentionally minimal — one or two touches per section, never a full section background. Think of it the way the logo uses it: a single dot, not a wash of color.
- **Text:** Brush Ink `#1A1712` for headings on light backgrounds, Warm Slate `#5C5648` for body/muted copy on light backgrounds, Cream-on-dark `#F5F0E4` for all text on dark sections.
- **Hero/CTA-band gradient:** replace the current `from-slate-900 via-emerald-900 to-slate-900` with `from-[#1A1712] via-[#1F5C46] to-[#1A1712]` — same dark-to-brand-color-to-dark structure, just swapped to the real brand ink and pine green instead of generic slate/emerald.

---

## 2. Typography Direction

The logo's wordmark is a loose brush-script — full of personality, but a literal script font at body-heading scale would hurt readability and read cheap. Instead, pair a serif with genuine warmth and craft character for headings (gesturing at "hand-made, considered, family business" without being illegible) with a clean, confident sans for everything functional.

- **Display / Headings font:** **"Fraunces"** (Google Fonts) — a warm, slightly irregular serif with real optical character; available in a wide weight range and a true italic that can stand in for "hand-touched" accents (e.g. an eyebrow label or a pull-quote) without sacrificing legibility at H1/H2 sizes. Use weight 600–900 for headings, and the italic sparingly for accent phrases only (not full paragraphs).
  - Alternate option if a slightly less ornamental serif is preferred: **"Fraunces"** at a lower "optical size"/soft-fit setting, or **"Lora"** (Semibold/Bold) as a more conservative fallback.
- **Body / UI font:** **"Inter"** (Google Fonts) — clean, highly legible at small sizes for paragraphs, nav links, buttons, form labels. Same rationale as most polished modern sites: let the display font carry personality, keep the workhorse text neutral.
- **Suggested pairing rules:**
  - H1 (Hero headline) → Fraunces, 700–900, Cream-on-dark, tight leading, no letter-spacing tricks needed (this face doesn't need uppercase/tracking to feel confident — unlike a condensed grotesk it already has presence at large sizes).
  - H2 (Section headings — "Our Services", "Why Choose Brothers Pest Control," etc.) → Fraunces 600–700, Brush Ink or Pine Green, sentence case (keep the existing sentence-case copy, don't force uppercase).
  - Eyebrow/label text (small caps-style labels above headings, if introduced) → Inter, uppercase, letter-spaced, Pine Green or Warm Slate, small (~12–13px).
  - Body copy, nav links, buttons, form fields → Inter, 400 for paragraphs, 600 for buttons/labels/nav.

**Google Fonts import reference:**
```html
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,600;0,700;0,900;1,500&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

---

## 3. Section-by-Section Redesign Notes

Section order, anchor IDs, and all copy facts stay exactly as in the current `App.jsx`. Notes below are visual/structural upgrades only.

### Header / Nav (`<header>`)
- Keep the sticky white-ish header, but switch its background to Warm Cream `#FAF6EE` with a hairline bottom border in a soft Pine-tinted line instead of plain `slate-200`.
- Restyle the "Brothers Pest Control" wordmark next to the logo image in Fraunces (semibold), Brush Ink color — right now it's generic bold system-sans and looks like an afterthought next to the actual brush-script logo mark.
- Nav links (`Services`, `Why Us`, `Locations`, `Contact`): Inter 500/600, Warm Slate default, Pine Green on hover; give the *active* section link a small Barn Red underline (2px), echoing the logo's red dot as the site's one recurring "you are here" signal — same idea as an active-tab indicator, just tied to the brand's actual accent color instead of an arbitrary color.
- "Call Now" button: solid Pine Green pill, Cream-on-dark text, Moss Green on hover, keep the `Phone` lucide icon.
- Mobile menu: same content/links, just re-skinned with the new palette (Warm Cream background, Pine Green active/hover states).

### Hero
- Replace the generic `slate-900 → emerald-900 → slate-900` gradient with the Brush Ink → Pine Green → Brush Ink gradient described above. Add a very subtle background texture (e.g. a faint large-scale dot-grid or soft radial glow behind the headline) so the dark hero doesn't feel flat — nothing distracting, just enough depth to feel considered rather than a plain CSS gradient.
- Headline "Protecting Your Home & Family" in Fraunces, large, Cream-on-dark, tightened leading. This is the single best place to let the serif's warmth show.
- Subheadline in Inter, Cream-on-dark at ~85% opacity (same copy, same facts — "Licensed and insured in Georgia and South Carolina" stays verbatim).
- Primary CTA ("Schedule Service" → the GorillaDesk booking link) as a solid Pine Green button with Moss Green hover, slightly more weight/padding than the current button so it reads as the clear primary action. Secondary CTA ("Learn More" → `#services`) as an outline/ghost button in Cream-on-dark, no fill.
- The "🎖️ 10% Military & First Responder Discount" line: drop the raw emoji and replace it with a small pill/badge treatment using a lucide-react icon (e.g. `Award` or `ShieldCheck`) + the text, in a Barn Red or Wheat Gold accent tone — turns a plain emoji line into a proper badge element consistent with the rest of the icon system. Text stays exactly "10% Military & First Responder Discount".

### Services grid (`#services`, 6 services)
- Replace the raw emoji icons (🐜 🪳 🕷️ 🦗 🦝 🛡️) with lucide-react icons inside a rounded, colored icon badge (Pine Green fill or a subtle Pine→Moss gradient, white icon, ~48–56px square, soft shadow) — same idea as a polished icon-badge treatment, not literal emoji. Suggested lucide-react names to map against the 6 existing services (swap for the closest available icon per service, exact literal-species matching isn't required — consistency of the icon *language* matters more than 1:1 accuracy): `Bug` (Ant Control), `BugOff` (Roach Prevention), `Sparkles` or a web-like `Network`-style icon (Spider & Web Removal — pick whichever reads best), `Bug` or `Home`+`ShieldAlert` combo (Termite Treatment), `Rat` or `PawPrint` (Wildlife Control), `ShieldCheck` (Preventative Pest Plans).
- Cards: Card Surface white on Parchment section background, soft warm border, replace the current flat `border-t-4 border-emerald-600` top-stripe with the icon badge itself carrying the color — cleaner and less "template card." Add a hover lift (translateY + shadow growth) and a subtle border-color shift to Pine Green on hover, matching the hover-state polish shown in the VistaForge reference screenshots.
- Titles in Fraunces (semibold) rather than generic bold sans; descriptions stay Inter, Warm Slate. Copy for each service description can be tightened for rhythm/consistency across the six cards but must keep the same meaning (e.g. don't drop "fire ants and carpenter ants" from Ant Control, don't drop "inspections & bonds" from Termite Treatment).

### Why Choose Us (`#why-us`, 3 pillars)
- Keep the existing `Home` / `Shield` / `Leaf` lucide icons (already a reasonable choice) but restyle the icon circles: instead of flat `bg-emerald-100` with `text-emerald-600`, use a solid Pine Green circle with a Cream-on-dark icon for stronger contrast and more "designed" weight — matches the confidence of the VistaForge reference rather than a pastel tint circle.
- Headings in Fraunces semibold, Brush Ink. Add a small Barn Red dot or short rule as a recurring divider mark between the icon and the heading/body — a subtle, repeated nod to the logo's red accent dot that ties this section back to the brand mark without overusing red.
- Copy (Family Owned & Operated / Licensed & Insured / Effective Solutions, including "faith-driven values") stays verbatim in meaning; light tightening for rhythm is fine.

### Service Areas / Locations (`#locations`, 9 towns)
- Keep the single-card layout with `MapPin` icons, but restyle the 9 entries as individual chip/pill elements (Card Surface background, warm border, Pine Green pin icon) inside the outer card rather than plain icon+text rows — gives the grid more structure and hover-ability, and reads closer to the "polished card" bar from the reference screenshots.
- Add a subtle hover state per chip (background shifts to Parchment) even though these aren't links, just for visual consistency with the rest of the card system.
- All 9 towns stay exactly as listed, in the same order; the "And surrounding areas. Call to check if we service your location." line stays.

### Testimonials (3, unlabeled section between Locations and CTA)
- Keep 3-column card grid. Replace `amber-400` stars with Wheat Gold `#D9A441` stars for palette consistency.
- Add a large, low-opacity quotation-mark glyph (Pine Green or Parchment tint) behind/above the quote text as a watermark-style accent — cheap, high-impact polish move seen in the reference screenshots' card treatments.
- Card surface/hover treatment matches the Services cards (soft lift on hover) for consistency.
- All 3 testimonials (names + quotes) stay 100% verbatim — no rewriting customer words.

### CTA band ("Ready to Protect Your Home?")
- Replace the `emerald-600 → emerald-700` gradient with the same Brush Ink → Pine Green gradient used in the hero, bookending the page visually (dark hero at top, dark CTA band near the bottom, light content sandwiched between — a clear rhythm rather than the current gradient being a slightly different emerald from the hero's emerald).
- Phone button: Cream/white pill, Pine Green text + `Phone` icon. Email button: Pine Green pill, Cream text + `Mail` icon, with a small Barn Red dot accent on the icon or badge corner if it doesn't feel forced — optional, only if it reads clean.
- Copy and both destinations (`tel:8032002033`, `mailto:office@brotherspestcontrol.net`) stay exactly as-is.

### Footer (`#contact`)
- Background: Brush Ink `#1A1712` (replaces `slate-900`) for consistency with the hero/CTA band dark sections.
- Replace the generic green "B" square logo stand-in with either the real logo mark (small, on a Cream or transparent chip so the black ink logo stays legible on the dark footer) or, if reusing an icon-badge approach, a Pine Green square with a Cream "B" — but prefer the actual logo asset if it can be adapted for a dark background, since it's the one truly distinctive brand asset already available.
- Link hovers: Pine Green → Moss Green (replaces `emerald-400`).
- The "10% Military & First Responder Discount" chip: Barn Red background instead of flat `emerald-600`, small badge/pill shape — same text, just tied to the brand's actual accent color instead of the primary green (this is one of the few spots where Red as a small badge fill, not just an underline/dot, makes sense).
- Bottom bar: "Licensed and Insured in Georgia and South Carolina" and the copyright line stay centered, Warm Slate/Cream-on-dark muted tone, unchanged text.

---

## 4. DO NOT CHANGE — real business facts

Everything below is real, current, and must appear **verbatim** in the redesign. This is not placeholder content — do not invent, alter, or "improve" any of it.

- **Phone number:** `(803) 200-2033` (and its `tel:8032002033` link target)
- **Email:** `office@brotherspestcontrol.net`
- **GorillaDesk "Schedule Service" booking URL (exact, from the hero CTA):**
  `https://portal.gorilladesk.com/brospestcontrol/booking?fbclid=IwY2xjawTnX89wZG9mBWV4dG4DYWVtAjEwAGJyaWQRMUFJbFFKTzVnUlVubElSN3FzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEewezlgg4vY1GfRL_hwmaiOZm5tj9zatPW8vrMeHS6EONmKB9_aHTJDhF3_zY_aem_PuyCdJYUeGN5oBeG-N2Fog`
- **Instagram URL:** `https://www.instagram.com/brothers_pest`
- **All 9 service-area locations, in this order:** Aiken, GA · Martinez, GA · Thomson, GA · Graniteville, SC · Evans, SC · Grovetown, GA · North Augusta, SC · Hephzibah, GA · Augusta, GA
- **All 6 service names:** Ant Control · Roach Prevention · Spider & Web Removal · Termite Treatment · Wildlife Control · Preventative Pest Plans
- **All 3 testimonials, verbatim (name + quote):**
  1. John M. — "Professional service and honest pricing. They really care about their customers."
  2. Sarah H. — "Excellent work! They got rid of our termite problem completely."
  3. David L. — "Family-owned feel with professional results. Highly recommend Brothers!"
- **The line:** "10% Military & First Responder Discount"
- **The line:** "Licensed and Insured in Georgia and South Carolina"
- **The copyright line:** "© 2026 Brothers Pest Control. All rights reserved."
- **Anchor IDs must not change:** `#services`, `#why-us`, `#locations`, `#contact` (nav + footer links depend on these existing exactly as-is)
