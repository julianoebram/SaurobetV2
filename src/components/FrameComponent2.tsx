import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./FrameComponent2.module.css";

type FrameComponent2Type = {
  /** Style props */
  sKProstejovLeft?: Property.Left;
  mFKVyskovWidth?: Property.Width;
  rectangle1552BackgroundColor?: Property.BackgroundColor;
  propColor?: Property.Color;
  rectangle1555BackgroundColor?: Property.BackgroundColor;
  propColor1?: Property.Color;
  rectangle1556BackgroundColor?: Property.BackgroundColor;
  propColor2?: Property.Color;
  rectangle1557BackgroundColor?: Property.BackgroundColor;
  propColor3?: Property.Color;
  rectangle1558BackgroundColor?: Property.BackgroundColor;
  propColor4?: Property.Color;
  rectangle1559BackgroundColor?: Property.BackgroundColor;
  propColor5?: Property.Color;
  frame1410103077BackgroundColor?: Property.BackgroundColor;
  frame1410103074Color?: Property.Color;
  frame1410103069BackgroundColor?: Property.BackgroundColor;
  aprColor?: Property.Color;
  propBackgroundColor?: Property.BackgroundColor;
  rectangle1552Color?: Property.Color;
  frame1410103070Width?: Property.Width;
  propBackgroundColor1?: Property.BackgroundColor;
  propWidth?: Property.Width;
  propBackgroundColor2?: Property.BackgroundColor;
  propWidth1?: Property.Width;
  propBackgroundColor3?: Property.BackgroundColor;
  propWidth2?: Property.Width;
  propBackgroundColor4?: Property.BackgroundColor;
  propWidth3?: Property.Width;
  propBackgroundColor5?: Property.BackgroundColor;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  sKProstejovLeft,
  mFKVyskovWidth,
  rectangle1552BackgroundColor,
  propColor,
  rectangle1555BackgroundColor,
  propColor1,
  rectangle1556BackgroundColor,
  propColor2,
  rectangle1557BackgroundColor,
  propColor3,
  rectangle1558BackgroundColor,
  propColor4,
  rectangle1559BackgroundColor,
  propColor5,
  frame1410103077BackgroundColor,
  frame1410103074Color,
  frame1410103069BackgroundColor,
  aprColor,
  propBackgroundColor,
  rectangle1552Color,
  frame1410103070Width,
  propBackgroundColor1,
  propWidth,
  propBackgroundColor2,
  propWidth1,
  propBackgroundColor3,
  propWidth2,
  propBackgroundColor4,
  propWidth3,
  propBackgroundColor5,
}) => {
  const frameDiv3Style: CSS.Properties = useMemo(() => {
    return {
      left: sKProstejovLeft,
    };
  }, [sKProstejovLeft]);

  const frameDiv4Style: CSS.Properties = useMemo(() => {
    return {
      width: mFKVyskovWidth,
    };
  }, [mFKVyskovWidth]);

  const rectangleDivStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: rectangle1552BackgroundColor,
    };
  }, [rectangle1552BackgroundColor]);

  const divStyle: CSS.Properties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const rectangleDiv1Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: rectangle1555BackgroundColor,
    };
  }, [rectangle1555BackgroundColor]);

  const xStyle: CSS.Properties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const rectangleDiv2Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: rectangle1556BackgroundColor,
    };
  }, [rectangle1556BackgroundColor]);

  const div1Style: CSS.Properties = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  const rectangleDiv3Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: rectangle1557BackgroundColor,
    };
  }, [rectangle1557BackgroundColor]);

  const hDPStyle: CSS.Properties = useMemo(() => {
    return {
      color: propColor3,
    };
  }, [propColor3]);

  const rectangleDiv4Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: rectangle1558BackgroundColor,
    };
  }, [rectangle1558BackgroundColor]);

  const div2Style: CSS.Properties = useMemo(() => {
    return {
      color: propColor4,
    };
  }, [propColor4]);

  const rectangleDiv5Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: rectangle1559BackgroundColor,
    };
  }, [rectangle1559BackgroundColor]);

  const div3Style: CSS.Properties = useMemo(() => {
    return {
      color: propColor5,
    };
  }, [propColor5]);

  const rectangleDiv6Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: frame1410103077BackgroundColor,
    };
  }, [frame1410103077BackgroundColor]);

  const oUStyle: CSS.Properties = useMemo(() => {
    return {
      color: frame1410103074Color,
    };
  }, [frame1410103074Color]);

  const rectangleDiv7Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: frame1410103069BackgroundColor,
    };
  }, [frame1410103069BackgroundColor]);

  const uNDERStyle: CSS.Properties = useMemo(() => {
    return {
      color: aprColor,
    };
  }, [aprColor]);

  const rectangleDiv8Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const oVERStyle: CSS.Properties = useMemo(() => {
    return {
      color: rectangle1552Color,
    };
  }, [rectangle1552Color]);

  const frameDiv5Style: CSS.Properties = useMemo(() => {
    return {
      width: frame1410103070Width,
    };
  }, [frame1410103070Width]);

  const rectangleDiv9Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const frameDiv6Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const rectangleDiv10Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor2,
    };
  }, [propBackgroundColor2]);

  const frameDiv7Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const rectangleDiv11Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor3,
    };
  }, [propBackgroundColor3]);

  const frameDiv8Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const rectangleDiv12Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor4,
    };
  }, [propBackgroundColor4]);

  const frameDiv9Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth3,
    };
  }, [propWidth3]);

  const rectangleDiv13Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor5,
    };
  }, [propBackgroundColor5]);

  return (
    <div className={styles.frameParent} style={frameDiv3Style}>
      <div className={styles.frameGroup} style={frameDiv4Style}>
        <div className={styles.tShirtParent}>
          <img className={styles.tShirtIcon} alt="" src="/tshirt66.svg" />
          <div className={styles.frameChild} style={rectangleDivStyle} />
          <div className={styles.frameWrapper}>
            <div className={styles.premierLeagueWrapper}>
              <div className={styles.premierLeague}>Premier League (NOME LIGA)</div>
            </div>
          </div>
        </div>
        <div className={styles.parent}>
          <div className={styles.div} style={divStyle}>
             
          </div>
          <div className={styles.frameChild} style={rectangleDiv1Style} />
          <div className={styles.div} style={xStyle}>
          BET1

          </div>
          <div className={styles.frameChild} style={rectangleDiv2Style} />
          <div className={styles.div} style={div1Style}>
          BET2

          </div>
          <div className={styles.frameChild} style={rectangleDiv3Style} />
          <div className={styles.div} style={hDPStyle}>
          BET3

          </div>
          <div className={styles.frameChild} style={rectangleDiv4Style} />
          <div className={styles.div} style={div2Style}>
          BET4

          </div>
          <div className={styles.frameChild} style={rectangleDiv5Style} />
          <div className={styles.div} style={div3Style}>
          BET5

          </div>
          <div className={styles.frameChild} style={rectangleDiv6Style} />
          <div className={styles.div} style={oUStyle}>
          BET6

          </div>
          <div className={styles.frameChild} style={rectangleDiv7Style} />
          <div className={styles.under} style={uNDERStyle}>
          BET7

          </div>
          <div className={styles.frameChild} style={rectangleDiv8Style} />
          <div className={styles.under} style={oVERStyle}>
          BET8

          </div>
        </div>
      </div>
      <div className={styles.frameContainer} style={frameDiv5Style}>
        <div className={styles.tShirtParent}>
          <div className={styles.aprParent}>
            <div className={styles.apr}>18 Abril</div>
            <div className={styles.apr}>12:00</div>
          </div>
          <div className={styles.frameChild6} style={rectangleDiv9Style} />
          <div className={styles.frameWrapper}>
            <div className={styles.liverpoolFcParent}>
              <div className={styles.premierLeague}>Liverpool FC</div>
              <div className={styles.premierLeague}>Leeds United</div>
            </div>
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.div}> </div>
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
      <div className={styles.frameParent1} style={frameDiv6Style}>
        <div className={styles.tShirtParent}>
          <div className={styles.aprParent}>
            <div className={styles.apr}>18 Abril</div>
            <div className={styles.apr}>12:00</div>
          </div>
          <div className={styles.frameChild6} style={rectangleDiv10Style} />
          <div className={styles.frameWrapper}>
            <div className={styles.liverpoolFcParent}>
              <div className={styles.premierLeague}>SK Prostejov</div>
              <div className={styles.premierLeague}>MFK Vyskov</div>
            </div>
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.div}> </div>
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
      <div className={styles.frameParent1} style={frameDiv7Style}>
        <div className={styles.tShirtParent}>
          <div className={styles.aprParent}>
            <div className={styles.apr}>18 Apr</div>
            <div className={styles.apr}>12:00</div>
          </div>
          <div className={styles.frameChild6} style={rectangleDiv11Style} />
          <div className={styles.frameWrapper}>
            <div className={styles.liverpoolFcParent}>
              <div className={styles.premierLeague}>SK Prostejov</div>
              <div className={styles.premierLeague}>MFK Vyskov</div>
            </div>
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.div}> </div>
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
      <div className={styles.frameParent1} style={frameDiv8Style}>
        <div className={styles.tShirtParent}>
          <div className={styles.aprParent}>
            <div className={styles.apr}>18 Apr</div>
            <div className={styles.apr}>12:00</div>
          </div>
          <div className={styles.frameChild6} style={rectangleDiv12Style} />
          <div className={styles.frameWrapper}>
            <div className={styles.liverpoolFcParent}>
              <div className={styles.premierLeague}>SK Prostejov</div>
              <div className={styles.premierLeague}>MFK Vyskov</div>
            </div>
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.div}> </div>
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
      <div className={styles.frameParent1} style={frameDiv9Style}>
        <div className={styles.tShirtParent}>
          <div className={styles.aprParent}>
            <div className={styles.apr}>18 Apr</div>
            <div className={styles.apr}>12:00</div>
          </div>
          <div className={styles.frameChild6} style={rectangleDiv13Style} />
          <div className={styles.frameWrapper}>
            <div className={styles.liverpoolFcParent}>
              <div className={styles.premierLeague}>SK Prostejov</div>
              <div className={styles.premierLeague}>MFK Vyskov</div>
            </div>
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.div}> </div>
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

export default FrameComponent2;
