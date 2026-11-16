# Application Workspace

Customer website / PWA for Kanyunyuzi's Kitchen. This is prototype slice 1: a responsive home page with bundle and ingredient browsing. There is no backend, auth, payments, order form or customer data.

See [the product brief](../docs/product-brief.md) and [technical architecture](../docs/technical-architecture.md).

## Run

Requires Node 20 or newer.

```bash
cd app
npm install
npm run dev      # local dev server
npm run build    # type-check and production build into app/dist
npm test         # unit tests for the menu data
```

## Stack choice (prototype, not a final decision)

Vite, React and TypeScript. The architecture doc leaves the framework open and prefers a static, backend-light frontend; Vite produces a plain static bundle that can be hosted anywhere and has no server runtime. Revisit this when the open decisions in [decision-log.md](../docs/decision-log.md) (hosting, PWA, order storage) are settled. No hosting or deployment is configured.

## Menu content

All menu content lives in `src/data/menu.ts`, so prices are never hard-coded in components. A value of `null` means "not confirmed" and renders as "To be confirmed". To publish a price or bundle contents, set the field there once the owner approves it.

Confirmed and shown: bundle names and sizes (VEGA 2, SIRIUS 4, POLARIS 6, CANOPUS 8, working names), pre-order only, scheduled delivery or collection. Shown as draft: the working base ingredient list. Not shown: prices, flavours, cut-off, delivery slots, WhatsApp number, images.

## Visual style

The colours, fonts (system fonts only) and star mark are a prototype-only direction chosen for review. They are not the official brand. See [brand guidelines](../docs/brand-guidelines.md).
