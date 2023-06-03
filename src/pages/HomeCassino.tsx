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
      
      <div className={styles.aposteAgoraGanheESaqueParent}>
        <div className={styles.aposteAgoraGanhe}>
          Aposte agora, ganhe e saque!
        </div>
        <button className={styles.botao2}>
          <div className={styles.saibaMais}>Saiba Mais</div>
        </button>
      </div>
      <div className={styles.imagemJogo} />
           
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <button className={styles.tShirtParent2}>
            <img className={styles.tShirtIcon5} alt="" src="/tshirt9.svg" />
            
          </button>
          <button className={styles.tShirtParent2}>
            <img className={styles.tShirtIcon5} alt="" src="/tshirt10.svg" />
            
          </button>
          <button className={styles.tShirtParent2}>
            <img className={styles.tShirtIcon5} alt="" src="/tshirt11.svg" />
           
          </button>
          <button className={styles.tShirtParent2}>
            <img className={styles.tShirtIcon5} alt="" src="/tshirt12.svg" />
            
          </button>
          <button className={styles.tShirtParent2}>
            <img className={styles.tShirtIcon5} alt="" src="/tshirt13.svg" />
            
          </button>
          <button className={styles.tShirtParent7}>
            <img className={styles.tShirtIcon5} alt="" src="/tshirt14.svg" />
            
          </button>
        </div>
        <input
          className={styles.searchbar}
          type="text"
          placeholder="Procure jogos"
        />
      </div>
      <ImagemJogo2 />
      
      

    </div>
    
   <Footer />
   </div>
 );
};

export default HomeCassino;
