import styles from "../common.module.css";

export default function Contact() {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Contact Us</h1>
      <p className={styles.text}>
        We are here to help. Reach out to us for appointments, inquiries, or
        any assistance with your order.
        <br />
        <br />
        <strong>hello@revacreation.com</strong>
      </p>
    </main>
  );
}
