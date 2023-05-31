import { FunctionComponent } from "react";
import FrameComponent8 from "../components/FrameComponent8";
import HeaderTop from "../components/HeaderTop";
import FrameComponent19 from "../components/FrameComponent19";
import styles from "./SettingsHistrico.module.css";
const SettingsHistrico: FunctionComponent = () => {
  return (
    <div className={styles.settingsHistrico}>
      <FrameComponent8
        iconlyLightOutlineArrowDo="/iconlylightoutlinearrow--down-41.svg"
        dice="/dice7.svg"
        dice1="/dice8.svg"
        dice2="/dice9.svg"
        dice3="/dice10.svg"
        dice4="/dice11.svg"
        dice5="/dice12.svg"
        dice6="/dice13.svg"
        tShirt="/tshirt21.svg"
        baseballCap="/baseball-cap5.svg"
        sweater="/sweater7.svg"
        bong="/bong16.svg"
        bong1="/bong17.svg"
        bong2="/bong18.svg"
      />
      <HeaderTop
        vector="/vector3.svg"
        frame1410103065="/frame-1410103065.svg"
        tShirt="/tshirt22.svg"
        tShirt1="/tshirt23.svg"
        tShirt2="/tshirt18.svg"
        tShirt3="/tshirt24.svg"
        tShirt4="/tshirt7.svg"
        tShirt5="/tshirt25.svg"
      />
      <div className={styles.settingsHistricoInner}>
        <FrameComponent19 />
      </div>
      <div className={styles.settingsHistricoChild} />
      <div className={styles.vectorParent}>
        <img className={styles.vectorIcon} alt="" src="/vector7.svg" />
        <div className={styles.groupParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.wrapper}>
              <div className={styles.div}>1</div>
            </div>
          </div>
          <div className={styles.div}>2</div>
          <div className={styles.div}>3</div>
          <div className={styles.div}>4</div>
          <div className={styles.div}>5</div>
        </div>
        <img className={styles.vectorIcon} alt="" src="/vector8.svg" />
      </div>
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
        <div className={styles.documentosWrapper}>
          <div className={styles.perfil}>Transações</div>
        </div>
        <div className={styles.documentosWrapper}>
          <div className={styles.perfil}>Preferências</div>
        </div>
        <div className={styles.documentosWrapper}>
          <div className={styles.perfil}>Alterar Senha</div>
        </div>
      </div>
    </div>
  );
};

export default SettingsHistrico;
