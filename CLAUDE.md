# barber-base

Reusable base for premium barber shop websites. Each shop is built from this base and gets its own theme.

## Design rules

### Theming

- Every shop gets its own theme, so all colours and fonts must come from CSS variables / Tailwind theme tokens in one place (`src/styles/starwind.css`). Never hardcode colours or fonts in components.
- Default palette: near black background, off white text, one accent colour (brass, gold or oxblood).
- Two fonts max: a condensed display font for headings (Oswald or Bebas Neue) and a clean body font (Manrope).

### Banned

- Purple gradients
- Generic glassmorphism
- Stock SaaS layouts
- Emoji
- Generic AI looking design

### Layout and verification

- Mobile first.
- Before saying any task is done, use Playwright to screenshot at 390px and 1440px, critique the screenshots against these rules, then fix the issues.

### Performance

- Lighthouse target 95+ on every page.
- Use Astro's `Image` component for all photos.

### Motion

- Respect `prefers-reduced-motion`.
- Motion is calm. One wow effect per page max.

### Tooling

- Use the frontend-design skill and Starwind components.
- Use Context7 for current Astro, Tailwind and GSAP docs.

## Astro reference

- Start the dev server in background mode with `astro dev --background`. Manage it with `astro dev stop`, `astro dev status` and `astro dev logs`.
- Full documentation: https://docs.astro.build
- Guides to consult before related work:
  - [Routing, dynamic routes and middleware](https://docs.astro.build/en/guides/routing/)
  - [Astro components](https://docs.astro.build/en/basics/astro-components/)
  - [Framework components (React, Vue, Svelte)](https://docs.astro.build/en/guides/framework-components/)
  - [Content collections](https://docs.astro.build/en/guides/content-collections/)
  - [Styling and Tailwind](https://docs.astro.build/en/guides/styling/)
  - [Internationalization](https://docs.astro.build/en/guides/internationalization/)
