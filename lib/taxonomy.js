const colors = [
  "black",
  "blue",
  "brown",
  "green",
  "grey",
  "neutral",
  "orange",
  "pink",
  "purple",
  "red",
  "white",
  "yellow"
];

const materials = [
  "woollen",
  "jersey",
  "cotton",
  "silk",
  "cashmere",
  "linen",
  "leather",
  "suede",
  "leatherette",
  "synthetic",
  "velvet",
  "crepe_de_chine",
  "lace",
  "fake_fur",
  "fur",
  "denim",
  "fleece",
  "satin",
  "suedette",
  "gabardine"
];

const narrow_materials = [
  "narrow_material",
  "leather",
  "suede",
  "leatherette",
  "textile_fabric",
  "braided_fibers"
];

const necklines = [
  "zip_neck",
  "henley",
  "scoop_neck",
  "plunge_neck",
  "sweetheart_neck",
  "crewneck",
  "v_neck",
  "cowl",
  "highneck",
  "funnel_neck",
  "boatneck_bateau",
  "mandarin",
  "square_neck",
  "halter_neck",
  "shawl",
  "hooded",
  "collared",
  "strapless",
  "bow_or_tie_up_neck",
  "peter_pan",
  "keyhole",
  "off_shoulder",
  "one_shoulder",
  "round_neck"
];

const patterns = [
  "animal_print",
  "argyle",
  "aztec",
  "camouflage",
  "check",
  "chevron",
  "colorblock",
  "ethnic_motifs",
  "floral",
  "floral_small",
  "geometric_print",
  "graphic",
  "graphic_with_text",
  "houndstooth",
  "lace",
  "paisley",
  "polka_dots",
  "sequin",
  "solid",
  "spots_objects",
  "stripe",
  "texture",
  "tie_and_dye",
  "tropical"
]

const style_and_occasions = [
  "activewear",
  "all_day_wear",
  "bohemian",
  "brunch",
  "casual",
  "chic",
  "classic",
  "cocktail_party",
  "holiday",
  "office_wear",
  "party",
  "party_wear",
  "punk",
  "retro",
  "semiformal",
  "sporty"
]


