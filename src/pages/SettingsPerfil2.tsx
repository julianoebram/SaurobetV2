import { FunctionComponent } from "react";
import FrameComponent8 from "../components/FrameComponent8";
import HeaderTop from "../components/HeaderTop";
import FrameComponent11 from "../components/FrameComponent11";
import styles from "./SettingsPerfil2.module.css";
const SettingsPerfil2: FunctionComponent = () => {
  return (
    <div className={styles.settingsPerfil2}>
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
      <div className={styles.frameParent}>
        <FrameComponent11 />
        <div className={styles.informaesPessoaisParent}>
          <div className={styles.informaesPessoais}>Informações pessoais</div>
          <div className={styles.typeboxParent}>
            <div className={styles.typebox}>
              <div className={styles.primeiroNomeParent}>
                <div className={styles.primeiroNome}>Primeiro Nome</div>
                <div className={styles.diogo}>Diogo</div>
              </div>
            </div>
            <div className={styles.typebox}>
              <div className={styles.primeiroNomeParent}>
                <div className={styles.sobrenome}>Sobrenome</div>
                <div className={styles.diogo}>Barbosa</div>
              </div>
            </div>
          </div>
          <div className={styles.typeboxParent}>
            <div className={styles.typebox}>
              <div className={styles.primeiroNomeParent}>
                <div className={styles.primeiroNome}>Emdereço</div>
                <div className={styles.diogo}>QSEW 403, Bloco G, Ap 12</div>
              </div>
            </div>
            <div className={styles.typebox}>
              <div className={styles.primeiroNomeParent}>
                <div className={styles.sobrenome}>Estado</div>
                <div className={styles.diogo}>DF</div>
              </div>
            </div>
          </div>
          <div className={styles.typeboxParent}>
            <div className={styles.typebox}>
              <div className={styles.primeiroNomeParent}>
                <div className={styles.primeiroNome}>Cidade</div>
                <div className={styles.diogo}>{`Brasília `}</div>
              </div>
            </div>
            <div className={styles.typebox}>
              <div className={styles.primeiroNomeParent}>
                <div className={styles.sobrenome}>Cep</div>
                <div className={styles.diogo}>88808-000</div>
              </div>
            </div>
          </div>
          <div className={styles.botao1Wrapper}>
            <div className={styles.botao1}>
              <b className={styles.salvar}>Salvar</b>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.settingsPerfil2Child} />
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
    </div>
  );
};

export default SettingsPerfil2;
