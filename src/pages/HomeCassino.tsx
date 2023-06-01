import { FunctionComponent } from "react";
import MenuLateral1 from "../components/MenuLateral1";
import HeaderTop2 from "../components/HeaderTop2";
import ImagemJogo2 from "../components/ImagemJogo2";

import RollJogos1 from "../components/RollJogos1";
import styles from "./HomeCassino.module.css";
import Footer from "../components/Footer";

const HomeCassino: FunctionComponent = () => {
  return (
    <div>
    <div className={styles.homeCassino}>
      <MenuLateral1 />
      <HeaderTop2 />
      <img
        className={styles.homeCassinoChild}
        alt=""
        src="/rectangle-1543@2x.png"
      />
      <div className={styles.aposteAgoraGanheESaqueParent}>
        <div className={styles.aposteAgoraGanhe}>
          Aposte agora, ganhe e saque!
        </div>
        <button className={styles.botao2}>
          <div className={styles.saibaMais}>Saiba Mais</div>
        </button>
      </div>
      <div className={styles.imagemJogo} />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <div className={styles.frameChild} />
        <div className={styles.frameChild} />
      </div>
      <div className={styles.frameParent}>
        <button className={styles.tShirtParent}>
          <img className={styles.tShirtIcon} alt="" src="/tshirt41.svg" />
          <div className={styles.esportes}>Esportes</div>
        </button>
        <button className={styles.tShirtGroup}>
          <img className={styles.tShirtIcon} alt="" src="/tshirt51.svg" />
          <div className={styles.esportes}>Live</div>
        </button>
        <button className={styles.tShirtGroup}>
          <img className={styles.tShirtIcon} alt="" src="/tshirt6.svg" />
          <div className={styles.esportes}>Casino</div>
        </button>
        <button className={styles.tShirtGroup}>
          <img className={styles.tShirtIcon} alt="" src="/tshirt7.svg" />
          <div className={styles.esportes}>Roleta Ao Vivo</div>
        </button>
        <button className={styles.tShirtGroup}>
          <img className={styles.tShirtIcon4} alt="" src="/tshirt8.svg" />
          <div className={styles.esportes}>Poker</div>
        </button>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <button className={styles.tShirtParent2}>
            <img className={styles.tShirtIcon5} alt="" src="/tshirt9.svg" />
            <div className={styles.esportes}>Futebol</div>
          </button>
          <button className={styles.tShirtParent2}>
            <img className={styles.tShirtIcon5} alt="" src="/tshirt10.svg" />
            <div className={styles.esportes}>Cricket</div>
          </button>
          <button className={styles.tShirtParent2}>
            <img className={styles.tShirtIcon5} alt="" src="/tshirt11.svg" />
            <div className={styles.esportes}>Futebol Americano</div>
          </button>
          <button className={styles.tShirtParent2}>
            <img className={styles.tShirtIcon5} alt="" src="/tshirt12.svg" />
            <div className={styles.esportes}>Tennis</div>
          </button>
          <button className={styles.tShirtParent2}>
            <img className={styles.tShirtIcon5} alt="" src="/tshirt13.svg" />
            <div className={styles.esportes}>Basketball</div>
          </button>
          <button className={styles.tShirtParent7}>
            <img className={styles.tShirtIcon5} alt="" src="/tshirt14.svg" />
            <div className={styles.esportes}>Alll</div>
          </button>
        </div>
        <input
          className={styles.searchbar}
          type="text"
          placeholder="Procure jogos"
        />
      </div>
      <ImagemJogo2 />
      <RollJogos1 />
      
      <div className={styles.ellipseParent}>
        <div className={styles.ellipseDiv} />
        <div className={styles.div}>1</div>
      </div>
      <div className={styles.ellipseGroup}>
        <div className={styles.ellipseDiv} />
        <div className={styles.div1}>2</div>
      </div>
    </div>
    
   <Footer />
   </div>
 );
};

export default HomeCassino;
