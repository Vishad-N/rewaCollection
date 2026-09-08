import Link from "next/link";
import styles from "./page.module.css";
import ReelsSection from "@/components/ReelsSection";
import { products, formatPrice } from "@/data/products";

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <div className={styles.eyebrow}>Collection 2026</div>
          <h1>
            REVA
            <br />
            CREATION
          </h1>
          <div className={styles.heroTag}>A celestial touch for timeless moments.</div>
          <p>
            Discover exquisitely crafted jewellery inspired by the quiet beauty of
            heirlooms. Each piece is made to bring elegance and grace to your most
            cherished occasions.
          </p>
          <Link className={styles.btn} href="/collections">
            Discover <span>→</span>
          </Link>
        </div>
        <div className={styles.heroVisual}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/imagine_images/sJG9X.jpg"
            alt="Reva Creation rings on porcelain hand"
          />
          <div className={styles.heroCats}>
            <Link href="/collections/rings">
              Rings <span>→</span>
            </Link>
            <Link href="/collections/earrings">
              Earrings <span>→</span>
            </Link>
            <Link href="/collections/necklaces">
              Necklaces <span>→</span>
            </Link>
            <Link href="/collections/bracelets">
              Bracelets <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.about} id="about">
        <div>
          <h2>
            About
            <br />
            Us
          </h2>
          <p>
            At Reva Creation, jewellery is more than an accessory. It is a quiet
            expression of elegance and a celebration of life’s most precious moments.
          </p>
          <p>
            We select the finest materials — precious metals, sparkling gemstones
            and luminous pearls — and work with skilled artisans so that every piece
            is not only beautiful, but built to last.
          </p>
          <p>
            Whether you are marking love, a special occasion, or simply treating
            yourself, we invite you to experience the celestial elegance that
            defines us.
          </p>
          <Link
            className={`${styles.btn} ${styles.btnGhost}`}
            href="/about"
            style={{ marginTop: "22px" }}
          >
            More about us →
          </Link>
        </div>
        <div className={styles.aboutPhoto}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/imagine_images/YvnEZ.jpg" alt="Reva Creation campaign" />
        </div>
      </section>

      <ReelsSection />

      <section className={styles.products} id="products">
        <div className={styles.productsHead}>
          <h2>New from the atelier</h2>
          <Link href="/collections">View all →</Link>
        </div>
        <div className={styles.grid}>
          {products.slice(0, 4).map((product) => (
            <Link href={`/products/${product.id}`} key={product.id} className={styles.card}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={product.image} alt={product.name} />
              {product.badge && (
                <div className={styles.badge}>
                  {product.badge}{" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
                  </svg>
                </div>
              )}
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
      </section>

      <section className={styles.cats} id="collections">
        <Link className={styles.cat} href="/collections/rings">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/imagine_images/5f4cV.jpg" alt="Rings" />
          <h3>
            Rings <span>→</span>
          </h3>
        </Link>
        <Link className={styles.cat} href="/collections/earrings">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/imagine_images/md0OH.jpg" alt="Earrings" />
          <h3>
            Earrings <span>→</span>
          </h3>
        </Link>
        <Link className={styles.cat} href="/collections/necklaces">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/imagine_images/d4U7S.jpg" alt="Necklaces" />
          <h3>
            Necklaces <span>→</span>
          </h3>
        </Link>
        <Link className={styles.cat} href="/collections/bracelets">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/imagine_images/9rvvk.jpg" alt="Bracelets" />
          <h3>
            Bracelets <span>→</span>
          </h3>
        </Link>
      </section>
    </main>
  );
}
