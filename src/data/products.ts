export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  badge?: string;
  metal?: string;
}

export const products: Product[] = [
  { id: "clutch", name: "Beaded envelope clutch", price: 4500, image: "/product_clutch_1789371394234.jpg", category: "Handbags", metal: "Handcrafted" },
  { id: "tote", name: "Raffia market tote", price: 3200, image: "/product_tote_1789371407229.jpg", category: "Handbags", metal: "Raffia & Leather" },
  { id: "sling", name: "Embroidered sling", price: 5800, image: "/hero_bag_jewellery_1789373411823.jpg", category: "Handbags", metal: "Cotton Silk" },
  { id: "ring", name: "Celeste Solitaire Ring", price: 48900, oldPrice: 60000, image: "/product_ring_1789371374171.jpg", category: "Fashion jewellery", badge: "New", metal: "18k Solid Gold" },
  { id: "hoops", name: "Twisted Gold Hoops", price: 18500, oldPrice: 24000, image: "/imagine_images/md0OH.jpg", category: "Fashion jewellery", metal: "14k Yellow Gold" },
  { id: "bracelet", name: "Aurelia Bracelet", price: 86000, oldPrice: 110000, image: "/imagine_images/9rvvk.jpg", category: "Fashion jewellery", metal: "18k White Gold" },
  { id: "cushion", name: "Embroidered cushion", price: 2400, image: "/product_cushion_1789371419434.jpg", category: "Home", metal: "Linen" },
  { id: "throw", name: "Woven throw", price: 3600, image: "/atelier_embroidery_1789371212302.jpg", category: "Home", metal: "Cotton" },
  { id: "accent", name: "Beaded table accent", price: 1800, image: "/atelier_beading_1789371225188.jpg", category: "Home", metal: "Glass Beads" },
  {
    id: "celeste-solitaire-ring",
    name: "Celeste Solitaire Ring",
    price: 48900,
    oldPrice: 60000,
    image: "/imagine_images/5f4cV.jpg",
    category: "rings",
    badge: "New",
    metal: "18k Solid Gold",
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
