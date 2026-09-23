/**
 * The nine non-policy pages for Heirloom Hollow Gifts.
 *
 * Composition notes: the home page is a scrapbook spread — a polaroid hero, then
 * an occasion finder that no other store has, then the polaroid grid. The product
 * page puts the engraving proof process directly under the buy button for the
 * pieces that carry it, because that is the thing a customer needs to understand
 * before ordering something that cannot be returned.
 */

import { business, terms, shippingMethods, shippingSummary, returnSummary } from '../data/business.js';
import { categories, products, featuredSkus } from '../data/products.js';
import { breadcrumb, card, cardGrid, corners, esc, money, newsletter, productImage, promises, ruled } from './site.js';

const B = business;
const T = terms;
const featured = featuredSkus.map((sku) => products.find((p) => p.sku === sku));

/** The occasion finder — this store's own navigation idea. */
const OCCASIONS = [
  ['A birthday with a round number on it', 'hhg-604', 'Engraved Keepsake Box'],
  ['Somebody who says they want nothing', 'hhg-612', 'Conversation Card Deck'],
  ['A grandparent who tells the same story', 'hhg-601', 'Memory Journal'],
  ['A house that has just been moved into', 'hhg-611', 'Beeswax Candle Trio'],
];

/* ------------------------------------------------------------------- home */

export function home() {
  const occasionRows = OCCASIONS.map(([when, sku, name]) => {
    const p = products.find((x) => x.image.startsWith(sku));
    return `<li><a href="/products/${p.slug}.html">
      <span class="hh-occ__when">${esc(when)}</span>
      <span class="hh-occ__what">${esc(name)} · ${money(p.price)}</span>
    </a></li>`;
  }).join('');

  return {
    file: 'index.html',
    path: '/index.html',
    current: '/index.html',
    title: `${B.brandName} — gifts, memories and keepsakes`,
    description: `Memory journals, engraved keepsake boxes, photo frames and candles — presents meant to be kept. Free US shipping over ${T.freeShippingOver} and ${T.returnWindow} returns.`,
    body: `
<section class="hh-hero">
  <div class="wrap hh-hero__inner">
    <div class="hh-hero__text">
      <p class="hh-eyebrow">Gifts, memories &amp; nostalgia</p>
      <h1>It started with a list of questions and three afternoons of answers.</h1>
      <p class="lede">Twelve things meant to be kept rather than used up — journals with the questions
      already written in them, a box with your words on the lid, an album with somewhere to write who
      is in the photograph.</p>
      <p class="hh-hero__actions">
        <a class="hh-btn hh-btn--gold" href="/shop.html">Shop all 12</a>
        <a class="hh-btn" href="/about.html">The list of questions</a>
      </p>
    </div>

    <div class="hh-polaroid hh-hero__polaroid">
      ${corners()}
      ${productImage('hero.webp', 'Several photograph albums stacked on a table.', {
        sizes: '(max-width: 900px) 78vw, 38vw',
        eager: true,
      })}
      <p class="hh-polaroid__caption">Somebody&rsquo;s afternoon, kept</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    ${ruled('Four shelves')}
    <ul class="hh-cats">
      ${categories
        .map(
          (c) => `<li><a class="hh-cat" href="/shop.html?category=${c.id}">
        <span class="hh-cat__photo">${productImage(c.image, c.alt, { sizes: '(max-width: 760px) 44vw, 22vw' })}</span>
        <span class="hh-cat__name">${esc(c.name)}</span>
        <span class="hh-cat__blurb">${esc(c.blurb)}</span></a></li>`,
        )
        .join('')}
    </ul>
  </div>
</section>

<section class="section section--paper">
  <div class="wrap hh-occwrap">
    ${ruled('If you are stuck')}
    <p class="lede">The four occasions people write to us about, and what we suggest.</p>
    <ul class="hh-occ">${occasionRows}</ul>
    <p class="meta-line">These are suggestions, not a quiz. If none of them fits, call
    <a href="${B.phoneHref}">${B.phone}</a> during ${esc(B.hours)} and describe the person — we are
    quite good at this.</p>
  </div>
</section>

<section class="section">
  <div class="wrap">
    ${ruled('Where most people start')}
    ${cardGrid(featured)}
    <p class="hh-more"><a class="hh-btn" href="/shop.html">See the whole shop</a></p>
  </div>
</section>

<section class="section section--plum">
  <div class="wrap">
    ${ruled('Four things we promise')}
    <p class="lede lede--light">Every one of these is repeated, word for word, in our policies.</p>
    ${promises()}
  </div>
</section>

${newsletter()}
`,
  };
}

/* ------------------------------------------------------------------- shop */

