import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./Line1.module.css";

type Line1Type = {
  depsito?: string;
  prop?: string;

  /** Style props */
  propBackgroundColor?: Property.BackgroundColor;
  propBorder?: Property.Border;
  propBoxShadow?: Property.BoxShadow;
  propColor?: Property.Color;
};

const Line1: FunctionComponent<Line1Type> = ({
  depsito,
  prop,
  propBackgroundColor,
  propBorder,
  propBoxShadow,
  propColor,
}) => {
  const lineStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      border: propBorder,
      boxShadow: propBoxShadow,
    };
  }, [propBackgroundColor, propBorder, propBoxShadow]);

  const bStyle: CSS.Properties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={styles.line} style={lineStyle}>
      <div className={styles.lineInner}>
        <div className={styles.frameParent}>
          <div className={styles.depsitoParent}>
            <b className={styles.depsito}>{depsito}</b>
            <b className={styles.b}>22/03/2023 - 19:35</b>
          </div>
          <b className={styles.b1} style={bStyle}>
            {prop}
          </b>
        </div>
      </div>
    </div>
  );
};

export default Line1;
