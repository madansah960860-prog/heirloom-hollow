/**
 * Page shell and components for Heirloom Hollow Gifts.
 *
 * Design language, and why each choice is here:
 *   header  — three centred tiers: a Cormorant wordmark, a small-caps tagline
 *             beneath it, and a centred nav on a thin plum rule. The cart sits
 *             at the top right. No other store centres its header.
 *   hero    — a scrapbook page: a paper panel with a polaroid rotated −3°,
 *             gold corner brackets, and an italic Cormorant headline.
 *   card    — a polaroid: white frame, square photo, deep bottom band, and the
 *             cards tilt alternately, straightening on hover AND focus.
 *   footer  — plum, three columns separated by gold hairlines, stitched top.
 *   button  — a pill with a 1.5px gold border and a small-caps letterspaced label.
 *
 * The tilt is the only decorative motion in this store and it is a static
 * transform, not an animation; `prefers-reduced-motion` removes it entirely.
 */

import { business, terms } from '../data/business.js';
import { categories } from '../data/products.js';

export const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

export const money = (n) => `${terms.currencySymbol}${Number(n).toFixed(2)}`;

const NAV = [
  { href: '/index.html', label: 'Home' },
  { href: '/shop.html', label: 'Shop' },
  { href: '/about.html', label: 'About' },
  { href: '/faq.html', label: 'FAQ' },
  { href: '/contact.html', label: 'Contact' },
];

export const POLICY_LINKS = [
  { href: '/policies/shipping.html', label: 'Shipping Policy' },
  { href: '/policies/refund-returns.html', label: 'Refund &amp; Return Policy' },
  { href: '/policies/privacy.html', label: 'Privacy Policy' },
  { href: '/policies/terms.html', label: 'Terms of Service' },
  { href: '/policies/accessibility.html', label: 'Accessibility Statement' },
];

/** Gold photo-corner brackets, the store's signature mark. */
export function corners() {
  return `<span class="hh-corners" aria-hidden="true">
  <span class="hh-corners__tl"></span><span class="hh-corners__tr"></span>
  <span class="hh-corners__bl"></span><span class="hh-corners__br"></span>
</span>`;
}

function head({ title, description, path, ogImage = '/assets/images/hero.webp' }) {
  const fullTitle = title.includes(business.shortName)
    ? title
    : `${title} — ${business.brandName}`;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${business.siteUrl}${path}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(business.brandName)}">
<meta property="og:title" content="${esc(fullTitle)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${business.siteUrl}${path}">
<meta property="og:image" content="${business.siteUrl}${ogImage}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(fullTitle)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="theme-color" content="#452742">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style"
  href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Mulish:wght@400;600;700&display=swap"
  onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Mulish:wght@400;600;700&display=swap"></noscript>
<link rel="stylesheet" href="/assets/css/style.css">
</head>
<body>
<a class="skip-link" href="#main">Skip to main content</a>`;
}

function header(current) {
  const item = (n) =>
    `<li><a class="hh-nav__link${current === n.href ? ' is-current' : ''}"${
      current === n.href ? ' aria-current="page"' : ''
    } href="${n.href}">${n.label}</a></li>`;

  return `<header class="hh-head hh-head--stacked">
  <div class="hh-head__strip">
    <div class="wrap hh-head__strip-inner">
      <p>Free standard shipping on US orders over ${terms.freeShippingOver} · ${terms.returnWindow} returns</p>
      <p><a href="${business.phoneHref}">${business.phone}</a> · ${business.hours}</p>
    </div>
  </div>

  <div class="wrap hh-head__mark">
    <a class="hh-logo" href="/index.html">
      <span class="hh-logo__name">Heirloom Hollow</span>
      <span class="hh-logo__sub">Gifts &middot; Memories &middot; Keepsakes</span>
    </a>
    <a class="hh-cart" href="/cart.html">Cart <span data-cart-count aria-live="polite">0</span></a>
    <button class="hh-menu" type="button" aria-expanded="false" aria-controls="sitenav">
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" fill="none"/></svg>
      <span class="hh-menu__label">Menu</span>
    </button>
  </div>

  <nav class="hh-nav" id="sitenav" aria-label="Main">
    <ul class="wrap hh-nav__list">${NAV.map(item).join('')}</ul>
  </nav>
