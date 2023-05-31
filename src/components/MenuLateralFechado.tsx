import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./MenuLateralFechado.module.css";

type MenuLateralFechadoType = {
  /** Style props */
  menuLateralFechadoVisibility?: Property.Visibility;
};

const MenuLateralFechado: FunctionComponent<MenuLateralFechadoType> = ({
  menuLateralFechadoVisibility,
}) => {
  const menuLateralFechadoStyle: CSS.Properties = useMemo(() => {
    return {
      visibility: menuLateralFechadoVisibility,
    };
  }, [menuLateralFechadoVisibility]);

  return (
    <div className={styles.menuLateralFechado} style={menuLateralFechadoStyle}>
      <div className={styles.menuLateralFechadoChild} />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.tShirtWrapper}>
              <img className={styles.tShirtIcon} alt="" src="/tshirt3.svg" />
            </div>
            <div className={styles.tShirtWrapper}>
              <img className={styles.tShirtIcon} alt="" src="/sweater3.svg" />
            </div>
          </div>
          <div className={styles.bnus}>Bônus</div>
          <div className={styles.ellipseParent}>
            <div className={styles.frameChild} />
            <div className={styles.div}>1</div>
          </div>
          <div className={styles.ellipseGroup}>
            <div className={styles.frameChild} />
            <div className={styles.div1}>2</div>
          </div>
        </div>
        <div className={styles.top10Parent}>
          <div className={styles.top10}>{`Top 10 `}</div>
          <div className={styles.frameDiv}>
            <div className={styles.tShirtWrapper}>
              <img className={styles.tShirtIcon} alt="" src="/tshirt4.svg" />
            </div>
            <div className={styles.tShirtWrapper}>
              <img
                className={styles.tShirtIcon}
                alt=""
                src="/baseball-cap2.svg"
              />
            </div>
            <div className={styles.tShirtWrapper}>
              <img className={styles.tShirtIcon} alt="" src="/sweater4.svg" />
            </div>
            <div className={styles.tShirtWrapper}>
              <img className={styles.tShirtIcon} alt="" src="/bong6.svg" />
            </div>
            <div className={styles.tShirtWrapper}>
              <img className={styles.tShirtIcon} alt="" src="/bong7.svg" />
            </div>
            <div className={styles.tShirtWrapper}>
              <img className={styles.tShirtIcon} alt="" src="/bong8.svg" />
            </div>
            <div className={styles.tShirtWrapper}>
              <img className={styles.tShirtIcon} alt="" src="/bong9.svg" />
            </div>
          </div>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.frameContainer}>
            <div className={styles.tShirtWrapper}>
              <img className={styles.tShirtIcon} alt="" src="/tshirt5.svg" />
            </div>
            <div className={styles.tShirtWrapper}>
              <img className={styles.tShirtIcon} alt="" src="/sweater5.svg" />
            </div>
            <div className={styles.tShirtWrapper}>
              <img
                className={styles.tShirtIcon}
                alt=""
                src="/baseball-cap3.svg"
              />
            </div>
            <div className={styles.tShirtWrapper}>
              <img className={styles.tShirtIcon} alt="" src="/bong10.svg" />
            </div>
            <div className={styles.tShirtWrapper}>
              <img className={styles.tShirtIcon} alt="" src="/bong11.svg" />
            </div>
          </div>
          <div className={styles.rece}>rece..</div>
          <div className={styles.bongWrapper4}>
            <img className={styles.tShirtIcon} alt="" src="/bong12.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuLateralFechado;