export function shop() {
  return {
    file: 'shop.html',
    path: '/shop.html',
    current: '/shop.html',
    title: 'Shop all products',
    description: `Every journal, box, frame, print and keepsake Heirloom Hollow sells. Free US standard shipping over ${T.freeShippingOver} and ${T.returnWindow} returns.`,
    body: `
${breadcrumb([{ href: '/index.html', label: 'Home' }, { label: 'Shop' }])}

<section class="section">
  <div class="wrap">
    <h1>Everything we sell</h1>
    <p class="lede">Twelve things meant to be kept. Every price below is the price you pay; shipping
    is added at the cart and nothing else is.</p>

    <div class="hh-tools">
      <div class="hh-tools__group">
        <span class="hh-tools__label" id="filter-label">Shelf</span>
        <div class="hh-chips" role="group" aria-labelledby="filter-label">
          <button class="hh-chip" type="button" data-filter="all" aria-pressed="true">All products</button>
          ${categories
            .map(
              (c) =>
                `<button class="hh-chip" type="button" data-filter="${c.id}" aria-pressed="false">${esc(c.name)}</button>`,
            )
            .join('')}
        </div>
      </div>
      <div class="hh-tools__group">
        <label class="hh-tools__label" for="sort">Sort by</label>
        <select id="sort" data-sort>
          <option value="featured">Our order</option>
          <option value="price-asc">Price: low to high</option>
          <option value="price-desc">Price: high to low</option>
          <option value="name">Name A–Z</option>
        </select>
      </div>
    </div>

    <p class="hh-count" role="status" data-count>Showing ${products.length} of ${products.length} products. All in stock.</p>

    <h2 class="visually-hidden">Products</h2>
    <ul class="hh-grid" data-grid>
      ${products
        .map((p, i) =>
          card(p, { eager: i < 3, index: i }).replace(
            /^<li class="hh-card /,
            `<li data-category="${p.category}" data-price="${p.price}" data-name="${esc(p.name)}" data-order="${i}" class="hh-card `,
          ),
        )
        .join('\n')}
    </ul>
  </div>
</section>
`,
  };
}

/* ---------------------------------------------------------------- product */

export function productPage(product) {
  const cat = categories.find((c) => c.id === product.category);
  const related = products
    .filter((p) => p.category === product.category && p.sku !== product.sku)
    .slice(0, 3);

  const specRows = Object.entries(product.specs)
    .map(([k, v]) => `<tr><th scope="row">${esc(k)}</th><td>${esc(v)}</td></tr>`)
    .join('');

  return {
    file: `products/${product.slug}.html`,
    path: `/products/${product.slug}.html`,
    current: '/shop.html',
    title: product.name,
    description: `${product.summary} ${money(product.price)}. ${T.returnWindow} returns and free US standard shipping over ${T.freeShippingOver}.`,
    ogImage: `/assets/images/${product.image}`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      sku: product.sku,
      description: product.summary,
      image: `${B.siteUrl}/assets/images/${product.image}`,
      brand: { '@type': 'Brand', name: B.brandName },
      offers: {
        '@type': 'Offer',
        url: `${B.siteUrl}/products/${product.slug}.html`,
        priceCurrency: 'USD',
        price: product.price.toFixed(2),
        availability: 'https://schema.org/InStock',
        itemCondition: 'https://schema.org/NewCondition',
        seller: { '@type': 'Organization', name: B.legalName },
      },
    },
    body: `
${breadcrumb([
  { href: '/index.html', label: 'Home' },
  { href: '/shop.html', label: 'Shop' },
  { href: `/shop.html?category=${cat.id}`, label: cat.name },
  { label: product.name },
])}

<section class="section">
  <div class="wrap hh-product">
    <div class="hh-polaroid hh-product__photo">
      ${corners()}
      ${productImage(product.image, product.alt, { sizes: '(max-width: 880px) 88vw, 44vw', eager: true })}
      <p class="hh-polaroid__caption">${esc(cat.name)}</p>
    </div>

    <div class="hh-product__info">
      <h1>${esc(product.name)}</h1>
      <p class="hh-product__price">${money(product.price)}</p>
      <p class="hh-product__sku">SKU ${esc(product.sku)} · <strong class="hh-instock">In stock</strong></p>

      <p>${esc(product.description)}</p>

      <div class="hh-product__buy">
        <div class="hh-qty">
          <label for="qty">Quantity</label>
          <select id="qty" data-qty>
            ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => `<option value="${n}">${n}</option>`).join('')}
          </select>
        </div>
        <button class="hh-btn hh-btn--gold" type="button" data-add="${product.sku}" data-use-qty>
          Add to cart — ${money(product.price)}
        </button>
      </div>
      <p class="hh-added" role="status" data-added></p>

      ${
        product.note
          ? `<div class="hh-note hh-note--flag">
        <p><strong>Before you order:</strong> ${esc(product.note)}</p>
      </div>`
          : ''
      }

      <div class="hh-note">
        <p><strong>Shipping:</strong> ${esc(shippingSummary)}</p>
        <p><strong>Returns:</strong> ${esc(returnSummary)}
           <a href="/policies/refund-returns.html">Read the full policy</a>.</p>
        <p>Sales tax is calculated at checkout from your delivery address. There are no handling fees
           or surcharges.</p>
      </div>
    </div>
  </div>
</section>

