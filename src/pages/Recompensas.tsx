import { FunctionComponent } from "react";
import FrameComponent8 from "../components/FrameComponent8";
import HeaderTop from "../components/HeaderTop";
import styles from "./Recompensas.module.css";
const Recompensas: FunctionComponent = () => {
  return (
    <div className={styles.recompensas}>
      <FrameComponent8
        iconlyLightOutlineArrowDo="/iconlylightoutlinearrow--down-49.svg"
        dice="/dice.svg"
        dice1="/dice1.svg"
        dice2="/dice2.svg"
        dice3="/dice3.svg"
        dice4="/dice4.svg"
        dice5="/dice5.svg"
        dice6="/dice6.svg"
        tShirt="/tshirt15.svg"
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
        tShirt5="/tshirt101.svg"
        propTop="0px"
        propLeft="0px"
      />
      <div className={styles.recompensasChild} />
      <div className={styles.minhasRecompensasParent}>
        <div className={styles.minhasRecompensas}>Minhas recompensas</div>
        <div className={styles.todasAsSuas}>
          Todas as suas recompensas guardadas em um só lugar! Não fica mais
          fácil do que isso.
        </div>
      </div>
      <div className={styles.botao1}>
        <b className={styles.reivindiqueUmCdigo}>
          Reivindique um código Promocional
        </b>
      </div>
      <div className={styles.recompensasItem} />
      <div className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameGroup}>
            <img
              className={styles.frameItem}
              alt=""
              src="/frame-14101031263.svg"
            />
            <b className={styles.indiqueUmAmigo}>Indique um Amigo</b>
            <div className={styles.convideAmigosGanhe}>
              Convide amigos, ganhe R$ 20 por convite
            </div>
            <div className={styles.botao11}>
              <b className={styles.reivindiqueUmCdigo}>Reivindicar agora</b>
            </div>
          </div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameChild} />
          <div className={styles.frameGroup}>
            <img
              className={styles.frameItem}
              alt=""
              src="/frame-14101031264.svg"
            />
            <b className={styles.bnusDeDepsitoContainer}>
              <span className={styles.bnusDeDepsitoContainer1}>
                <p
                  className={styles.bnusDeDepsito}
                >{`Bônus de depósito de `}</p>
                <p className={styles.rodadasGrtis}>100% + 40 rodadas grátis</p>
              </span>
            </b>
            <div className={styles.depositeEReceba}>
              Deposite e receba um bônus de 100% + 40 rodadas grátis!
            </div>
            <div className={styles.botao11}>
              <b className={styles.reivindiqueUmCdigo}>Depósito</b>
            </div>
            <div className={styles.depositeEReceba}>
              Expira em: 1d 05h 20m 11s
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recompensas;
