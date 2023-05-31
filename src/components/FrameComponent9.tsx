import { FunctionComponent } from "react";
import styles from "./FrameComponent9.module.css";
const FrameComponent9: FunctionComponent = () => {
  return (
    <div className={styles.settingsValidao5Inner}>
      <div className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameGroup}>
            <img
              className={styles.frameItem}
              alt=""
              src="/frame-1410103126.svg"
            />
            <b className={styles.comprovanteDeEndereoContainer}>
              <span className={styles.comprovanteDeEndereoContainer1}>
                <p className={styles.comprovante}>COMPROVANTE</p>
                <p className={styles.deEndereo}> DE ENDEREÇO</p>
              </span>
            </b>
            <div className={styles.botao1}>
              <b className={styles.enviar}>Enviar</b>
            </div>
          </div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameChild} />
          <div className={styles.frameGroup}>
            <img
              className={styles.frameItem}
              alt=""
              src="/frame-14101031261.svg"
            />
            <b className={styles.comprovanteDeIdentificao}>
              COMPROVANTE DE IDENTIFICAÇÃO
            </b>
            <div className={styles.botao1}>
              <b className={styles.enviar}>Enviar</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent9;
