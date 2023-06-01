import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        
        <div className={styles.footerColumn}>
          <h4 className={styles.footerTitle}>Formas de Pagamento</h4>
          <div className={styles.paymentLogos}>
            <img src="https://www.linksgram.com/wp-content/uploads/2021/06/logo-pix-icone-1024.png" alt="Logo 1" className={styles.logo} />
            <img src="https://nudatasecurity.com/wp-content/uploads/2017/03/Mastercard-logo-sq.png" alt="Logo 2" className={styles.logo} />
            <img src="https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png" alt="Logo 3" className={styles.logo} />
            {/*<img src="https://nudatasecurity.com/wp-content/uploads/2017/03/Mastercard-logo-sq.png" alt="Logo 4" className={styles.logo} />
            <img src="https://nudatasecurity.com/wp-content/uploads/2017/03/Mastercard-logo-sq.png" alt="Logo 5" className={styles.logo} />
            <img src="https://nudatasecurity.com/wp-content/uploads/2017/03/Mastercard-logo-sq.png" alt="Logo 6" className={styles.logo} />
            <img src="https://nudatasecurity.com/wp-content/uploads/2017/03/Mastercard-logo-sq.png" alt="Logo 7" className={styles.logo} />*/}
           
          </div>
        </div>
        <div className={styles.footerColumn}>
          <h4 className={styles.footerTitle}>Provedores</h4>
          <div className={styles.gameLogos}>
            <img src="https://demo2.demofabets.com/img/footer/netent-light-368ef555589b34ce.svg" alt="Logo 3" className={styles.logo} />
            <img src="https://demo2.demofabets.com/img/footer/microgaming.svg" alt="Logo 4" className={styles.logo} />
            <img src="https://demo2.demofabets.com/img/footer/redtiger.svg" alt="Logo 4" className={styles.logo} />
            <img src="https://demo2.demofabets.com/img/footer/pragmatic_play.svg" alt="Logo 4" className={styles.logo} />
            <img src="https://demo2.demofabets.com/img/footer/merkur.svg" alt="Logo 4" className={styles.logo} />
            <img src="https://demo2.demofabets.com/img/footer/amatic.svg" alt="Logo 4" className={styles.logo} />
            <img src="https://demo2.demofabets.com/img/footer/big_time.svg" alt="Logo 4" className={styles.logo} />
            
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
