import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="logo-wrapper">
        <img src="assets/imgs/logo-maeztra.png" width="147" height="18" alt="maeztra logo" className={styles.maeztraLogo} />
      </div>
      <div className={styles.searchWrapper}>
        <input type="search" className={styles.searchBar} id="gsearch" name="gsearch" placeholder="O Que Você Busca?"/>
        <input className={styles.submitButton} type="submit"></input>
      </div>
      <div className={styles.options}>
          <div className="options__login">
            <img src="assets/icons/login.svg" width="14" height="16" alt="login logo" />
            <span>Minha Conta</span>
          </div>
          <div className="options__favorites">
            <img src="assets/icons/favorites.svg" width="14" height="16" alt="favorites logo" />
            <span>Minha Conta</span>
          </div>
          <div className="options__cart">
            <img src="assets/icons/cart.svg" width="14" height="16" alt="mini cart" />
            <span>Meu Carrinho</span>
          </div>
      </div>
    </header>
  );
};

export default Header;
