import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.footBrand}>REVA CREATION</div>
        <p>
          Jewellery crafted for timeless moments.
          <br />
          Made with patience, worn with meaning.
        </p>
      </div>
      <div>
        <h4>House</h4>
        <Link href="/story">Our Story</Link>
        <Link href="/atelier">Atelier</Link>
        <Link href="/sustainability">Sustainability</Link>
      </div>
      <div>
        <h4>Client Care</h4>
        <Link href="/contact">Contact</Link>
        <Link href="/shipping">Shipping</Link>
        <Link href="/returns">Returns</Link>
      </div>
      <div>
        <h4>Visit</h4>
        <p>
          By appointment
          <br />
          Mumbai · Jaipur
          <br />
          hello@revacreation.com
        </p>
      </div>
      <div className={styles.copy}>© 2026 Reva Creation. All rights reserved.</div>
    </footer>
  );
}
