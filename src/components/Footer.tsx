import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.footBrand}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Reva Creation" className={styles.logo} />
          <span className={styles.brandText}>Reva Creation Pvt. Ltd.</span>
        </div>
        <p>
          Jewellery, handbags and home furnishings.
          <br />
          Partners, sampling, Indore & Noida.
        </p>
      </div>
      <div>
        <h4>House</h4>
        <Link href="/about">Our Story</Link>
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
          <span><strong>Registered Address:</strong><br/>ED/149 Scheme No. 94, Ring Road,<br/>Indore - 452016 India</span>
          <span><strong>Production Unit:</strong><br/>C-269, Sector 63,<br/>Noida (UP) Pin - 201301, India</span>
          <span style={{ marginTop: '8px' }}>
            <a href="mailto:info@revacreation.com">info@revacreation.com</a>
            <br />
            <a href="tel:+919971015252">+91 99710 15252</a>
          </span>
        </p>
      </div>
      <div className={styles.copy}>© 2026 Reva Creation Pvt. Ltd. All rights reserved.</div>
    </footer>
  );
}
