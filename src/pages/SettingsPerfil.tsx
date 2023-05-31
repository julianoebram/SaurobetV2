import { FunctionComponent } from "react";
import FrameComponent8 from "../components/FrameComponent8";
import HeaderTop from "../components/HeaderTop";
import FrameComponent11 from "../components/FrameComponent11";
import styles from "./SettingsPerfil.module.css";
const SettingsPerfil: FunctionComponent = () => {
  return (
    <div className={styles.settingsPerfil}>
      <FrameComponent8
        iconlyLightOutlineArrowDo="/iconlylightoutlinearrow--down-48.svg"
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
        bong2="/bong15.svg"
        rectangle1540Top="0px"
        rectangle1540Left="0px"
      />
      <HeaderTop
        vector="/vector1.svg"
        frame1410103065="/frame-1410103065.svg"
        tShirt="/tshirt16.svg"
        tShirt1="/tshirt17.svg"
        tShirt2="/tshirt18.svg"
        tShirt3="/tshirt19.svg"
        tShirt4="/tshirt7.svg"
        tShirt5="/tshirt38.svg"
        propTop="0px"
        propLeft="0px"
      />
      <div className={styles.frameParent}>
        <FrameComponent11 propHeight="40px" />
        <div className={styles.informaesDaContaParent}>
          <div className={styles.informaesDaConta}>Informações da Conta</div>
          <div className={styles.typeboxParent}>
            <div className={styles.typebox}>
              <div className={styles.nomeDeExibioParent}>
                <div className={styles.nomeDeExibio}>Nome de Exibição</div>
                <div className={styles.diogoBarbosa}>Diogo Barbosa</div>
              </div>
            </div>
            <div className={styles.typebox}>
              <div className={styles.nomeDeExibioParent}>
                <div className={styles.nomeDeExibio}>Email</div>
                <a
                  className={styles.diogohfbarbosagmailcom}
                  href="mailto:diogo.hfbarbosa@gmail.com"
                  target="_blank"
                >
                  diogo.hfbarbosa@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className={styles.typeboxParent}>
            <div className={styles.typebox}>
              <div className={styles.nomeDeExibioParent}>
                <div className={styles.nomeDeExibio}>Senha Atual</div>
                <div className={styles.diogoBarbosa}>
                  ***********************
                </div>
              </div>
            </div>
            <div className={styles.typebox}>
              <div className={styles.nomeDeExibioParent}>
                <div className={styles.nomeDeExibio}>telefone</div>
                <div className={styles.diogoBarbosa}>+55 61 9 81516903</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.perfilWrapper}>
          <div className={styles.perfil}>Perfil</div>
        </div>
        <div className={styles.documentosWrapper}>
          <div className={styles.perfil}>Documentos</div>
        </div>
        <div className={styles.documentosWrapper}>
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
      <div className={styles.settingsPerfilChild} />
    </div>
  );
};

export default SettingsPerfil;
