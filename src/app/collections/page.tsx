import Link from "next/link";
import styles from "./collections.module.css";

const collectionItems = [
  { id: "clutch", name: "Beaded envelope clutch", category: "Handbags", image: "/product_clutch_1789371394234.jpg" },
  { id: "tote", name: "Raffia market tote", category: "Handbags", image: "/product_tote_1789371407229.jpg" },
  { id: "sling", name: "Embroidered sling", category: "Handbags", image: "/hero_bag_jewellery_1789373411823.jpg" },
  { id: "ring", name: "Celeste Solitaire Ring", category: "Fashion jewellery", image: "/product_ring_1789371374171.jpg" },
  { id: "hoops", name: "Twisted Gold Hoops", category: "Fashion jewellery", image: "/imagine_images/md0OH.jpg" },
  { id: "bracelet", name: "Aurelia Bracelet", category: "Fashion jewellery", image: "/imagine_images/9rvvk.jpg" },
  { id: "cushion", name: "Embroidered cushion", category: "Home", image: "/product_cushion_1789371419434.jpg" },
  { id: "throw", name: "Woven throw", category: "Home", image: "/atelier_embroidery_1789371212302.jpg" },
  { id: "accent", name: "Beaded table accent", category: "Home", image: "/atelier_beading_1789371225188.jpg" },
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
          <img src="/cat_handbags_1789371467020.jpg" alt="Handbags" />
          <div className={styles.categoryOverlay}>
            <h3>Handbags</h3>
            <span>Lookbook</span>
          </div>
        </Link>
        <Link href="/collections/jewellery" className={styles.categoryCard}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/imagine_images/d4U7S.jpg" alt="Jewellery" />
          <div className={styles.categoryOverlay}>
            <h3>Jewellery</h3>
            <span>Lookbook</span>
          </div>
        </Link>
        <Link href="/collections/home" className={styles.categoryCard}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/atelier_finishing_1789371237480.jpg" alt="Home" />
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
            <h4>Delhi · India</h4>
          </div>
        </div>
      </section>
    </main>
  );
}
