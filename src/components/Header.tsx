"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <button 
          className={styles.menuBtn} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
        <Link href="/" className={styles.brand}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Reva Creations" className={styles.logo} />
        </Link>
      </div>

      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/collections">Collections</Link>
        <Link href="/about">About</Link>
        <Link href="/atelier">Atelier</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <div className={styles.headerActions}>
        <a href="https://wa.me/919971015252?text=Hello%20Reva%20Creation!%20I'm%20Interested%20in%20your%20products" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "inherit", textDecoration: "none", fontWeight: 500 }}>
          Enquire
        </a>
      </div>

      {isMenuOpen && (
        <div className={styles.mobileDrawer}>
          <nav className={styles.mobileNav}>
            <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/collections" onClick={() => setIsMenuOpen(false)}>Collections</Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/atelier" onClick={() => setIsMenuOpen(false)}>Atelier</Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <a href="https://wa.me/919971015252?text=Hello%20Reva%20Creation!%20I'm%20Interested%20in%20your%20products" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className={styles.mobileEnquire}>Enquire</a>
          </nav>
        </div>
      )}
    </header>
  );
}