</header>`;
}

function footer() {
  const shopLinks = categories
    .map((c) => `<li><a href="/shop.html?category=${c.id}">${esc(c.name)}</a></li>`)
    .join('');

  return `<footer class="hh-footer">
  <div class="wrap hh-footer__cols">
    <div>
      <p class="hh-footer__name">${esc(business.brandName)}</p>
      <p class="hh-footer__tag">${esc(business.tagline)}</p>
      <address>
        <strong>${esc(business.legalName)}</strong><br>
        ${esc(business.address.line1)}<br>
        ${esc(business.address.city)}, ${business.address.state} ${business.address.zip}<br>
        <a href="mailto:${business.email}">${business.email}</a><br>
        <a href="${business.phoneHref}">${business.phone}</a><br>
        ${esc(business.hours)}
      </address>
    </div>

    <div>
      <h2>Shop</h2>
      <ul>
        <li><a href="/shop.html">All products</a></li>
        ${shopLinks}
        <li><a href="/cart.html">Your cart</a></li>
      </ul>
    </div>

    <div>
      <h2>Help &amp; legal</h2>
      <ul>
        <li><a href="/contact.html">Contact us</a></li>
        <li><a href="/faq.html">Frequently asked questions</a></li>
        <li><a href="/about.html">About Heirloom Hollow</a></li>
        ${POLICY_LINKS.map((p) => `<li><a href="${p.href}">${p.label}</a></li>`).join('')}
        <li><a href="/policies/privacy.html#do-not-sell">Do Not Sell or Share My Personal Information</a></li>
        <li><a href="/credits.html">Photo credits</a></li>
      </ul>
    </div>
  </div>

  <div class="wrap hh-footer__legal">
    <p>© 2026 ${esc(business.legalName)}. Prices in US dollars. We ship within the United States only.
       Policies effective ${esc(business.effectiveDate)}.
       Product photographs are used under Creative Commons licences —
       <a href="/credits.html">see the photo credits</a>.</p>
  </div>
</footer>`;
}

function cookieNotice() {
  return `<div class="hh-cookie" role="region" aria-label="Cookie notice" data-cookie hidden>
  <p>We use a small number of cookies to keep your cart and to count visits. We do not use advertising
     cookies and we do not sell or share personal information. Read the
     <a href="/policies/privacy.html">Privacy Policy</a>.</p>
  <button class="hh-btn hh-btn--small" type="button" data-cookie-dismiss>Got it</button>
</div>`;
}

export function page({ title, description, path, body, current = '', ogImage, jsonLd }) {
  return `${head({ title, description, path, ogImage })}
${header(current)}
<main id="main">
${body}
</main>
${footer()}
${cookieNotice()}
${jsonLd ? `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>` : ''}
<script src="/assets/js/main.js" defer></script>
</body>
</html>
`;
}

export function breadcrumb(trail) {
  const items = trail
    .map((t, i) =>
      i === trail.length - 1
        ? `<li aria-current="page">${esc(t.label)}</li>`
        : `<li><a href="${t.href}">${esc(t.label)}</a></li>`,
    )
    .join('');
  return `<div class="wrap"><nav class="hh-crumb" aria-label="Breadcrumb"><ol>${items}</ol></nav></div>`;
}

/* --------------------------------------------------------------- components */

export function productImage(file, alt, { sizes, eager = false, className = '' } = {}) {
  const base = file.replace(/\.webp$/, '');
  return `<img${className ? ` class="${className}"` : ''}
  src="/assets/images/${base}.webp"
  srcset="/assets/images/${base}-600.webp 600w, /assets/images/${base}.webp 1200w"
  sizes="${sizes}"
  alt="${esc(alt)}" width="1200" height="900"
  loading="${eager ? 'eager' : 'lazy'}" decoding="async"${eager ? ' fetchpriority="high"' : ''}>`;
}

/** Polaroid card. Tilt alternates by index and straightens on hover and focus. */
export function card(product, { eager = false, index = 0 } = {}) {
  const cat = categories.find((c) => c.id === product.category);
  const tilt = index % 2 === 0 ? 'hh-card--tiltl' : 'hh-card--tiltr';
  return `<li class="hh-card ${tilt}">
  <a class="hh-card__photo" href="/products/${product.slug}.html" tabindex="-1" aria-hidden="true">
    ${productImage(product.image, product.alt, {
      sizes: '(max-width: 620px) 82vw, (max-width: 1020px) 42vw, 260px',
      eager,
    })}
  </a>
  <div class="hh-card__caption">
    <p class="hh-card__cat">${esc(cat.name)}</p>
    <h3 class="hh-card__name"><a href="/products/${product.slug}.html">${esc(product.name)}</a></h3>
    <p class="hh-card__summary">${esc(product.summary)}</p>
    <p class="hh-card__meta">
      <span class="hh-card__price">${money(product.price)}</span>
      <span class="hh-card__stock">In stock</span>
    </p>
    <button class="hh-btn hh-btn--block" type="button" data-add="${product.sku}">
      Add to cart<span class="visually-hidden">: ${esc(product.name)}</span>
    </button>
  </div>
