import Link from "next/link";
import styles from "../policy.module.css";

export default function ClaimsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.eyebrow}>CLIENT CARE</div>
        <h1 className={styles.title}>Claims & Quality</h1>
        
        <div className={styles.contentBlock}>
          <h2>Quality Assurance</h2>
          <p>
            Quality is at the core of our manufacturing process. We implement a rigorous Quality Control (QC) protocol at every stage of production—from raw material sourcing to final finishing and packing.
          </p>
          
          <h3>Our Policy</h3>
          <ul>
            <li><strong>Inspection:</strong> We welcome third-party inspections and quality audits prior to dispatch.</li>
            <li><strong>Reporting a Claim:</strong> In the unlikely event that you receive goods that do not meet the approved sample standard, please notify us within 14 days of receipt.</li>
            <li><strong>Resolution:</strong> Claims are handled on a case-by-case basis. We are committed to working with our partners to find a fair resolution, which may include credit notes or replacement in future orders.</li>
          </ul>

          <p>
            Please provide detailed photographs and a summary of the issue when reporting a claim to help our team investigate and resolve the matter swiftly.
          </p>
        </div>

        <div className={styles.btnContainer}>
          <Link href="/contact" className={styles.btn}>GET IN TOUCH →</Link>
        </div>
      </div>
    </main>
  );
}
