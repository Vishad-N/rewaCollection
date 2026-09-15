import Link from "next/link";
import styles from "./page.module.css";
import ReelsSection from "@/components/ReelsSection";

const portfolioItems = [
  { id: "parrot-beads-bag", name: "Parrot Beaded Bag", desc: "Handbags", link: "/products/parrot-beads-bag", image: "/products/Parrot_beads_bag_1.webp" },
  { id: "beads-earrings", name: "Beaded Earrings", desc: "Fashion jewellery", link: "/products/beads-earrings", image: "/products/beads_earrings.webp" },
  { id: "beads-bracelet", name: "Beaded Bracelet", desc: "Fashion jewellery", link: "/products/beads-bracelet", image: "/products/beads_bracellete.png" },
  { id: "premium-handbag", name: "Premium Luxury Handbag", desc: "Handbags", link: "/products/premium-handbag", image: "/products/premium_luxy_handbag.webp" },
];

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <div className={styles.eyebrow}>MANUFACTURER · EXPORTER · SINCE 2001</div>
          <h1>
            REVA
            <br />
            CREATIONS
          </h1>
          <div className={styles.heroTag}>Handmade in India. Built for global retail.</div>
          <p>
            We design and manufacture fashion handbags, jewellery and home furnishings with skilled women artisans. Each collection is sampled with care and finished to export standards for international buyers.
          </p>
          <Link className={styles.btn} href="/contact">
            START A DEVELOPMENT <span>→</span>
          </Link>
          <div className={styles.heroCats}>
            <Link href="/collections/handbags">
              HANDBAGS <span>→</span>
            </Link>
            <Link href="/collections/jewellery">
              JEWELLERY <span>→</span>
            </Link>
            <Link href="/collections/home">
              HOME <span>→</span>
            </Link>
            <Link href="/collections/private-label">
              PRIVATE LABEL <span>→</span>
            </Link>
          </div>
        </div>
        <div className={styles.heroVisual}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/products/hero_img.png"
            alt="Reva Creations"
          />
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
            At Reva Creations, a piece is not only an accessory. It is the work of women artisans, designers and production teams who build fashion handbags, jewellery and home textiles for retailers across the UK, Europe, the USA, Australia and Asia.
          </p>
          <p>
            We work in metals, beads, embroidery, canvas, raffia and mixed media, finished for export.
          </p>
          <Link
            className={`${styles.btn} ${styles.btnGhost}`}
            href="/about"
            style={{ marginTop: "22px" }}
          >
            MORE ABOUT US →
          </Link>
        </div>
        <div className={styles.aboutPhoto}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/products/about_us_img.png" alt="Reva Creations atelier" />
        </div>
      </section>

      <section className={styles.sectionBlock}>
        <div className={styles.featuresContainer}>
          
          <div className={styles.featuresTopRow}>
            <div className={styles.featuresLeft}>
              <h2 className={styles.featuresTitle}>What sets us apart</h2>
              
              <div className={styles.featureCards}>
                <div className={styles.featureCard}>
                  <div className={styles.featureNum}>01</div>
                  <div className={styles.featureText}>
                    <strong>Handmade</strong>
                    No mass-produced PU or machine-only bags.
                  </div>
                </div>
                <div className={styles.featureCard}>
                  <div className={styles.featureNum}>02</div>
                  <div className={styles.featureText}>
                    <strong>Women-led</strong>
                    Skilled women artisans at the centre of production.
                  </div>
                </div>
                <div className={styles.featureCard}>
                  <div className={styles.featureNum}>03</div>
                  <div className={styles.featureText}>
                    <strong>Export-ready</strong>
                    Quality, compliance and agreed timelines.
                  </div>
                </div>
                <div className={styles.featureCard}>
                  <div className={styles.featureNum}>04</div>
                  <div className={styles.featureText}>
                    <strong>Private label</strong>
                    Built to the buyer’s brief and brand.
                  </div>
                </div>
                <div className={styles.featureCard}>
                  <div className={styles.featureNum}>05</div>
                  <div className={styles.featureText}>
                    <strong>Natural materials</strong>
                    Cotton, jute, canvas, raffia and recycled cloth.
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.featuresRight}>
              <div className={styles.collage}>
                <div className={styles.collageItem1Wrapper}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/products/home_img1.webp" alt="Home image 1" />
                  <div className={styles.collageCaption}>Handcrafted items</div>
                </div>
                <div className={styles.collageItem2Wrapper}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/products/home_img2.webp" alt="Home image 2" />
                  <div className={styles.collageCaption}>Modern aesthetics</div>
                </div>
                <div className={styles.collageInset}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/products/home_img3.webp" alt="Home image 3" />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.materialsStrip}>
            <div className={styles.materialsList}>
              <div className={styles.materialItem}>
                <div className={styles.materialSwatch}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/products/cricle_1.webp" alt="Raffia" style={{ objectPosition: "center center" }} />
                </div>
                <span>Raffia</span>
              </div>
              <div className={styles.materialItem}>
                <div className={styles.materialSwatch}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/products/circle_2.webp" alt="Canvas" style={{ objectPosition: "bottom left" }} />
                </div>
                <span>Canvas</span>
              </div>
              <div className={styles.materialItem}>
                <div className={styles.materialSwatch}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/products/circle_3.webp" alt="Cotton" style={{ objectPosition: "center 20%" }} />
                </div>
                <span>Cotton</span>
              </div>
              <div className={styles.materialItem}>
                <div className={styles.materialSwatch}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/products/circle_4.webp" alt="Beads" style={{ objectPosition: "center center" }} />
                </div>
                <span>Beads</span>
              </div>
              <div className={styles.materialItem}>
                <div className={styles.materialSwatch}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/products/circle_5.webp" alt="Metal" style={{ objectPosition: "center center" }} />
                </div>
                <span>Metal</span>
              </div>
            </div>
            <div className={styles.materialsLine}>
              Bags, jewellery and home — sampled to order.
            </div>
          </div>

        </div>
      </section>

      <ReelsSection />

      <section className={styles.products} id="products">
        <div className={styles.productsHead}>
          <h2>New from the atelier</h2>
          <Link href="/collections">VIEW ALL →</Link>
        </div>
        <div className={styles.grid}>
          {portfolioItems.map((product) => (
            <Link href={product.link} key={product.id} className={styles.card}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={product.image} alt={product.name} />
              <div className={styles.cardMeta}>
                <div>
                  <h3>{product.name}</h3>
                  <span>{product.desc}</span>
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
        <Link className={styles.cat} href="/collections/handbags">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/products/c_handbag.webp" alt="Handbags" />
          <h3>
            Handbags <span>→</span>
          </h3>
        </Link>
        <Link className={styles.cat} href="/collections/jewellery">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/products/c_jewellery.webp" alt="Jewellery" />
          <h3>
            Jewellery <span>→</span>
          </h3>
        </Link>
        <Link className={styles.cat} href="/collections/home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/products/c_home.webp" alt="Home" />
          <h3>
            Home <span>→</span>
          </h3>
        </Link>
        <Link className={styles.cat} href="/collections/private-label">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/atelier_sampling_1789371198985.jpg" alt="Private Label" />
          <h3>
            Private label <span>→</span>
          </h3>
        </Link>
      </section>



      <section className={styles.sectionBlock}>
        <div className={styles.finalCTA}>
          <h2 className={styles.sectionTitle}>Work with us</h2>
          <p className={styles.shortLine} style={{ marginBottom: "24px" }}>
            Fashion handbags, jewellery and home furnishings for international retail. Samples in 10–14 days. Production in 4–6 weeks after approval. Developments kept confidential.
          </p>
          <div className={styles.clientsLarge}>
            Fatface · Monsoon · Zara · Mango · New Look
          </div>
          <div className={styles.btnGroup}>
            <Link className={styles.btn} href="/contact">ENQUIRE →</Link>
            <Link className={`${styles.btn} ${styles.btnGhost}`} href="/collections">VIEW COLLECTIONS →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
