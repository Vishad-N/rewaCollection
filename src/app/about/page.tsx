import styles from "../common.module.css";

export default function About() {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Our Story</h1>
      <p className={styles.text}>
        At Reva Creation, jewellery is more than an accessory. It is a quiet
        expression of elegance and a celebration of life’s most precious moments.
        We select the finest materials and work with skilled artisans so that
        every piece is beautiful and built to last.
      </p>
    </main>
  );
}
