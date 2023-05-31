import { FunctionComponent } from "react";
import styles from "./FrameComponent10.module.css";

type FrameComponent10Type = {
  frame1410103126?: string;
  cOMPROVANTEDEENDEREO?: string;
  vector?: string;
};

const FrameComponent10: FunctionComponent<FrameComponent10Type> = ({
  frame1410103126,
  cOMPROVANTEDEENDEREO,
  vector,
}) => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <img className={styles.frameChild} alt="" src={frame1410103126} />
        <b className={styles.valideSuaConta}>Valide sua conta</b>
        <b className={styles.comprovanteDeEndereo}>{cOMPROVANTEDEENDEREO}</b>
        <div className={styles.arrasteOuProcure}>
          Arraste ou procure no windows para enviar seu documento.
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.typeboxParent}>
          <div className={styles.typebox}>
            <div className={styles.fileParent}>
              <img className={styles.fileIcon} alt="" src="/file.svg" />
              <div className={styles.arrastePraCWrapper}>
                <div className={styles.arrastePraC}>Arraste pra cá</div>
              </div>
            </div>
            <div className={styles.botao1}>
              <img className={styles.vectorIcon} alt="" src={vector} />
              <div className={styles.carregarDoWindowsContainer}>
                <p className={styles.carregar}>carregar</p>
                <p className={styles.carregar}>do Windows</p>
              </div>
            </div>
          </div>
          <div className={styles.botao11}>
            <b className={styles.enviar}>Enviar</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent10;
