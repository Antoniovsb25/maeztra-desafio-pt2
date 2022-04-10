import React, { useRef } from "react";
import DUMMY_DATA from "../../dummyData";
import styles from "./Shelf.module.css";

const Shelf = () => {
    const carousel = useRef(null)
    const scrollLeftClick = (e: any) => {
        e.preventDefault()
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
    const scrollRightClick = (e: any) => {
        e.preventDefault()
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }
  return (
    <div className={styles.container}>
      <div onClick={scrollLeftClick} className={styles.arrow}>
        <img src="assets/icons/left-arrow.svg" alt="left arrow" />
      </div>
      <section className={styles.carousel} ref={carousel}>
        {DUMMY_DATA.map((item) => {
          return (
            <div className={styles.card} key={item.id}>
              <div className={styles.imgWrapper}>
                <img src={item.image} alt="produto" />
              </div>
              <div className={styles.infos}>
                <div className={styles.skus}>
                  {item.sku.map((color) => {
                    return (
                      <div
                        className={styles.sku}
                        style={{ backgroundColor: color }}
                      ></div>
                    );
                  })}
                </div>
                <span className={styles.price}>R$ {item.price}</span>
                <h3 className={styles.productTitle}>{item.name}</h3>
                <span className={styles.description}>{item.description}</span>
              </div>
              <button className={styles.buyButton} type="button">
                Adicionar
              </button>
            </div>
          );
        })}
      </section>
      <div onClick={scrollRightClick} className={styles.arrow}>
        <img src="assets/icons/right-arrow.svg" alt="right arrow" />
      </div>
    </div>
  );
};

export default Shelf;
