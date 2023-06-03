import { FunctionComponent } from "react";
import MenuLateral1 from "../components/MenuLateral1";
import HeaderTop2 from "../components/HeaderTop2";
import FrameComponent11 from "../components/FrameComponent11";
import styles from "./SettingsPerfil.module.css";
const SettingsPerfil: FunctionComponent = () => {
  return (
    <div className={styles.settingsPerfil}>
     <MenuLateral1 />
      <HeaderTop2 />
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
        
      </div>
      <div className={styles.settingsPerfilChild} />
    </div>
  );
};

export default SettingsPerfil;
