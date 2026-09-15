import Link from "next/link";
import styles from "./about.module.css";

export default function About() {
  return (
    <main className={styles.page}>
      
      {/* 1. Intro */}
      <section className={styles.introSection}>
        <div className={styles.introContent}>
          <div className={styles.eyebrow}>ABOUT</div>
          <h1 className={styles.title}>Our story</h1>
          <p className={styles.text}>
            Reva Creations is an Indian manufacturer and exporter of fashion handbags, jewellery and home furnishings. The work is built with women artisans, designers and production teams for retail partners in the UK, Europe, the USA, Australia and Asia.
          </p>
          <p className={styles.text}>
            Leadership experience in this trade goes back to 2001. We sample with care, finish to export standard, and keep new developments confidential.
          </p>
        </div>
        <div className={styles.introImage}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/atelier_embroidery_1789371212302.jpg" alt="Women artisans embroidering in the atelier" />
        </div>
      </section>

      {/* 2. Facts row */}
      <section className={`${styles.sectionBlock} ${styles.beigeBg}`}>
        <div className={styles.factsGrid}>
          <div className={styles.factCol}>
            <h3>Since 2001</h3>
            <p>Leadership experience producing for international retail</p>
          </div>
          <div className={styles.factCol}>
            <h3>Women-led production</h3>
            <p>Artisans, designers, finishing under one standard</p>
          </div>
          <div className={styles.factCol}>
            <h3>Export markets</h3>
            <p>UK, Europe, USA, Australia, Asia</p>
          </div>
        </div>
        <div className={styles.mutedLine}>
          Collections have been produced for international retailers including Fatface, Monsoon, Zara, Mango and New Look.
        </div>
      </section>

      {/* 3. What we make */}
      <section className={styles.sectionBlock}>
        <h2 className={styles.sectionTitle}>What we make</h2>
        <div className={styles.categoryGrid}>
          <Link href="/collections/handbags" className={styles.categoryCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/products/t_handbag.webp" alt="Handbags" />
            <div className={styles.categoryOverlay}>
              <h3>Handbags</h3>
            </div>
          </Link>
          <Link href="/collections/jewellery" className={styles.categoryCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/products/t_fashion.webp" alt="Fashion jewellery" />
            <div className={styles.categoryOverlay}>
              <h3>Fashion jewellery</h3>
            </div>
          </Link>
          <Link href="/collections/home" className={styles.categoryCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/products/curated_designs.webp" alt="Home furnishings" />
            <div className={styles.categoryOverlay}>
              <h3>Curated Designs</h3>
            </div>
          </Link>
        </div>
      </section>

      {/* 4. How we work */}
      <section className={`${styles.sectionBlock} ${styles.beigeBg}`}>
        <h2 className={styles.sectionTitle}>How we work</h2>
        <div className={styles.processRow}>
          <div className={styles.processStep}>Sample in 10–14 days after a complete brief</div>
          <div className={styles.processStep}>Produce in 4–6 weeks after approval</div>
          <div className={styles.processStep}>Default FOB Bhopal</div>
          <div className={styles.processStep}>Trial orders negotiable</div>
        </div>
      </section>

      {/* 5. Ethics */}
      <section className={styles.sectionBlock}>
        <div className={styles.ethicsContainer}>
          <h2 className={styles.ethicsTitle}>Made with a clear standard</h2>
          <div className={styles.ethicsLine}>
            No child labour <span className={styles.dot}>·</span> Fair wages <span className={styles.dot}>·</span> Safe workplaces <span className={styles.dot}>·</span> Nickel- and lead-free metals <span className={styles.dot}>·</span> Tested to European and American standards
          </div>
        </div>
      </section>

      {/* 6. Close */}
      <section className={`${styles.sectionBlock} ${styles.beigeBg}`}>
        <div className={styles.finalCTA}>
          <h2 className={styles.sectionTitle}>Start with a sample</h2>
          <p className={styles.shortLine}>
            Share a reference or tech pack. Developments stay confidential.
          </p>
          <div className={styles.btnGroup}>
            <Link className={styles.btn} href="/contact">ENQUIRE →</Link>
            <Link className={`${styles.btn} ${styles.btnGhost}`} href="/collections">VIEW COLLECTIONS →</Link>
          </div>
        </div>
      </section>

    </main>
  );
}
