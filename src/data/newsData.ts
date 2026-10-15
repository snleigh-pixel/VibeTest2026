import { Article, LiveUpdate } from '../types/news';

export const NYT_LOGO_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBRBsoDP3p3Wcc98_LDSAnvm2NY1o6snyRYqEH16-Nm9t2-7DHD78CpbNptcMaH8u3mG_Re3aN4wJ53AAvvbJmlAhUmzLEvwG0t5c_eeMCZMTN3qwiJwh8hkE4gEjWj1y1vasEnhBMUnQycZ5PkNR6-a8_3togRH9d2DoXu7TQm2r06I74bDfp8U0hJVjo1-RLMh_mCmBKNPFliqMaEhSoDxZBoVoQndTe_wiOXKM4Twm1swTD9ly3U';

export const ARTICLES: Article[] = [
  {
    id: 'ceasefire-talks-geneva',
    title: 'Diplomats Signal Tentative Progress in Ceasefire Negotiations Across Key Fronts',
    deck: 'Envoys caution that significant hurdles remain on international monitoring mechanisms and binding border security guarantees.',
    kicker: 'Diplomacy & Security',
    subKicker: 'Geneva Dispatch',
    bylines: ['Julian E. Barnes', 'Lara Jakes', 'Edward Wong'],
    timestamp: '12m ago',
    publishedAt: 'October 24, 2024 at 6:40 p.m. ET',
    readingTime: '7 min read',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDARNsSPw8KupSH2ravLP5Q8ANQMyjP6bwYbAcT7Ya5Zs1mLWSZRMNwEkk6ILdO_YkJi2DscLHXljgm_guCvnhgusYg-qdrnBBfh2dqMLOgrQi53-48thNEuHVoIbNrBC7vecpxrGommH1cCw2pYay8tmdNjbZDJXl-M3eDs--My95LWIxuzL2uHp5HmTpPgPVSPrayPVxn24Qs8sOzTSnBf_IsZuuQh0blW7l0cprg7Phxdw7_OL6I',
    imageAlt:
      'Editorial press photograph of world diplomats and envoys seated around a polished oval rosewood conference table inside the Palais des Nations in Geneva.',
    imageCaption: 'Delegations gathering at the Palais des Nations in Geneva on Wednesday.',
    photoCredit: 'Pool photo by Fabrice Coffrini',
    section: 'world',
    category: 'lead',
    highlights: [
      'Three-phase roadmap: A draft compromise establishes a 45-day temporary truce accompanied by monitored troop redeployments from civilian corridors.',
      'Verification standoff: European delegates insist on independent satellite and ground observation, a provision still resisted by tactical field commanders.',
      'Humanitarian corridors: Unhindered medical convoys are scheduled to access southern enclaves starting at dawn if formal signatures are secured tonight.'
    ],
    content: [
      'GENEVA — The discussions, held behind closed doors under Swiss auspices, represent the most sustained diplomatic engagement between the opposing delegations in over eleven months. While regional mediators described the mood as sober, senior negotiators underscored that past preliminary agreements collapsed over implementation details in the final hours.',
      'According to three diplomatic officials familiar with the draft protocols who spoke on the condition of anonymity because of the sensitivity of the talks, the draft agreement proposes establishing a demilitarized buffer zone along contested river basins, monitored by an international peacekeeping coalition.',
      '“We are closer than we have been at any juncture this year, but the remaining millimeters are fraught with political landmines,” a senior European mediator remarked emerging from an eight-hour session on Wednesday evening. “Both capitals must now authorize their chiefs of mission to sign off on binding oversight clauses.”',
      'The talks gained urgent momentum following intensive bilateral discussions in Brussels and Washington earlier this week. Field observers note that civilian populations in front-line towns have faced escalating displacement, adding humanitarian urgency to what had been frozen lines of contact.',
      'The proposed verification mechanism remains the primary friction point. Under the compromise text circulated by neutral envoys, a multilateral technical commission would oversee automated radar sensors and aerial surveillance grids along critical highway choke points.',
      'Should an agreement be signed before midnight, the initial cease-fire would take effect within 72 hours, triggering immediate logistical preparations for convoys of emergency food, clean water, and surgical supplies.'
    ],
    pullQuote: {
      quote: 'We are closer than we have been at any juncture this year, but the remaining millimeters are fraught with political landmines.',
      attribution: 'Senior European Diplomatic Envoy'
    },
    metrics: {
      shares: 1420,
      comments: 638
    }
  },
  {
    id: 'central-banks-rate-path',
    title: 'Central Banks Signal Cautious Rate Path as Inflation Pressures Subside',
    deck: 'Policymakers in Frankfurt and Washington emphasize that while headline price indexes have eased, services and wages demand sustained vigilance.',
    kicker: 'Monetary Policy',
    bylines: ['Jeanna Smialek'],
    timestamp: '42m ago',
    publishedAt: 'October 24, 2024 at 6:10 p.m. ET',
    readingTime: '5 min read',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAfAVD4UZNfvCnb0pYOr238C8t_E3X8D-II-DlBvsnnGPLGlYernFIV3mmA54OkLoGNyySxI7PQT74IpsQau4TBrVPz78-UAtqNl_QKVoDgDfmEZNucSLHmO9DV09zI-H3lZ1e5z91j61vdK5x8MdXWlU5WJhAEsQACgk05h0oj--vq193_s5V8qAZKQ5txk93DoA8YssvE8MBGJXEZWw3ChB0mlfpX_tcCfWl9qqQ28ttY7p9HEPLe',
    imageAlt: 'Modern architectural interior of an austere central bank press briefing hall, microphone on lectern in sharp focus.',
    imageCaption: 'A briefing hall prepared ahead of rate decisions at the central bank headquarters.',
    photoCredit: 'Staff Photo by Andrew Harrer',
    section: 'business',
    category: 'secondary',
    content: [
      'WASHINGTON — Federal Reserve officials and European central bankers delivered a coordinated message of disciplined patience on Wednesday, signaling that while borrowing costs have likely peaked, rapid easing cycles remain off the table.',
      'Recent economic indicators reveal persistent resilience across service industries and labor markets, even as headline consumer price indicators converge toward the long-standing 2 percent target.',
      '“We have made extraordinary progress bringing inflation down from four-decade highs without inflicting severe damage on employment,” remarked one senior central bank governor during an address in Frankfurt. “However, declaring total victory prematurely risks reigniting underlying expectations.”',
      'Investors adjusted bond yields following the remarks, dialing back expectations for an aggressive series of half-point reductions before year’s end.'
    ],
    metrics: {
      shares: 890,
      comments: 312
    }
  },
  {
    id: 'regulators-ai-partnerships',
    title: 'Federal Regulators Open Broad Inquiry Into Artificial Intelligence Partnerships',
    deck: 'Antitrust officials issued subpoenas examining whether multi-billion cloud alliances circumvent traditional merger reviews and smother startup rivals.',
    kicker: 'Investigative & National',
    subKicker: 'Regulatory Desk',
    bylines: ['David McCabe'],
    timestamp: '14 min ago',
    publishedAt: 'October 24, 2024 at 6:38 p.m. ET',
    readingTime: '6 min read',
    section: 'tech',
    category: 'analysis',
    content: [
      'WASHINGTON — Federal antitrust regulators on Wednesday launched an extensive formal inquiry into the labyrinth of investments and compute partnerships linking Silicon Valley tech titans with pioneering artificial intelligence laboratories.',
      'The Federal Trade Commission and the Department of Justice issued civil investigative demands requiring several dominant cloud providers and generative AI firms to detail the corporate governance terms of their agreements.',
      'At issue is whether these strategic alliances, which often involve equity stakes alongside discounted computing infrastructure, effectively allow incumbents to consolidate influence over generative technology without triggering mandatory Hart-Scott-Rodino premerger notifications.',
      '“Big Tech is attempting to construct defensive moats around the next computing paradigm before independent competitors can achieve scale,” said an official familiar with the inquiry’s scope.',
      'The investigation marks the most aggressive federal move yet to scrutinize the competitive dynamics of frontier AI models.'
    ],
    metrics: {
      shares: 1105,
      comments: 482
    }
  },
  {
    id: 'suburban-voters-economy-2024',
    title: 'In Key Swing Districts, Suburban Voters Weigh Economic Anxiety Against Stability',
    deck: 'Focus groups in Pennsylvania and Michigan suburbs indicate grocery receipts and mortgage rates continue to overshadow legislative accomplishments.',
    kicker: 'The 2024 Electorate',
    bylines: ['Nate Cohn'],
    timestamp: '1 hour ago',
    publishedAt: 'October 24, 2024 at 5:50 p.m. ET',
    readingTime: '8 min read',
    section: 'politics',
    category: 'secondary',
    content: [
      'ALLENTOWN, Pa. — In the leafy subdivisions of Lehigh County, voter sentiment presents a paradox that political strategists from both major parties are working frantically to decode.',
      'Macroeconomic data charts a steady expansion with robust job creation and rising median wages. Yet across supermarket checkouts, youth sports sidelines, and municipal library meetings, residents express persistent frustration with compounding daily expenses.',
      '“The price of olive oil and chicken breasts doesn’t go down just because inflation came down from 9 percent to 2.5 percent,” said Karen Lindqvist, a registered independent who works in medical billing in suburban Macungie. “You still feel the accumulation every Saturday morning.”',
      'The political battleground here demonstrates that suburban voters remain cautious, weighing bread-and-butter anxieties against their concerns over institutional stability and political rhetoric.'
    ],
    metrics: {
      shares: 745,
      comments: 920
    }
  },
  {
    id: 'tech-giants-digital-media-authentication',
    title: 'Tech Giants Announce Unified Protocol for Authenticating Digital Media',
    deck: 'A coalition of seven major camera manufacturers and social networks agreed on cryptographic watermarking to combat deepfake proliferation.',
    kicker: 'Cybersecurity',
    bylines: ['Kevin Roose'],
    timestamp: '2 hours ago',
    publishedAt: 'October 24, 2024 at 4:50 p.m. ET',
    readingTime: '5 min read',
    section: 'tech',
    category: 'secondary',
    content: [
      'SAN FRANCISCO — In an unprecedented technical accord, seven of the world’s largest consumer electronics makers and social platforms announced the adoption of a unified cryptographic standard designed to trace the provenance of every image and video captured on next-generation hardware.',
      'The standard, developed under the Coalition for Content Provenance and Authenticity (C2PA), embeds tamper-evident metadata directly into camera sensor silicon at the moment of exposure.',
      'When an authenticated asset is uploaded to participating platforms, a discreet icon displays the precise device model, capture timestamp, and whether artificial intelligence tools were employed during post-production.',
      '“Without verifiable ground truth at the hardware layer, the information ecosystem will quickly drown in synthetic noise,” stated the coalition’s technical director.'
    ],
    metrics: {
      shares: 612,
      comments: 184
    }
  },
  {
    id: 'maureen-dowd-statecraft',
    title: '"The High-Stakes Theater of Modern Statecraft"',
    deck: 'Why performative bluster behind lecterns rarely translates to durable peace accords once the cameras leave the room.',
    kicker: 'Opinion',
    subKicker: 'Contributing Columnist',
    bylines: ['Maureen Dowd'],
    authorRole: 'Contributing Columnist',
    authorPhotoUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBtHcgH1dA117-CuxRqlD9QMAtz9WV6r7Z-c8ymFfV4EIXCpSoBr0McCPfPJooDeRhqUpJOcHpUe-075H-W39CEWETkZ7nl_i51Gc_6VefaQpb0Dk76C_FeHpkBLAv1bxcCVI999sQ1dyAstEEPet7_hLLTmA_e5G-Py-EE28uJ4TSaI_kUdtR8xRpxQN3tbY-r56U8sihiUZZYWGHvLjbVLAaqiBi0Zq0ogOFD330fz7kP0-0F4-3t',
    timestamp: '3 hours ago',
    publishedAt: 'October 24, 2024 at 3:30 p.m. ET',
    readingTime: '4 min read',
    section: 'opinion',
    category: 'opinion',
    content: [
      'WASHINGTON — There is diplomacy as it is performed before banks of telephoto lenses, where solemn faces and crisp pocket squares project heroic resolve, and then there is the unglamorous drudgery of haggling over decimal points in draft treaties.',
      'In Geneva this week, the contrast could not be starker. Leaders posture for their domestic cable audiences, brandishing talking points formulated to generate viral clips rather than diplomatic breakthroughs.',
      'Yet history teaches us that durable settlements are not forged through theatrical sound bites. They are stitched together in basement conference rooms where tired aides drink lukewarm espresso and parse clauses that never make the evening news.',
      'Until our political class relearns the virtue of quiet discretion, the theater will continue to outshine the substance.'
    ],
    pullQuote: {
      quote: 'Until our political class relearns the virtue of quiet discretion, the theater will continue to outshine the substance.',
      attribution: 'Maureen Dowd'
    },
    metrics: {
      shares: 2150,
      comments: 1140
    }
  },
  {
    id: 'ezra-klein-building-things',
    title: '"Why Building Things in America Still Takes So Long"',
    deck: 'The regulatory thicket was built with the best intentions, but it has quietly made clean energy infrastructure almost impossible to deploy at speed.',
    kicker: 'Opinion',
    subKicker: 'Columnist',
    bylines: ['Ezra Klein'],
    authorRole: 'Columnist',
    authorPhotoUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC2VSkIzyA9-8leKkxwBSb7_8cojSuCubDc8efPgzEddflXLZbNTUlyuZCNWPqtkuYJ8uyAsf91u_MIA01YGXzafpfzNROqcdk_vOiQr50eYsgp2A__1CKkQ0Cp_u21j9rcuLG4LP5V8JZDcpMk-zquFX5VSIYNCZ9-OtxjJJUNHvLS3T9asRmbnNpS9zlNZe9_h7ZBO2y_587_okBaUg2MWDtlCYmdKKHGD_6gH1DLRxthTKxSwRn6',
    timestamp: '4 hours ago',
    publishedAt: 'October 24, 2024 at 2:15 p.m. ET',
    readingTime: '6 min read',
    section: 'opinion',
    category: 'opinion',
    content: [
      'NEW YORK — If you want to understand why the United States struggles to build high-speed rail, deploy high-voltage transmission lines, or construct semiconductor foundries in under a decade, you must confront the procedural paralysis of the modern administrative state.',
      'Over the past half-century, a web of environmental reviews, procedural appeals, and neighborhood veto points was erected to protect communities from reckless industrial overreach.',
      'Those protections were well-intentioned. But today, the primary victim of that procedural morass is clean energy infrastructure itself. Solar installations in Nevada sit backlogged in multi-year environmental assessments, while geothermal projects face identical delays to coal mines.',
      'If the progressive movement wants to decarbonize our economy and revitalize domestic manufacturing, it must rediscover an appetite for building things fast.'
    ],
    metrics: {
      shares: 3410,
      comments: 1890
    }
  },
  {
    id: 'paul-krugman-resilient-economy',
    title: '"The Economy Isn’t Normal, but It Is Resilient"',
    deck: 'Doomsayers have predicted an imminent recession for eight consecutive quarters. Here is why the structural labor buffer held.',
    kicker: 'Opinion',
    subKicker: 'Nobel Laureate & Columnist',
    bylines: ['Paul Krugman'],
    authorRole: 'Nobel Laureate & Columnist',
    authorPhotoUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDcE4cQZ9E2yziwlkfQeZJvC8lf5yPoyfjuReoSFDgXbVco6oVGsedx-Y5AQzUD2SNSuBUKwYM2OpWKlEHSRmTnaFUs2vQmruJA1GrZXzbhifqAKuvug0A4I4SP0l-9cSQknMWZ_5Otub0Ch44brOGK-ugYHhM2xK9LAYloRpUMXmjF6AOTzveAbO5aqUpgN5jabHgH8vAktgiw5pyu23F1rplIOPt99JvlyIefs4pt2xOyYJmh1WFq',
    timestamp: '5 hours ago',
    publishedAt: 'October 24, 2024 at 1:20 p.m. ET',
    readingTime: '5 min read',
    section: 'opinion',
    category: 'opinion',
    content: [
      'PRINCETON, N.J. — For two straight years, a parade of prominent Wall Street strategists and television commentators warned with unwavering certainty that a severe recession was just six months away.',
      'Yet month after month, the American economy continued to generate hundreds of thousands of new payroll positions, household balance sheets remained remarkably sound, and consumer expenditures defied pessimistic forecasts.',
      'Why did the standard textbook models misjudge this cycle? Primarily because they treated a post-pandemic supply chain normalization as if it were a classic monetary overheating episode.',
      'As supply bottlenecks cleared, prices moderated without necessitating mass layoffs. The economy isn’t back to its pre-2020 equilibrium, but its resilience should give pause to anyone still forecasting impending doom.'
    ],
    metrics: {
      shares: 1850,
      comments: 980
    }
  },
  {
    id: 'chip-packaging-battle',
    title: 'The High-Stakes Battle Over Advanced Chip Packaging',
    deck: 'Fabrication is only half the equation. The race to stack microchips into three-dimensional modules is reshaping Pacific supply alliances.',
    kicker: 'Business',
    subKicker: 'Markets',
    bylines: ['Don Clark'],
    timestamp: '2 hours ago',
    publishedAt: 'October 24, 2024 at 4:30 p.m. ET',
    readingTime: '6 min read',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA73ykA4RBUwe_xY7eWQMT9JrVmwzoGdzUZfBKgxWngimoAUj70jXlChPkUxVTbSicVIdU9lghaJ0cBl-wfXYumAlwGhRavuGMyqmeidt4ofmd2omTC1FUr_4Ha9xGSSmOk5_6m59fP7Z4JsDuD3aFEjHSqEzqAD6lDuumLz8czrnXlWeQjxb0aI6frPI7LZ-qkbtOMFQNu3jSEMZ-Ofov04qwQcodDXbDMwnUNU21-ZwqR8X9D2Ugw',
    imageAlt: 'Modern gleaming semiconductor manufacturing cleanroom facility with automated robotic silicon wafer transport arms.',
    imageCaption: 'A high-precision semiconductor assembly line where chip stacking occurs.',
    photoCredit: 'Reuters / Fabrice Coffrini',
    section: 'business',
    category: 'feature',
    content: [
      'HSINCHU, Taiwan — While international headlines focus on the multi-billion-dollar foundries that etch transistors onto raw silicon discs, the true technological frontier in microelectronics has shifted to what happens after the wafer is sliced.',
      'Advanced packaging — the intricate science of binding multiple dies together with microscopic copper pillars and silicon interposers — has become the critical bottleneck in producing cutting-edge AI accelerators.',
      '“You can etch the smallest transistors in the world, but if your interconnect latency throttles data exchange between memory and compute, the chip cannot function at scale,” explained a senior research fellow at Taiwan’s Industrial Technology Research Institute.',
      'Governments across East Asia, Europe, and North America are now pouring billions into packaging capacity, recognizing that chip sovereignty relies on mastering the entire stack.'
    ],
    metrics: {
      shares: 920,
      comments: 215
    }
  },
  {
    id: 'alzheimers-blood-assay',
    title: 'Simple Blood Assay Pinpoints Alzheimer’s Markers Years Early',
    deck: 'A large-scale multi-clinic clinical trial confirmed that a newly approved plasma biomarker test matches the diagnostic precision of costly PET scans.',
    kicker: 'Science',
    subKicker: 'Neuroscience',
    bylines: ['Pam Belluck'],
    timestamp: '3 hours ago',
    publishedAt: 'October 24, 2024 at 3:15 p.m. ET',
    readingTime: '5 min read',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCBrTsGJ-6k3AaZhIBbZEQG5_fqnWaS82dCIqqDW-8RmoNV-UgAAQVJceQoW17LrhK3ELfgke6lNyldbhVcBHugars8MRg1bTLua_l9xOk08hEhCaqTDqSKXfV4q-uTYJ3HaAjN1p29Zn4HUlgRqjAJfgxisnwoiJ16cuI4rhk6KZi078qThflOkGZrXtTSF8oQWLWmBofLMKRdwTVtK9zxYfHL5mdPq9ZRm19n3Vx1Z0KlMIkWktnA',
    imageAlt: 'Microscopic fluorescence visualization of neural synapses and biological protein markers glowing in electric blues and purples.',
    imageCaption: 'Fluorescent markers highlighting neural pathways in laboratory analysis.',
    photoCredit: 'Science Source / Dr. Elena Rostova',
    section: 'science',
    category: 'feature',
    content: [
      'BOSTON — For decades, diagnosing early-stage Alzheimer’s disease required either invasive lumbar punctures or exorbitant positron emission tomography (PET) scans that remained out of reach for community clinics.',
      'That paradigm may finally be collapsing. In findings published Wednesday in The Journal of the American Medical Association, a simple blood test measuring phosphorylated tau 217 (p-tau217) demonstrated 90 percent diagnostic accuracy in identifying amyloid plaques.',
      'The multi-center study, encompassing over 1,400 patients across Europe and North America, showed that primary care doctors using the assay were able to identify pathology years before overt cognitive symptoms materialized.',
      'With new disease-modifying monoclonal antibody therapies requiring intervention at the earliest biological stages, clinicians hail the blood test as a transformative tool that could democratize memory care.'
    ],
    metrics: {
      shares: 1680,
      comments: 422
    }
  },
  {
    id: 'crucible-broadway-revival',
    title: 'In a Fierce Revival of ‘The Crucible’, Paranoia Feels Electrically Alive',
    deck: 'Arthur Miller’s masterpiece strips away historic costume in favor of bare acoustics and unnerving proximity to Salem’s frantic accusations.',
    kicker: 'Arts & Theater',
    subKicker: "Critic's Pick",
    bylines: ['Jesse Green'],
    timestamp: '4 hours ago',
    publishedAt: 'October 24, 2024 at 2:45 p.m. ET',
    readingTime: '5 min read',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDucDRVMHz9XdLoQ_9tuwDbxwyFdGo9mTIO8SGRVQndFZG8tNF_JvUQll0uGsaSvm1mv9RtwAr49kFZnTJxKSnVqIdAFcbeRehSwFRikITy-DMaqgedUcXm1PFT7MiRCSudMFvGq6GbV-ijhEXYy46FxdzLNDANs8H8b23EV-mFlc4f_e0_IbECZOnK5LbxNeXZQUV9wI6FD8VbleS8gCuDES6VqR0tI671QZBYkW21UY-xmU5c4FjV',
    imageAlt: 'Dramatic theater stage photograph with single actor under harsh vertical spotlight on minimalist dark stage set.',
    imageCaption: 'A tense courtroom climax in the new production at the Bernard B. Jacobs Theatre.',
    photoCredit: 'Sara Krulwich / The New York Times',
    section: 'arts',
    category: 'feature',
    content: [
      'NEW YORK — We think we know Salem. We expect the petticoats, the Puritan buckles, and the melodramatic witch-hunt shrieking in pitch-pine courtrooms.',
      'Director Ivo van Hove’s thrilling, stripped-down revival at the Bernard B. Jacobs Theatre tosses all historical armor into the furnace. The actors wear contemporary wool sweaters and work boots; the stage is an austere gray slab; the lighting is as cold and merciless as an interrogation lamp.',
      'What emerges is Arthur Miller’s text in its most terrifying, urgent register: a study of collective psychosis, social contagion, and the catastrophic speed with which a terrified community surrenders reason.',
      'When John Proctor cries out his defiance against ideological capitulation, the air in the theater hums with an uncanny, contemporary chill.'
    ],
    metrics: {
      shares: 720,
      comments: 145
    }
  },
  {
    id: 'sheet-pan-chicken-lemon-feta',
    title: 'Crispy Sheet-Pan Chicken With Lemon and Feta',
    deck: 'Crisp skin, briny cheese and sweet caramelized citrus combine for an effortless 35-minute dinner.',
    kicker: 'NYT Cooking',
    subKicker: 'Interactive',
    bylines: ['Melissa Clark'],
    timestamp: '5 hours ago',
    publishedAt: 'October 24, 2024 at 1:00 p.m. ET',
    readingTime: '35 min total',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDSzCJfkasaBU3jFQmaYGhQiE6osSg4c8VEMiq5vPUyVRfWCb4gThF48hJDsWic4tMlLNQmUNmaBCWcPJxQrOxkM3c8XY7HoWy5TDpRxTUXyGY-62Y_NXQ-thnkM5XztMEOL_Nmq-SKO7sVffQhkwJZI1k_hURoMo9LODAe--51ExUVNHpValCtA_2Pz-6UZUbE4eXtNZam46mnU-Ve-_2PtqxHNSeZXVqYVZ4DmzDqpr0EW1KE-lvG',
    imageAlt: 'Overhead food photography of golden crispy sheet-pan roasted chicken thighs with browned lemons and crumbled white feta cheese.',
    imageCaption: 'Roasted chicken thighs served straight from the sheet pan with pan drippings.',
    photoCredit: 'Johnny Miller for The New York Times. Food Stylist: Susan Ottaviano.',
    section: 'cooking',
    category: 'recipe',
    rating: '4.8 ★ (1,490)',
    reviewCount: '1,490 ratings',
    content: [
      'Roasting bone-in, skin-on chicken thighs at high heat is one of the most reliable weeknight cooking techniques in existence. But when you crowd the pan with thinly sliced lemons, red onion wedges, and thick slabs of Greek feta, alchemy happens.',
      'As the chicken fat renders, it coats the lemon slices, which soften and caramelize into tender, edible candied ribbons. The feta softens without melting completely, developing browned, savory crusts that balance the bright citrus juices.',
      'Ingredients:',
      '• 2 pounds bone-in, skin-on chicken thighs (about 4 to 6 thighs)',
      '• 2 medium lemons, thinly sliced into rounds, seeds removed',
      '• 1 large red onion, sliced into 1/2-inch wedges',
      '• 7 ounces Greek sheep’s milk feta cheese, cut into 1/2-inch cubes',
      '• 3 tablespoons extra-virgin olive oil',
      '• 1 tablespoon dried Greek oregano, plus fresh sprigs for serving',
      '• 1 teaspoon kosher salt and freshly ground black pepper',
      '• 1 pint cherry tomatoes (optional, for the final 10 minutes)',
      'Instructions:',
      '1. Heat oven to 425°F. On a rimmed baking sheet, toss chicken with olive oil, salt, pepper, and oregano.',
      '2. Scatter lemon slices, onions, and feta around the chicken pieces.',
      '3. Roast for 30 to 35 minutes until the chicken skin is deeply browned and crisp, and internal temperature reaches 165°F. Serve with warm crusty bread.'
    ],
    metrics: {
      shares: 4320,
      comments: 610
    }
  }
];

