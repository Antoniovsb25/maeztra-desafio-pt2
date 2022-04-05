import React from "react";
import styles from "./Partners.module.css";

const Partners = () => {
  return (
    <div className={styles.advantages}>
      <h2 className={styles.cardTitle}>Marcas Parceiras</h2>
      <div className={styles.cardsWrapper}>
        <div className={styles.card}>
          <img src="assets/imgs/melissa.svg" alt="" />
        </div>
        <div className={styles.card}>
          <img src="assets/imgs/melissa.svg" alt="" />
        </div>
        <div className={styles.card}>
          <img src="assets/imgs/melissa.svg" alt="" />
        </div>
        <div className={styles.card}>
          <img src="assets/imgs/zara.svg" alt="" />
        </div>
        <div className={styles.card}>
          <img src="assets/imgs/zara.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
