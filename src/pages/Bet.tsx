import { FunctionComponent } from "react";
import FrameComponent13 from "../components/FrameComponent13";
import Header from "../components/Header";
import FrameComponent14 from "../components/FrameComponent14";
import FrameComponent from "../components/FrameComponent";
import styles from "./Bet.module.css";
const Bet: FunctionComponent = () => {
  return (
    <div className={styles.bet}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <FrameComponent13 />
      </div>
      <Header vector="/vector3.svg" tShirt="/tshirt72.svg" />
      <div className={styles.frameParent}>
        <div className={styles.tShirtParent}>
          <img className={styles.tShirtIcon} alt="" src="/tshirt73.svg" />
          <div className={styles.esportes}>Esportes</div>
        </div>
        <div className={styles.tShirtGroup}>
          <img className={styles.tShirtIcon} alt="" src="/tshirt51.svg" />
          <div className={styles.esportes}>Live</div>
        </div>
        <div className={styles.tShirtParent}>
          <img className={styles.tShirtIcon} alt="" src="/tshirt74.svg" />
          <div className={styles.esportes}>Casino</div>
        </div>
        <div className={styles.tShirtParent}>
          <img className={styles.tShirtIcon} alt="" src="/tshirt7.svg" />
          <div className={styles.esportes}>Casino Live</div>
        </div>
        <div className={styles.tShirtParent}>
          <img className={styles.tShirtIcon4} alt="" src="/tshirt75.svg" />
          <div className={styles.esportes}>Poker</div>
        </div>
      </div>
      <div className={styles.betChild} />
      <FrameComponent14 />
      <FrameComponent propTop="466px" />
      <FrameComponent propTop="597px" />
      <FrameComponent propTop="728px" />
      <FrameComponent propTop="859px" />
      <div className={styles.frameGroup}>
        <div className={styles.allWrapper}>
          <div className={styles.all}>All</div>
        </div>
        <div className={styles.otherWrapper}>
          <div className={styles.all}>Other</div>
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

export default Bet;
