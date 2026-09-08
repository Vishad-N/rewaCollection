export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: "rings" | "earrings" | "necklaces" | "bracelets";
  badge?: string;
  metal: string;
}

export const products: Product[] = [
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
