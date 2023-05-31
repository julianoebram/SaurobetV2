import { FunctionComponent } from "react";
import styles from "./MainHeader.module.css";

type MainHeaderType = {
  vector?: string;
  tShirt?: string;
};

const MainHeader: FunctionComponent<MainHeaderType> = ({ vector, tShirt }) => {
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
              <img className={styles.vectorIcon} alt="" src={vector} />
              <div className={styles.ellipseParent}>
                <div className={styles.frameChild} />
                <div className={styles.div}>1</div>
              </div>
            </div>
          </div>
          <img
            className={styles.frameWrapper}
            alt=""
            src="/frame-1410103065.svg"
          />
        </div>
        <div className={styles.tShirtParent}>
          <img className={styles.tShirtIcon} alt="" src={tShirt} />
          <div className={styles.r103403}>R$ 1.034,03</div>
        </div>
        <div className={styles.botao2}>
          <b className={styles.depositar}>Depositar</b>
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

export default MainHeader;
