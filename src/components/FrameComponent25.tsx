import { FunctionComponent } from "react";
import FrameComponent10 from "./FrameComponent10";
import styles from "./FrameComponent25.module.css";
const FrameComponent25: FunctionComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.vectorWrapper}>
        <img className={styles.vectorIcon} alt="" src="/vector4.svg" />
      </div>
      <FrameComponent10
        frame1410103126="/frame-14101031261.svg"
        cOMPROVANTEDEENDEREO="COMPROVANTE DE IDENTIFICAÇÃO"
        vector="/vector5.svg"
      />
    </div>
  );
};

export default FrameComponent25;
