"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import styles from "./category.module.css";
import { products, formatPrice } from "@/data/products";

const categoryConfig: Record<string, any> = {
  rings: {
    title: "Rings",
    line1: "Solitaires, bands, and stacking pieces.",
    line2: "Hand-finished in solid gold · Made in our atelier",
    chips: ["All", "Solitaire", "Pearl", "Stacking"],
  },
  earrings: {
    title: "Earrings",
    line1: "Hoops and studs in 18k and 14k.",
    line2: "Made to be lived in · Handcrafted",
    chips: ["All", "Hoops", "Studs"],
  },
  necklaces: {
    title: "Necklaces",
    line1: "Chains and drops, set by hand.",
    line2: "Solid gold · Ethical diamonds",
    chips: ["All", "Pendant", "Chain"],
  },
  bracelets: {
    title: "Bracelets",
    line1: "Statement lines and everyday cuffs.",
    line2: "Made to sit alone or stack · 18k Gold",
    chips: ["All", "Tennis", "Cuff"],
  },
};

export default function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = use(params);
  const [activeChip, setActiveChip] = useState("All");
  
  // We don't have deeply typed dummy data for the chips yet, so we'll just filter by category initially
  const filteredProducts = products.filter((p) => p.category === category);
  const config = categoryConfig[category] || {
    title: category,
    line1: "Curated selection.",
    line2: "Solid gold · Atelier made",
    chips: ["All"],
  };

  const count = filteredProducts.length;
  const isEditState = count <= 1;

  // Determine which smart grid layout to use
  let gridClass = styles.grid3;
  if (count === 1) gridClass = styles.grid1;
  else if (count === 2) gridClass = styles.grid2;

  return (
    <main className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <h1>{isEditState ? `${config.title} Edit` : config.title}</h1>
        <div className={styles.headerCopy}>
          {config.line1}
          <span>{config.line2} · {count} {count === 1 ? "piece" : "pieces"}</span>
        </div>
      </header>

      {/* Thin Shop Bar */}
      <div className={styles.shopBar}>
        <div className={styles.shopChips}>
          {config.chips.map((chip: string, i: number) => (
            <div key={chip} style={{ display: "flex", alignItems: "center", gap: "24px" }}>
              <button
                className={activeChip === chip ? styles.active : ""}
                onClick={() => setActiveChip(chip)}
              >
                {chip}
              </button>
              {i < config.chips.length - 1 && <span>·</span>}
            </div>
          ))}
        </div>
        <div className={styles.shopRight}>
          <div className={styles.sortSelect}>
            Sort: Featured
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
          <span>{count} {count === 1 ? "piece" : "pieces"}</span>
        </div>
      </div>

      {/* Smart Grid */}
      <div className={styles.gridWrapper}>
        <div className={gridClass}>
          {filteredProducts.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id} className={styles.card}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={product.image} alt={product.name} />
              {product.badge && (
                <div className={styles.badge}>
                  {product.badge}
                </div>
              )}
              <div className={styles.cardMeta}>
                <div>
                  <h3>{product.name}</h3>
                  <span className={styles.cardMetal}>{product.metal}</span>
                </div>
                <div className={styles.cardPrice}>
                  {formatPrice(product.price)}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State Link */}
        {isEditState && (
          <div className={styles.emptyState}>
            <p>Looking for something specific?</p>
            <Link href="/atelier">
              Enquire for a custom piece →
            </Link>
          </div>
        )}
      </div>

      {/* Atelier Block (Trust Strip reused) */}
      <section className={styles.trustStrip}>
        <div className={styles.trustItem}>
          <div className={styles.trustIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          </div>
          <div className={styles.trustText}>
            <h4>BIS Hallmark</h4>
            <p>100% authentic pure gold</p>
          </div>
        </div>
        <div className={styles.trustItem}>
          <div className={styles.trustIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/></svg>
          </div>
          <div className={styles.trustText}>
            <h4>Certified Diamonds</h4>
            <p>Ethically sourced & graded</p>
          </div>
        </div>
        <div className={styles.trustItem}>
          <div className={styles.trustIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21.5 12H16c-.7 2-2 3-4 3s-3.3-1-4-3H2.5"/><path d="M5.5 5.1L2 12v6c0 1.1.9 2 2 2h16a2 2 0 002-2v-6l-3.4-6.9A2 2 0 0016.8 4H7.2a2 2 0 00-1.8 1.1z"/></svg>
          </div>
          <div className={styles.trustText}>
            <h4>14-Day Returns</h4>
            <p>Shop with total confidence</p>
          </div>
        </div>
        <div className={styles.trustItem}>
          <div className={styles.trustIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </div>
          <div className={styles.trustText}>
            <h4>By Appointment</h4>
            <p>Visit our Pachore Production Unit</p>
          </div>
        </div>
      </section>
    </main>
  );
}
