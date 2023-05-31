import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./FrameComponent3.module.css";

type FrameComponent3Type = {
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
  propWidth3?: Property.Width;
  propBackgroundColor11?: Property.BackgroundColor;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
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
  propWidth3,
  propBackgroundColor11,
}) => {
  const frameDiv10Style: CSS.Properties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const frameDiv11Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const rectangleDiv14Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const div4Style: CSS.Properties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const rectangleDiv15Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const x1Style: CSS.Properties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const rectangleDiv16Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor2,
    };
  }, [propBackgroundColor2]);

  const div5Style: CSS.Properties = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  const rectangleDiv17Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor3,
    };
  }, [propBackgroundColor3]);

  const hDP1Style: CSS.Properties = useMemo(() => {
    return {
      color: propColor3,
    };
  }, [propColor3]);

  const rectangleDiv18Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor4,
    };
  }, [propBackgroundColor4]);

  const div6Style: CSS.Properties = useMemo(() => {
    return {
      color: propColor4,
    };
  }, [propColor4]);

  const rectangleDiv19Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor5,
    };
  }, [propBackgroundColor5]);

  const div7Style: CSS.Properties = useMemo(() => {
    return {
      color: propColor5,
    };
  }, [propColor5]);

  const rectangleDiv20Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor6,
    };
  }, [propBackgroundColor6]);

  const oU1Style: CSS.Properties = useMemo(() => {
    return {
      color: propColor6,
    };
  }, [propColor6]);

  const rectangleDiv21Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor7,
    };
  }, [propBackgroundColor7]);

  const uNDER1Style: CSS.Properties = useMemo(() => {
    return {
      color: propColor7,
    };
  }, [propColor7]);

  const rectangleDiv22Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor8,
    };
  }, [propBackgroundColor8]);

  const oVER1Style: CSS.Properties = useMemo(() => {
    return {
      color: propColor8,
    };
  }, [propColor8]);

  const frameDiv12Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const rectangleDiv23Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor9,
    };
  }, [propBackgroundColor9]);

  const frameDiv13Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const rectangleDiv24Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor10,
    };
  }, [propBackgroundColor10]);

  const frameDiv14Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth3,
    };
  }, [propWidth3]);

  const rectangleDiv25Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor11,
    };
  }, [propBackgroundColor11]);

  return (
    <div className={styles.frameParent} style={frameDiv10Style}>
      <div className={styles.frameGroup} style={frameDiv11Style}>
        <div className={styles.tShirtParent}>
          <img className={styles.tShirtIcon} alt="" src="/tshirt66.svg" />
          <div className={styles.frameChild} style={rectangleDiv14Style} />
          <div className={styles.frameWrapper}>
            <div className={styles.premierLeagueWrapper}>
              <div className={styles.premierLeague}>Premier League</div>
            </div>
          </div>
        </div>
        <div className={styles.parent}>
          <div className={styles.div} style={div4Style}>
            1
          </div>
          <div className={styles.frameChild} style={rectangleDiv15Style} />
          <div className={styles.div} style={x1Style}>
            X
          </div>
          <div className={styles.frameChild} style={rectangleDiv16Style} />
          <div className={styles.div} style={div5Style}>
            2
          </div>
          <div className={styles.frameChild} style={rectangleDiv17Style} />
          <div className={styles.div} style={hDP1Style}>
            HDP
          </div>
          <div className={styles.frameChild} style={rectangleDiv18Style} />
          <div className={styles.div} style={div6Style}>
            1
          </div>
          <div className={styles.frameChild} style={rectangleDiv19Style} />
          <div className={styles.div} style={div7Style}>
            2
          </div>
          <div className={styles.frameChild} style={rectangleDiv20Style} />
          <div className={styles.div} style={oU1Style}>
            O/U
          </div>
          <div className={styles.frameChild} style={rectangleDiv21Style} />
          <div className={styles.under} style={uNDER1Style}>
            UNDER
          </div>
          <div className={styles.frameChild} style={rectangleDiv22Style} />
          <div className={styles.under} style={oVER1Style}>
            OVER
          </div>
        </div>
      </div>
      <div className={styles.frameContainer} style={frameDiv12Style}>
        <div className={styles.tShirtParent}>
          <div className={styles.aprParent}>
            <div className={styles.apr}>18 Apr</div>
            <div className={styles.apr}>12:00</div>
          </div>
          <div className={styles.frameChild6} style={rectangleDiv23Style} />
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
      <div className={styles.frameParent1} style={frameDiv13Style}>
        <div className={styles.tShirtParent}>
          <div className={styles.aprParent}>
            <div className={styles.apr}>18 Apr</div>
            <div className={styles.apr}>12:00</div>
          </div>
          <div className={styles.frameChild6} style={rectangleDiv24Style} />
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
      <div className={styles.frameParent1} style={frameDiv14Style}>
        <div className={styles.tShirtParent}>
          <div className={styles.aprParent}>
            <div className={styles.apr}>18 Apr</div>
            <div className={styles.apr}>12:00</div>
          </div>
          <div className={styles.frameChild6} style={rectangleDiv25Style} />
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

export default FrameComponent3;