</li>`;
}

export function cardGrid(products, { eagerCount = 0 } = {}) {
  return `<ul class="hh-grid">${products
    .map((p, i) => card(p, { eager: i < eagerCount, index: i }))
    .join('\n')}</ul>`;
}

/** A centred heading with a gold rule either side. */
export function ruled(text, { level = 2 } = {}) {
  return `<h${level} class="hh-ruled"><span>${esc(text)}</span></h${level}>`;
}

/** The four honest reasons, repeated verbatim from the policies. */
export function promises() {
  const items = [
    [`Posted within ${terms.processing}`, `Standard shipping is ${terms.standardShipping} and free over ${terms.freeShippingOver}. It arrives in ${terms.standardDelivery} after it ships.`],
    [`${terms.returnWindow} to change your mind`, `Unused and in its packaging, send it back within ${terms.returnWindow} of delivery. Refunds land in ${terms.refundTime} after we inspect it. Engraved pieces are the exception — we email a proof first.`],
    ['A person on the telephone', `${business.phone}, ${business.hours}. If you would rather order by phone than online, that is fine with us.`],
    ['Nothing pretends to be old', 'The radio is a new radio in a wooden case. The prints are new prints. We sell things made to be kept, not antiques, and we never describe them as anything else.'],
  ];
  return `<ul class="hh-promises">${items
    .map(([t, b]) => `<li><h3>${esc(t)}</h3><p>${esc(b)}</p></li>`)
    .join('')}</ul>`;
}

/**
 * Newsletter signup. CAN-SPAM shapes it: the consent text names the sender, the
 * content, the frequency and the unsubscribe route before anything is typed; email
 * is the only field; nothing is pre-ticked. No mailing provider is connected, and
 * the form says so rather than pretending a subscription happened.
 */
export function newsletter() {
  return `<section class="hh-news" aria-labelledby="news-h">
  <div class="wrap hh-news__inner">
    <h2 id="news-h">A letter from the Hollow</h2>
    <p>One email a month: what has come in, one question worth asking somebody older than you,
       and nothing else.</p>
    <form class="hh-news__form" data-newsletter novalidate>
      <div class="hh-field">
        <label for="news-email">Your email address</label>
        <input id="news-email" name="email" type="email" autocomplete="email"
               aria-describedby="news-consent" required>
      </div>
      <button class="hh-btn hh-btn--gold" type="submit">Sign up</button>
      <p class="hh-consent">
        <label>
          <input type="checkbox" name="consent" data-consent>
          <span id="news-consent">Yes, ${esc(business.legalName)} may email me its monthly newsletter
          about products and shop news. I can unsubscribe from the link in any message or by emailing
          ${business.email}, and my address will not be sold or shared. See the
          <a href="/policies/privacy.html">Privacy Policy</a>.</span>
        </label>
      </p>
      <p class="hh-formnote" data-newsletter-note role="status"></p>
    </form>
  </div>
</section>`;
}
