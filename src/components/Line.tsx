import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./Line.module.css";

type LineType = {
  receberComunicaesDeMarket?: string;
  moon?: string;

  /** Style props */
  propTransform?: Property.Transform;
  propTransformOrigin?: Property.TransformOrigin;
  propBackgroundColor?: Property.BackgroundColor;
  propBackground?: Property.Background;
};

const Line: FunctionComponent<LineType> = ({
  receberComunicaesDeMarket,
  moon,
  propTransform,
  propTransformOrigin,
  propBackgroundColor,
  propBackground,
}) => {
  const darkLightStyle: CSS.Properties = useMemo(() => {
    return {
      transform: propTransform,
      transformOrigin: propTransformOrigin,
    };
  }, [propTransform, propTransformOrigin]);

  const frameDivStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      background: propBackground,
    };
  }, [propBackgroundColor, propBackground]);

  return (
    <div className={styles.line}>
      <div className={styles.lineInner}>
        <div className={styles.frameParent}>
          <div className={styles.receberComunicaesDeMarketWrapper}>
            <b className={styles.receberComunicaesDe}>
              {receberComunicaesDeMarket}
            </b>
          </div>
          <div className={styles.darkLight} style={darkLightStyle}>
            <div className={styles.moonWrapper} style={frameDivStyle}>
              <img className={styles.moonIcon} alt="" src={moon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Line;
