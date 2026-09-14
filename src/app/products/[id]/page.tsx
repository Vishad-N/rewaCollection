"use client";

import Link from "next/link";
import styles from "./product.module.css";
import { useState, use } from "react";
import { useCart } from "@/context/CartContext";
import { products, formatPrice } from "@/data/products";

export default function ProductDetails({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [activeTab, setActiveTab] = useState("additional");
  const [activeSize, setActiveSize] = useState("Size 6");
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const product = products.find(p => p.id === resolvedParams.id) || products[0];

  const handleAddToCart = () => {
    addToCart(product, quantity, activeSize);
  };

  return (
    <main className={styles.page}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumb}>
        <Link href="/">Home</Link> <span>›</span>
        <Link href="/collections">Shop</Link> <span>›</span>
        <span>Product Details</span>
      </div>

      {/* Top Section */}
      <section className={styles.topSection}>
        {/* Left: Gallery */}
        <div className={styles.gallery}>
          <div className={styles.mainImage}>
            {product.badge && <div className={styles.discountBadge}>{product.badge}</div>}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={product.image} alt={product.name} />
            <div className={`${styles.navArrow} ${styles.left}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </div>
            <div className={`${styles.navArrow} ${styles.right}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </div>
          <div className={styles.thumbnails}>
            <div className={`${styles.thumb} ${styles.active}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={product.image} alt="Thumb 1" />
            </div>
            <div className={styles.thumb}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/imagine_images/md0OH.jpg" alt="Thumb 2" />
            </div>
            <div className={styles.thumb}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/imagine_images/d4U7S.jpg" alt="Thumb 3" />
            </div>
            <div className={styles.thumb}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/imagine_images/9rvvk.jpg" alt="Thumb 4" />
            </div>
          </div>
        </div>

        {/* Right: Info */}
        <div className={styles.info}>
          <div className={styles.category}>{product.category}</div>
          <div className={styles.titleRow}>
            <h1 className={styles.title}>{product.name}</h1>
            <span className={styles.stockBadge}>In Stock</span>
          </div>

          <div className={styles.reviews}>
            <div className={styles.stars}>
              {[...Array(4)].map((_, i) => (
                <svg key={i} viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                 <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
            <span>4.8 (245 Reviews)</span>
          </div>

          <div className={styles.prices}>
            <div className={styles.price}>{formatPrice(product.price)}</div>
            {product.oldPrice && <div className={styles.oldPrice}>{formatPrice(product.oldPrice)}</div>}
          </div>

          <p className={styles.description}>
            A timeless classic, designed to capture light from every angle, it brings unparalleled elegance to your most cherished moments.
          </p>

          <div className={styles.optionsLabel}>Ring Size</div>
          <div className={styles.sizes}>
            {["Size 5", "Size 6", "Size 7", "Size 8"].map((size) => (
              <button
                key={size}
                className={`${styles.sizeBtn} ${activeSize === size ? styles.active : ""}`}
                onClick={() => setActiveSize(size)}
              >
                {size}
              </button>
            ))}
          </div>

          <div className={styles.actionRow}>
            <div className={styles.quantity}>
              <button className={styles.qtyBtn} onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
              <input type="text" className={styles.qtyInput} value={quantity} readOnly />
              <button className={styles.qtyBtn} onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <button className={styles.btnPrimary} onClick={handleAddToCart}>
              Add To Cart
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <path d="M9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                <path d="M20 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </button>
            <button className={styles.btnGhost}>Buy Now</button>
            <button className={styles.wishlistBtn}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
              </svg>
            </button>
          </div>

          <div className={styles.metaList}>
            <div className={styles.metaRow}>
              <span className={styles.metaLabel}>SKU :</span>
              <span>REV85648HGJ</span>
            </div>
            <div className={styles.metaRow}>
              <span className={styles.metaLabel}>Tags :</span>
              <span>Jewellery, Rings, Solitaire</span>
            </div>
            <div className={styles.metaRow}>
              <span className={styles.metaLabel}>Share :</span>
              <div className={styles.socialIcons}>
                <a href="#" className={styles.socialIcon}>
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                </a>
                <a href="#" className={styles.socialIcon}>
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
                </a>
                <a href="#" className={styles.socialIcon}>
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-7a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm4 7h-2v-6h2v6z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className={styles.tabsSection}>
        <div className={styles.tabHeaders}>
          <button
            className={`${styles.tabHeader} ${activeTab === "description" ? styles.active : ""}`}
            onClick={() => setActiveTab("description")}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            Description
          </button>
          <button
            className={`${styles.tabHeader} ${activeTab === "additional" ? styles.active : ""}`}
            onClick={() => setActiveTab("additional")}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
            Additional Information
          </button>
          <button
            className={`${styles.tabHeader} ${activeTab === "reviews" ? styles.active : ""}`}
            onClick={() => setActiveTab("reviews")}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            Reviews (245)
          </button>
        </div>

        <div className={styles.tabContent}>
          {activeTab === "additional" && (
            <table className={styles.attributesTable}>
              <tbody>
                <tr className={styles.tableHead}>
                  <td>Attribute</td>
                  <td>Details</td>
                </tr>
                <tr>
                  <td>Material</td>
                  <td>18k Solid Gold</td>
                </tr>
                <tr>
                  <td>Gemstone</td>
                  <td>Natural Diamond, VVS Clarity, F Color</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>Approx. 3.2 Grams</td>
                </tr>
                <tr>
                  <td>Craftsmanship</td>
                  <td>Hand-polished in our Jaipur Atelier</td>
                </tr>
                <tr>
                  <td>Packaging</td>
                  <td>Premium Velvet Box with Certification</td>
                </tr>
              </tbody>
            </table>
          )}
          {activeTab === "description" && (
            <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>
              This breathtaking solitaire ring captures the essence of eternal love. The band is smoothly polished and seamlessly tapers toward the center stone, enhancing the brilliance of the natural diamond. Perfect as an engagement ring or a statement piece for special occasions.
            </p>
          )}
          {activeTab === "reviews" && (
            <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>
              Customer reviews will be displayed here.
            </p>
          )}
        </div>
      </section>

      {/* Related Products */}
      <section className={styles.relatedSection}>
        <div className={styles.relatedTitle}>
          <span>Related Products</span>
          <h2>You <span>May Also Like</span></h2>
        </div>
        <div className={styles.grid}>
          {products
            .filter((p) => p.id !== product.id)
            .slice(0, 4)
            .map((item) => (
            <Link href={`/products/${item.id}`} key={item.id} className={styles.card}>
              {item.badge && <div className={styles.cardBadge}>{item.badge}</div>}
              <button className={styles.cardWishlist} onClick={(e) => e.preventDefault()}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" /></svg>
              </button>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.image} alt={item.name} />
              
              <div className={styles.cardMeta}>
                <span className={styles.cardCategory}>{item.category}</span>
                <h3 className={styles.cardTitle}>{item.name}</h3>
                <div className={styles.cardPrices}>
                  <span className={styles.cardPrice}>{formatPrice(item.price)}</span>
                  {item.oldPrice && <span className={styles.cardOldPrice}>{formatPrice(item.oldPrice)}</span>}
                </div>
                <div className={styles.cardCartBtn}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    <path d="M20 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Bar */}
      <section className={styles.featuresSection}>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
          </div>
          <div className={styles.featureText}>
            <h4>Free Shipping</h4>
            <p>Free shipping on orders above ₹50,000</p>
          </div>
        </div>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
          </div>
          <div className={styles.featureText}>
            <h4>Flexible Payment</h4>
            <p>Multiple secure payment options</p>
          </div>
        </div>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </div>
          <div className={styles.featureText}>
            <h4>24x7 Support</h4>
            <p>We support you online all days.</p>
          </div>
        </div>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          </div>
          <div className={styles.featureText}>
            <h4>100% Authentic</h4>
            <p>Original products with quality assurance</p>
          </div>
        </div>
      </section>

    </main>
  );
}
