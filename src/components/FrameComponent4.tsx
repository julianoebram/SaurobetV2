import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./FrameComponent4.module.css";

type FrameComponent4Type = {
  /** Style props */
  propLeft?: Property.Left;
  propWidth?: Property.Width;
  propBackgroundColor?: Property.BackgroundColor;
  propColor?: Property.Color;
  propBackgroundColor1?: Property.BackgroundColor;
  propColor1?: Property.Color;
  propBackgroundColor2?: Property.BackgroundColor;
  propColor2?: Property.Color;
  propBackgroundColor3?: Property.BackgroundColor;
  propColor3?: Property.Color;
  propBackgroundColor4?: Property.BackgroundColor;
  propColor4?: Property.Color;
  propBackgroundColor5?: Property.BackgroundColor;
  propColor5?: Property.Color;
  propBackgroundColor6?: Property.BackgroundColor;
  propColor6?: Property.Color;
  propBackgroundColor7?: Property.BackgroundColor;
  propColor7?: Property.Color;
  propBackgroundColor8?: Property.BackgroundColor;
  propColor8?: Property.Color;
  propWidth1?: Property.Width;
  propBackgroundColor9?: Property.BackgroundColor;
  propWidth2?: Property.Width;
  propBackgroundColor10?: Property.BackgroundColor;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  propLeft,
  propWidth,
  propBackgroundColor,
  propColor,
  propBackgroundColor1,
  propColor1,
  propBackgroundColor2,
  propColor2,
  propBackgroundColor3,
  propColor3,
  propBackgroundColor4,
  propColor4,
  propBackgroundColor5,
  propColor5,
  propBackgroundColor6,
  propColor6,
  propBackgroundColor7,
  propColor7,
  propBackgroundColor8,
  propColor8,
  propWidth1,
  propBackgroundColor9,
  propWidth2,
  propBackgroundColor10,
}) => {
  const frameDiv15Style: CSS.Properties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const frameDiv16Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const rectangleDiv26Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const div8Style: CSS.Properties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const rectangleDiv27Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const x2Style: CSS.Properties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const rectangleDiv28Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor2,
    };
  }, [propBackgroundColor2]);

  const div9Style: CSS.Properties = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  const rectangleDiv29Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor3,
    };
  }, [propBackgroundColor3]);

  const hDP2Style: CSS.Properties = useMemo(() => {
    return {
      color: propColor3,
    };
  }, [propColor3]);

  const rectangleDiv30Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor4,
    };
  }, [propBackgroundColor4]);

  const div10Style: CSS.Properties = useMemo(() => {
    return {
      color: propColor4,
    };
  }, [propColor4]);

  const rectangleDiv31Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor5,
    };
  }, [propBackgroundColor5]);

  const div11Style: CSS.Properties = useMemo(() => {
    return {
      color: propColor5,
    };
  }, [propColor5]);

  const rectangleDiv32Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor6,
    };
  }, [propBackgroundColor6]);

  const oU2Style: CSS.Properties = useMemo(() => {
    return {
      color: propColor6,
    };
  }, [propColor6]);

  const rectangleDiv33Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor7,
    };
  }, [propBackgroundColor7]);

  const uNDER2Style: CSS.Properties = useMemo(() => {
    return {
      color: propColor7,
    };
  }, [propColor7]);

  const rectangleDiv34Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor8,
    };
  }, [propBackgroundColor8]);

  const oVER2Style: CSS.Properties = useMemo(() => {
    return {
      color: propColor8,
    };
  }, [propColor8]);

  const frameDiv17Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const rectangleDiv35Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor9,
    };
  }, [propBackgroundColor9]);

  const frameDiv18Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const rectangleDiv36Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor10,
    };
  }, [propBackgroundColor10]);

  return (
    <div className={styles.frameParent} style={frameDiv15Style}>
      <div className={styles.frameGroup} style={frameDiv16Style}>
        <div className={styles.tShirtParent}>
          <img className={styles.tShirtIcon} alt="" src="/tshirt67.svg" />
          <div className={styles.frameChild} style={rectangleDiv26Style} />
          <div className={styles.frameWrapper}>
            <div className={styles.premierLeagueWrapper}>
              <div className={styles.premierLeague}>Premier League</div>
            </div>
          </div>
        </div>
        <div className={styles.parent}>
          <div className={styles.div} style={div8Style}>
            1
          </div>
          <div className={styles.frameChild} style={rectangleDiv27Style} />
          <div className={styles.div} style={x2Style}>
            X
          </div>
          <div className={styles.frameChild} style={rectangleDiv28Style} />
          <div className={styles.div} style={div9Style}>
            2
          </div>
          <div className={styles.frameChild} style={rectangleDiv29Style} />
          <div className={styles.div} style={hDP2Style}>
            HDP
          </div>
          <div className={styles.frameChild} style={rectangleDiv30Style} />
          <div className={styles.div} style={div10Style}>
            1
          </div>
          <div className={styles.frameChild} style={rectangleDiv31Style} />
          <div className={styles.div} style={div11Style}>
            2
          </div>
          <div className={styles.frameChild} style={rectangleDiv32Style} />
          <div className={styles.div} style={oU2Style}>
            O/U
          </div>
          <div className={styles.frameChild} style={rectangleDiv33Style} />
          <div className={styles.under} style={uNDER2Style}>
            UNDER
          </div>
          <div className={styles.frameChild} style={rectangleDiv34Style} />
          <div className={styles.under} style={oVER2Style}>
            OVER
          </div>
        </div>
      </div>
      <div className={styles.frameContainer} style={frameDiv17Style}>
        <div className={styles.tShirtParent}>
          <div className={styles.aprParent}>
            <div className={styles.apr}>18 Apr</div>
            <div className={styles.apr}>12:00</div>
          </div>
          <div className={styles.frameChild6} style={rectangleDiv35Style} />
          <div className={styles.frameWrapper}>
            <div className={styles.liverpoolFcParent}>
              <div className={styles.premierLeague}>Liverpool FC</div>
              <div className={styles.premierLeague}>Leeds United</div>
            </div>
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.div}>2.88</div>
          <div className={styles.frameChild7} />
          <div className={styles.div}>2.88</div>
          <div className={styles.frameChild7} />
          <div className={styles.div}>2.88</div>
          <div className={styles.frameChild7} />
          <div className={styles.div}>2.88</div>
          <div className={styles.frameChild7} />
          <div className={styles.div}>2.88</div>
          <div className={styles.frameChild7} />
          <div className={styles.div}>2.88</div>
          <div className={styles.frameChild7} />
          <div className={styles.div}>2.88</div>
          <div className={styles.frameChild7} />
          <div className={styles.div}>2.88</div>
          <div className={styles.frameChild7} />
          <div className={styles.div}>2.88</div>
        </div>
      </div>
      <div className={styles.frameParent1} style={frameDiv18Style}>
        <div className={styles.tShirtParent}>
          <div className={styles.aprParent}>
            <div className={styles.apr}>18 Apr</div>
            <div className={styles.apr}>12:00</div>
          </div>
          <div className={styles.frameChild6} style={rectangleDiv36Style} />
          <div className={styles.frameWrapper}>
            <div className={styles.liverpoolFcParent}>
              <div className={styles.premierLeague}>SK Prostejov</div>
              <div className={styles.premierLeague}>MFK Vyskov</div>
            </div>
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.div}>2.88</div>
          <div className={styles.frameChild7} />
          <div className={styles.div}>2.88</div>
          <div className={styles.frameChild7} />
          <div className={styles.div}>2.88</div>
          <div className={styles.frameChild7} />
          <div className={styles.div}>2.88</div>
          <div className={styles.frameChild7} />
          <div className={styles.div}>2.88</div>
          <div className={styles.frameChild7} />
          <div className={styles.div}>2.88</div>
          <div className={styles.frameChild7} />
          <div className={styles.div}>2.88</div>
          <div className={styles.frameChild7} />
          <div className={styles.div}>2.88</div>
          <div className={styles.frameChild7} />
          <div className={styles.div}>2.88</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
