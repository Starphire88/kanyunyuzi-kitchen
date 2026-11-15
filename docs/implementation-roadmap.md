# Implementation Roadmap

This roadmap separates business validation from software delivery. Building an ordering interface before the recipe, prices, product options, and fulfilment rules are stable would create avoidable rework.

## Phase 0 — Foundation (completed)
- [x] Create public GitHub repository.
- [x] Establish business overview and product brief.
- [x] Document initial menu, operations, costing, and brand direction.

## Phase 1 — Validate the product (next)
**Goal:** Have a small, operationally deliverable menu before accepting online orders.

- [ ] Standardise one base waffle recipe through repeatable test batches.
- [ ] Compare butter and oil versions for taste, texture, consistency, and cost.
- [ ] Record exact quantities, batter yield, waffle yield, cooking time, and portion size.
- [ ] Test proposed flavour options; publish only those that can be made consistently.
- [ ] Define bundle contents, names, portions, and prices.
- [ ] Validate Luganda wording and spelling with fluent speakers.
- [ ] Cost ingredients, packaging, labour, energy, wastage, and delivery separately.
- [ ] Test product quality immediately after cooking and after realistic delivery intervals.
- [ ] Confirm order cut-off, service area, delivery fee, payment and confirmation process.

**Exit criteria:** A documented recipe, a small confirmed menu, cost-backed prices, and a repeatable fulfilment process.

## Phase 2 — Customer ordering MVP
**Goal:** Let customers understand the offer and submit an accurate order enquiry on a phone.

- [ ] Build a mobile-first menu and product detail experience.
- [ ] Display actual ingredients and clear flavour / bundle contents.
- [ ] Allow customers to select item, quantity, flavour and applicable options.
- [ ] Include optional, customer-entered allergy, dietary, and preparation-note fields.
- [ ] Collect the minimum contact and delivery information needed to fulfil an enquiry.
- [ ] Present an order summary before handoff.
- [ ] Generate a WhatsApp order message for customer review and sending, subject to final channel confirmation.
- [ ] Clearly state that an enquiry is not an accepted order until the kitchen confirms it.
- [ ] Test on common mobile screen sizes and slower connections.

**Exit criteria:** A customer can complete the enquiry flow end-to-end and the business can reliably receive and confirm it.

## Phase 3 — Pilot and improve
- [ ] Pilot with a small group of customers in the initial service area.
- [ ] Track enquiry-to-confirmed-order conversion.
- [ ] Track preparation time, fulfilment accuracy, wastage, and contribution per order.
- [ ] Collect feedback on taste, texture, temperature, flavour accuracy, packaging, and value.
- [ ] Fix the highest-impact ordering and fulfilment issues before wider promotion.

## Phase 4 — Operational expansion (only when justified)
Potential later additions, subject to evidence:
- Order management dashboard.
- Menu availability controls.
- Customer order history.
- Online payment integration.
- Delivery status updates.
- Loyalty or repeat-customer features.
- More advanced inventory and reporting.

Do not build these before the basic order flow and kitchen operations are working consistently.

## Release gates
A phase is not complete merely because code has been written. Each phase requires the stated business or customer outcome to be tested and evidenced.
