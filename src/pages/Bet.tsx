import { FunctionComponent } from "react";
import FrameComponent13 from "../components/FrameComponent13";
import MenuLateral1 from "../components/MenuLateral1";
import HeaderTop2 from "../components/HeaderTop2";
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
      <MenuLateral1 />
      <HeaderTop2 />
      
      <div className={styles.betChild} />
      <FrameComponent14 />
      
      <div className={styles.frameGroup}>
        <div className={styles.allWrapper}>
          <div className={styles.all}>All</div>
        </div>
        <div className={styles.otherWrapper}>
          <div className={styles.all}>Other</div>
        </div>
      </div>
      
    </div>
  );
};

export default Bet;
