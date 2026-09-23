/**
 * Product catalogue — Heirloom Hollow Gifts.
 *
 * The price here is the price charged. Copy describes size, materials, page
 * counts and what is engraved where. Nothing here claims a memory, cognitive or
 * therapeutic benefit: a memory journal is a book with prompts and wide ruling,
 * and that is exactly how it is sold. See POLICY_RESEARCH.md rules B14, B15.
 */

export const categories = [
  {
    id: 'write-it-down',
    name: 'Write It Down',
    blurb: 'Journals, recipe keepers and letter sets with room to write.',
    image: 'cat-write.webp',
    alt: 'A person sitting at a desk writing in a notebook.',
  },
  {
    id: 'keep-it-safe',
    name: 'Keep It Safe',
    blurb: 'Boxes and albums for the things that should not live in a drawer.',
    image: 'cat-keep.webp',
    alt: 'The corner of a wooden chest, its lid closed over metal fittings.',
  },
  {
    id: 'on-the-wall',
    name: 'On the Wall',
    blurb: 'Prints, frames and a calendar with squares you can write in.',
    image: 'cat-wall.webp',
    alt: 'A small framed photograph hanging on a plain painted wall.',
  },
  {
    id: 'small-comforts',
    name: 'Small Comforts',
    blurb: 'A radio, a magnifier, candles and cards for the afternoon.',
    image: 'cat-comfort.webp',
    alt: 'A single lit candle burning against a dark background.',
  },
];

