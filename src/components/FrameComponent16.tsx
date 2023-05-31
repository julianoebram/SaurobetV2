import { FunctionComponent } from "react";
import styles from "./FrameComponent16.module.css";
const FrameComponent16: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.tShirtParent}>
          <img className={styles.tShirtIcon} alt="" src="/tshirt58.svg" />
          <div className={styles.boletim}>Boletim</div>
        </div>
        <img className={styles.closeIcon} alt="" src="/close.svg" />
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.simplesWrapper}>
          <div className={styles.simples}>Simples</div>
        </div>
        <div className={styles.multiplaWrapper}>
          <div className={styles.simples}>Multipla</div>
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon} alt="" src="/vector9.svg" />
          <div className={styles.liverpoolFcVs}>Liverpool FC vs Leeds FC</div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.frameWrapper1}>
          <div className={styles.odds420Wrapper}>
            <div className={styles.liverpoolFcVs}>ODDS 4.20</div>
          </div>
        </div>
        <div className={styles.frameWrapper1}>
          <div className={styles.odds420Wrapper}>
            <div className={styles.liverpoolFcVs}>Leeds FC - 2x1</div>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper3}>
        <div className={styles.valorDaApostaParent}>
          <div className={styles.liverpoolFcVs}>Valor da Aposta</div>
          <div className={styles.parent}>
            <b className={styles.b}>25,00</b>
            <img className={styles.editIcon} alt="" src="/edit.svg" />
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper4}>
        <div className={styles.retornoPossvelParent}>
          <div className={styles.liverpoolFcVs}>Retorno Possível</div>
          <b className={styles.b1}>724,00</b>
        </div>
      </div>
      <div className={styles.makeBetWrapper}>
        <div className={styles.simples}>MAKE BET</div>
      </div>
    </div>
  );
};

export default FrameComponent16;