<section class="section section--paper">
  <div class="wrap hh-cols">
    <div>
      ${ruled('What it is', { level: 2 })}
      <ul>${product.features.map((f) => `<li>${esc(f)}</li>`).join('')}</ul>
      ${ruled('In the box', { level: 2 })}
      <ul>${product.inBox.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
    </div>
    <div>
      ${ruled('Specifications', { level: 2 })}
      <div class="table-scroll">
        <table class="hh-specs">
          <caption class="visually-hidden">Specifications for the ${esc(product.name)}</caption>
          <tbody>${specRows}</tbody>
        </table>
      </div>
      ${ruled('Customer reviews', { level: 2 })}
      <p>No customer reviews yet. Heirloom Hollow is a new shop and we will not publish a review until
      a real customer writes one. We do not buy, incentivise or write reviews.</p>
    </div>
  </div>
</section>

${
  related.length
    ? `<section class="section">
  <div class="wrap">
    ${ruled(`More from ${cat.name}`)}
    ${cardGrid(related)}
  </div>
</section>`
    : ''
}
`,
  };
}

/* ------------------------------------------------------------------- cart */

export function cart() {
  return {
    file: 'cart.html',
    path: '/cart.html',
    current: '/cart.html',
    title: 'Your cart',
    description: `Review your Heirloom Hollow order. Standard shipping is ${T.standardShipping}, free over ${T.freeShippingOver}, and returns are open for ${T.returnWindow}.`,
    body: `
<section class="section">
  <div class="wrap">
    <h1>Your cart</h1>

    <!-- The empty state is the DEFAULT rendered state, and the cart layout below is what
         JavaScript reveals. The other way round costs a large layout shift: both blocks
         hidden at parse time means the footer paints high on the page and is then pushed
         down the moment the script runs. It also degrades honestly — the cart lives in
         localStorage, so without JavaScript there is genuinely nothing in it. -->
    <div data-cart-empty>
      <div class="hh-panel">
        <h2>There is nothing in your cart yet</h2>
        <p>Have a look at the twelve things we sell — or call ${esc(B.phone)} during ${esc(B.hours)}
        and we will take the order for you.</p>
        <a class="hh-btn hh-btn--gold" href="/shop.html">Go to the shop</a>
      </div>
    </div>

    <div class="hh-cartlayout" data-cart-layout hidden>
      <div>
        <ul class="hh-cartlist" data-cart-list></ul>

        <fieldset class="hh-fieldset">
          <legend>Shipping method</legend>
          ${shippingMethods
            .map(
              (m, i) => `<label class="hh-radio">
            <input type="radio" name="shipping" value="${m.id}"${i === 0 ? ' checked' : ''} data-shipping>
            <span>
              <span class="hh-radio__label">${esc(m.label)} — <span data-ship-price="${m.id}">${esc(m.priceLabel)}</span></span>
              <span class="hh-radio__note">Arrives in ${esc(m.estimate)} after it ships. ${esc(m.note)}</span>
            </span>
          </label>`,
            )
            .join('')}
          <p class="meta-line">We ship your order within ${esc(T.processing)} of receiving it —
          engraved pieces add two business days. Delivery estimates are the carrier&rsquo;s transit
          time after that.</p>
        </fieldset>
      </div>

      <aside class="hh-summary" aria-label="Order summary">
        <h2 class="hh-h3">Order summary</h2>
        <div class="hh-sumrow"><span>Subtotal</span><strong data-subtotal>$0.00</strong></div>
        <div class="hh-sumrow"><span>Shipping<br><span class="meta-line" data-ship-label>Standard shipping</span></span><strong data-shipping-cost>$0.00</strong></div>
        <div class="hh-sumrow"><span>Sales tax</span><span class="meta-line">Calculated at checkout from your delivery address</span></div>
        <div class="hh-sumrow hh-sumrow--total"><span>Total before tax</span><strong data-total>$0.00</strong></div>
        <p class="meta-line" data-freeship></p>

        <a class="hh-btn hh-btn--gold hh-btn--block" href="/checkout.html">Go to checkout</a>
        <a class="hh-btn hh-btn--block" href="/shop.html">Keep shopping</a>

        <p class="meta-line">Returns are open for ${esc(T.returnWindow)} from delivery —
          <a href="/policies/refund-returns.html">Refund &amp; Return Policy</a>. See also the
          <a href="/policies/shipping.html">Shipping Policy</a>,
          <a href="/policies/terms.html">Terms of Service</a>,
          <a href="/policies/privacy.html">Privacy Policy</a> and
          <a href="/contact.html">how to contact us</a>.</p>
      </aside>
    </div>
  </div>
</section>
`,
  };
}

/* --------------------------------------------------------------- checkout */

const STATES = ['AL','AK','AZ','AR','CA','CO','CT','DE','DC','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'];

export function checkout() {
  return {
    file: 'checkout.html',
    path: '/checkout.html',
    current: '/checkout.html',
    title: 'Checkout',
    description: 'Complete your Heirloom Hollow order. Item prices, shipping and the tax position are all shown before payment.',
    body: `
<section class="section">
  <div class="wrap">
    <h1>Checkout</h1>
    <p class="lede">Every charge is listed below before you pay. There are no handling fees, service
    fees or surcharges.</p>

    <!-- The empty state is the DEFAULT rendered state, and the cart layout below is what
         JavaScript reveals. The other way round costs a large layout shift: both blocks
         hidden at parse time means the footer paints high on the page and is then pushed
         down the moment the script runs. It also degrades honestly — the cart lives in
         localStorage, so without JavaScript there is genuinely nothing in it. -->
    <div data-cart-empty>
      <div class="hh-panel">
        <h2>Your cart is empty</h2>
        <p>Add something to your cart first and the checkout will open.</p>
        <a class="hh-btn hh-btn--gold" href="/shop.html">Go to the shop</a>
      </div>
    </div>

    <div class="hh-cartlayout" data-cart-layout hidden>
      <form data-checkout novalidate>
        <fieldset class="hh-fieldset">
          <legend>Contact</legend>
          <div class="hh-field">
            <label for="email">Email address</label>
            <span class="hint" id="email-hint">We use this to send your order confirmation, shipping updates, and the engraving proof if you have ordered an engraved piece.</span>
            <input id="email" name="email" type="email" autocomplete="email" aria-describedby="email-hint" required>
          </div>
          <div class="hh-field">
            <label for="phone">Phone number (optional)</label>
            <span class="hint" id="phone-hint">Only used if the carrier cannot find your address.</span>
            <input id="phone" name="phone" type="tel" autocomplete="tel" aria-describedby="phone-hint">
          </div>
          <p class="meta-line"><strong>Notice at collection:</strong> we collect your name, address,
          email and optional phone number to fulfil this order, and your payment details go straight to
          our payment processor. We do not sell or share personal information. See the
          <a href="/policies/privacy.html">Privacy Policy</a>.</p>
        </fieldset>

        <fieldset class="hh-fieldset">
          <legend>Shipping address</legend>
          <p class="meta-line">We ship within the United States only.</p>
          <div class="hh-cols2">
            <div class="hh-field">
              <label for="firstName">First name</label>
              <input id="firstName" name="firstName" autocomplete="given-name" required>
            </div>
            <div class="hh-field">
              <label for="lastName">Last name</label>
              <input id="lastName" name="lastName" autocomplete="family-name" required>
            </div>
          </div>
          <div class="hh-field">
            <label for="address1">Street address</label>
            <input id="address1" name="address1" autocomplete="address-line1" required>
          </div>
          <div class="hh-field">
            <label for="address2">Apartment, suite or unit (optional)</label>
            <input id="address2" name="address2" autocomplete="address-line2">
          </div>
          <div class="hh-cols3">
            <div class="hh-field">
              <label for="city">City or town</label>
              <input id="city" name="city" autocomplete="address-level2" required>
            </div>
            <div class="hh-field">
              <label for="state">State</label>
              <select id="state" name="state" autocomplete="address-level1" required>
                <option value="">Choose a state</option>
                ${STATES.map((s) => `<option value="${s}">${s}</option>`).join('')}
              </select>
            </div>
            <div class="hh-field">
              <label for="zip">ZIP code</label>
              <input id="zip" name="zip" inputmode="numeric" autocomplete="postal-code" required>
            </div>
          </div>
          <div class="hh-field">
            <label for="notes">Gift message or delivery notes (optional)</label>
            <span class="hint" id="notes-hint">A gift message is written on a card by hand and tucked inside — it is not printed on the invoice.</span>
            <textarea id="notes" name="notes" rows="3" aria-describedby="notes-hint"></textarea>
          </div>
        </fieldset>

        <fieldset class="hh-fieldset">
          <legend>Shipping method</legend>
          ${shippingMethods
            .map(
              (m, i) => `<label class="hh-radio">
            <input type="radio" name="shipping" value="${m.id}"${i === 0 ? ' checked' : ''} data-shipping>
            <span>
              <span class="hh-radio__label">${esc(m.label)} — <span data-ship-price="${m.id}">${esc(m.priceLabel)}</span></span>
              <span class="hh-radio__note">We ship within ${esc(T.processing)}; the carrier then takes ${esc(m.estimate)}.</span>
            </span>
          </label>`,
            )
            .join('')}
        </fieldset>

        <button class="hh-btn hh-btn--gold hh-btn--block" type="submit">Review my order</button>

        <div class="hh-review" data-review hidden>
          <h2 class="hh-h3">Order review</h2>
          <p data-review-address></p>
          <p data-review-shipping></p>

          <!-- ==================================================================
               PAYMENT INTEGRATION POINT

               Mount the payment processor here — Stripe Payment Element, PayPal
               Buttons, or a Shopify Buy Button. It must:

                 1. Receive the server-recalculated total. Never trust the amount
                    computed in this browser.
                 2. Add sales tax for the delivery address before charging. The
                    figure shown is deliberately labelled "total before tax" until
                    that calculation exists.
                 3. Create the order only after the processor confirms the payment,
                    then redirect to a real confirmation page.
                 4. Run over HTTPS with a valid certificate — Google Merchant Center
                    requires a secured checkout.

               Engraved items add a step: the proof email must go out after payment
               and before the laser runs, and the order must not ship until the
               customer replies. Build that into the fulfilment flow, not the copy.

               Until a processor is connected, this build must never show a success
               or confirmation screen. Claiming an order was placed when no payment
               was taken is a Google Ads misrepresentation violation and an FTC
               deception issue.
               ================================================================== -->

          <div class="hh-note hh-note--white">
            <p><strong>No payment processor is connected to this site yet.</strong> Nothing has been
            charged and no order has been placed. To buy any of these items today, call
            ${esc(B.phone)} during ${esc(B.hours)} or email
            <a href="mailto:${B.email}">${B.email}</a>.</p>
          </div>
        </div>
      </form>

      <aside class="hh-summary" aria-label="Order summary">
        <h2 class="hh-h3">Your order</h2>
        <ul class="hh-minilist" data-cart-list></ul>
        <div class="hh-sumrow"><span>Subtotal</span><strong data-subtotal>$0.00</strong></div>
        <div class="hh-sumrow"><span>Shipping<br><span class="meta-line" data-ship-label>Standard shipping</span></span><strong data-shipping-cost>$0.00</strong></div>
        <div class="hh-sumrow"><span>Sales tax</span><span class="meta-line">Added at the payment step from your delivery address</span></div>
        <div class="hh-sumrow hh-sumrow--total"><span>Total before tax</span><strong data-total>$0.00</strong></div>
        <p class="meta-line">By placing an order you accept our <a href="/policies/terms.html">Terms of
        Service</a>. See the <a href="/policies/refund-returns.html">Refund &amp; Return Policy</a>
        (${esc(T.returnWindow)} from delivery; engraved pieces are excepted), the
        <a href="/policies/shipping.html">Shipping Policy</a> and the
        <a href="/policies/privacy.html">Privacy Policy</a>. Questions before you order?
        <a href="/contact.html">Contact us</a>.</p>
      </aside>
    </div>
  </div>
</section>
`,
  };
}

/* ------------------------------------------------------------------ about */

export function about() {
  return {
    file: 'about.html',
    path: '/about.html',
    current: '/about.html',
    title: 'About us',
    description: `${B.legalName} is a small gift shop in ${B.address.city}, ${B.address.state}. We sell twelve things meant to be kept, and we describe them plainly.`,
    body: `
<section class="section">
  <div class="wrap--narrow">
    <h1>About Heirloom Hollow</h1>
    <p class="lede">We are a small gift shop in ${esc(B.address.city)}, ${esc(B.address.state)}. We
    sell twelve things. We would rather do that well than sell four hundred badly.</p>

    ${ruled('What we sell')}
    <p>Journals with the questions already in them, a walnut box with your words on the lid, an album
    with room to write who is in the photograph, a radio with two knobs, a print of a family tree
    waiting for names. Four shelves: Write It Down, Keep It Safe, On the Wall, and Small Comforts.</p>
    <p><strong>Nothing here is an antique and nothing pretends to be.</strong> The radio is a new
    radio in a wooden case. The prints are new prints on new paper. We sell things made to last, and
    we describe them as exactly what they are.</p>

    ${ruled('The list of questions')}
    <p>It began with a list. One of us wrote out forty questions before a last Christmas — what was
    the house like, who did you sit next to at school, what was the first thing you ever bought with
    your own money — and asked them over three afternoons, writing the answers down.</p>
    <p>The answers were not the point, in the end. The asking was. Nobody in that family had ever
    asked, and it turned out nobody had ever been asked either.</p>
    <p>So the first thing we sold was that list, printed as a book with room to write the answers.
    Everything else on these shelves came from the same idea: a present that gives somebody a reason
    to tell you something.</p>
    <p>We do not claim any of it improves a memory. It is a book of questions, a box, an album. What
    it does is give two people something to do on a Sunday afternoon that is not the television, and
    that is the whole of the claim we will make for it.</p>

    ${ruled('Engraving, and why it cannot be returned')}
    <p>The keepsake box is cut to your words, which means nobody else can ever buy it. That is the
    point of it and it is also why it cannot come back. So we email you a proof of the exact text
    before the laser runs, and we cut nothing until you reply — that email is the last point at which
    a spelling can be fixed, and we would much rather you took ten minutes over it than received a
    box with a name spelled wrong on the lid.</p>

    ${ruled('How we write about products')}
    <ul>
      <li>We print the page count, the ruling in millimetres, the type size in points and what the
      thing is actually made of.</li>
      <li>We do not use &ldquo;best&rdquo;, &ldquo;number one&rdquo; or &ldquo;award-winning&rdquo;.
      We have not won anything and neither has the journal.</li>
      <li>There are no star ratings on this site. We are new, nobody has reviewed us yet, and
      inventing reviews is both dishonest and illegal under the Federal Trade Commission&rsquo;s rule
      on consumer reviews.</li>
      <li>The price on the page is the price charged. Shipping is added at the cart, sales tax at
      checkout, and nothing else is added anywhere.</li>
    </ul>

    ${ruled('How we handle orders')}
    <p>We ship your order within ${esc(T.processing)} of receiving it, by ${esc(T.carriers)}, within
    the United States — engraved pieces add two business days for the proof and the cutting. Standard
    shipping is ${esc(T.standardShipping)} and free over ${esc(T.freeShippingOver)}. You have
    ${esc(T.returnWindow)} from delivery to send anything back unused, with the exceptions set out in
    the <a href="/policies/refund-returns.html">Refund &amp; Return Policy</a>.</p>

    ${ruled('Ordering without a computer')}
    <p>Some people would simply rather talk to somebody. Call ${esc(B.phone)} during ${esc(B.hours)}
    and we will take the order over the phone, read the prices back to you, read an engraving back to
    you letter by letter, and post a paper receipt with the parcel if you would like one.</p>

    ${ruled('Where to find us')}
    <p>${esc(B.legalName)}<br>
    ${esc(B.addressOneLine)}<br>
    <a href="mailto:${B.email}">${B.email}</a> · <a href="${B.phoneHref}">${B.phone}</a><br>
    ${esc(B.hours)}</p>
    <p class="meta-line">This is a mail-order shop and the address above is our office and returns
    address. It is not a shop you can walk into, so please do not travel to it expecting to browse.</p>

    <p class="hh-more"><a class="hh-btn hh-btn--gold" href="/shop.html">See what we sell</a></p>
  </div>
</section>
`,
  };
}

/* ---------------------------------------------------------------- contact */

export function contact() {
  return {
    file: 'contact.html',
    path: '/contact.html',
    current: '/contact.html',
    title: 'Contact us',
    description: `Email ${B.email}, call ${B.phone} (${B.hours}), or write to ${B.addressOneLine}. We answer email within one business day.`,
    body: `
<section class="section">
  <div class="wrap">
    <h1>Contact us</h1>
    <p class="lede">A real person reads every message. ${esc(B.responseTime)}</p>

    <div class="hh-cartlayout">
      <form data-contact novalidate>
        <fieldset class="hh-fieldset">
          <legend>Send us a message</legend>

          <div class="hh-field">
            <label for="name">Your name</label>
            <input id="name" name="name" autocomplete="name" required>
          </div>

          <div class="hh-field">
            <label for="cemail">Your email address</label>
            <span class="hint" id="cemail-hint">We reply to this address and use it for nothing else.</span>
            <input id="cemail" name="email" type="email" autocomplete="email" aria-describedby="cemail-hint" required>
          </div>

          <div class="hh-field">
            <label for="topic">What is it about?</label>
            <select id="topic" name="topic">
              <option>Help choosing a present</option>
              <option>A question about engraving</option>
              <option>A question before I order</option>
              <option>An existing order</option>
              <option>A return or refund</option>
              <option>Something arrived damaged</option>
              <option>Accessibility of this website</option>
              <option>Privacy request</option>
              <option>Something else</option>
            </select>
          </div>

          <div class="hh-field">
            <label for="message">Your message</label>
            <span class="hint" id="message-hint">If it is about an order, the order number helps — but it is not essential.</span>
            <textarea id="message" name="message" rows="6" aria-describedby="message-hint" required></textarea>
          </div>

          <button class="hh-btn hh-btn--gold" type="submit">Send message</button>
          <div class="hh-note hh-note--white" data-contact-note hidden>
            <p><strong>This form is not connected to a mail server yet</strong>, so nothing was sent and
            nothing was stored. Please email <a href="mailto:${B.email}">${B.email}</a> or call
            <a href="${B.phoneHref}">${B.phone}</a> instead — we would still very much like to hear from
            you.</p>
          </div>
        </fieldset>
      </form>

      <aside class="hh-panel" aria-label="Other ways to reach us">
        <h2 class="hh-h3">Other ways to reach us</h2>

        <h3>Email</h3>
        <p><a href="mailto:${B.email}">${B.email}</a><br>
        <span class="meta-line">${esc(B.responseTime)}</span></p>

        <h3>Phone</h3>
        <p><a href="${B.phoneHref}">${B.phone}</a><br>
        <span class="meta-line">${esc(B.hours)}</span><br>
        <span class="meta-line">Outside those hours, leave a message and we will call back the next
        business day.</span></p>

        <h3>Post</h3>
        <address>
          ${esc(B.legalName)}<br>
          ${esc(B.address.line1)}<br>
          ${esc(B.address.city)}, ${B.address.state} ${B.address.zip}<br>
          ${esc(B.address.country)}
        </address>
        <p class="meta-line">This is also the returns address. Please email us for a return number
        before sending anything back — see the
        <a href="/policies/refund-returns.html">Refund &amp; Return Policy</a>.</p>

        <h3>Help choosing</h3>
        <p class="meta-line">Tell us about the person — roughly how old, what they do on a Sunday, and
        whether they have said they want nothing — and we will suggest two things and tell you which
        one we would send. We will also tell you if we think none of them fits.</p>

        <h3>Engraving</h3>
        <p class="meta-line">Call and we will read the engraving back to you letter by letter before it
        goes anywhere near the machine. Engraved pieces cannot be returned, so it is worth the two
        minutes.</p>

        <h3>Privacy requests</h3>
        <p class="meta-line">To access, correct or delete your information, email ${B.email} with
        &ldquo;Privacy request&rdquo; in the subject, or call the number above. You do not need an
        account. See the <a href="/policies/privacy.html">Privacy Policy</a>.</p>

        <h3>Accessibility</h3>
        <p class="meta-line">If any part of this site is hard to use, tell us and we will fix it and
        reply within five business days. See the
        <a href="/policies/accessibility.html">Accessibility Statement</a>.</p>
      </aside>
    </div>
  </div>
</section>
`,
  };
}

/* -------------------------------------------------------------------- faq */

const FAQ = [
  {
    group: 'Choosing a present',
    items: [
      ['I have no idea what to buy. Can you help?', `Yes, and we would rather you asked than guessed. Call ${B.phone} during ${B.hours} or email ${B.email} and describe the person — roughly how old, what they do on a Sunday afternoon, and whether they have said they want nothing. We will suggest two things and tell you which one we would send. We will also say if we think none of them fits.`],
      ['What do you send somebody who says they want nothing?', 'The conversation card deck, usually. It costs $19, it takes up almost no room, and it gives two people something to do that is not the television. It is the thing we send most often.'],
      ['Do you gift wrap?', 'We do not wrap, but a gift message is written on a card by hand and tucked inside the parcel, and the invoice never goes in the box — it goes to the billing email. Put the message in the notes field at checkout.'],
    ],
  },
  {
    group: 'Engraving',
    items: [
      ['How does engraving work?', 'You give us up to three lines of 28 characters at checkout. We email you a proof of the exact text, laid out as it will be cut, and we engrave nothing until you reply. That adds about two business days before the parcel ships.'],
      ['Can I return an engraved box?', 'Not unless it is faulty, because we made it to your words and nobody else can use it. That is why we send the proof — please read it carefully, as it is the last point at which a spelling can be fixed.'],
      ['Can you engrave something I did not buy here?', 'No, sorry. We only engrave the boxes we sell, because we know how that particular walnut behaves under a laser and we do not want to ruin something of yours.'],
    ],
  },
  {
    group: 'Orders',
    items: [
      ['Do I need an account to buy something?', 'No. There is no account system on this site at all. You enter a delivery address at checkout and that is it. Nothing is kept behind a login.'],
      ['Can I order over the phone instead?', `Yes. Call ${B.phone} during ${B.hours} and we will take the order, read the prices back to you, read any engraving back letter by letter, and confirm the total before anything is charged.`],
      ['How do I change or cancel an order?', `Email ${B.email} or call ${B.phone} as soon as you can. If the parcel has not been handed to the carrier — and, for an engraved piece, if the laser has not run — we will change or cancel it and refund you in full.`],
      ['Is everything on the site actually in stock?', 'Yes. We only list what we can ship. Every product page says &ldquo;In stock&rdquo; because that is the only state we list.'],
    ],
  },
  {
    group: 'Shipping',
    items: [
      ['How quickly do you ship?', `We ship your order within ${T.processing} of receiving it, and engraved pieces add two business days. That is a commitment, not an average. After it ships, standard delivery takes ${T.standardDelivery} and expedited takes ${T.expeditedDelivery} — those are the carrier&rsquo;s transit times.`],
      ['What does shipping cost?', `Standard shipping is ${T.standardShipping}, and it is free on orders over ${T.freeShippingOver}. Expedited shipping is ${T.expeditedPrice} on any order. There are no handling fees, no gift-wrap fees and no surcharges. Sales tax is calculated at checkout from your delivery address.`],
      ['Will it arrive in time for a birthday?', `Add the ${T.processing} we take to pack it — two days more if it is engraved — to the carrier's transit time, and order with a few days in hand. If it is tight, call us and we will tell you honestly whether it will make it rather than guessing.`],
      ['What if my order is going to be late?', `If we find we cannot ship within ${T.processing} we contact you before that deadline, give you a definite new shipping date, and offer you the choice of waiting or cancelling for a full refund. If we cannot give a firm date, or the delay is more than 30 days, we cancel and refund unless you tell us otherwise. This is required by the Federal Trade Commission&rsquo;s Mail, Internet, or Telephone Order Merchandise Rule and we follow it.`],
    ],
  },
  {
    group: 'Returns',
    items: [
      ['How long do I have to return something?', `${T.returnWindow} from the day it is delivered, unused and in its original packaging. That is deliberately long, because a present bought in October may not be opened until December. Email ${B.email} for a return number before you send anything back.`],
      ['What cannot be returned?', 'Engraved pieces, journals and albums that have been written in, and candles that have been lit. Nothing else is excluded. The reasoning for each is in the <a href="/policies/refund-returns.html">Refund &amp; Return Policy</a>.'],
      ['Who pays the return shipping?', 'If you have changed your mind, you do. If the item arrived damaged, faulty, or is not what you ordered, we do — we send a prepaid label and you are not out of pocket.'],
      ['When do I get my money back?', `We inspect returns within ${T.inspectionTime} of arrival and refund to your original payment method within ${T.refundTime} of that. If you paid by cash equivalent we refund within seven working days, as the FTC rule requires.`],
    ],
  },
  {
    group: 'Payments, privacy and accessibility',
    items: [
      ['Is the checkout working right now?', `Not yet. This site is complete but no payment processor has been connected, so the checkout stops at the order review and tells you so plainly. We will not show a fake confirmation. Until it is live, order by phone on ${B.phone}.`],
      ['Will I be charged anything extra?', 'No. The price on the product page is the price charged. Shipping is shown in the cart before you go to checkout, and sales tax is calculated at the payment step from your delivery address. There is nothing else.'],
      ['What do you do with my details?', 'We use your name, address and email to fulfil the order and to contact you about it — including the engraving proof. We do not sell or share personal information. Order records are kept for seven years for tax purposes. Full detail, including your California rights, is in the <a href="/policies/privacy.html">Privacy Policy</a>.'],
      ['Is this site built for people who find small type hard?', 'That is the point of it. Body text is 18px with a 1.65 line height, contrast meets WCAG 2.1 AA, every button is at least 44 pixels tall with a printed word on it, and the whole site works from the keyboard with a visible focus outline. The cards tilt very slightly; if your system asks for reduced motion, they sit straight.'],
      ['Something on the site is still hard to use. What now?', `Tell us. Email ${B.email} with &ldquo;Accessibility&rdquo; in the subject or call ${B.phone}. We reply within five business days and we will take the order over the phone in the meantime. See the <a href="/policies/accessibility.html">Accessibility Statement</a>.`],
    ],
  },
];

