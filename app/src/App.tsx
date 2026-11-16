import {
  BUNDLES,
  BUSINESS,
  CUSTOM_ORDERS_AVAILABLE,
  HOW_IT_WORKS,
  WORKING_INGREDIENTS,
  formatUgx,
  waffleLabel,
  type Bundle,
} from './data/menu';

const TBC = 'To be confirmed';

function Star() {
  return (
    <svg className="star" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.7-6.2 3.7 1.6-7L2 9.2l7.1-.6z" />
    </svg>
  );
}

function BundleCard({ bundle }: { bundle: Bundle }) {
  return (
    <li className="card">
      <h3>{bundle.name}</h3>
      <p className="count">{waffleLabel(bundle.waffleCount)}</p>
      <dl>
        <div>
          <dt>Price</dt>
          <dd className={bundle.priceUgx === null ? 'tbc' : undefined}>
            {bundle.priceUgx === null ? TBC : formatUgx(bundle.priceUgx)}
          </dd>
        </div>
        <div>
          <dt>Flavours and contents</dt>
          <dd className={bundle.contents === null ? 'tbc' : undefined}>
            {bundle.contents ?? TBC}
          </dd>
        </div>
      </dl>
    </li>
  );
}

export function App() {
  return (
    <>
      <p className="banner" role="note">
        Early prototype for review. Nothing here is a confirmed menu, price or order.
      </p>
      <header className="hero">
        <div className="wrap">
          <p className="brand">
            <Star /> {BUSINESS.name}
          </p>
          <h1>{BUSINESS.heroProduct}</h1>
          <p className="lede">{BUSINESS.description}</p>
          <a className="button" href="#bundles">
            Browse bundles
          </a>
        </div>
      </header>

      <main>
        <section className="wrap" aria-labelledby="how">
          <h2 id="how">How it works</h2>
          <ul className="plain">
            {HOW_IT_WORKS.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </section>

        <section className="wrap" id="bundles" aria-labelledby="bundles-title">
          <h2 id="bundles-title">Waffle bundles</h2>
          <p className="note">
            Bundle names are working names and may change. Prices, flavours and what each
            bundle contains are still being confirmed.
          </p>
          <ul className="grid">
            {BUNDLES.map((b) => (
              <BundleCard key={b.id} bundle={b} />
            ))}
          </ul>
          {CUSTOM_ORDERS_AVAILABLE && (
            <p className="note">Custom order sizes are also planned. Details to be confirmed.</p>
          )}
        </section>

        <section className="wrap" aria-labelledby="ingredients-title">
          <h2 id="ingredients-title">What goes into our waffles</h2>
          <p className="note">
            Working draft of the base ingredients. The final list will match the recipe we
            actually use, including anything added for a flavour.
          </p>
          <ul className="chips">
            {WORKING_INGREDIENTS.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
          <p className="note">
            Allergy and dietary notes will be something you can write yourself when ordering.
            We do not claim any waffle is allergen-free.
          </p>
        </section>
      </main>

      <footer className="wrap foot">
        <p>
          Prototype visual style chosen for this review only. It is not the official brand
          identity, logo, palette or typography.
        </p>
      </footer>
    </>
  );
}
