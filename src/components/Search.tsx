"use client";

import { useCart } from "@/context/CartContext";
import styles from "./Search.module.css";
import { useState, useEffect, useRef } from "react";
import { products, formatPrice } from "@/data/products";
import Link from "next/link";

export default function Search() {
  const { isSearchOpen, setIsSearchOpen } = useCart();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "auto";
      setQuery("");
    }
    return () => {
      document.body.style.overflow = "auto";
    }
  }, [isSearchOpen]);

  const results = query.trim() === "" 
    ? [] 
    : products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()) || p.category.includes(query.toLowerCase()));

  return (
    <div className={`${styles.overlay} ${isSearchOpen ? styles.open : ""}`}>
      <div className={styles.header}>
        <div className={styles.searchIcon}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32">
            <circle cx="11" cy="11" r="7"/>
            <path d="M20 20l-3-3"/>
          </svg>
        </div>
        <input 
          ref={inputRef}
          type="text" 
          className={styles.input} 
          placeholder="Search for jewellery..." 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className={styles.closeBtn} onClick={() => setIsSearchOpen(false)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      <div className={styles.results}>
        {query.trim() !== "" && results.length === 0 ? (
          <p className={styles.emptyState}>No results found for &quot;{query}&quot;</p>
        ) : (
          <div className={styles.resultsGrid}>
            {results.map((product) => (
              <Link 
                href={`/products/${product.id}`} 
                key={product.id} 
                className={styles.card}
                onClick={() => setIsSearchOpen(false)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={product.image} alt={product.name} />
                <div className={styles.cardMeta}>
                  <div>
                    <h3>{product.name}</h3>
                    <span>{formatPrice(product.price)}</span>
                  </div>
                  <div className={styles.arrow}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
