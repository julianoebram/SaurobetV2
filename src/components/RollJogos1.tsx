import { FunctionComponent } from "react";
import ImagemJogo from "./ImagemJogo";
import styles from "./RollJogos1.module.css";
const RollJogos1: FunctionComponent = () => {
  return (
    <div className={styles.rollJogos}>
      <div className={styles.casinoAoVivo}>Casino ao vivo</div>
      <div className={styles.frameParent}>
        <div className={styles.gatesOfOlympusWrapper}>
          <div className={styles.gatesOfOlympusContainer}>
            <p className={styles.gatesOf}>Gates of</p>
            <p className={styles.olympus}>Olympus</p>
          </div>
        </div>
        <ImagemJogo
          rectangle1544="/rectangle-15446@2x.png"
          minesDare="Crazy "
          win="Time"
        />
        <ImagemJogo
          rectangle1544="/rectangle-15447@2x.png"
          minesDare="Sweet "
          win="Bonanza"
        />
        <ImagemJogo
          rectangle1544="/rectangle-15448@2x.png"
          minesDare="Lightning"
          win="Roulette"
        />
        <div className={styles.gatesOfOlympusFrame}>
          <div className={styles.gatesOfOlympusContainer}>
            <p className={styles.gatesOf}>Gates of</p>
            <p className={styles.olympus}>Olympus</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RollJogos1;
