import Link from "next/link";
import styles from "../policy.module.css";

export default function EthicsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.eyebrow}>HOUSE</div>
        <h1 className={styles.title}>Ethics & Sourcing</h1>
        
        <div className={styles.contentBlock}>
          <h2>Our Commitment</h2>
          <p>
            At Reva Creations, our commitment to ethical manufacturing is foundational to everything we do. We believe that beautiful products should be made in a way that respects the people who make them and the environment we all share.
          </p>
          
          <h3>Labor Standards</h3>
          <ul>
            <li><strong>No Child Labor:</strong> We strictly prohibit the use of child labor in any part of our supply chain.</li>
            <li><strong>Fair Wages:</strong> All artisans and workers are paid fair, living wages for their craftsmanship.</li>
            <li><strong>Safe Workplaces:</strong> Our production facilities in Bhopal and Pachore maintain rigorous health and safety standards.</li>
            <li><strong>Women-Led:</strong> We are proud to be a women-led organization, empowering female artisans and leaders in the industry.</li>
          </ul>

          <h3>Materials & Sourcing</h3>
          <ul>
            <li><strong>Safe Metals:</strong> We use nickel- and lead-free metals to ensure the safety of our jewelry and hardware.</li>
            <li><strong>Global Standards:</strong> Our products are tested to meet both European and American regulatory standards.</li>
            <li><strong>Responsible Sourcing:</strong> We strive to source raw materials locally and responsibly, supporting regional economies while reducing our carbon footprint.</li>
          </ul>
        </div>

        <div className={styles.btnContainer}>
          <Link href="/contact" className={styles.btn}>ENQUIRE NOW →</Link>
        </div>
      </div>
    </main>
  );
}
