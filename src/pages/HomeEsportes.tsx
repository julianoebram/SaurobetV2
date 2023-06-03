import { FunctionComponent } from "react";
import MenuLateral1 from "../components/MenuLateral1";
import HeaderTop2 from "../components/HeaderTop2";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent4 from "../components/FrameComponent4";
import styles from "./HomeEsportes.module.css";
const HomeEsportes: FunctionComponent = () => {
  return (
    <div className={styles.homeEsportes}>
      <MenuLateral1 />
      <HeaderTop2 />
      <div className={styles.rectangleParent}>
        <img
          className={styles.frameChild}
          alt=""
          src="/rectangle-154411@2x.png"
        />
        <img className={styles.icon} alt="" src="/2-1@2x.png" />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.championsAquiParent}>
          <div className={styles.championsAqui}>Champions é aqui!</div>
          <div className={styles.aproveiteAsMelhores}>
            Aproveite as melhores odds.
          </div>
        </div>
        <div className={styles.botao3}>
          <div className={styles.saibaMais}>Saiba Mais</div>
        </div>
      </div>
      

      <FrameComponent2
        
      />
     
 
    </div>
  );
};

export default HomeEsportes;
