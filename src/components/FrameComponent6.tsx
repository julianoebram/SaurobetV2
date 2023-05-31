import { FunctionComponent } from "react";
import styles from "./FrameComponent6.module.css";

type FrameComponent6Type = {
  tShirt?: string;
  sweater?: string;
  bong?: string;
  bong1?: string;
  tShirt1?: string;
  sweater1?: string;
  baseballCap?: string;
  bong2?: string;
  bong3?: string;
  bong4?: string;
  tShirt2?: string;
  sweater2?: string;
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  tShirt,
  sweater,
  bong,
  bong1,
  tShirt1,
  sweater1,
  baseballCap,
  bong2,
  bong3,
  bong4,
  tShirt2,
  sweater2,
}) => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.tShirtParent}>
              <img className={styles.tShirtIcon} alt="" src={tShirt} />
              <div className={styles.premierLeague}>Premier League</div>
            </div>
            <div className={styles.tShirtParent}>
              <img
                className={styles.tShirtIcon}
                alt=""
                src="/baseball-cap.svg"
              />
              <div className={styles.premierLeague}>NBA</div>
            </div>
            <div className={styles.tShirtParent}>
              <img className={styles.tShirtIcon} alt="" src={sweater} />
              <div className={styles.premierLeague}>Libertadores</div>
            </div>
            <div className={styles.tShirtParent}>
              <img className={styles.tShirtIcon} alt="" src={bong} />
              <div className={styles.premierLeague}>Champions</div>
            </div>
            <div className={styles.tShirtParent}>
              <img className={styles.tShirtIcon} alt="" src={bong1} />
              <div className={styles.premierLeague}>CSGO</div>
            </div>
            <div className={styles.tShirtParent}>
              <img className={styles.tShirtIcon} alt="" src="/bong2.svg" />
              <div className={styles.premierLeague}>Esports</div>
            </div>
            <div className={styles.tShirtParent}>
              <img className={styles.tShirtIcon} alt="" src="/bong3.svg" />
              <div className={styles.premierLeague}>Flamengo</div>
            </div>
          </div>
          <div className={styles.top10Hoje}>Top 10 hoje</div>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.frameContainer}>
            <div className={styles.tShirtParent}>
              <img className={styles.tShirtIcon} alt="" src={tShirt1} />
              <div className={styles.premierLeague}>Soccer</div>
            </div>
            <div className={styles.tShirtParent}>
              <img className={styles.tShirtIcon} alt="" src={sweater1} />
              <div className={styles.premierLeague}>Tennis</div>
            </div>
            <div className={styles.tShirtParent}>
              <img className={styles.tShirtIcon} alt="" src={baseballCap} />
              <div className={styles.premierLeague}>Basketball</div>
            </div>
            <div className={styles.tShirtParent}>
              <img className={styles.tShirtIcon} alt="" src={bong2} />
              <div className={styles.premierLeague}>Cricket</div>
            </div>
            <div className={styles.tShirtParent}>
              <img className={styles.tShirtIcon} alt="" src={bong3} />
              <div className={styles.premierLeague}>Handball</div>
            </div>
          </div>
          <div className={styles.top10Hoje}>recentes</div>
        </div>
        <div className={styles.bongParent3}>
          <img className={styles.tShirtIcon} alt="" src={bong4} />
          <div className={styles.premierLeague}>Fechar Painel</div>
        </div>
        <div className={styles.frameParent3}>
          <div className={styles.frameContainer}>
            <div className={styles.tShirtParent}>
              <img className={styles.tShirtIcon} alt="" src={tShirt2} />
              <div className={styles.premierLeague}>Soccer</div>
            </div>
            <div className={styles.tShirtParent}>
              <img className={styles.tShirtIcon} alt="" src={sweater2} />
              <div className={styles.premierLeague}>Tennis</div>
            </div>
          </div>
          <div className={styles.top10Hoje}>Bônus diário</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent6;