const taxonomy = {
  bags: {
    color: colors,
    narrow_materials,
    design_details: [
      "bow",
      "buckle_lock",
      "clasp",
      "knot",
      "metal_chain",
      "studs",
      "zipper"
    ],
    type: [
      "backpacks",
      "briefcase",
      "bucketbag",
      "clutches",
      "crossbody",
      "duffle",
      "fanny_pack",
      "garment_bag",
      "gym_bag",
      "hobos",
      "laptop_bag",
      "messenger_bag",
      "satchel",
      "shoulder_bag",
      "totes"
    ],
    pattern: patterns,
    style_and_occasion: style_and_occasions
  },
  blazers: {
    color: colors,
    material: materials,
    sleeve_length: [
      "three_quarter",
      "long_sleeve",
      "short_sleeve",
      "sleeveless"
    ],
    pattern: patterns,
    style_and_occasion: style_and_occasions
  },
  cardigans_and_shrugs: {
    color: colors,
    length: ["long", "mid_length", "short"],
    material: materials,
    pattern: patterns,
    sleeve_length: [
      "three_quarter",
      "long_sleeve",
      "short_sleeve",
      "sleeveless"
    ],
    type: ["cardigans", "shrugs"],
    style_and_occasion: style_and_occasions
  },
  coats: {
    color: colors,
    material: materials,
    coat_length: ["long", "mid_length", "short"],
    sleeve_length: [
      "three_quarter",
      "long_sleeve",
      "short_sleeve",
      "sleeveless"
    ],
    type: [
      "duffel",
      "duffle",
      "fur",
      "overcoat",
      "parka",
      "peacoat",
      "puffer",
      "quilted",
      "shearling",
      "trenchcoat"
    ],
    pattern: patterns,
    style_and_occasion: style_and_occasions
  },
  dresses: {
    color: colors,
    material: materials,
    dress_length: [
      "ankle_length",
      "calf_length",
      "knee_length",
      "thigh_length"
    ],
    neckline: necklines,
    pattern: patterns,
    sleeve_length: [
      "three_quarter",
      "long_sleeve",
      "short_sleeve",
      "sleeveless"
    ],
    style: ["pinafore", "shirt", "slip", "tank", "t_shirt"],
    style_and_occasion: style_and_occasions,
    type: [
      "a_line",
      "column",
      "drop_waist",
      "fit_flare",
      "mermaid_trumpet",
      "sheath",
      "shift_sack"
    ]
  },
  footwear: {
    color: colors,
    narrow_materials,
    boot_height: [
      "ankle_high",
      "knee_high",
      "mid_calf",
      "over_the_knee",
      "thigh_high"
    ],
    design_details: [
      "ankle_strap",
      "dorsay",
      "laces",
      "lace_up_back",
      "mary_jane_strap",
      "sling_back",
      "t_bar"
    ],
    heel_height: ["flat", "high", "low", "medium"],
    heel_type: ["chunky", "cone", "kitten", "platform", "stiletto", "wedges"],
    toe_style: [
      "brogue",
      "cap",
      "pointed",
      "round",
      "square",
      "closed_toe",
      "open_toe",
      "peep_toe"
    ],
    type: [
      "athletic",
      "ballet_flats",
      "boots",
      "casual_shoes",
      "flats",
      "flip_flops",
      "formal_shoes",
      "loafers",
      "mules",
      "night_slippers",
      "pumps",
      "sandals",
      "sliders",
      "slipons",
      "sneakers",
      "wedges"
    ],
    pattern: patterns,
    style_and_occasion: style_and_occasions
  },
  jackets: {
    color: colors,
    material: materials,
    jacket_length: ["mid_length", "short"],
    sleeve_length: [
      "three_quarter",
      "long_sleeve",
      "short_sleeve",
      "sleeveless"
    ],
    type: [
      "bomber",
      "denim",
      "fur",
      "military",
      "motorcycle",
      "parka",
      "puffer",
      "quilted",
      "shearling",
      "vest",
      "windbreaker"
    ],
    pattern: patterns,
    style_and_occasion: style_and_occasions
  },
  jeans: {
    color: colors,
    material: materials,
    denim_wash: [
      "acid_wash",
      "black_rinse",
      "colored",
      "dark_rinse",
      "grey_rinse",
      "light_rinse"
    ],
    design_details: ["distressed", "embelished", "embroidered", "ripped"],
    length: ["ankle_length", "calf_length", "full", "full_length"],
    style_and_occasion: style_and_occasions,
    type: ["bootcut", "skinny", "straight", "wide_leg"]
  },
  jewellery: {
    color: colors,
    material: materials,
    bracelet_style: [
      "adjustable",
      "bangle",
      "beads",
      "charm",
      "cuff",
      "friendship_wrap",
      "link_chain",
      "statement",
      "tennis"
    ],
    earrings_style: [
      "chandelier",
      "diamond_stud",
      "drop",
      "ear_crawler",
      "hoop",
      "mismatched",
      "stud"
    ],
    necklace_style: [
      "chain",
      "choker",
      "collar",
      "hearts",
      "layered",
      "long_pendant",
      "religious",
      "short_pendant",
      "statement",
      "y_neck"
    ],
    ring_style: ["band", "stackable", "statement"],
    type: ["bracelets", "earrings", "necklaces", "rings"]
  },
  jumpsuits: {
    color: colors,
    material: materials,
    neckline: necklines,
    pattern: patterns,
    sleeve_length: [
      "three_quarter",
      "long_sleeve",
      "short_sleeve",
      "sleeveless"
    ],
    style_and_occasion: style_and_occasions,
    length: ["knee_length", "long", "short"]
  },
  outerwear: {
    color: colors,
    material: materials,
    outerwear_length: ["long", "mid_length", "short"],
    sleeve_length: [
      "three_quarter",
      "long_sleeve",
      "short_sleeve",
      "sleeveless"
    ],
    pattern: patterns,
    style_and_occasion: style_and_occasions
  },
  pants: {
    color: colors,
    material: materials,
    fit: ["bootcut", "skinny", "slim", "straight", "wide_leg"],
    length: [
      "ankle_length",
      "calf_length",
      "full_length",
      "knee_length",
      "thigh_length"
    ],
    pattern: patterns,
    style_and_occasion: style_and_occasions,
    type: [
      "capris",
      "cargo",
      "culottes",
      "leggings",
      "palazzo",
      "sweatpants",
      "trouser"
    ]
  },
  rompers: {
    color: colors,
    material: materials,
    neckline: necklines,
    pattern: patterns,
    sleeve_length: [
      "three_quarter",
      "long_sleeve",
      "short_sleeve",
      "sleeveless"
    ],
    style_and_occasion: style_and_occasions,
    length: ["knee_length", "long", "short"]
  },
  shorts: {
    color: colors,
    material: materials,
    fabric: ["denim", "non_denim"],
    length: ["knee_length", "long", "short"],
    pattern: patterns,
    style_and_occasion: style_and_occasions,
    type: ["cargo", "chino", "denim", "sports"]
  },
  skirts: {
    color: colors,
    material: materials,
    fabric: ["denim", "non_denim"],
    length: ["knee_length", "maxi", "midi", "mini"],
    pattern: patterns,
    style_and_occasion: style_and_occasions,
    type: [
      "a_line",
      "flared",
      "mermaid_trumpet",
      "pencil",
      "pleated",
      "straight"
    ]
  },
  sweaters: {
    color: colors,
    material: materials,
    neckline: necklines,
    pattern: patterns,
    sleeve_length: [
      "three_quarter",
      "long_sleeve",
      "short_sleeve",
      "sleeveless"
    ],
    style_and_occasion: style_and_occasions,
    top_length: ["crop", "long", "regular"]
  },
  sweatshirts: {
    color: colors,
    material: materials,
    neckline: necklines,
    pattern: patterns,
    style_and_occasion: style_and_occasions,
    sleeve_length: [
      "three_quarter",
      "long_sleeve",
      "short_sleeve",
      "sleeveless"
    ],
    top_length: ["crop", "long", "regular"]
  },
  tops: {
    color: colors,
    material: materials,
    neckline: necklines,
    pattern: patterns,
    sleeve_length: [
      "three_quarter",
      "long_sleeve",
      "short_sleeve",
      "sleeveless"
    ],
    style_and_occasion: style_and_occasions,
    top_length: ["crop", "long", "regular"],
    upperwear_length: ["crop", "knee_length", "mid_length", "thigh_length"]
  }
};

module.exports = {
  taxonomy,
  colors,
  materials,
  necklines,
  patterns,
  style_and_occasions
};
