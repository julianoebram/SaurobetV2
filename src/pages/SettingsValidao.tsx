import { FunctionComponent } from "react";
import FrameComponent8 from "../components/FrameComponent8";
import HeaderTop from "../components/HeaderTop";
import FrameComponent9 from "../components/FrameComponent9";
import styles from "./SettingsValidao.module.css";
const SettingsValidao: FunctionComponent = () => {
  return (
    <div className={styles.settingsValidao}>
      <FrameComponent8
        iconlyLightOutlineArrowDo="/iconlylightoutlinearrow--down-43.svg"
        dice="/dice.svg"
        dice1="/dice14.svg"
        dice2="/dice15.svg"
        dice3="/dice3.svg"
        dice4="/dice16.svg"
        dice5="/dice17.svg"
        dice6="/dice6.svg"
        tShirt="/tshirt32.svg"
        baseballCap="/baseball-cap4.svg"
        sweater="/sweater6.svg"
        bong="/bong13.svg"
        bong1="/bong14.svg"
        bong2="/bong22.svg"
        rectangle1540Top="0px"
        rectangle1540Left="0px"
      />
      <HeaderTop
        vector="/vector1.svg"
        frame1410103065="/frame-1410103065.svg"
        tShirt="/tshirt16.svg"
        tShirt1="/tshirt33.svg"
        tShirt2="/tshirt34.svg"
        tShirt3="/tshirt35.svg"
        tShirt4="/tshirt36.svg"
        tShirt5="/tshirt37.svg"
        propTop="0px"
        propLeft="0px"
      />
      <FrameComponent9 />
      <div className={styles.settingsValidaoChild} />
      <div className={styles.frameParent}>
        <div className={styles.perfilWrapper}>
          <div className={styles.perfil}>Perfil</div>
        </div>
        <div className={styles.documentosWrapper}>
          <div className={styles.perfil}>Documentos</div>
        </div>
        <div className={styles.histricoDeJogoWrapper}>
          <div className={styles.perfil}>Histórico de Jogo</div>
        </div>
        <div className={styles.histricoDeJogoWrapper}>
          <div className={styles.perfil}>Transações</div>
        </div>
        <div className={styles.histricoDeJogoWrapper}>
          <div className={styles.perfil}>Preferências</div>
        </div>
        <div className={styles.histricoDeJogoWrapper}>
          <div className={styles.perfil}>Alterar Senha</div>
        </div>
      </div>
    </div>
  );
};

export default SettingsValidao;
