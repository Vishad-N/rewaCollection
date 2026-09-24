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
          
          <h3>Return/Claim Policy</h3>
          <ul>
            <li><strong>Quality Systems:</strong> We maintain strict quality systems to ensure every product meets our high standards.</li>
            <li><strong>Reporting a Claim:</strong> In the rare event of faulty goods, please notify us with detailed photographs.</li>
            <li><strong>Resolution:</strong> We ensure prompt and fair resolution through mutual agreement for any verified claims.</li>
          </ul>
        </div>

        <div className={styles.btnContainer}>
          <Link href="/contact" className={styles.btn}>GET IN TOUCH →</Link>
        </div>
      </div>
    </main>
  );
}
