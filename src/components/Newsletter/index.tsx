import React from "react";
import styles from "./Newsletter.module.css";

const Newsletter = () => {
  return (
    <section className={styles.newsletter}>
      <h2>Receba Nossa Newsletter</h2>
      <div className={styles.searchWrapper}>
        <input
          type="search"
          className={styles.searchBar}
          id="gsearch"
          name="gsearch"
          placeholder="Digite seu e-mail"
        />
        <input className={styles.submitButton} type="submit"></input>
      </div>
    </section>
  );
};

export default Newsletter;