export const LIVE_UPDATES: LiveUpdate[] = [
  {
    id: 'up-1',
    timestamp: '6:54 PM',
    timeAgo: '3m ago',
    headline: 'Federal Reserve Chair comments on labor market data stabilization',
    content:
      'Speaking at an economic symposium, the Fed Chair stated that recent payroll revisions suggest balancing conditions between hiring velocity and wage moderation.',
    author: 'Jeanna Smialek',
    location: 'Washington',
    category: 'economic'
  },
  {
    id: 'up-2',
    timestamp: '6:41 PM',
    timeAgo: '16m ago',
    headline: 'Geneva envoy confirms draft protocol forwarded to capitals',
    content:
      'Swiss Foreign Ministry representatives confirm courier packets containing the revised 45-day monitoring protocol have been transmitted to both presidents for formal executive review.',
    author: 'Edward Wong',
    location: 'Geneva',
    category: 'diplomatic'
  },
  {
    id: 'up-3',
    timestamp: '6:22 PM',
    timeAgo: '35m ago',
    headline: 'Red Cross stages emergency medical convoys near northern corridor',
    content:
      'Ten articulated trucks loaded with trauma kits, generators, and pediatric medicine have positioned along the border perimeter pending ceasefire signature confirmations.',
    author: 'Lara Jakes',
    location: 'Zurich / Border Post',
    category: 'military'
  },
  {
    id: 'up-4',
    timestamp: '5:58 PM',
    timeAgo: '59m ago',
    headline: 'European defense ministers convene emergency virtual consultation',
    content:
      'Ministers from France, Germany, and the UK held a 40-minute secure video teleconference to agree on satellite imagery sharing for verification teams.',
    author: 'Julian E. Barnes',
    location: 'Brussels',
    category: 'diplomatic'
  },
  {
    id: 'up-5',
    timestamp: '5:30 PM',
    timeAgo: '1h 27m ago',
    headline: 'Crude futures retreat 1.8% following positive diplomatic headlines',
    content:
      'Brent crude benchmark fell below $75 a barrel as energy traders priced in reduced risk of transit disruptions through key maritime chokepoints.',
    author: 'Stanley Reed',
    location: 'London',
    category: 'economic'
  },
  {
    id: 'up-6',
    timestamp: '5:02 PM',
    timeAgo: '1h 55m ago',
    headline: 'Tactical field commanders voice reservations over troop redeployment zones',
    content:
      'Military liaison officers noted concerns regarding forward artillery placement during the preliminary 45-day standstill window.',
    author: 'Eric Schmitt',
    location: 'Geneva',
    category: 'military'
  }
];

export const GUEST_ESSAYS = [
  {
    title: 'The Constitutional Crisis Lurking Inside Local School Boards',
    author: 'Akhil Reed Amar',
    readTime: '4 min read',
    topic: 'Law & Governance'
  },
  {
    title: 'We Are Thinking About Clean Nuclear Transition All Wrong',
    author: 'Vaclav Smil',
    readTime: '6 min read',
    topic: 'Energy & Climate'
  },
  {
    title: 'How Algorithmic Monopolies Distort Common Knowledge',
    author: 'Shoshana Zuboff',
    readTime: '5 min read',
    topic: 'Technology'
  }
];
