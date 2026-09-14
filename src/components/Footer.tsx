import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.footBrand}>REVA CREATIONS</div>
        <p>
          Jewellery, handbags and home furnishings.
          <br />
          Partners, sampling, Delhi.
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
        <p>
          By appointment
          <br />
          Delhi · India
          <br />
          <a href="mailto:info@revacreation.com">info@revacreation.com</a>
          <br />
          <a href="tel:+919971015252">+91 99710 15252</a>
        </p>
      </div>
      <div className={styles.copy}>© 2026 Reva Creation. All rights reserved.</div>
    </footer>
  );
}
