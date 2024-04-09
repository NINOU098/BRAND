import React from "react";
import styles from "./Contact.module.css";

const CommunicationForm = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bgCover}>
        <div className={styles.inputGroup}>
          <h1 className={styles.headingText}>Get in Touch</h1>
          <form>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommunicationForm;
