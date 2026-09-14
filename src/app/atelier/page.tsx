"use client";

import Link from "next/link";
import styles from "./atelier.module.css";
import { products } from "@/data/products";

export default function AtelierPage() {
  // Grab 3 pieces to showcase as "Made in the atelier"
  const featuredWork = [
    products.find(p => p.category === "Handbags") || products[0],
    products.find(p => p.category === "Fashion jewellery") || products[1],
    products.find(p => p.category === "Home") || products[2]
  ];

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
          Handbags, jewellery and home furnishings.
          <span>Sampled, finished and packed for export.</span>
        </p>
        <a href="#commission-form" className={styles.btn} onClick={scrollToForm}>
          START A DEVELOPMENT <span>→</span>
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
            <h3 className={styles.stepTitle}>Brief & sampling</h3>
            <p className={styles.stepDesc}>Reference or tech pack. Samples in 10–14 days.</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepImage}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/imagine_images/atelier_process_making_1788874134617.jpg" alt="Gold working" />
            </div>
            <span className={styles.stepNum}>02</span>
            <h3 className={styles.stepTitle}>Craft</h3>
            <p className={styles.stepDesc}>Cutting, embroidery, beadwork, metalwork, assembly.</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepImage}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/imagine_images/atelier_process_setting_1788874152673.jpg" alt="Stone setting" />
            </div>
            <span className={styles.stepNum}>03</span>
            <h3 className={styles.stepTitle}>Finishing & QC</h3>
            <p className={styles.stepDesc}>Construction, colour, edges. Checked before pack.</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepImage}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/imagine_images/atelier_process_finish_1788874166895.jpg" alt="Finished jewelry box" />
            </div>
            <span className={styles.stepNum}>04</span>
            <h3 className={styles.stepTitle}>Pack & ship</h3>
            <p className={styles.stepDesc}>Export pack. Air from Delhi for jewellery; sea for handicrafts when required.</p>
          </div>
        </div>
      </section>

      {/* Split Section: Menu & Form */}
      <section className={styles.commissionSplit} id="commission-form">
        <div className={styles.menuSide}>
          <h2>What We Make</h2>
          <ul className={styles.menuList}>
            <li>Fashion handbags</li>
            <li>Fashion jewellery</li>
            <li>Home furnishings</li>
            <li>Private label</li>
          </ul>
          
          <div className={styles.menuSpecs}>
            Production typically 4–6 weeks after approval.
          </div>
        </div>

        <div className={styles.formSide}>
          <h3>Start a development</h3>
          <p>Delhi · India · info@revacreation.com · +91 99710 15252</p>
          
          <form onSubmit={(e) => e.preventDefault()}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Company</label>
                <input type="text" className={styles.formInput} placeholder="Company Name" />
              </div>
              <div className={styles.formGroup}>
                <label>Name</label>
                <input type="text" className={styles.formInput} placeholder="Jane Doe" />
              </div>
            </div>
            
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Email</label>
                <input type="email" className={styles.formInput} placeholder="jane@example.com" />
              </div>
              <div className={styles.formGroup}>
                <label>Destination market</label>
                <input type="text" className={styles.formInput} placeholder="UK, USA, etc." />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Category</label>
                <select className={styles.formInput}>
                  <option>Handbags</option>
                  <option>Jewellery</option>
                  <option>Home</option>
                  <option>Private label</option>
                  <option>Mixed</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Quantity or notes</label>
                <input type="text" className={styles.formInput} placeholder="e.g. 200 units" />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label>Message</label>
              <textarea 
                className={styles.formInput} 
                placeholder="Product type, quantity, and any reference."
              ></textarea>
            </div>

            <div className={styles.formGroup}>
              <label>Reference Upload</label>
              <input type="file" className={styles.formInput} style={{ fontSize: "13px", padding: "8px 0" }} />
            </div>

            <button type="submit" className={styles.submitBtn}>SEND BRIEF →</button>
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
                <span className={styles.cardMetal}>{product.category}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Practical Trust Pre-Footer */}
      <section className={styles.trustPreFooter}>
        <div className={styles.trustPreItem}>
          <h5>Sampling</h5>
          <p>10–14 days after a complete brief</p>
        </div>
        <div className={styles.trustPreItem}>
          <h5>Production</h5>
          <p>4–6 weeks after approval</p>
        </div>
        <div className={styles.trustPreItem}>
          <h5>Terms</h5>
          <p>FOB Delhi</p>
        </div>
        <div className={styles.trustPreItem}>
          <h5>Developments</h5>
          <p>Kept confidential</p>
        </div>
      </section>
    </main>
  );
}
