import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./FrameComponent.module.css";

type FrameComponentType = {
  /** Style props */
  propTop?: Property.Top;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({ propTop }) => {
  const frameDiv19Style: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className={styles.frameParent} style={frameDiv19Style}>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameDiv}>
              <div className={styles.x2Wrapper}>
                <div className={styles.x2}>1x2</div>
              </div>
            </div>
          </div>
          <div className={styles.vectorWrapper}>
            <img className={styles.vectorIcon} alt="" src="/vector10.svg" />
          </div>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.frameWrapper1}>
            <div className={styles.w1Parent}>
              <div className={styles.w1}>W1</div>
              <div className={styles.x2Wrapper}>
                <div className={styles.x2Wrapper}>
                  <b className={styles.b}>2.88</b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameChild} />
          <div className={styles.frameWrapper1}>
            <div className={styles.w1Parent}>
              <div className={styles.w1}>W1</div>
              <div className={styles.x2Wrapper}>
                <div className={styles.x2Wrapper}>
                  <b className={styles.b}>2.88</b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameChild} />
          <div className={styles.frameWrapper1}>
            <div className={styles.w1Parent}>
              <div className={styles.w1}>W1</div>
              <div className={styles.x2Wrapper}>
                <div className={styles.x2Wrapper}>
                  <b className={styles.b}>2.88</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameDiv}>
              <div className={styles.x2Wrapper}>
                <div className={styles.x2}>1x2</div>
              </div>
            </div>
          </div>
          <div className={styles.vectorWrapper}>
            <img className={styles.vectorIcon} alt="" src="/vector11.svg" />
          </div>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.frameWrapper1}>
            <div className={styles.w1Parent}>
              <div className={styles.w1}>W1</div>
              <div className={styles.x2Wrapper}>
                <div className={styles.x2Wrapper}>
                  <b className={styles.b}>2.88</b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameChild} />
          <div className={styles.frameWrapper1}>
            <div className={styles.w1Parent}>
              <div className={styles.w1}>W1</div>
              <div className={styles.x2Wrapper}>
                <div className={styles.x2Wrapper}>
                  <b className={styles.b}>2.88</b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameChild} />
          <div className={styles.frameWrapper1}>
            <div className={styles.w1Parent}>
              <div className={styles.w1}>W1</div>
              <div className={styles.x2Wrapper}>
                <div className={styles.x2Wrapper}>
                  <b className={styles.b}>2.88</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
