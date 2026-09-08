import Link from "next/link";
import styles from "./collections.module.css";
import { products, formatPrice } from "@/data/products";

export default function Collections() {
  return (
    <main className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <h1>The Atelier Edit</h1>
        <p>
          Six pieces from the atelier — solitaires, hoops, and everyday gold, 
          hand-polished in Jaipur and Mumbai.
        </p>
      </header>

      {/* Category Strip */}
      <section className={styles.categoryStrip}>
        <Link href="/collections/rings" className={styles.categoryCard}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/imagine_images/5f4cV.jpg" alt="Rings" />
          <div className={styles.categoryOverlay}>
            <h3>Rings</h3>
            <span>2 PIECES</span>
          </div>
        </Link>
        <Link href="/collections/earrings" className={styles.categoryCard}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/imagine_images/md0OH.jpg" alt="Earrings" />
          <div className={styles.categoryOverlay}>
            <h3>Earrings</h3>
            <span>2 PIECES</span>
          </div>
        </Link>
        <Link href="/collections/necklaces" className={styles.categoryCard}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/imagine_images/d4U7S.jpg" alt="Necklaces" />
          <div className={styles.categoryOverlay}>
            <h3>Necklaces</h3>
            <span>1 PIECE</span>
          </div>
        </Link>
        <Link href="/collections/bracelets" className={styles.categoryCard}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/imagine_images/9rvvk.jpg" alt="Bracelets" />
          <div className={styles.categoryOverlay}>
            <h3>Bracelets</h3>
            <span>1 PIECE</span>
          </div>
        </Link>
      </section>

      {/* Filter Bar */}
      <div className={styles.filterBar}>
        <div className={styles.filterLinks}>
          <Link href="/collections" className={styles.active}>All</Link>
          <span className={styles.filterDot}>·</span>
          <Link href="/collections/rings">Rings</Link>
          <span className={styles.filterDot}>·</span>
          <Link href="/collections/earrings">Earrings</Link>
          <span className={styles.filterDot}>·</span>
          <Link href="/collections/necklaces">Necklaces</Link>
          <span className={styles.filterDot}>·</span>
          <Link href="/collections/bracelets">Bracelets</Link>
        </div>
        <div className={styles.filterRight}>
          <div className={styles.sortSelect}>
            Sort: Featured
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
          <span>{products.length} pieces</span>
        </div>
      </div>

      {/* Product Grid (3 Columns) */}
      <div className={styles.grid}>
        {products.map((product) => (
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

      {/* Editorial Break */}
      <section className={styles.editorial}>
        <div className={styles.editorialImage}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/imagine_images/YvnEZ.jpg" alt="Editorial Campaign" />
        </div>
        <div className={styles.editorialCopy}>
          <span>Featured Edit</span>
          <h2>The Everyday<br/>Elegance</h2>
          <Link href="/collections/earrings" className={styles.editorialLink}>
            Shop earrings
          </Link>
        </div>
      </section>

      {/* Trust Strip */}
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
            <p>Visit our Mumbai & Jaipur ateliers</p>
          </div>
        </div>
      </section>
    </main>
  );
}
