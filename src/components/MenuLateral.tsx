import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import MenuLateralFechado from "./MenuLateralFechado";
import styles from "./MenuLateral.module.css";
const MenuLateral: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <button className={styles.tShirtParent}>
            <img className={styles.tShirtIcon} alt="" src="/tshirt.svg" />
            <div className={styles.premierLeague}><Link to="/home-esportes">Premier League</Link></div>
          </button>
          <button className={styles.tShirtParent}>
            <img className={styles.tShirtIcon} alt="" src="/baseball-cap.svg" />
            <div className={styles.premierLeague}><Link to="/home-esportes">NBA</Link></div>
          </button>
          <button className={styles.tShirtParent}>
            <img className={styles.tShirtIcon} alt="" src="/sweater.svg" />
            <div className={styles.premierLeague}><Link to="/home-esportes">Libertadores</Link></div>
          </button>
          <button className={styles.tShirtParent}>
            <img className={styles.tShirtIcon} alt="" src="/bong.svg" />
            <div className={styles.premierLeague}><Link to="/home-esportes">Champions</Link></div>
          </button>
          <button className={styles.tShirtParent}>
            <img className={styles.tShirtIcon} alt="" src="/bong1.svg" />
            <div className={styles.premierLeague}><Link to="/home-esportes">CSGO</Link></div>
          </button>
          <button className={styles.tShirtParent}>
            <img className={styles.tShirtIcon} alt="" src="/bong2.svg" />
            <div className={styles.premierLeague}><Link to="/home-esportes">Esports</Link></div>
          </button>
          <button className={styles.tShirtParent}>
            <img className={styles.tShirtIcon} alt="" src="/bong3.svg" />
            <div className={styles.premierLeague}><Link to="/home-esportes">Flamengo</Link></div>
          </button>
        </div>
        <div className={styles.top10Hoje}>Top 10 hoje</div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.frameContainer}>
          <button className={styles.tShirtParent}>
            <img className={styles.tShirtIcon} alt="" src="/tshirt1.svg" />
            <div className={styles.premierLeague}><Link to="/home-esportes">Futebol</Link></div>
          </button>
          <button className={styles.tShirtParent}>
            <img className={styles.tShirtIcon} alt="" src="/sweater1.svg" />
            <div className={styles.premierLeague}><Link to="/home-esportes">Tennis</Link></div>
          </button>
          <button className={styles.tShirtParent}>
            <img
              className={styles.tShirtIcon}
              alt=""
              src="/baseball-cap1.svg"
            />
            <div className={styles.premierLeague}><Link to="/home-esportes">Basketball</Link></div>
          </button>
          <button className={styles.tShirtParent}>
            <img className={styles.tShirtIcon} alt="" src="/bong4.svg" />
            <div className={styles.premierLeague}><Link to="/home-esportes">Cricket</Link></div>
          </button>
          <button className={styles.tShirtParent}>
            <img className={styles.tShirtIcon} alt="" src="/bong5.svg" />
            <div className={styles.premierLeague}><Link to="/home-esportes">Handball</Link></div>
          </button>
        </div>
        <div className={styles.top10Hoje}>recentes</div>
      </div>
      
      <div className={styles.bnusDirioParent}>
        <div className={styles.bnusDirio}>Bônus diário</div>
        <div className={styles.frameParent2}>
          <button className={styles.tShirtParent}>
            <img className={styles.tShirtIcon} alt="" src="/tshirt2.svg" />
            <div className={styles.premierLeague}><Link to="/home-esportes">Futebol</Link></div>
          </button>
          <button className={styles.tShirtParent}>
            <img className={styles.tShirtIcon} alt="" src="/sweater2.svg" />
            <div className={styles.premierLeague}><Link to="/home-esportes">Tennis</Link></div>
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default MenuLateral;
