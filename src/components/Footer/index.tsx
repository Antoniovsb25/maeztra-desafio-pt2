import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className={styles.infos}>
        <div className="information">
          <h3>Informações</h3>
          <ul>
            <li>Quem Somos</li>
            <li>Prazo de Envio</li>
            <li>Trocas e Devoluções</li>
            <li>Promoções e Cupons</li>
          </ul>
        </div>
        <div className="my-account">
          <h3>Minha Conta</h3>
          <ul>
            <li>Minha Conta</li>
            <li>Meus Pedidos</li>
            <li>Cadastre-se</li>
          </ul>
        </div>
        <div className="find-us">
          <h3>Onde nos Encontrar</h3>
          <ul>
            <li>Lojas</li>
            <li>Endereço</li>
          </ul>
        </div>
      </div>
      <div className={styles.logos}>
        <div className={styles.socialMedia}>
          <img src="assets/icons/facebook.svg" alt="facebook logo" />
          <img src="assets/icons/linkedin.svg" alt="linkedin logo" />
          <img src="assets/icons/instagram.svg" alt="instagram logo" />
        </div>
        <div className={styles.cards}>
          <img src="assets/icons/visa.svg" alt="visa logo" />
          <img src="assets/icons/master.svg" alt="master logo" />
        </div>
        <div className={styles.creators}>
          <div className={styles.vtex}>
            <span>Powered By</span>
            <img src="assets/icons/vtex.svg" alt="vtex logo" />
          </div>
          <div className={styles.maeztraFooter}>
            <span>Developed By</span>
            <img src="assets/icons/maeztrafooter.svg" alt="maeztra logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
