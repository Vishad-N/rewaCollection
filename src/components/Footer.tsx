import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.footBrand}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Reva Creations" className={styles.logo} />
          <span className={styles.brandText}>Reva Creations Pvt. Ltd.</span>
        </div>
        <p>
          Jewellery, handbags and home furnishings.
          <br />
          Partners, sampling, Bhopal & Pachore.
        </p>
      </div>
      <div>
        <h4>House</h4>
        <Link href="/story">Our Story</Link>
        <Link href="/atelier">Atelier</Link>
        <Link href="/ethics">Ethics & sourcing</Link>
      </div>
      <div>
        <h4>Client Care</h4>
        <Link href="/contact">Contact</Link>
        <Link href="/sampling">Sampling</Link>
        <Link href="/shipping">Shipping</Link>
        <Link href="/claims">Claims</Link>
      </div>
      <div>
        <h4>Visit</h4>
        <p style={{ display: 'flex', flexDirection: 'column', gap: '8px', lineHeight: '1.4' }}>
          <span><strong>Registered Address:</strong><br/>SR. MIG- 308, Rachna Tower,<br/>Rachna Nagar, Bhopal MP</span>
          <span><strong>Production Unit:</strong><br/>Adarsh Trade Compound, A.B. Road,<br/>Saredi, Pachore MP</span>
          <span style={{ marginTop: '8px' }}>
            <a href="mailto:info@revacreation.com">info@revacreation.com</a>
            <br />
            <a href="tel:+919971015252">+91 99710 15252</a>
          </span>
        </p>
      </div>
      <div className={styles.copy}>© 2026 Reva Creations Pvt. Ltd. All rights reserved.</div>
    </footer>
  );
}
