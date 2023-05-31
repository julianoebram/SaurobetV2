import { FunctionComponent } from "react";
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
            <div className={styles.premierLeague}>Premier League</div>
          </button>
          <button className={styles.tShirtParent}>
            <img className={styles.tShirtIcon} alt="" src="/baseball-cap.svg" />
            <div className={styles.premierLeague}>NBA</div>
          </button>
          <button className={styles.tShirtParent}>
            <img className={styles.tShirtIcon} alt="" src="/sweater.svg" />
            <div className={styles.premierLeague}>Libertadores</div>
          </button>
          <button className={styles.tShirtParent}>
            <img className={styles.tShirtIcon} alt="" src="/bong.svg" />
            <div className={styles.premierLeague}>Champions</div>
          </button>
          <button className={styles.tShirtParent}>
            <img className={styles.tShirtIcon} alt="" src="/bong1.svg" />
            <div className={styles.premierLeague}>CSGO</div>
          </button>
          <button className={styles.tShirtParent}>
            <img className={styles.tShirtIcon} alt="" src="/bong2.svg" />
            <div className={styles.premierLeague}>Esports</div>
          </button>
          <button className={styles.tShirtParent}>
            <img className={styles.tShirtIcon} alt="" src="/bong3.svg" />
            <div className={styles.premierLeague}>Flamengo</div>
          </button>
        </div>
        <div className={styles.top10Hoje}>Top 10 hoje</div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.frameContainer}>
          <button className={styles.tShirtParent}>
            <img className={styles.tShirtIcon} alt="" src="/tshirt1.svg" />
            <div className={styles.premierLeague}>Soccer</div>
          </button>
          <button className={styles.tShirtParent}>
            <img className={styles.tShirtIcon} alt="" src="/sweater1.svg" />
            <div className={styles.premierLeague}>Tennis</div>
          </button>
          <button className={styles.tShirtParent}>
            <img
              className={styles.tShirtIcon}
              alt=""
              src="/baseball-cap1.svg"
            />
            <div className={styles.premierLeague}>Basketball</div>
          </button>
          <button className={styles.tShirtParent}>
            <img className={styles.tShirtIcon} alt="" src="/bong4.svg" />
            <div className={styles.premierLeague}>Cricket</div>
          </button>
          <button className={styles.tShirtParent}>
            <img className={styles.tShirtIcon} alt="" src="/bong5.svg" />
            <div className={styles.premierLeague}>Handball</div>
          </button>
        </div>
        <div className={styles.top10Hoje}>recentes</div>
      </div>
      <Button
        className={styles.frameChild}
        variant="outline"
        colorScheme="green"
        name="fechapainel"
        id="fechaPainel"
        rightIcon={<ArrowForwardIcon />}
      >
        Fechar Painel
      </Button>
      <div className={styles.bnusDirioParent}>
        <div className={styles.bnusDirio}>Bônus diário</div>
        <div className={styles.frameParent2}>
          <button className={styles.tShirtParent}>
            <img className={styles.tShirtIcon} alt="" src="/tshirt2.svg" />
            <div className={styles.premierLeague}>Soccer</div>
          </button>
          <button className={styles.tShirtParent}>
            <img className={styles.tShirtIcon} alt="" src="/sweater2.svg" />
            <div className={styles.premierLeague}>Tennis</div>
          </button>
        </div>
      </div>
      <MenuLateralFechado menuLateralFechadoVisibility="visible" />
    </div>
  );
};

export default MenuLateral;
