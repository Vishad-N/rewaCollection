export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  badge?: string;
  metal?: string;
  images?: string[];
}

export const products: Product[] = [
  { id: "clutch", name: "Beaded envelope clutch", price: 4500, image: "/products/beaded_envelope_clutch.webp", images: ["/products/beaded_envelope_clutch.webp"], category: "Handbags", metal: "Handcrafted" },
  { id: "aesthetic-keychain", name: "Aesthetic Keychain (Handbag Assecories)", price: 1500, image: "/products/beaded_keychain.webp", images: ["/products/beaded_keychain.webp"], category: "Handbags", metal: "Beads & Alloy" },
  { id: "aesthetic-earrings", name: "Aesthetic Earrings", price: 2500, image: "/products/aesthetic_earrings.webp", images: ["/products/aesthetic_earrings.webp"], category: "Fashion jewellery", metal: "Beads & Brass" },
  { id: "embroidered-headband", name: "Embroidered Headband", price: 1800, image: "/products/embriodered_headband.webp", images: ["/products/embriodered_headband.webp"], category: "Fashion jewellery", metal: "Hand-embroidered" },
  { id: "designer-shoulder-handbag", name: "Designer Shoulder Handbag", price: 8500, image: "/products/designer_shoulder_handbag.webp", images: ["/products/designer_shoulder_handbag.webp"], category: "Handbags", metal: "Designer Craft" },
  { id: "golden-stylish-handbag", name: "Golden Stylish Handbag", price: 6500, image: "/products/golden_stylish_handbag.webp", images: ["/products/golden_stylish_handbag.webp"], category: "Handbags", metal: "Golden Details" },
  { id: "macaw-pair-earrings", name: "Macaw Pair Earrings", price: 3200, image: "/products/macow_pair_earrings.webp", images: ["/products/macow_pair_earrings.webp"], category: "Fashion jewellery", metal: "Hand-beaded" },
  { id: "light-weight-earrings", name: "Light Weight Earrings", price: 2800, image: "/products/light_weight_earrings.webp", images: ["/products/light_weight_earrings.webp"], category: "Fashion jewellery", metal: "Beads & Alloy" },
  { id: "modern-beadwork-envelope", name: "Modern Beadwork Envelope", price: 4200, image: "/products/modern_beadwork_envelope.webp", images: ["/products/modern_beadwork_envelope.webp"], category: "Handbags", metal: "Modern Beads" },
  { id: "beads-earrings", name: "Beaded Earrings", price: 4500, image: "/products/beads_earrings.webp", images: ["/products/beads_earrings.webp"], category: "Fashion jewellery", metal: "Glass Beads & Brass" },
  { id: "beads-bracelet", name: "Beaded Bracelet", price: 3200, image: "/products/beads_bracellete.png", images: ["/products/beads_bracellete.png"], category: "Fashion jewellery", metal: "Glass Beads" },
  { id: "sling", name: "Embroidered sling", price: 5800, image: "/hero_bag_jewellery_1789373411823.jpg", category: "Handbags", metal: "Cotton Silk" },
  { id: "ring", name: "Celeste Solitaire Ring", price: 48900, oldPrice: 60000, image: "/product_ring_1789371374171.jpg", category: "Fashion jewellery", badge: "New", metal: "18k Solid Gold" },
  { id: "hoops", name: "Twisted Gold Hoops", price: 18500, oldPrice: 24000, image: "/imagine_images/md0OH.jpg", category: "Fashion jewellery", metal: "14k Yellow Gold" },
  { id: "bracelet", name: "Aurelia Bracelet", price: 86000, oldPrice: 110000, image: "/imagine_images/9rvvk.jpg", category: "Fashion jewellery", metal: "18k White Gold" },
  { id: "premium-handbag", name: "Premium Luxury Handbag", price: 12500, image: "/products/premium_luxy_handbag.webp", images: ["/products/premium_luxy_handbag.webp"], category: "Handbags", metal: "Premium Leather" },
  { id: "throw", name: "Woven throw", price: 3600, image: "/atelier_embroidery_1789371212302.jpg", category: "Home", metal: "Cotton" },
  { id: "accent", name: "Beaded table accent", price: 1800, image: "/atelier_beading_1789371225188.jpg", category: "Home", metal: "Glass Beads" },
  {
    id: "parrot-beads-bag",
    name: "Parrot Beaded Bag",
    price: 48900,
    oldPrice: 60000,
    image: "/products/Parrot_beads_bag_1.webp",
    images: ["/products/Parrot_beads_bag_1.webp", "/products/Parrot_beads_bag_2.webp", "/products/Parrot_beads_bag_3.webp"],
    category: "Handbags",
    badge: "New",
    metal: "Handcrafted Beading",
  },
  {
    id: "twisted-gold-hoops",
    name: "Twisted Gold Hoops",
    price: 18500,
    oldPrice: 24000,
    image: "/imagine_images/md0OH.jpg",
    category: "earrings",
    metal: "14k Yellow Gold",
  },
  {
    id: "tear-drop-pendant",
    name: "Tear Drop Pendant",
    price: 22400,
    oldPrice: 30000,
    image: "/imagine_images/d4U7S.jpg",
    category: "necklaces",
    metal: "18k Rose Gold",
  },
  {
    id: "aurelia-diamond-bracelet",
    name: "Aurelia Diamond Bracelet",
    price: 86000,
    oldPrice: 110000,
    image: "/imagine_images/9rvvk.jpg",
    category: "bracelets",
    metal: "18k White Gold",
  },
  {
    id: "ethereal-pearl-ring",
    name: "Ethereal Pearl Ring",
    price: 34200,
    image: "/imagine_images/5f4cV.jpg",
    category: "rings",
    metal: "14k Solid Gold",
  },
  {
    id: "classic-gold-studs",
    name: "Classic Gold Studs",
    price: 14000,
    image: "/imagine_images/md0OH.jpg",
    category: "earrings",
    badge: "Bestseller",
    metal: "18k Yellow Gold",
  },
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}
