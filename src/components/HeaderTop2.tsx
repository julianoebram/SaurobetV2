import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import BarraMenu from "./BarraMenu";
import Notificacao from "./Notificacao";
import styles from "./HeaderTop2.module.css";

const HeaderTop2: FunctionComponent = () => {
  return (
    <div className={styles.header}>
      <BarraMenu />
      <img
        className={styles.logoSaurobet11}
        alt=""
        src="/logo--saurobet-1-1@2x.png"
      />
      <div className={styles.frameParent}>
        <div className={styles.tShirtParent}>
          <img className={styles.frameChild} alt="" src="/frame-1410103065.svg" />
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
