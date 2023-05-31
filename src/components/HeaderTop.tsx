import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./HeaderTop.module.css";

type HeaderTopType = {
  vector?: string;
  frame1410103065?: string;
  tShirt?: string;
  tShirt1?: string;
  tShirt2?: string;
  tShirt3?: string;
  tShirt4?: string;
  tShirt5?: string;

  /** Style props */
  propTop?: Property.Top;
  propLeft?: Property.Left;
};

const HeaderTop: FunctionComponent<HeaderTopType> = ({
  vector,
  frame1410103065,
  tShirt,
  tShirt1,
  tShirt2,
  tShirt3,
  tShirt4,
  tShirt5,
  propTop,
  propLeft,
}) => {
  const headerStyle: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className={styles.header} style={headerStyle}>
      <div className={styles.menu}>
        <div className={styles.menuChild} />
        <div className={styles.menuItem} />
        <div className={styles.menuInner} />
      </div>
      <img
        className={styles.logoSaurobet11}
        alt=""
        src="/logo--saurobet-1-1@2x.png"
      />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.vectorParent}>
              <img className={styles.vectorIcon} alt="" src={vector} />
              <div className={styles.ellipseParent}>
                <div className={styles.frameChild} />
                <div className={styles.div}>1</div>
              </div>
            </div>
          </div>
          <img className={styles.frameWrapper} alt="" src={frame1410103065} />
        </div>
        <div className={styles.tShirtParent}>
          <img className={styles.tShirtIcon} alt="" src={tShirt} />
          <div className={styles.esportes}>R$ 1.034,03</div>
        </div>
        <div className={styles.botao1}>
          <b className={styles.depositar}>Depositar</b>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.tShirtGroup}>
          <img className={styles.tShirtIcon} alt="" src={tShirt1} />
          <div className={styles.esportes}>Esportes</div>
        </div>
        <div className={styles.tShirtGroup}>
          <img className={styles.tShirtIcon} alt="" src={tShirt2} />
          <div className={styles.esportes}>Live</div>
        </div>
        <div className={styles.frameDiv}>
          <img className={styles.tShirtIcon} alt="" src={tShirt3} />
          <div className={styles.esportes}>Casino</div>
        </div>
        <div className={styles.tShirtGroup}>
          <img className={styles.tShirtIcon} alt="" src={tShirt4} />
          <div className={styles.esportes}>Casino Live</div>
        </div>
        <div className={styles.tShirtGroup}>
          <img className={styles.tShirtIcon5} alt="" src={tShirt5} />
          <div className={styles.esportes}>Poker</div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
