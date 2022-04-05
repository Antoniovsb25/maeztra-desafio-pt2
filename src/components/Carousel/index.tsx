import React from 'react'
import styles from "./Carousel.module.css"

const Carousel = () => {
  return (
    <div className={styles.carouselWrapper}>
        <img className={styles.imageBanner} src="assets/imgs/carouselimg1.png" width={1920} height={600}></img>
        <div className={styles.arrows}>
            <div className={styles.arrowsWrapper}>
                <img className={styles.leftArrow} src="assets/icons/left-arrow.svg" alt="left arrow" />
                <img className={styles.rightArrow} src="assets/icons/right-arrow.svg" alt="right arrow" />
            </div>
        </div>
        <div className={styles.cta}>
            <h2 className={styles.ctaTitle}>Promoções de Outuno</h2>
            <p className={styles.ctaText}>Confiras os melhores looks para combinar com você nesse Outono</p>
            <button className={styles.ctaButton} type='button'>Conferir</button>
        </div>
    </div>
  )
}

export default Carousel