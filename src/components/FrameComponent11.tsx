import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./FrameComponent11.module.css";

type FrameComponent11Type = {
  /** Style props */
  propHeight?: Property.Height;
};

const FrameComponent11: FunctionComponent<FrameComponent11Type> = ({
  propHeight,
}) => {
  const frameDiv20Style: CSS.Properties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.diceParent}>
          <img className={styles.diceIcon} alt="" src="/dice18.svg" />
          <div className={styles.informaesDaConta}>INFORMAÇÕES DA CONTA</div>
        </div>
        <div className={styles.diceParent} style={frameDiv20Style}>
          <img className={styles.diceIcon} alt="" src="/dice18.svg" />
          <div className={styles.informaesDaConta}>INFORMAÇÃO PESSOAIS</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent11;
