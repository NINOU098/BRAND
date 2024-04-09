import styles from "./Description.module.css";

export default function Description({ children }) {
  return (
    <div className={styles.description}>
      {children}
      <div className={styles.carousel}>
        <div className={styles.images}>
          <div className={`${styles.imageItem} ${styles.image1}`} />
          <div className={`${styles.imageItem} ${styles.image2}`} />
          <div className={`${styles.imageItem} ${styles.image3}`} />
          <div className={`${styles.imageItem} ${styles.image4}`} />
          
        </div>
      </div>
    </div>
  );
}
