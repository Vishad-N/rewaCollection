import Link from "next/link";
import styles from "../policy.module.css";

export default function SamplingPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.eyebrow}>CLIENT CARE</div>
        <h1 className={styles.title}>Sampling Process</h1>
        
        <div className={styles.contentBlock}>
          <h2>Bringing Your Vision to Life</h2>
          <p>
            We understand that the sampling phase is critical to a successful production run. Our dedicated sampling team works closely with your tech packs and references to ensure every detail is captured accurately.
          </p>
          
          <h3>Our Process</h3>
          <ul>
            <li><strong>Briefing:</strong> Share your tech pack, reference images, or physical samples with us. New developments are kept fully confidential.</li>
            <li><strong>Development Cost:</strong> FOB + development charges + courier. Samples are available at your own courier charges (UPS/FedEx prepaid).</li>
            <li><strong>Timeline:</strong> Sampling lead time is typically 10–14 days after receiving complete specifications.</li>
            <li><strong>Review:</strong> We provide detailed photos or ship physical samples for your review and approval.</li>
          </ul>

          <h3>Confidentiality</h3>
          <p>
            We respect the creative process. All new developments, tech packs, and designs are kept strictly confidential. Non-Disclosure Agreements (NDAs) can be signed upon request.
          </p>
        </div>

        <div className={styles.btnContainer}>
          <Link href="/atelier" className={styles.btn}>DISCOVER OUR ATELIER →</Link>
        </div>
      </div>
    </main>
  );
}