export const products = [
  {
    sku: 'HHG-601',
    slug: 'tell-me-your-story-memory-journal',
    name: 'Tell Me Your Story Memory Journal',
    price: 32.0,
    category: 'write-it-down',
    image: 'hhg-601.webp',
    alt: 'An open notebook showing two blank pages.',
    summary: 'A hundred and twenty questions, one to a page, with room to answer at 10 mm ruling.',
    description:
      'A hardback book of questions rather than blank pages: 120 prompts, one to a page, arranged ' +
      'roughly by decade from childhood onwards. Each question is set in 16 pt at the top, and the ' +
      'rest of the page is ruled at 10 mm — considerably wider than a standard notebook, which ' +
      'matters if your handwriting has got larger. It is sewn so it lies flat.',
    features: [
      '120 questions, one per page, arranged by decade',
      'Questions set in 16 pt; answer space ruled at 10 mm',
      'Sewn binding — lies flat on a table or a knee',
      '120 gsm cream paper; no ghosting with a fountain pen',
      'Ribbon marker and a pocket in the back cover',
      'Blank pages at the end for anything the questions missed',
    ],
    specs: {
      'Pages': '272 (120 prompt pages, 24 blank)',
      'Ruling': '10 mm',
      'Question type size': '16 pt',
      'Size': '7.5 × 9.5 in (190 × 240 mm)',
      'Paper': '120 gsm cream, uncoated',
      'Binding': 'Sewn hardback, lies flat',
      'Weight': '1.9 lb (862 g)',
    },
    inBox: ['Memory journal', 'Ribbon marker (fitted)', 'A card of suggestions for asking the questions'],
  },
  {
    sku: 'HHG-602',
    slug: 'parlour-retro-style-tabletop-radio',
    name: 'Parlour Retro-Style Tabletop Radio',
    price: 89.0,
    category: 'small-comforts',
    image: 'hhg-602.webp',
    alt: 'The lit dial of a wooden-cased tabletop radio, printed with station names.',
    summary: 'Two knobs, a lit dial and a speaker you can hear from the kitchen.',
    description:
      'A wooden-cased FM and AM radio with exactly two controls: volume on the left, tuning on the ' +
      'right, both 1.6 inches across with a positive detent. The dial is backlit and marked in 1 MHz ' +
      'steps you can read across a room. There is a headphone socket and an aux input, and it runs ' +
      'from the mains or four D cells.',
    features: [
      'Two knobs only — volume and tuning, both 1.6 in across',
      'Backlit dial marked in 1 MHz steps',
      'FM and AM, with a telescopic aerial',
      '3.5 in full-range speaker, 5 W',
      'Headphone socket and 3.5 mm aux input',
      'Mains or 4 × D cells (about 80 hours)',
    ],
    specs: {
      'Bands': 'FM 87.5–108 MHz, AM 522–1710 kHz',
      'Speaker': '3.5 in full range, 5 W',
      'Knob diameter': '1.6 in (41 mm)',
      'Dimensions': '10.5 × 6 × 5.5 in (27 × 15 × 14 cm)',
      'Weight': '3.3 lb (1.5 kg) without batteries',
      'Power': 'Mains adapter included, or 4 × D cells (not included)',
      'Case': 'MDF with a walnut veneer, fabric grille',
    },
    inBox: ['Radio', 'Mains adapter', 'Guide in 16 pt type'],
  },
  {
    sku: 'HHG-603',
    slug: 'hollow-lane-10-inch-digital-photo-frame',
    name: 'Hollow Lane 10-inch Digital Photo Frame',
    price: 119.0,
    category: 'on-the-wall',
    image: 'hhg-603.webp',
    alt: 'A digital photo frame standing upright, showing a photograph on its screen.',
    summary: 'Load it from a USB stick, set it going, and never touch it again.',
    description:
      'A 10-inch frame that plays photographs from a USB stick or SD card — no account, no app, no ' +
      'wi-fi to configure and nothing to sign into. Put the pictures on the stick, push it in, and ' +
      'it starts. One button on the back changes how long each picture stays up; there is nothing ' +
      'else to set. The mat and surround are real wood, not printed plastic.',
    features: [
      'Plays from a USB stick or SD card — no account, no app, no wi-fi',
      '10.1 in IPS screen, 1280 × 800',
      'One button sets the interval; nothing else to configure',
      'Real wood surround with a removable mat',
      'Auto-rotates portrait and landscape photographs',
      'Stands on the supplied easel or hangs on the wall',
    ],
    specs: {
      'Screen': '10.1 in IPS, 1280 × 800',
      'Media': 'USB-A stick or SD card, up to 128 GB',
      'Formats': 'JPEG, PNG, and MP4 video with sound',
      'Frame size': '12 × 9 in (30 × 23 cm) overall',
      'Weight': '2.1 lb (953 g)',
      'Power': 'Mains adapter, 2 m lead',
      'Materials': 'Ash surround, card mat, IPS panel',
    },
    inBox: ['Photo frame', 'Mains adapter', 'Easel stand', 'Removable mat', 'Guide in 16 pt type'],
  },
  {
    sku: 'HHG-604',
    slug: 'engraved-keepsake-box-walnut',
    name: 'Engraved Keepsake Box, Walnut',
    price: 68.0,
    category: 'keep-it-safe',
    image: 'hhg-604.webp',
    alt: 'A brown presentation box opened flat, lined in cream.',
    summary: 'Solid walnut, felt-lined, with up to three lines engraved on the lid.',
    description:
      'A solid walnut box with a brass-hinged lid that stays where you put it, and a felt-lined ' +
      'interior deep enough for letters, photographs or a christening cup. Up to three lines are ' +
      'laser-engraved on the lid — we email you a proof and cut nothing until you reply. The finish ' +
      'is hard-wax oil, so a mark can be rubbed out rather than being permanent.',
    features: [
      'Solid walnut, not veneer',
      'Up to three engraved lines, 28 characters each',
      'We email a proof and engrave nothing until you approve it',
      'Brass quadrant hinge — the lid stays open',
      'Felt-lined, 3 in deep inside',
      'Hard-wax oil finish; marks can be rubbed out',
    ],
    specs: {
      'External size': '10 × 7 × 4 in (25 × 18 × 10 cm)',
      'Internal depth': '3 in (7.6 cm)',
      'Engraving': 'Up to 3 lines, 28 characters per line',
      'Weight': '2.6 lb (1.2 kg)',
      'Materials': 'Solid American black walnut, brass hinge, wool felt lining',
      'Finish': 'Hard-wax oil',
      'Lead time': 'Engraving adds 2 business days before shipping',
    },
    inBox: ['Keepsake box', 'Care card', 'A cloth for the oil finish'],
    note:
      'Engraved items cannot be returned unless they are faulty, because we make them to your words. ' +
      'We email a proof of the exact text before anything is cut and wait for your reply — please ' +
      'read it carefully, as that is the last point at which a spelling can be corrected.',
  },
  {
    sku: 'HHG-605',
    slug: 'large-print-wall-calendar-12-month',
    name: 'Large-Print Wall Calendar, 12 Month',
    price: 24.0,
    category: 'on-the-wall',
    image: 'hhg-605.webp',
    alt: 'A round brass perpetual calendar marked with rings of numbered dates.',
    summary: 'Date squares 2.4 inches across, with room to actually write an appointment in one.',
    description:
      'Most wall calendars give you half an inch to record a hospital appointment. This one is 17 ' +
      'inches wide with 2.4-inch squares and the date numeral set in 28 pt in the corner, leaving ' +
      'the rest of the square empty for writing. The paper is uncoated so a ballpoint does not skid, ' +
      'and it hangs on a single nail.',
    features: [
      '2.4 in date squares — room to write in',
      'Date numerals set in 28 pt',
      '17 in wide when hanging',
      'Uncoated paper; takes ballpoint and pencil',
      'US federal holidays marked',
      'Single hanging hole; no hook needed',
    ],
    specs: {
      'Hanging size': '17 × 24 in (43 × 61 cm) open',
      'Square size': '2.4 × 2.2 in',
      'Date type size': '28 pt',
      'Months': '12, January to December',
      'Paper': '150 gsm uncoated',
      'Binding': 'Wire-o with a hanging hole',
    },
    inBox: ['Wall calendar', 'A sheet of blank stickers for birthdays'],
  },
  {
    sku: 'HHG-606',
    slug: 'family-tree-print-16x20',
    name: 'Family Tree Print, 16 × 20 inch',
    price: 46.0,
    category: 'on-the-wall',
    image: 'hhg-606.webp',
    alt: 'A printed genealogical chart branching across several generations of one family.',
    summary: 'Four generations of blank spaces, printed on archival paper for you to fill in.',
    description:
      'A drawn tree with 31 blank name plates across four generations, printed on 310 gsm archival ' +
      'cotton rag. The plates are sized for a fine-liner and the paper is unsized on the front so ' +
      'ink does not feather. It comes rolled in a tube, unframed, and it is printed with pigment ' +
      'inks rated to 100 years without fading.',
    features: [
      '31 blank name plates across four generations',
      '310 gsm archival cotton rag paper',
      'Pigment inks, rated 100 years lightfast',
      'Plates sized for a fine-liner; ink does not feather',
      'Ships rolled in a tube, unframed',
      'Fits a standard 16 × 20 in frame',
    ],
    specs: {
      'Print size': '16 × 20 in (41 × 51 cm)',
      'Generations': '4, with 31 name plates',
      'Paper': '310 gsm cotton rag, archival',
      'Inks': 'Pigment, 100-year lightfastness rating',
      'Supplied': 'Rolled in a tube, unframed',
      'Weight': '7 oz (198 g)',
    },
    inBox: ['Family tree print', 'Postal tube', 'A card on filling it in without mistakes'],
  },
  {
    sku: 'HHG-607',
    slug: 'linen-photo-album-200-pockets',
    name: 'Linen Photo Album, 200 Pockets',
    price: 42.0,
    category: 'keep-it-safe',
    image: 'hhg-607.webp',
    alt: 'A page from an old photograph album with prints held in mounted corners.',
    summary: 'Two hundred pockets for 6 × 4 prints, with a writing strip beside every one.',
    description:
      'A linen-covered album with 200 pockets sized for standard 6 × 4 prints, and — the part most ' +
      'albums leave out — a white writing strip beside every pocket, so the who and the when live ' +
      'with the picture. The pockets are archival polypropylene rather than PVC, which is what ' +
      'yellows prints over time.',
    features: [
      '200 pockets for 6 × 4 in prints',
      'A writing strip beside every pocket',
      'Archival polypropylene pockets, not PVC',
      'Linen cover with a window for a title photograph',
      'Lies flat when open',
      'Spine label for the shelf',
    ],
    specs: {
      'Capacity': '200 photographs at 6 × 4 in',
      'Pockets': 'Archival polypropylene, acid-free',
      'Album size': '9 × 7 × 2.4 in (23 × 18 × 6 cm)',
      'Cover': 'Linen over board, with a 4 × 3 in window',
      'Weight': '2.4 lb (1.1 kg)',
      'Colour': 'Dusty rose linen',
    },
    inBox: ['Photo album', 'Spine label', 'A pencil suitable for the writing strips'],
  },
  {
    sku: 'HHG-608',
    slug: 'grandchildren-recipe-keeper-book',
    name: 'Grandchildren Recipe Keeper Book',
    price: 29.0,
    category: 'write-it-down',
    image: 'hhg-608.webp',
    alt: 'An open recipe book filled in by hand, both pages covered in writing.',
    summary: 'Sixty recipe pages with a printed layout, and a pocket for the ones on cards.',
    description:
      'Sixty pages laid out as recipes — title, serves, ingredients down the left, method down the ' +
      'right, and a note line at the bottom for who it came from. Everything is ruled at 8 mm and ' +
      'the headings are printed, so there is no blank-page problem. Two pockets at the back hold the ' +
      'recipes that are already on cards.',
    features: [
      '60 printed recipe layouts',
      'Ruled at 8 mm with printed headings',
      'A "who this came from" line on every page',
      'Two pockets at the back for existing recipe cards',
      'Wipe-clean laminated cover',
      'Lies flat; wire-o bound',
    ],
    specs: {
      'Pages': '144 (60 recipe layouts, 12 index)',
      'Ruling': '8 mm',
      'Size': '8.3 × 9.8 in (210 × 250 mm)',
      'Binding': 'Wire-o, lies flat',
      'Cover': 'Laminated board, wipe-clean',
      'Weight': '1.3 lb (590 g)',
    },
    inBox: ['Recipe keeper', 'A sheet of section tabs'],
  },
  {
    sku: 'HHG-609',
    slug: 'pressed-flower-letter-set',
    name: 'Pressed Flower Letter Set',
    price: 22.0,
    category: 'write-it-down',
    image: 'hhg-609.webp',
    alt: 'A pressed and dried flower lying on the open page of a book.',
    summary: 'Thirty sheets, twenty envelopes and a set of seals, in a box that fits a drawer.',
    description:
      'Thirty sheets of 120 gsm writing paper with a pressed-flower border, twenty lined envelopes ' +
      'and a sheet of wax-look seals, in a rigid box. The paper is ruled faintly at 9 mm — visible ' +
      'enough to write straight along, faint enough not to dominate the page — and it takes a ' +
      'fountain pen without bleeding through.',
    features: [
      '30 sheets, 20 envelopes, 24 seals',
      'Faint 9 mm ruling — write straight without heavy lines',
      '120 gsm paper; no bleed-through with a fountain pen',
      'Envelopes lined in tissue',
      'Rigid box that fits a desk drawer',
      'Refill sheets available',
    ],
    specs: {
      'Sheets': '30 at A5 (5.8 × 8.3 in)',
      'Envelopes': '20, tissue-lined, C6',
      'Seals': '24 adhesive, wax-look',
      'Ruling': '9 mm, faint grey',
      'Paper': '120 gsm uncoated',
      'Box size': '9 × 6.5 × 1.4 in',
    },
    inBox: ['30 sheets', '20 envelopes', '24 seals', 'Rigid storage box'],
  },
  {
    sku: 'HHG-610',
    slug: 'brass-pocket-magnifier-with-case',
    name: 'Brass Pocket Magnifier with Case',
    price: 36.0,
    category: 'small-comforts',
    image: 'hhg-610.webp',
    alt: 'A folding pocket magnifier with a round glass lens.',
    summary: 'A 3× glass lens in a folding brass body, with a leather case for a pocket.',
    description:
      'Glass rather than acrylic, which is why it stays clear instead of hazing after a year in a ' +
      'pocket. A 2-inch, 3× lens folds into a solid brass body, and the whole thing weighs three ' +
      'ounces — heavy enough to feel like an object rather than a gadget. The case is stitched ' +
      'leather with a press stud.',
    features: [
      '2 in glass lens, 3× magnification',
      'Folds into a solid brass body',
      'Weighs 3 oz — substantial in the hand',
      'Stitched leather case with a press stud',
      'Lens is replaceable',
      'Brass develops a patina; polish it or do not',
    ],
    specs: {
      'Lens': '2 in (50 mm) glass, 3×',
      'Folded size': '3.1 × 2.2 × 0.5 in',
      'Weight': '3 oz (85 g)',
      'Body': 'Solid brass',
      'Case': 'Stitched leather with a press stud',
      'Care': 'Clean the lens with a soft cloth; no solvents',
    },
    inBox: ['Pocket magnifier', 'Leather case', 'Lens cloth'],
  },
  {
    sku: 'HHG-611',
    slug: 'hollow-hearth-beeswax-candle-trio',
    name: 'Hollow Hearth Beeswax Candle Trio',
    price: 34.0,
    category: 'small-comforts',
    image: 'hhg-611.webp',
    alt: 'A rolled beeswax candle standing unlit in a small holder.',
    summary: 'Three pure beeswax pillars, unscented, burning about 40 hours each.',
    description:
      'Pure beeswax, which burns slowly and does not smoke the way paraffin does, in three pillar ' +
      'heights so they sit as a group. They are unscented — beeswax has its own faint honey smell ' +
      'and we would rather not cover it, and an unscented candle is a safer gift than a scented one ' +
      'when you do not know the room it is going into. Cotton wicks, no additives.',
    features: [
      'Pure beeswax, no paraffin and no additives',
      'Three heights: 3, 4 and 6 in',
      'Unscented',
      'Cotton wicks, lead-free',
      'About 40 hours per candle',
      'Supplied in a kraft gift box',
    ],
    specs: {
      'Heights': '3 in, 4 in and 6 in',
      'Diameter': '2 in each',
      'Burn time': 'About 40 hours each',
      'Wax': '100% beeswax',
      'Wick': 'Braided cotton, lead-free',
      'Set weight': '1.8 lb (816 g)',
    },
    inBox: ['Three beeswax pillars', 'Kraft gift box', 'A card on trimming the wick'],
  },
  {
    sku: 'HHG-612',
    slug: 'memory-lane-conversation-card-deck',
    name: 'Memory Lane Conversation Card Deck',
    price: 19.0,
    category: 'write-it-down',
    image: 'hhg-612.webp',
    alt: 'A deck of cards spread face down across a table.',
    summary: 'A hundred questions in 18 pt, for the afternoons when nobody knows what to say.',
    description:
      'A hundred cards, each with one question printed in 18 pt — the sort of question that is easy ' +
      'to answer and hard to stop answering. They are grouped into five colours by era, and the ' +
      'cards are 3.5 × 5 inches, large enough to read held at arm&rsquo;s length. There is no game, ' +
      'no scoring and no timer; it is a box of questions.',
    features: [
      '100 cards, one question each, printed in 18 pt',
      'Five colour-coded groups by era',
      '3.5 × 5 in cards — readable at arm&rsquo;s length',
      'No rules, no scoring, no timer',
      'Linen-finish card stock, 350 gsm',
      'Rigid box with a lift-off lid',
    ],
    specs: {
      'Cards': '100',
      'Card size': '3.5 × 5 in (89 × 127 mm)',
      'Type size': '18 pt',
      'Stock': '350 gsm linen finish',
      'Groups': '5, colour-coded by era',
      'Box': 'Rigid, lift-off lid, 5.3 × 3.8 × 1.6 in',
    },
    inBox: ['100 cards', 'Rigid box', 'A card of suggestions for using them'],
  },
];

export const featuredSkus = ['HHG-601', 'HHG-604', 'HHG-603', 'HHG-612'];
