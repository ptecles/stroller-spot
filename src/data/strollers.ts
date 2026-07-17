export type Stroller = {
  rank: number;
  name: string;
  brand: string;
  tagline: string;
  price: string;
  weight: string;
  bestFor: string;
  features: string[];
  rating: number;
  affiliateUrl: string;
};

export const compactStrollers: Stroller[] = [
  { rank: 1, name: "YOYO2", brand: "Babyzen", tagline: "The gold standard of one-hand travel folds.", price: "$499", weight: "13.6 lbs", bestFor: "Frequent flyers", features: ["Cabin-approved fold", "One-hand collapse", "Full recline"], rating: 4.9, affiliateUrl: "#" },
  { rank: 2, name: "Libelle", brand: "Bugaboo", tagline: "Ultralight urban sprinter.", price: "$449", weight: "15 lbs", bestFor: "City parents", features: ["Fits in overhead bin", "Large canopy", "Smooth suspension"], rating: 4.8, affiliateUrl: "#" },
  { rank: 3, name: "Minu V2", brand: "UPPAbaby", tagline: "Premium travel with a full-size feel.", price: "$449", weight: "16.9 lbs", bestFor: "Everyday errands", features: ["Extendable canopy", "Newborn insert compatible", "Self-standing fold"], rating: 4.8, affiliateUrl: "#" },
  { rank: 4, name: "Jubilee", brand: "Colugo", tagline: "Direct-to-consumer value, premium build.", price: "$345", weight: "15.4 lbs", bestFor: "Budget-savvy travelers", features: ["Included travel bag", "Vegan leather handle", "Compact fold"], rating: 4.7, affiliateUrl: "#" },
  { rank: 5, name: "Pockit+ All-Terrain", brand: "GB", tagline: "The world's most compact fold.", price: "$299", weight: "14.3 lbs", bestFor: "Minimalists", features: ["Fits in a backpack folded", "All-terrain wheels", "Two-step fold"], rating: 4.6, affiliateUrl: "#" },
  { rank: 6, name: "Ozzy", brand: "Ergobaby Metro+", tagline: "Full-size ride in a carry-on frame.", price: "$369", weight: "17.4 lbs", bestFor: "Long-day outings", features: ["Deep recline", "One-hand fold", "Air-craft compliant"], rating: 4.7, affiliateUrl: "#" },
  { rank: 7, name: "Zeen", brand: "Zoe", tagline: "Lightweight umbrella with grown-up comfort.", price: "$275", weight: "10.5 lbs", bestFor: "Toddler on the go", features: ["Machine washable seat", "Cup holder included", "Umbrella-style fold"], rating: 4.5, affiliateUrl: "#" },
  { rank: 8, name: "Cruz V2", brand: "Nuna TRVL", tagline: "Auto-fold magic in a travel frame.", price: "$550", weight: "14.7 lbs", bestFor: "Tech-loving parents", features: ["Auto-unfold with strap", "Magnetic buckle", "Ring-adjust harness"], rating: 4.8, affiliateUrl: "#" },
  { rank: 9, name: "3Dlite+", brand: "Summer Infant", tagline: "Affordable, feather-light everyday umbrella.", price: "$99", weight: "12 lbs", bestFor: "Budget shoppers", features: ["Aluminum frame", "Deep multi-position recline", "Extra-large storage basket"], rating: 4.4, affiliateUrl: "#" },
  { rank: 10, name: "Contours Bitsy", brand: "Contours", tagline: "Elevated compact with a wide seat.", price: "$199", weight: "16 lbs", bestFor: "Growing toddlers", features: ["Extra-wide seat", "Adjustable handlebar", "Compact standing fold"], rating: 4.5, affiliateUrl: "#" },
];

export const robustStrollers: Stroller[] = [
  { rank: 1, name: "Vista V2", brand: "UPPAbaby", tagline: "The definitive multi-child luxury stroller.", price: "$999", weight: "27 lbs", bestFor: "Growing families", features: ["Expands to 3 kids", "Included bassinet", "All-wheel suspension"], rating: 4.9, affiliateUrl: "#" },
  { rank: 2, name: "Fox 5", brand: "Bugaboo", tagline: "All-terrain flagship with plush suspension.", price: "$1,459", weight: "26.5 lbs", bestFor: "Mixed terrain", features: ["Central suspension", "Reversible seat", "Off-road foam wheels"], rating: 4.9, affiliateUrl: "#" },
  { rank: 3, name: "MIXX Next", brand: "Nuna", tagline: "Effortless push, all-wheel suspension.", price: "$800", weight: "27.5 lbs", bestFor: "Daily driver comfort", features: ["Magnetic harness", "Free-standing fold", "Three-position recline"], rating: 4.8, affiliateUrl: "#" },
  { rank: 4, name: "Cruz V2", brand: "UPPAbaby", tagline: "Full-size performance, single-child focus.", price: "$749", weight: "22.3 lbs", bestFor: "Urban explorers", features: ["Extendable canopy", "Included bug shield", "Large storage basket"], rating: 4.8, affiliateUrl: "#" },
  { rank: 5, name: "City Mini GT2", brand: "Baby Jogger", tagline: "All-terrain agility with one-hand fold.", price: "$430", weight: "22.4 lbs", bestFor: "Suburbs & trails", features: ["Rubberized all-terrain wheels", "All-wheel suspension", "Hand-operated parking brake"], rating: 4.7, affiliateUrl: "#" },
  { rank: 6, name: "Revolution Flex 3.0", brand: "BOB Gear", tagline: "The runner's stroller, evolved.", price: "$599", weight: "28.5 lbs", bestFor: "Active parents", features: ["Adjustable jogging handlebar", "Air-filled tires", "Locking front wheel"], rating: 4.8, affiliateUrl: "#" },
  { rank: 7, name: "Demi Grow", brand: "Nuna", tagline: "Grows with your family, luxe finish.", price: "$900", weight: "25.5 lbs", bestFor: "Second baby ready", features: ["23 seat configurations", "Leatherette details", "Magnetic Dream Drape"], rating: 4.8, affiliateUrl: "#" },
  { rank: 8, name: "Ridge", brand: "Thule", tagline: "Rugged jogger built for real trails.", price: "$800", weight: "28 lbs", bestFor: "Off-road running", features: ["Puncture-resistant tires", "Twist-lock front wheel", "Reflective details"], rating: 4.7, affiliateUrl: "#" },
  { rank: 9, name: "Ramble XL", brand: "UPPAbaby", tagline: "Wagon-style hauler for two.", price: "$899", weight: "34 lbs", bestFor: "Beach & park days", features: ["Seats two + gear", "All-terrain wheels", "Fits through standard doorways"], rating: 4.7, affiliateUrl: "#" },
  { rank: 10, name: "Redsbaby Nuvo", brand: "Redsbaby", tagline: "Premium build without the premium markup.", price: "$650", weight: "24 lbs", bestFor: "Value seekers", features: ["Reversible seat", "One-hand fold", "Puncture-proof tires"], rating: 4.6, affiliateUrl: "#" },
];
