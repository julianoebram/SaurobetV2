import { FunctionComponent } from "react";
import FrameComponent8 from "../components/FrameComponent8";
import HeaderTop from "../components/HeaderTop";
import FrameComponent9 from "../components/FrameComponent9";
import GroupComponent from "../components/GroupComponent";
import styles from "./SettingsValidao5.module.css";
const SettingsValidao5: FunctionComponent = () => {
  return (
    <div className={styles.settingsValidao5}>
      <FrameComponent8
        iconlyLightOutlineArrowDo="/iconlylightoutlinearrow--down-42.svg"
        dice="/dice7.svg"
        dice1="/dice8.svg"
        dice2="/dice9.svg"
        dice3="/dice10.svg"
        dice4="/dice11.svg"
        dice5="/dice12.svg"
        dice6="/dice13.svg"
        tShirt="/tshirt26.svg"
        baseballCap="/baseball-cap6.svg"
        sweater="/sweater8.svg"
        bong="/bong19.svg"
        bong1="/bong20.svg"
        bong2="/bong21.svg"
        rectangle1540Top="0px"
        rectangle1540Left="0px"
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
        propTop="0px"
        propLeft="0px"
      />
      <FrameComponent9 />
      <div className={styles.settingsValidao5Child} />
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
      <div className={styles.settingsValidao5Item} />
      <GroupComponent
        frame1410103126="/frame-14101031262.svg"
        endereoSpng="endereço_s.png"
      />
    </div>
  );
};

export default SettingsValidao5;
