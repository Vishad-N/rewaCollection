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
          
          <h3>Shipping Methods & Transit Times</h3>
          <ul>
            <li><strong>Jewellery:</strong> We prefer Air Freight out of Delhi for fashion jewellery to ensure swift and secure transit.</li>
            <li><strong>Handicrafts:</strong> For handbags and home furnishings, we prefer Sea Freight (ICD Delhi via Mumbai Port).</li>
            <li><strong>Transit Time:</strong> Generally 25–30 days for the USA and 20–25 days for Europe. Freight charges vary depending on volume and product type.</li>
          </ul>

          <h3>Pricing & Order Details</h3>
          <ul>
            <li><strong>Pricing:</strong> FOB Delhi (default). CIF, C&F, and FOB Mumbai are available upon request.</li>
            <li><strong>Minimum Invoice Value:</strong> USD 4000 FOB or EUR 3000. Trial orders are negotiable.</li>
            <li><strong>Production Lead Time:</strong> Generally 4–6 weeks after receipt of approvals and advance payment/LC.</li>
          </ul>

          <h3>Packaging Standards</h3>
          <ul>
            <li><strong>Jewellery:</strong> Single polybag → 6/12 pcs → 9-ply export carton.</li>
            <li><strong>Handicrafts:</strong> Single polybag → 4/6 pcs → 5-ply export carton.</li>
          </ul>
        </div>

        <div className={styles.btnContainer}>
          <Link href="/contact" className={styles.btn}>CONTACT OUR TEAM →</Link>
        </div>
      </div>
    </main>
  );
}
