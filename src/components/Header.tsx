"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { setIsCartOpen, setIsSearchOpen, totalItems } = useCart();

  return (
    <header className={styles.header}>
      <div className={styles.brand}>REVA CREATION</div>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/collections">Collections</Link>
        <Link href="/about">About</Link>
        <Link href="/atelier">Atelier</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <div className={styles.headerActions}>
        <button style={{ background: "none", border: "none", cursor: "pointer", color: "inherit", display: "flex" }} onClick={() => setIsSearchOpen(true)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="18" height="18">
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3-3" />
          </svg>
        </button>
        <button style={{ background: "none", border: "none", cursor: "pointer", color: "inherit", display: "flex" }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="18" height="18">
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
          </svg>
        </button>
        <button 
          style={{ background: "none", border: "none", cursor: "pointer", color: "inherit", display: "flex", position: "relative" }} 
          onClick={() => setIsCartOpen(true)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="18" height="18">
            <path d="M6 7h15l-1.4 8.2a2 2 0 0 1-2 1.8H9.2a2 2 0 0 1-2-1.7L5 4H2" />
            <circle cx="9" cy="20" r="1.4" />
            <circle cx="18" cy="20" r="1.4" />
          </svg>
          {totalItems > 0 && (
            <span style={{ 
              position: "absolute", 
              top: "-8px", 
              right: "-8px", 
              background: "var(--gold-dark)", 
              color: "white", 
              fontSize: "10px", 
              width: "16px", 
              height: "16px", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              borderRadius: "50%",
              fontWeight: "bold"
            }}>
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
