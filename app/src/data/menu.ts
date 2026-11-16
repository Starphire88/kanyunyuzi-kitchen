// Single source for customer-facing menu content. Every field below traces to
// docs/decision-log.md or docs/menu-and-flavours.md. Anything unconfirmed is
// null, which the UI renders as "to be confirmed". Do not hard-code these
// values in components.

export type Confirmable<T> = T | null;

export interface Bundle {
  id: string;
  name: string;
  waffleCount: number;
  priceUgx: Confirmable<number>;
  contents: Confirmable<string>;
}

// Working names and counts from the decision log. Prices and contents are not
// confirmed, so they stay null until the owner approves them.
export const BUNDLES: readonly Bundle[] = [
  { id: 'vega', name: 'VEGA', waffleCount: 2, priceUgx: null, contents: null },
  { id: 'sirius', name: 'SIRIUS', waffleCount: 4, priceUgx: null, contents: null },
  { id: 'polaris', name: 'POLARIS', waffleCount: 6, priceUgx: null, contents: null },
  { id: 'canopus', name: 'CANOPUS', waffleCount: 8, priceUgx: null, contents: null },
];

export const BUSINESS = {
  name: "Kanyunyuzi's Kitchen",
  description:
    'A Ugandan homegrown waffle and bakery venture focused on freshly made, affordable-premium waffles.',
  heroProduct: 'Freshly prepared waffles',
};

// Confirmed in docs/decision-log.md. Cut-off and slots are still open.
export const HOW_IT_WORKS: readonly string[] = [
  'Pre-orders only. Waffles are made fresh for each order, not kept in stock.',
  'Delivery or collection is scheduled in advance.',
  'Ordering will go through WhatsApp. Details will be shared once confirmed.',
];

// Draft from docs/menu-and-flavours.md; the final list must match the tested recipe.
export const WORKING_INGREDIENTS: readonly string[] = [
  'Flour',
  'Sugar',
  'Salt',
  'Baking powder',
  'Eggs',
  'Milk',
  'Butter or olive oil',
  'Flavouring or essence of choice',
];

export const CUSTOM_ORDERS_AVAILABLE = true;

export function formatUgx(amount: number): string {
  return `UGX ${amount.toLocaleString('en-UG')}`;
}

export function waffleLabel(count: number): string {
  return `${count} ${count === 1 ? 'waffle' : 'waffles'}`;
}
