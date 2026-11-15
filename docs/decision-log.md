# Decision Log

This log distinguishes user-provided direction from proposals and open questions. Update it when decisions are explicitly confirmed.

## Confirmed business direction

| Topic | Current direction | Status |
|---|---|---|
| Business model | Sole-proprietor bakery venture | Confirmed |
| Initial hero product | Freshly made waffles | Confirmed |
| Preparation model | Waffles made fresh per individual order | Confirmed |
| Order model | Pre-orders only | Confirmed |
| Production timing | Prepare each morning before workplace delivery | Confirmed direction |
| Fulfilment | Scheduled delivery or collection | Confirmed |
| Market context | Uganda; Pearl Marina is an initial target market | Confirmed direction |
| Positioning | Affordable-premium | Confirmed direction |
| Existing equipment | Waffle maker already owned | Confirmed |
| Procurement planning | UGX 100,000–200,000 initial budget range discussed | Planning range |
| Ordering channel | WhatsApp contact; QR code directs customers to the PWA | Confirmed direction |
| Bundle quantities | 2, 4, 6, 8 waffles, plus custom orders | Confirmed |
| Bundle names | VEGA (2), SIRIUS (4), POLARIS (6), CANOPUS (8) | Working names |
| Ingredient disclosure | Publish ingredient information that matches the actual recipe | Requirement |
| Allergy / dietary input | Customer-entered free-text field | Requirement |
| Bundle naming | Luganda and English may be combined | Direction |

## Recipe work in progress

A pilot formula has been documented in [recipe-standardisation.md](recipe-standardisation.md). It is a test starting point, not an approved commercial recipe.

- Compare butter and olive-oil versions under controlled conditions.
- Measure actual saleable yield, portion weight, cook time, taste, and cost.
- Test vanilla, strawberry, and blueberry essence only after selecting the base fat version.
- Record actual waffle maker model, wattage, settings, and plate capacity.

## Finance work in progress

A UGX unit economics framework is documented in [unit-economics-model.md](unit-economics-model.md). Actual selling prices remain open until supplier prices, recipe yield, packaging, labour, energy, and delivery costs are measured.

## Product validation

A test protocol for freshness at realistic handoff intervals, bundle packaging, and customer feedback is in [product-validation-test.md](product-validation-test.md).

## Product and technical decisions still open

- Final website builder / framework.
- Hosting and domain.
- Whether persistent order storage or an admin dashboard is needed at launch.
- Whether PWA installation and offline behaviour are needed at launch.
- Final customer data retention and privacy approach.
- Exact pre-order cut-off and scheduled fulfilment slots.

## Proposals, not decisions

- Start with a small menu and expand only after customer and production validation.
- Defer payments, accounts, loyalty, inventory, and delivery automation until there is a demonstrated need.
- Keep the first implementation backend-light if a manual order confirmation workflow is sufficient.

## Change control

When a proposal becomes a confirmed decision, record who confirmed it, the date, the rationale, and consequences for product or operations.
