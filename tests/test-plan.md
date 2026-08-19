# Brothers Pest Control — Redesign QA Test Plan

Scope: verify the visual/polish redesign of the existing live React (CRA) + Tailwind
site at `/home/claude/brotherspest/site` preserves all real business content while
lifting visual quality to the VistaForge Media bar. Reference for original content:
`/home/claude/brotherspest/existing/brotherspestcontrolllc-main/src/App.jsx`.
Reference for target polish: `/home/claude/deliverables/screenshots_index.png`,
`screenshots_services.png`, `screenshots_portfolio.png`, `screenshots_about.png`,
`screenshots_contact.png`.

---

## 1. Content-Preservation Checklist

Every item below must appear, unchanged in substance (light copy-editing of
surrounding prose is fine — facts, numbers, and URLs must NOT change), somewhere
in the redesigned site.

### Contact info
- [ ] Phone number `(803) 200-2033` appears in visible text
- [ ] `tel:8032002033` href present (header CTA and/or footer/CTA section)
- [ ] Email `office@brotherspestcontrol.net` appears in visible text
- [ ] `mailto:office@brotherspestcontrol.net` href present

### Links
- [ ] "Schedule Service" (or equivalent primary CTA) links to the exact original
      GorillaDesk booking URL:
      `https://portal.gorilladesk.com/brospestcontrol/booking?fbclid=IwY2xjawTnX89wZG9mBWV4dG4DYWVtAjEwAGJyaWQRMUFJbFFKTzVnUlVubElSN3FzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEewezlgg4vY1GfRL_hwmaiOZm5tj9zatPW8vrMeHS6EONmKB9_aHTJDhF3_zY_aem_PuyCdJYUeGN5oBeG-N2Fog`
      (byte-for-byte, not truncated/re-shortened)
- [ ] Instagram link `https://www.instagram.com/brothers_pest` present and unchanged

### Service area (9 locations, all present)
- [ ] Aiken, GA
- [ ] Martinez, GA
- [ ] Thomson, GA
- [ ] Graniteville, SC
- [ ] Evans, SC
- [ ] Grovetown, GA
- [ ] North Augusta, SC
- [ ] Hephzibah, GA
- [ ] Augusta, GA
- [ ] "Central Savannah River Area" / CSRA framing preserved

### Services (6, all present with correct meaning — icon/copy restyling OK)
- [ ] Ant Control
- [ ] Roach Prevention
- [ ] Spider & Web Removal
- [ ] Termite Treatment
- [ ] Wildlife Control
- [ ] Preventative Pest Plans

### Testimonials (3, names + substance preserved)
- [ ] John M. — professional service / honest pricing
- [ ] Sarah H. — termite problem resolved
- [ ] David L. — family-owned feel / professional results

### Trust / offer claims
- [ ] "10% Military & First Responder Discount" appears verbatim (badge, hero, or footer)
- [ ] "Licensed and Insured in Georgia and South Carolina" (or equivalent, both
      states named) appears
- [ ] Family-owned / faith-driven values messaging preserved in some form
- [ ] Copyright line present: "© 2026 Brothers Pest Control. All rights reserved."
      (or updated year if intentionally bumped — flag if changed, don't auto-fail)

---

## 2. Build Check

- [ ] `npm run build` completes with exit code 0 from `/home/claude/brotherspest/site`
- [ ] Build output (`index.html`, `static/` assets, etc.) present in
      `/home/claude/brotherspest/site/docs`
- [ ] `/home/claude/brotherspest/site/docs/.nojekyll` exists (required for GitHub
      Pages to serve the `static/` folder correctly)
- [ ] No build errors in CRA output; ESLint warnings noted but non-blocking unless
      they indicate a real bug (undefined var, missing key prop causing runtime issue)

---

## 3. Visual Polish Check (bar: VistaForge screenshots)

- [ ] Typography: a deliberate Google Font (or similar) is loaded and applied —
      not the browser/Tailwind default system font stack, for both headings and body
- [ ] Color palette: a custom, considered palette is used — not the generic
      default `emerald-500` / `slate-900` Tailwind combo used in the untouched
      original; palette should feel intentional (brand-appropriate, likely still
      green/earth-toned given pest control, but refined — custom hex values,
      accent colors, gradients with more nuance)
- [ ] Hero section reads as confident/premium: strong headline hierarchy, clear
      CTA hierarchy (primary vs secondary button distinguished), not just a plain
      gradient block
- [ ] Cards (services, testimonials, pricing-equivalent) have a refined hover
      treatment (shadow/lift/border transition) rather than a flat default shadow
- [ ] Spacing/rhythm feels intentional — consistent section padding, no cramped
      or excessively sparse areas
- [ ] Responsive: layout adapts cleanly at mobile (~375px), tablet (~768px), and
      desktop (~1280px) widths — grids collapse appropriately, text doesn't overflow

---

## 4. Functional Checks

- [ ] Mobile hamburger menu opens/closes and toggles icon (Menu ↔ X)
- [ ] Mobile menu closes after a nav link is tapped (or at least doesn't trap the user)
- [ ] `#services` anchor scrolls to the Services section
- [ ] `#why-us` anchor scrolls to the Why Us / Why Choose section
- [ ] `#locations` anchor scrolls to the Service Areas section
- [ ] `#contact` anchor scrolls to the footer/contact section
- [ ] `tel:` link is clickable/correctly formatted (no spaces/punctuation breaking it)
- [ ] `mailto:` link is clickable/correctly formatted
- [ ] Booking URL opens in new tab or at least navigates correctly (not broken by
      encoding changes to the query string)
- [ ] Instagram link resolves correctly
- [ ] Sticky header behaves correctly on scroll (doesn't overlap content oddly)

---

## 5. Console / Build Hygiene

- [ ] No errors in browser console on load (checked via build + manual/automated
      review of component code for obvious runtime hazards — e.g., missing key
      props, undefined imports)
- [ ] No broken images (logo and any new imagery resolve; check `public/` assets
      referenced match actual filenames, case-sensitive — GitHub Pages is
      case-sensitive unlike some local dev servers)
- [ ] No build errors (`npm run build` exit 0, per section 2)
- [ ] Lint warnings (unused vars, missing deps in hooks, etc.) noted in report but
      not treated as blocking failures unless they cause a real functional bug

---

## Review Process

1. Wait for Content Dev's design brief and Frontend Dev's implementation.
2. Diff redesigned `src/` against `/home/claude/brotherspest/existing/brotherspestcontrolllc-main/src/App.jsx`
   for content parity (section 1).
3. Run `npm run build` in `/home/claude/brotherspest/site` and inspect `docs/` output (section 2).
4. Visually compare rendered result against VistaForge screenshots for polish bar (section 3).
5. Read through JSX/CSS for functional correctness of nav, menu, and links (section 4).
6. Note any console/build hygiene issues (section 5).
7. Write full pass/fail results to `/home/claude/brotherspest/tests/report.md`.
8. Message the team lead with a summary.
