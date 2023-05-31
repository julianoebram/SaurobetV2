import { FunctionComponent } from "react";
import FrameComponent10 from "./FrameComponent10";
import styles from "./FrameComponent24.module.css";
const FrameComponent24: FunctionComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <FrameComponent10
        frame1410103126="/frame-1410103126.svg"
        cOMPROVANTEDEENDEREO="COMPROVANTE DE ENDEREÇO"
        vector="/vector6.svg"
      />
      <div className={styles.vectorWrapper}>
        <img className={styles.vectorIcon} alt="" src="/vector4.svg" />
      </div>
    </div>
  );
};

export default FrameComponent24;