export function faq() {
  const body = FAQ.map(
    (g, gi) => `${ruled(g.group)}
${g.items
  .map(
    ([q, a], i) => `<div class="hh-acc">
  <h3><button class="hh-acc__btn" type="button" aria-expanded="${gi === 0 && i === 0}" aria-controls="acc-${gi}-${i}" id="accbtn-${gi}-${i}">
    <span>${q}</span><span class="hh-acc__sign" aria-hidden="true">${gi === 0 && i === 0 ? '−' : '+'}</span>
  </button></h3>
  <div class="hh-acc__panel" id="acc-${gi}-${i}" role="region" aria-labelledby="accbtn-${gi}-${i}"${gi === 0 && i === 0 ? '' : ' hidden'}>
    <p>${a}</p>
  </div>
</div>`,
  )
  .join('')}`,
  ).join('\n');

  return {
    file: 'faq.html',
    path: '/faq.html',
    current: '/faq.html',
    title: 'Frequently asked questions',
    description: `Answers on choosing a present, engraving, orders, shipping (${T.processing} to ship), returns (${T.returnWindow}), payments and accessibility at Heirloom Hollow.`,
    body: `
<section class="section">
  <div class="wrap--narrow">
    <h1>Frequently asked questions</h1>
    <p class="lede">If your question is not here, email <a href="mailto:${B.email}">${B.email}</a> or
    call <a href="${B.phoneHref}">${B.phone}</a> during ${esc(B.hours)}.</p>
    ${body}
  </div>
</section>
`,
  };
}

