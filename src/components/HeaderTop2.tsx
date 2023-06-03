import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import BarraMenu from "./BarraMenu";
import Notificacao from "./Notificacao";
import styles from "./HeaderTop2.module.css";



const HeaderTop2: FunctionComponent = () => {
  return (
    <div className={styles.header}>
      <BarraMenu />
      <Link to="/">
      <img
        className={styles.logoSaurobet11}
        alt=""
        src="/logo--saurobet-1-1@2x.png"
        
      />
      </Link>
      <div className={styles.frameParent}>
        <button className={`${styles.tShirtParent} ${styles.hideOnMobile}`}>
          <img className={styles.tShirtIcon} alt="" src="/tshirt41.svg" />
          <div className={styles.esportes}><Link to="/home-esportes">Esportes</Link></div>
        </button>
        <button className={`${styles.tShirtParent} ${styles.hideOnMobile}`}>
          <img className={styles.tShirtIcon} alt="" src="/tshirt51.svg" />
          <div className={styles.esportes}><Link to="/home-esportes">Live</Link></div>
        </button>
        <button className={`${styles.tShirtParent} ${styles.hideOnMobile}`}>

          <img className={styles.tShirtIcon} alt="" src="/tshirt6.svg" />
          <div className={styles.esportes}><Link to="/home-esportes">Casino</Link></div>
        </button>
        <button className={`${styles.tShirtParent} ${styles.hideOnMobile}`}>
          <img className={styles.tShirtIcon4} alt="" src="/tshirt8.svg" />
          <div className={styles.esportes}><Link to="/home-esportes">Poker</Link></div>
        </button>
      
        <div className={styles.tShirtParent}>
          <img className={styles.frameChildLogin} alt="" src="/frame-1410103065.svg" />
          <Link to="/login" className={styles.loginButton}>
            Login
          </Link>
        </div>
        <button className={styles.botao2}>
          <b className={styles.depositar}><Link to="/Signup" className={styles.loginButton}>
          Criar Conta
          </Link></b>
        </button>
      </div>
    </div>
  );
};

export default HeaderTop2;
