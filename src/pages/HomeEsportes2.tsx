import { FunctionComponent } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import Header from "../components/Header";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent15 from "../components/FrameComponent15";
import styles from "./HomeEsportes2.module.css";
const HomeEsportes2: FunctionComponent = () => {
  return (
    <div className={styles.homeEsportes2}>
      <FrameComponent1
        tShirt="/tshirt59.svg"
        baseballCap="/baseball-cap9.svg"
        sweater="/tshirt59.svg"
        bong="/bong30.svg"
        bong1="/bong31.svg"
        bong2="/bong2.svg"
        bong3="/bong3.svg"
        tShirt1="/tshirt1.svg"
        sweater1="/sweater1.svg"
        baseballCap1="/baseball-cap1.svg"
        bong4="/bong4.svg"
        bong5="/bong5.svg"
        bong6="/bong32.svg"
        tShirt2="/tshirt3.svg"
        sweater2="/sweater3.svg"
      />
      <Header vector="/vector1.svg" tShirt="/tshirt31.svg" />
      <div className={styles.rectangleParent}>
        <img
          className={styles.frameChild}
          alt=""
          src="/rectangle-154411@2x.png"
        />
        <img className={styles.icon} alt="" src="/2-1@2x.png" />
      </div>
      <div className={styles.aposteAgoraGanheESaqueParent}>
        <div className={styles.aposteAgoraGanhe}>
          Aposte agora, ganhe e saque!
        </div>
        <div className={styles.botao3}>
          <div className={styles.saibaMais}>Saiba Mais</div>
        </div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
        <div className={styles.frameItem} />
        <div className={styles.frameItem} />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.tShirtParent}>
          <img className={styles.tShirtIcon} alt="" src="/tshirt60.svg" />
          <div className={styles.aposteAgoraGanhe}>Esportes</div>
        </div>
        <div className={styles.tShirtGroup}>
          <img className={styles.tShirtIcon} alt="" src="/tshirt61.svg" />
          <div className={styles.aposteAgoraGanhe}>Live</div>
        </div>
        <div className={styles.tShirtGroup}>
          <img className={styles.tShirtIcon} alt="" src="/tshirt62.svg" />
          <div className={styles.aposteAgoraGanhe}>Casino</div>
        </div>
        <div className={styles.tShirtGroup}>
          <img className={styles.tShirtIcon} alt="" src="/tshirt36.svg" />
          <div className={styles.aposteAgoraGanhe}>Casino Live</div>
        </div>
        <div className={styles.tShirtGroup}>
          <img className={styles.tShirtIcon4} alt="" src="/tshirt63.svg" />
          <div className={styles.aposteAgoraGanhe}>Poker</div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.tShirtParent2}>
          <img className={styles.tShirtIcon5} alt="" src="/tshirt91.svg" />
          <div className={styles.aposteAgoraGanhe}>Soccer</div>
        </div>
        <div className={styles.tShirtParent2}>
          <img className={styles.tShirtIcon5} alt="" src="/tshirt64.svg" />
          <div className={styles.aposteAgoraGanhe}>Cricket</div>
        </div>
        <div className={styles.tShirtParent2}>
          <img className={styles.tShirtIcon5} alt="" src="/tshirt65.svg" />
          <div className={styles.aposteAgoraGanhe}>American Football</div>
        </div>
        <div className={styles.tShirtParent2}>
          <img className={styles.tShirtIcon5} alt="" src="/tshirt121.svg" />
          <div className={styles.aposteAgoraGanhe}>Tennis</div>
        </div>
        <div className={styles.tShirtParent2}>
          <img className={styles.tShirtIcon5} alt="" src="/tshirt131.svg" />
          <div className={styles.aposteAgoraGanhe}>Basketball</div>
        </div>
        <div className={styles.tShirtParent7}>
          <img className={styles.tShirtIcon5} alt="" src="/tshirt141.svg" />
          <div className={styles.aposteAgoraGanhe}>Alll</div>
        </div>
      </div>
      <div className={styles.searchbar}>
        <div className={styles.procureJogos}>Procure jogos</div>
        <img
          className={styles.iconlylightOutlinearrowD}
          alt=""
          src="/iconlylightoutlinearrow--down-44.svg"
        />
      </div>
      <div className={styles.ellipseParent}>
        <div className={styles.ellipseDiv} />
        <div className={styles.div}>1</div>
      </div>
      <div className={styles.ellipseGroup}>
        <div className={styles.ellipseDiv} />
        <div className={styles.div1}>2</div>
      </div>
      <FrameComponent2 />
      <FrameComponent3 />
      <FrameComponent4 />
      <FrameComponent15 />
      <img
        className={styles.logoSaurobet11}
        alt=""
        src="/logo--saurobet-1-1@2x.png"
      />
    </div>
  );
};

export default HomeEsportes2;
