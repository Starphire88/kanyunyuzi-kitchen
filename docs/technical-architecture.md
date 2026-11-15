# Technical Architecture — MVP

## Architecture objective

Deliver a small, maintainable, mobile-first customer ordering experience without creating unnecessary backend or operational complexity before the business model is validated.

This is a proposed architecture, not a record of a final framework or hosting decision.

## Recommended MVP shape

1. **Customer-facing web app / PWA**
   - Responsive menu, product details, flavour and bundle selection.
   - Optional customer-entered notes.
   - Order summary and clear next steps.
   - Installable PWA capabilities can be added where useful, but offline ordering is not a launch requirement.

2. **Business-controlled menu data**
   - Initially maintain a small, structured menu in the application.
   - Keep product names, descriptions, ingredients, availability, prices, bundle contents, and images in one clearly managed source.
   - Do not hard-code changing prices across multiple UI components.

3. **WhatsApp handoff (proposed initial order channel)**
   - Build a prefilled order enquiry from the customer's selections.
   - Let the customer review and send the message in WhatsApp.
   - The kitchen manually checks availability, confirms the order, and communicates delivery/payment details.
   - Treat the order as pending until the kitchen explicitly confirms it.

4. **No mandatory customer account**
   - Do not require sign-up for a first enquiry.
   - Collect only the details needed to respond and fulfil the order.
   - Do not persist sensitive allergy or dietary notes in analytics or public logs.

5. **No backend dependency for first release unless needed**
   - A static or lightweight hosted frontend may be sufficient for a menu and WhatsApp handoff.
   - Add a database and server-side order management only when the business needs reliable order storage, multiple staff workflows, availability management, or reporting that cannot be handled safely and consistently by the initial process.

## Logical flow

Customer device → Menu and product selection → Client-side order summary → Customer review → WhatsApp handoff → Kitchen confirmation → Preparation and delivery.

## Suggested data entities

These are conceptual data structures, not a committed database schema.

### Product
- id
- name
- description
- active status
- price in UGX
- serving description
- ingredient statement
- image reference

### Flavour
- id
- name
- description
- active status
- additional price, if applicable
- flavour-specific ingredients / toppings

### Bundle
- id
- name
- description
- included products and quantities
- permitted flavour choices
- price in UGX
- active status

### Order enquiry (transient in MVP)
- selected products and quantities
- selected flavours / bundle options
- customer name
- customer contact
- delivery area / address details
- optional customer-entered allergy, dietary, and preparation notes
- customer-visible price estimate
- timestamp

Do not treat a client-generated total as an authoritative payment record. The kitchen confirms the final amount and order acceptance.

## Privacy and safety requirements
- Never place secrets, API keys, or private credentials in frontend code or Git.
- Use HTTPS for the deployed site.
- Avoid collecting unnecessary personal information.
- Do not expose customer details in public repositories, analytics events, screenshots, or issue reports.
- Explain that allergy notes are customer-provided instructions, not a guarantee of an allergen-free environment.
- Display ingredient and allergen information based on the actual recipe and preparation process.
- If order data is later stored, define access controls, retention, deletion, backups, and incident handling before launch.

## Quality requirements
- Mobile-first responsive layout.
- Accessible labels, keyboard support, and readable contrast.
- Optimised images and reasonable page weight.
- Clear empty, unavailable, validation, and error states.
- Prices always displayed in UGX.
- Order summary must match the selections sent to WhatsApp.
- No claim that an order has been placed or confirmed before the kitchen confirms it.

## Decisions still open
- Frontend framework / website builder.
- Hosting and domain.
- Whether a PWA install prompt is needed at launch.
- Whether WhatsApp remains the final order channel.
- Whether persistent order storage is needed at launch.
- Whether the business needs an admin menu editor.
- Analytics approach and privacy policy.

Choose the implementation stack after comparing the actual builder workflow, code ownership/export, deployment, maintenance, and future portability.
