import { FunctionComponent } from "react";
import styles from "./FrameComponent17.module.css";
const FrameComponent17: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.tShirtParent}>
          <img className={styles.tShirtIcon} alt="" src="/tshirt100.svg" />
          <div className={styles.boletim}>Boletim</div>
        </div>
        <img className={styles.closeIcon} alt="" src="/close2.svg" />
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.simplesWrapper}>
          <div className={styles.simples}>Simples</div>
        </div>
        <div className={styles.multiplaWrapper}>
          <div className={styles.multipla}>Multipla</div>
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon} alt="" src="/vector12.svg" />
          <div className={styles.liverpoolFcVs}>Liverpool FC vs Leeds FC</div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.frameWrapper1}>
          <div className={styles.wrapper}>
            <div className={styles.liverpoolFcVs}>4.20</div>
          </div>
        </div>
        <div className={styles.frameWrapper1}>
          <div className={styles.wrapper}>
            <div className={styles.liverpoolFcVs}>Leeds FC - 2x1</div>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper3}>
        <div className={styles.valorDaApostaParent}>
          <div className={styles.liverpoolFcVs}>Valor da Aposta</div>
          <div className={styles.container}>
            <b className={styles.b}>25,00</b>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper4}>
        <div className={styles.valorDaApostaParent}>
          <div className={styles.liverpoolFcVs}>Retorno Possível</div>
          <b className={styles.b1}>724,00</b>
        </div>
      </div>
      <div className={styles.makeBetWrapper}>
        <div className={styles.multipla}>MAKE BET</div>
      </div>
    </div>
  );
};

export default FrameComponent17;
