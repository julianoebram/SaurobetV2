import { FunctionComponent } from "react";
import styles from "./HeaderTop1.module.css";
const HeaderTop1: FunctionComponent = () => {
  return (
    <div className={styles.header}>
      <div className={styles.menu}>
        <div className={styles.menuChild} />
        <div className={styles.menuItem} />
        <div className={styles.menuInner} />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.vectorParent}>
              <img className={styles.vectorIcon} alt="" src="/vector3.svg" />
              <div className={styles.ellipseParent}>
                <div className={styles.frameChild} />
                <div className={styles.div}>1</div>
              </div>
            </div>
          </div>
          <img
            className={styles.frameWrapper}
            alt=""
            src="/frame-14101030651.svg"
          />
        </div>
        <div className={styles.tShirtParent}>
          <img className={styles.tShirtIcon} alt="" src="/tshirt52.svg" />
          <div className={styles.r103403}>Login</div>
        </div>
        <div className={styles.botao1}>
          <div className={styles.botao11}>
            <b className={styles.depositar}>Criar conta</b>
          </div>
        </div>
      </div>
      <img
        className={styles.logoSaurobet11}
        alt=""
        src="/logo--saurobet-1-1@2x.png"
      />
    </div>
  );
};

export default HeaderTop1;
