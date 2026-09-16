import Link from "next/link";
import styles from "../policy.module.css";

export default function ShippingPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.eyebrow}>CLIENT CARE</div>
        <h1 className={styles.title}>Shipping & Delivery</h1>
        
        <div className={styles.contentBlock}>
          <h2>Global Export</h2>
          <p>
            We successfully export to retail partners across the UK, Europe, the USA, Australia, and Asia. Our logistics team ensures that your goods are packed securely and dispatched efficiently to meet your delivery windows.
          </p>
          
          <h3>Shipping Methods</h3>
          <ul>
            <li><strong>Air Freight:</strong> We utilize air freight from Bhopal for time-sensitive deliveries, commonly used for our fashion jewellery and smaller handbag consignments.</li>
            <li><strong>Sea Freight:</strong> For larger volumes and home furnishings, sea freight is arranged from major Indian ports to ensure cost-effective delivery.</li>
            <li><strong>Default Terms:</strong> Our standard terms are FOB Bhopal, though we can negotiate other Incoterms (like CIF or DDP) based on your requirements.</li>
          </ul>

          <h3>Packaging</h3>
          <p>
            Every item undergoes rigorous Quality Control (QC) before being packed to export standards. We ensure that our packaging protects the products during transit while minimizing environmental impact where possible.
          </p>
        </div>

        <div className={styles.btnContainer}>
          <Link href="/contact" className={styles.btn}>CONTACT OUR TEAM →</Link>
        </div>
      </div>
    </main>
  );
}
