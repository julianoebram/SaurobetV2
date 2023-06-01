import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerColumn}>
          <h4 className={styles.footerTitle}>Sobre Nós</h4>
          <p>Descrição sobre a empresa.</p>
        </div>
        <div className={styles.footerColumn}>
          <h4 className={styles.footerTitle}>Contato</h4>
          <p>Email: exemplo@example.com</p>
          <p>Telefone: (00) 1234-5678</p>
        </div>
        <div className={styles.footerColumn}>
          <h4 className={styles.footerTitle}>Redes Sociais</h4>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.iconLink}>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className={styles.iconLink}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className={styles.iconLink}>
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2023 Company. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
