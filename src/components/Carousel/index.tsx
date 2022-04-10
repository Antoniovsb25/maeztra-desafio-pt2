import React from "react";
import styles from "./Carousel.module.css";

const Carousel = () => {
  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carouselContainer}>
        <div className={styles.arrow}>
          <img src="assets/icons/left-arrow.svg" alt="left arrow" />
        </div>
        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>Promoções de Outuno</h2>
          <p className={styles.ctaText}>
            Confiras os melhores looks para combinar com você nesse Outono
          </p>
          <button className={styles.ctaButton} type="button">
            Conferir
          </button>
        </div>
        <div className={styles.arrow}>
          <img src="assets/icons/right-arrow.svg" alt="right arrow" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
