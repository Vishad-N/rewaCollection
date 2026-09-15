import Link from "next/link";
import styles from "./collections.module.css";

const collectionItems = [
  { id: "clutch", name: "Beaded envelope clutch", category: "Handbags", image: "/products/beaded_envelope_clutch.webp" },
  { id: "aesthetic-keychain", name: "Aesthetic Keychain (Handbag Assecories)", category: "Handbags", image: "/products/beaded_keychain.webp" },
  { id: "aesthetic-earrings", name: "Aesthetic Earrings", category: "Fashion jewellery", image: "/products/aesthetic_earrings.webp" },
  { id: "embroidered-headband", name: "Embroidered Headband", category: "Fashion jewellery", image: "/products/embriodered_headband.webp" },
  { id: "designer-shoulder-handbag", name: "Designer Shoulder Handbag", category: "Handbags", image: "/products/designer_shoulder_handbag.webp" },
  { id: "golden-stylish-handbag", name: "Golden Stylish Handbag", category: "Handbags", image: "/products/golden_stylish_handbag.webp" },
  { id: "macaw-pair-earrings", name: "Macaw Pair Earrings", category: "Fashion jewellery", image: "/products/macow_pair_earrings.webp" },
  { id: "light-weight-earrings", name: "Light Weight Earrings", category: "Fashion jewellery", image: "/products/light_weight_earrings.webp" },
  { id: "modern-beadwork-envelope", name: "Modern Beadwork Envelope", category: "Handbags", image: "/products/modern_beadwork_envelope.webp" },
];

export default function Collections() {
  return (
    <main className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <h1>Collections</h1>
        <p>
          Handbags, fashion jewellery and home furnishings. Developed for retail partners and shown here as a lookbook — not a shop.
        </p>
      </header>

      {/* Category Strip */}
      <section className={styles.categoryStrip}>
        <Link href="/collections/handbags" className={styles.categoryCard}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/products/c_handbag.webp" alt="Handbags" />
          <div className={styles.categoryOverlay}>
            <h3>Handbags</h3>
            <span>Lookbook</span>
          </div>
        </Link>
        <Link href="/collections/jewellery" className={styles.categoryCard}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/products/c_jewellery.webp" alt="Jewellery" />
          <div className={styles.categoryOverlay}>
            <h3>Jewellery</h3>
            <span>Lookbook</span>
          </div>
        </Link>
        <Link href="/collections/home" className={styles.categoryCard}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/products/c_home.webp" alt="Home" />
          <div className={styles.categoryOverlay}>
            <h3>Home</h3>
            <span>Lookbook</span>
          </div>
        </Link>
        <Link href="/collections/private-label" className={styles.categoryCard}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/atelier_sampling_1789371198985.jpg" alt="Private label" />
          <div className={styles.categoryOverlay}>
            <h3>Private label</h3>
            <span>By brief</span>
          </div>
        </Link>
      </section>

      {/* Filter Bar */}
      <div className={styles.filterBar}>
        <div className={styles.filterLinks}>
          <Link href="/collections" className={styles.active}>All</Link>
          <span className={styles.filterDot}>·</span>
          <Link href="/collections/handbags">Handbags</Link>
          <span className={styles.filterDot}>·</span>
          <Link href="/collections/jewellery">Jewellery</Link>
          <span className={styles.filterDot}>·</span>
          <Link href="/collections/home">Home</Link>
          <span className={styles.filterDot}>·</span>
          <Link href="/collections/private-label">Private label</Link>
        </div>
        <div className={styles.filterRight}>
          <span>View</span>
        </div>
      </div>

      {/* Product Grid (3 Columns) */}
      <div className={styles.grid}>
        {collectionItems.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id} className={styles.card}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={product.image} alt={product.name} />
            <div className={styles.cardMeta}>
              <div>
                <h3>{product.name}</h3>
                <span className={styles.cardMetal}>{product.category}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Editorial Break */}
      <section className={styles.editorial}>
        <div className={styles.editorialImage}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/about_portrait_1789373426810.jpg" alt="Made to your brief" />
        </div>
        <div className={styles.editorialCopy}>
          <span>PRIVATE LABEL</span>
          <h2>Made to your brief</h2>
          <p style={{ marginTop: "16px", marginBottom: "32px", fontSize: "16px", lineHeight: "1.6" }}>
            Colour, construction and branding developed from a reference or tech pack. Samples in 10–14 days.
          </p>
          <Link href="/contact" className={styles.editorialLink}>
            Start a development →
          </Link>
        </div>
      </section>

      {/* Trust Strip */}
      <section className={styles.trustStrip}>
        <div className={styles.trustItem}>
          <div className={styles.trustText}>
            <h4>Export finish</h4>
          </div>
        </div>
        <div className={styles.trustItem}>
          <div className={styles.trustText}>
            <h4>Women artisans</h4>
          </div>
        </div>
        <div className={styles.trustItem}>
          <div className={styles.trustText}>
            <h4>Sampling 10–14 days</h4>
          </div>
        </div>
        <div className={styles.trustItem}>
          <div className={styles.trustText}>
            <h4>Bhopal · MP</h4>
          </div>
        </div>
      </section>
    </main>
  );
}
