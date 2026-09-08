"use client";

import Link from "next/link";
import styles from "./atelier.module.css";
import { products } from "@/data/products";

export default function AtelierPage() {
  // Grab 3 pieces to showcase as "Made in the atelier"
  const featuredWork = products.slice(0, 3);

  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const form = document.getElementById("commission-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className={styles.page}>
      {/* Header & Primary Action */}
      <header className={styles.header}>
        <h1>The Atelier</h1>
        <p className={styles.headerCopy}>
          Solid gold, set by hand in Mumbai and Jaipur.
          <span>Commission a piece, or see how a Reva jewel is made.</span>
        </p>
        <a href="#commission-form" className={styles.btn} onClick={scrollToForm}>
          Begin a commission <span>→</span>
        </a>
      </header>

      {/* Full Width Hero Image (Workbench / Tools) */}
      <section className={styles.heroImage}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="/imagine_images/atelier_hero_bench_1788874094895.jpg" 
          alt="Jewelry workshop bench" 
        />
      </section>

      {/* The Process */}
      <section className={styles.processSection}>
        <h2 className={styles.sectionTitle}>The Process</h2>
        <div className={styles.processGrid}>
          <div className={styles.processStep}>
            <div className={styles.stepImage}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/imagine_images/atelier_process_sketch_1788874115792.jpg" alt="Sketching jewelry" />
            </div>
            <span className={styles.stepNum}>01</span>
            <h3 className={styles.stepTitle}>Brief & Sketch</h3>
            <p className={styles.stepDesc}>Stone, silhouette, and occasion. We align on proportion and setting.</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepImage}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/imagine_images/atelier_process_making_1788874134617.jpg" alt="Gold working" />
            </div>
            <span className={styles.stepNum}>02</span>
            <h3 className={styles.stepTitle}>Making</h3>
            <p className={styles.stepDesc}>Precision gold work and expert casting in our Mumbai atelier.</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepImage}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/imagine_images/atelier_process_setting_1788874152673.jpg" alt="Stone setting" />
            </div>
            <span className={styles.stepNum}>03</span>
            <h3 className={styles.stepTitle}>Setting & Polish</h3>
            <p className={styles.stepDesc}>Stones are hand-set by master karigars before final high-polish.</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepImage}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/imagine_images/atelier_process_finish_1788874166895.jpg" alt="Finished jewelry box" />
            </div>
            <span className={styles.stepNum}>04</span>
            <h3 className={styles.stepTitle}>Hallmark & Finish</h3>
            <p className={styles.stepDesc}>Quality assurance, BIS hallmarking, and secure delivery.</p>
          </div>
        </div>
      </section>

      {/* Split Section: Menu & Form */}
      <section className={styles.commissionSplit} id="commission-form">
        <div className={styles.menuSide}>
          <h2>What We Make</h2>
          <ul className={styles.menuList}>
            <li>Recreate or resize an heirloom</li>
            <li>Custom engagement & solitaires</li>
            <li>A piece from the collections, altered</li>
            <li>Fully original commission</li>
          </ul>
          
          <div className={styles.menuSpecs}>
            Typically 3–6 weeks · From ₹50,000 · 18k / 14k solid gold.
          </div>

          <div className={styles.proofGrid}>
            <div className={styles.proofItem}>
              <h4>Solid Gold Only</h4>
              <p>We do not use vermeil or plating. Ever.</p>
            </div>
            <div className={styles.proofItem}>
              <h4>Ethical Stones</h4>
              <p>Natural or lab-grown, fully certified.</p>
            </div>
            <div className={styles.proofItem}>
              <h4>BIS Hallmark</h4>
              <p>Guaranteed 18k or 14k purity.</p>
            </div>
            <div className={styles.proofItem}>
              <h4>Master Karigars</h4>
              <p>Set exclusively in our Mumbai & Jaipur ateliers.</p>
            </div>
          </div>
        </div>

        <div className={styles.formSide}>
          <h3>Start a Commission</h3>
          <p>By appointment · Mumbai · Jaipur | hello@revacreation.com</p>
          
          <form onSubmit={(e) => e.preventDefault()}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Name</label>
                <input type="text" className={styles.formInput} placeholder="Jane Doe" />
              </div>
              <div className={styles.formGroup}>
                <label>Phone</label>
                <input type="tel" className={styles.formInput} placeholder="+91" />
              </div>
            </div>
            
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Email</label>
                <input type="email" className={styles.formInput} placeholder="jane@example.com" />
              </div>
              <div className={styles.formGroup}>
                <label>Piece Type</label>
                <select className={styles.formInput}>
                  <option>Ring</option>
                  <option>Earrings</option>
                  <option>Necklace</option>
                  <option>Bracelet</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Budget Band (INR)</label>
                <select className={styles.formInput}>
                  <option>₹50k - ₹1L</option>
                  <option>₹1L - ₹3L</option>
                  <option>₹3L - ₹5L</option>
                  <option>₹5L+</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Target Date</label>
                <input type="date" className={styles.formInput} />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label>Design Notes</label>
              <textarea 
                className={styles.formInput} 
                placeholder="Tell us about the occasion, silhouette, or any heirlooms you'd like to recreate..."
              ></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>Request Consultation</button>
          </form>
        </div>
      </section>

      {/* Finished Work Band */}
      <section className={styles.finishedWork}>
        <h2 className={styles.sectionTitle}>Made in the Atelier</h2>
        <div className={styles.finishedGrid}>
          {featuredWork.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id} className={styles.card}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={product.image} alt={product.name} />
              <div className={styles.cardMeta}>
                <h3>{product.name}</h3>
                <span className={styles.cardMetal}>{product.metal}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Practical Trust Pre-Footer */}
      <section className={styles.trustPreFooter}>
        <div className={styles.trustPreItem}>
          <h5>Timeline</h5>
          <p>3-6 weeks from approved sketch</p>
        </div>
        <div className={styles.trustPreItem}>
          <h5>Revisions</h5>
          <p>Unlimited on sketch, 1 on 3D wax</p>
        </div>
        <div className={styles.trustPreItem}>
          <h5>Sizing</h5>
          <p>One complimentary resize within 30 days</p>
        </div>
        <div className={styles.trustPreItem}>
          <h5>Shipping</h5>
          <p>Fully insured transit nationwide</p>
        </div>
      </section>
    </main>
  );
}
