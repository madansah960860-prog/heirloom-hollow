/**
 * SINGLE SOURCE OF TRUTH — Heirloom Hollow Gifts
 *
 * SAMPLE DATA — replace with real, verifiable business details before launching
 * or running ads. See ../../BUSINESS_INFO.md for the full list and launch blockers.
 *
 * All 26 generated pages interpolate from this file. Nothing here is retyped:
 * change a value, re-run `node _generator/build.mjs`, and the whole site updates.
 */

export const business = {
  brandName: 'Heirloom Hollow Gifts',
  shortName: 'Heirloom Hollow',
  legalName: 'Heirloom Hollow Gifts LLC',
  tagline: 'Presents that keep something',
  descriptor: 'Gifts, memories and nostalgia',

  address: {
    line1: '88 Harbor Lantern Way, Suite 12',
    city: 'Portland',
    state: 'ME',
    zip: '04101',
    country: 'United States',
  },
  addressOneLine: '88 Harbor Lantern Way, Suite 12, Portland, ME 04101',

  email: 'hello@heirloomhollow.com',
  phone: '(207) 555-0155',
  phoneHref: 'tel:+12075550155',
  hours: 'Mon–Fri, 9:00 AM–5:00 PM ET',
  responseTime: 'We answer email within one business day.',

  effectiveDate: 'September 3, 2026',
  governingState: 'Maine',
  governingVenue: 'Cumberland County, Maine',
  siteUrl: 'https://www.heirloomhollow.com',
};

export const terms = {
  returnWindow: '45 days',
  returnWindowDays: 45,
  freeShippingOver: '$55',
  standardShipping: '$5.95',
  processing: '1–2 business days',
  standardDelivery: '4–6 business days',
  expeditedPrice: '$13.95',
  expeditedDelivery: '2–3 business days',
  carriers: 'USPS and UPS',
  inspectionTime: '2 business days',
  refundTime: '5–10 business days',
  currencySymbol: '$',
};

export const shippingMethods = [
  {
    id: 'standard',
    label: 'Standard shipping',
    price: 5.95,
    priceLabel: terms.standardShipping,
    estimate: terms.standardDelivery,
    note: `Free on orders over ${terms.freeShippingOver}.`,
  },
  {
    id: 'expedited',
    label: 'Expedited shipping',
    price: 13.95,
    priceLabel: terms.expeditedPrice,
    estimate: terms.expeditedDelivery,
    note: 'Flat rate on every order.',
  },
];

export const freeShippingThreshold = 55;

export const shippingSummary =
  `We ship your order within ${terms.processing} of receiving it. ` +
  `Standard shipping is ${terms.standardShipping}, free on orders over ${terms.freeShippingOver}, ` +
  `and arrives in ${terms.standardDelivery} after it ships.`;

export const returnSummary =
  `Return anything unused in its original packaging within ${terms.returnWindow} of delivery. ` +
  `We refund to your original payment method within ${terms.refundTime} of inspecting the return.`;

export const policyDetail = {
  excludedDestinations: [
    'Outside the United States.',
    'To APO, FPO or DPO military addresses.',
    'To US territories including Puerto Rico, Guam and the US Virgin Islands.',
    'Everything we sell fits a PO Box except the keepsake box and the framed family tree print, which need a street address.',
  ],
  nonReturnable: [
    {
      title: 'Anything engraved or personalised',
      detail:
        'because we made it to your words and nobody else can use it. We email a proof of the engraving before we cut it, and nothing is engraved until you reply — please read that proof carefully, because it is the last point at which a spelling can be changed.',
    },
    {
      title: 'Journals and albums that have been written in',
      detail:
        'even on one page. Leafing through one is fine; a filled first page is not.',
    },
    {
      title: 'Candles that have been lit',
      detail:
        'for the obvious reason. Unwrap them, smell them, change your mind — just do not put a match to one until you are sure.',
    },
  ],
  cartKey: 'heirloom-hollow-cart',
  cookieKey: 'heirloom-hollow-cookie',
};
