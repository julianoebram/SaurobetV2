import { FunctionComponent } from "react";
import styles from "./FrameComponent15.module.css";
const FrameComponent15: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.tShirtParent}>
          <img className={styles.tShirtIcon} alt="" src="/tshirt68.svg" />
          <div className={styles.betslip}>Betslip</div>
        </div>
        <img className={styles.closeIcon} alt="" src="/close1.svg" />
      </div>
      <div className={styles.totalCoefficientWrapper}>
        <div className={styles.totalCoefficient}>0.00 Total coefficient</div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.ordinaryWrapper}>
          <div className={styles.totalCoefficient}>Ordinary</div>
        </div>
        <div className={styles.expressWrapper}>
          <div className={styles.totalCoefficient}>Express</div>
        </div>
      </div>
      <div className={styles.makeBetWrapper}>
        <div className={styles.totalCoefficient}>MAKE BET</div>
      </div>
    </div>
  );
};

export default FrameComponent15;