/* ---------------------------------------------------------------- credits */

export function credits(creditRows) {
  const rows = creditRows
    .map(
      (c) => `<tr>
  <th scope="row" class="hh-mono">${esc(c.file)}</th>
  <td>${c.source ? `<a href="${esc(c.source)}" rel="noopener">${esc(c.title)}</a>` : esc(c.title)}</td>
  <td>${esc(c.creator)}</td>
  <td>${esc(c.license)}</td>
</tr>`,
    )
    .join('');

  return {
    file: 'credits.html',
    path: '/credits.html',
    current: '',
    title: 'Photo credits',
    description: 'Credits and licence details for every photograph used on Heirloom Hollow Gifts, with a link to each original source.',
    body: `
<section class="section">
  <div class="wrap--narrow">
    <h1>Photo credits</h1>
    <p class="lede">Every image on this site is stored on our own server — we do not load pictures from
    anyone else&rsquo;s. The photographs below are used under Creative Commons licences, which ask that
    the photographer is credited. This page is that credit.</p>

    <div class="hh-note">
      <p><strong>These are illustrative photographs, not our own product shots.</strong> They show the
      kind of item described, not the exact piece we will send — and the engraved box in particular
      will carry your words, not the ones in the photograph. If the precise finish matters to you,
      call <a href="${B.phoneHref}">${B.phone}</a> during ${esc(B.hours)} and we will describe it.</p>
    </div>

    <div class="table-scroll">
      <table>
        <caption class="visually-hidden">Photograph credits and licences</caption>
        <thead><tr><th scope="col">File</th><th scope="col">Photograph</th><th scope="col">By</th><th scope="col">Licence</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>

    ${ruled('About the licences')}
    <p><strong>CC BY</strong> allows reuse, including commercially, provided the creator is credited.
    <strong>CC BY-SA</strong> adds that adaptations must be shared under the same licence; the crops and
    re-encodings on this site are adaptations and are offered under CC BY-SA 4.0 accordingly.
    <strong>CC0</strong> and <strong>Public domain</strong> carry no conditions, and we credit them
    anyway.</p>
    <p>Images were sourced through <a href="https://commons.wikimedia.org/" rel="noopener">Wikimedia
    Commons</a> and <a href="https://openverse.org/" rel="noopener">Openverse</a>, filtered to licences
    that permit commercial use. Each was downloaded, fitted to a 4:3 frame, resized to at most 1200
    pixels wide and re-encoded as WebP.</p>

    ${ruled('Questions about an image')}
    <p>If you are the photographer of anything here and would like the credit corrected or the image
    removed, email <a href="mailto:${B.email}">${B.email}</a> and we will act the same working day.</p>

    <p class="hh-more"><a class="hh-btn" href="/shop.html">Back to the shop</a></p>
  </div>
</section>
`,
  };
}

/* -------------------------------------------------------------------- 404 */

export function notFound() {
  return {
    file: '404.html',
    path: '/404.html',
    current: '',
    title: 'Page not found',
    description: 'That page does not exist on Heirloom Hollow Gifts. Here are the places you might have been looking for.',
    body: `
<section class="section hh-404">
  <div class="wrap--narrow">
    <h1>We could not find that page</h1>
    <p class="lede">The address may have been mistyped, or the page may have moved. Nothing is broken
    on your end.</p>
    <ul class="hh-404__links">
      <li><a class="hh-btn hh-btn--gold" href="/index.html">Home</a></li>
      <li><a class="hh-btn" href="/shop.html">Shop</a></li>
      <li><a class="hh-btn" href="/faq.html">FAQ</a></li>
      <li><a class="hh-btn" href="/contact.html">Contact</a></li>
    </ul>
    <p>If you followed a link from somewhere on this site, please tell us where it was — email
    <a href="mailto:${B.email}">${B.email}</a> or call <a href="${B.phoneHref}">${B.phone}</a> during
    ${esc(B.hours)} — and we will fix it.</p>
  </div>
</section>
`,
  };
}
