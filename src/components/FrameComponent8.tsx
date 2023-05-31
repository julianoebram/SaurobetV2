import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./FrameComponent8.module.css";

type FrameComponent8Type = {
  iconlyLightOutlineArrowDo?: string;
  dice?: string;
  dice1?: string;
  dice2?: string;
  dice3?: string;
  dice4?: string;
  dice5?: string;
  dice6?: string;
  tShirt?: string;
  baseballCap?: string;
  sweater?: string;
  bong?: string;
  bong1?: string;
  bong2?: string;

  /** Style props */
  rectangle1540Top?: Property.Top;
  rectangle1540Left?: Property.Left;
};

const FrameComponent8: FunctionComponent<FrameComponent8Type> = ({
  iconlyLightOutlineArrowDo,
  dice,
  dice1,
  dice2,
  dice3,
  dice4,
  dice5,
  dice6,
  tShirt,
  baseballCap,
  sweater,
  bong,
  bong1,
  bong2,
  rectangle1540Top,
  rectangle1540Left,
}) => {
  const frameDiv1Style: CSS.Properties = useMemo(() => {
    return {
      top: rectangle1540Top,
      left: rectangle1540Left,
    };
  }, [rectangle1540Top, rectangle1540Left]);

  return (
    <div className={styles.rectangleParent} style={frameDiv1Style}>
      <div className={styles.frameChild} />
      <div className={styles.frameParent}>
        <div className={styles.searchbarWrapper}>
          <div className={styles.searchbar}>
            <div className={styles.procureJogos}>Procure jogos</div>
            <img
              className={styles.iconlylightOutlinearrowD}
              alt=""
              src={iconlyLightOutlineArrowDo}
            />
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.diceParent}>
              <img className={styles.diceIcon} alt="" src={dice} />
              <div className={styles.procureJogos}>Aviator</div>
            </div>
            <div className={styles.diceParent}>
              <img className={styles.diceIcon} alt="" src={dice1} />
              <div className={styles.procureJogos}>Golden Dragons</div>
            </div>
            <div className={styles.diceParent}>
              <img className={styles.diceIcon} alt="" src={dice2} />
              <div className={styles.procureJogos}>Cash or Crash</div>
            </div>
            <div className={styles.diceParent}>
              <img className={styles.diceIcon} alt="" src={dice3} />
              <div className={styles.procureJogos}>Age of Pirates</div>
            </div>
            <div className={styles.diceParent}>
              <img className={styles.diceIcon} alt="" src={dice4} />
              <div className={styles.procureJogos}>Alchemist</div>
            </div>
            <div className={styles.diceParent}>
              <img className={styles.diceIcon} alt="" src={dice5} />
              <div className={styles.procureJogos}>Jogo 5</div>
            </div>
            <div className={styles.diceParent}>
              <img className={styles.diceIcon} alt="" src={dice6} />
              <div className={styles.procureJogos}>Jogo 6</div>
            </div>
          </div>
          <div className={styles.recentes}>recentes</div>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.frameContainer}>
            <div className={styles.diceParent}>
              <img className={styles.tShirtIcon} alt="" src={tShirt} />
              <div className={styles.procureJogos}>Playngo</div>
            </div>
            <div className={styles.diceParent}>
              <img className={styles.tShirtIcon} alt="" src={baseballCap} />
              <div className={styles.procureJogos}>EGT</div>
            </div>
            <div className={styles.diceParent}>
              <img className={styles.tShirtIcon} alt="" src={sweater} />
              <div className={styles.procureJogos}>SoftBet</div>
            </div>
            <div className={styles.diceParent}>
              <img className={styles.tShirtIcon} alt="" src={bong} />
              <div className={styles.procureJogos}>Lorem</div>
            </div>
            <div className={styles.diceParent}>
              <img className={styles.tShirtIcon} alt="" src={bong1} />
              <div className={styles.procureJogos}>Amatic</div>
            </div>
          </div>
          <div className={styles.recentes}>All Games</div>
        </div>
        <div className={styles.bongContainer}>
          <img className={styles.tShirtIcon} alt="" src={bong2} />
          <div className={styles.procureJogos}>Fechar Painel</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent8;
