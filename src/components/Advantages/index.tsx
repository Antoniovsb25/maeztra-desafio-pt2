import React from 'react'
import styles from "./Advantages.module.css"

const Advantages = () => {
  return (
    <div className={styles.advantages}>
        <h2 className={styles.cardTitle}>Por que comprar na Maeztra?</h2>
        <div className={styles.cardsWrapper}>
            <div className={styles.card}>
                <img src="assets/icons/earth.svg" width={32} height={32} alt="" />
                <div className={styles.textsWrapper}>
                    <span><b>Produtos Importados</b></span>
                    <span>Produtos de Alta Qualidade</span>
                </div>
            </div>
            <div className={styles.card}>
                <img src="assets/icons/earth.svg" width={32} height={32} alt="" />
                <div className={styles.textsWrapper}>
                    <span><b>Produtos Importados</b></span>
                    <span>Produtos de Alta Qualidade</span>
                </div>
            </div>
            <div className={styles.card}>
                <img src="assets/icons/earth.svg" width={32} height={32} alt="" />
                <div className={styles.textsWrapper}>
                    <span><b>Produtos Importados</b></span>
                    <span>Produtos de Alta Qualidade</span>
                </div>
            </div>
            <div className={styles.card}>
                <img src="assets/icons/earth.svg" width={32} height={32} alt="" />
                <div className={styles.textsWrapper}>
                    <span><b>Produtos Importados</b></span>
                    <span>Produtos de Alta Qualidade</span>
                </div>
            </div>
            <div className={styles.card}>
                <img src="assets/icons/earth.svg" width={32} height={32} alt="" />
                <div className={styles.textsWrapper}>
                    <span><b>Produtos Importados</b></span>
                    <span>Produtos de Alta Qualidade</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Advantages