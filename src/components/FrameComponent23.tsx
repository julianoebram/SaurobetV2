import { FunctionComponent } from "react";
import styles from "./FrameComponent23.module.css";
const FrameComponent23: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.diceParent}>
        <img className={styles.diceIcon} alt="" src="/dice18.svg" />
        <div className={styles.transaes}>Transações</div>
      </div>
      <div className={styles.diceParent}>
        <img className={styles.diceIcon} alt="" src="/dice18.svg" />
        <div className={styles.transaes}>Depósitos</div>
      </div>
      <div className={styles.diceParent}>
        <img className={styles.diceIcon} alt="" src="/dice18.svg" />
        <div className={styles.transaes}>Saques</div>
      </div>
      <div className={styles.diceParent}>
        <img className={styles.diceIcon} alt="" src="/dice18.svg" />
        <div className={styles.transaes}>Estastísticas</div>
      </div>
    </div>
  );
};

export default FrameComponent23;
