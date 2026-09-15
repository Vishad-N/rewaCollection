import styles from "./contact.module.css";

export default function Contact() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        
        {/* Left Column: Details */}
        <div className={styles.leftCol}>
          <h1 className={styles.title}>Contact</h1>
          <p className={styles.subtitle}>
            Share a reference, tech pack or idea. We reply with sampling notes. New developments stay confidential.
          </p>
          
          <div className={styles.detailsList}>
            <div className={styles.detailItem}>
              <div className={styles.detailIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div className={styles.detailText}>
                <span className={styles.detailLabel}>Email</span>
                <span className={styles.detailValue}>
                  <a href="mailto:info@revacreation.com">info@revacreation.com</a>
                </span>
              </div>
            </div>

            <div className={styles.detailItem}>
              <div className={styles.detailIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className={styles.detailText}>
                <span className={styles.detailLabel}>Phone</span>
                <span className={styles.detailValue}>
                  <a href="tel:+919971015252">+91 99710 15252</a>
                </span>
              </div>
            </div>
            
            <div className={styles.detailItem}>
              <div className={styles.detailIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className={styles.detailText}>
                <span className={styles.detailLabel}>Visit</span>
                <span className={styles.detailValue}>
                  <strong>Registered Office:</strong> SR. MIG- 308, Rachna Tower, Rachna Nagar, Bhopal MP<br/><br/>
                  <strong>Production Unit:</strong> Adarsh Trade Compound, A.B. Road, Saredi, Pachore MP
                </span>
              </div>
            </div>
            
            <div className={styles.detailItem}>
              <div className={styles.detailIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 2l9 4.9V17L12 22l-9-4.9V7z" />
                  <path d="M12 22v-9.5" />
                  <path d="M12 12.5 21 7.6" />
                  <path d="M12 12.5 3 7.6" />
                </svg>
              </div>
              <div className={styles.detailText}>
                <span className={styles.detailLabel}>Categories</span>
                <span className={styles.detailValue}>Handbags, jewellery, home, private label</span>
              </div>
            </div>
            
            <div className={styles.detailItem}>
              <div className={styles.detailIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div className={styles.detailText}>
                <span className={styles.detailLabel}>Sampling</span>
                <span className={styles.detailValue}>10–14 days after a complete brief</span>
              </div>
            </div>
            
            <div className={styles.detailItem}>
              <div className={styles.detailIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="6" cy="6" r="3" />
                  <circle cx="6" cy="18" r="3" />
                  <line x1="20" y1="4" x2="8.12" y2="15.88" />
                  <line x1="14.47" y1="14.48" x2="20" y2="20" />
                  <line x1="8.12" y1="8.12" x2="12" y2="12" />
                </svg>
              </div>
              <div className={styles.detailText}>
                <span className={styles.detailLabel}>Production</span>
                <span className={styles.detailValue}>4–6 weeks after approval</span>
              </div>
            </div>
            
            <div className={styles.detailItem}>
              <div className={styles.detailIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <div className={styles.detailText}>
                <span className={styles.detailLabel}>Terms</span>
                <span className={styles.detailValue}>FOB Bhopal</span>
              </div>
            </div>
          </div>
          
          <div className={styles.mutedLine}>
            Trial orders negotiable.
          </div>
        </div>

        {/* Right Column: Form */}
        <div className={styles.rightCol}>
          <div className={styles.formCard}>
            <h2 className={styles.formTitle}>Start a development</h2>
            <form>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label htmlFor="company">Company</label>
                  <input type="text" id="company" name="company" required />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="market">Destination market</label>
                  <input type="text" id="market" name="market" />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="category">Category</label>
                  <select id="category" name="category">
                    <option value="">Select a category</option>
                    <option value="Handbags">Handbags</option>
                    <option value="Jewellery">Jewellery</option>
                    <option value="Home">Home</option>
                    <option value="Private label">Private label</option>
                    <option value="Mixed">Mixed</option>
                  </select>
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="quantity">Quantity or notes</label>
                  <input type="text" id="quantity" name="quantity" />
                </div>
              </div>
              
              <div className={styles.formGroupFull}>
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  placeholder="Product type, quantity, and any reference." 
                  required 
                ></textarea>
              </div>
              
              <div className={styles.formGroupFull} style={{ marginTop: '24px' }}>
                <label htmlFor="file">File upload (optional)</label>
                <input type="file" id="file" name="file" />
              </div>
              
              <button type="button" className={styles.btn}>
                SEND BRIEF <span>→</span>
              </button>
            </form>
          </div>
        </div>

      </div>
    </main>
  );
}
