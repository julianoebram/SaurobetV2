import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

type FrameComponent1Type = {
  tShirt?: string;
  baseballCap?: string;
  sweater?: string;
  bong?: string;
  bong1?: string;
  bong2?: string;
  bong3?: string;
  tShirt1?: string;
  sweater1?: string;
  baseballCap1?: string;
  bong4?: string;
  bong5?: string;
  bong6?: string;
  tShirt2?: string;
  sweater2?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  tShirt,
  baseballCap,
  sweater,
  bong,
  bong1,
  bong2,
  bong3,
  tShirt1,
  sweater1,
  baseballCap1,
  bong4,
  bong5,
  bong6,
  tShirt2,
  sweater2,
}) => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.tShirtWrapper}>
              <img className={styles.tShirtIcon} alt="" src={tShirt} />
            </div>
            <div className={styles.tShirtWrapper}>
              <img className={styles.tShirtIcon} alt="" src={baseballCap} />
            </div>
            <div className={styles.tShirtWrapper}>
              <img className={styles.tShirtIcon} alt="" src={sweater} />
            </div>
            <div className={styles.tShirtWrapper}>
              <img className={styles.tShirtIcon} alt="" src={bong} />
            </div>
            <div className={styles.tShirtWrapper}>
              <img className={styles.tShirtIcon} alt="" src={bong1} />
            </div>
            <div className={styles.tShirtWrapper}>
              <img className={styles.tShirtIcon} alt="" src={bong2} />
            </div>
            <div className={styles.tShirtWrapper}>
              <img className={styles.tShirtIcon} alt="" src={bong3} />
            </div>
          </div>
          <div className={styles.rece}>{`Top 10 `}</div>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.frameContainer}>
            <div className={styles.tShirtWrapper}>
              <img className={styles.tShirtIcon} alt="" src={tShirt1} />
            </div>
            <div className={styles.tShirtWrapper}>
              <img className={styles.tShirtIcon} alt="" src={sweater1} />
            </div>
            <div className={styles.tShirtWrapper}>
              <img className={styles.tShirtIcon} alt="" src={baseballCap1} />
            </div>
            <div className={styles.tShirtWrapper}>
              <img className={styles.tShirtIcon} alt="" src={bong4} />
            </div>
            <div className={styles.tShirtWrapper}>
              <img className={styles.tShirtIcon} alt="" src={bong5} />
            </div>
          </div>
          <div className={styles.rece}>rece..</div>
        </div>
        <div className={styles.bongWrapper3}>
          <img className={styles.tShirtIcon} alt="" src={bong6} />
        </div>
        <div className={styles.frameParent3}>
          <div className={styles.frameContainer}>
            <div className={styles.tShirtWrapper}>
              <img className={styles.tShirtIcon} alt="" src={tShirt2} />
            </div>
            <div className={styles.tShirtWrapper}>
              <img className={styles.tShirtIcon} alt="" src={sweater2} />
            </div>
          </div>
          <div className={styles.rece}>Bônus</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
