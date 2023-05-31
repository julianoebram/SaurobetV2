import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./FrameComponent5.module.css";

type FrameComponent5Type = {
  rectangle1562?: string;
  rectangle15621?: string;
  tShirt?: string;
  tShirt1?: string;
  tShirt2?: string;

  /** Style props */
  frame1410103103Top?: Property.Top;
  frame1410103103Left?: Property.Left;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  rectangle1562,
  rectangle15621,
  tShirt,
  tShirt1,
  tShirt2,
  frame1410103103Top,
  frame1410103103Left,
}) => {
  const frameDiv2Style: CSS.Properties = useMemo(() => {
    return {
      top: frame1410103103Top,
      left: frame1410103103Left,
    };
  }, [frame1410103103Top, frame1410103103Left]);

  return (
    <div className={styles.frameParent} style={frameDiv2Style}>
      <div className={styles.frameGroup}>
        <div className={styles.rectangleParent}>
          <img className={styles.frameChild} alt="" src={rectangle1562} />
          <div className={styles.liverpoolFc}>Liverpool FC</div>
        </div>
        <div className={styles.x1}>
          <span className={styles.x1TxtContainer}>
            <b>{`3  x  `}</b>
            <span className={styles.span}>{` `}</span>
            <b>1</b>
          </span>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.liverpoolFc}>Leeds FC</div>
          <img className={styles.frameChild} alt="" src={rectangle15621} />
        </div>
      </div>
      <div className={styles.frameInner} />
      <div className={styles.frameContainer}>
        <div className={styles.parent}>
          <div className={styles.div}>{`1 `}</div>
          <b className={styles.b}>1.87</b>
        </div>
        <div className={styles.xParent}>
          <div className={styles.div}>{`X `}</div>
          <div className={styles.div1}>3.24</div>
        </div>
        <div className={styles.parent}>
          <div className={styles.div}>{`2 `}</div>
          <div className={styles.div3}>4.20</div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.tShirtParent}>
          <img className={styles.tShirtIcon} alt="" src={tShirt} />
          <div className={styles.div}>19 Apr, Wed</div>
        </div>
        <div className={styles.tShirtParent}>
          <img className={styles.tShirtIcon} alt="" src={tShirt1} />
          <div className={styles.div}>Soccer</div>
        </div>
        <div className={styles.tShirtParent}>
          <img className={styles.tShirtIcon} alt="" src={tShirt2} />
          <div className={styles.div}>Premier League</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
