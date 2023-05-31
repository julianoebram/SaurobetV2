import { FunctionComponent } from "react";
import FrameComponent8 from "../components/FrameComponent8";
import HeaderTop from "../components/HeaderTop";
import FrameComponent7 from "../components/FrameComponent7";
import styles from "./Bonus.module.css";
const Bonus: FunctionComponent = () => {
  return (
    <div className={styles.bonus}>
      <FrameComponent8
        iconlyLightOutlineArrowDo="/iconlylightoutlinearrow--down-46.svg"
        dice="/dice7.svg"
        dice1="/dice19.svg"
        dice2="/dice20.svg"
        dice3="/dice10.svg"
        dice4="/dice21.svg"
        dice5="/dice22.svg"
        dice6="/dice13.svg"
        tShirt="/tshirt79.svg"
        baseballCap="/baseball-cap5.svg"
        sweater="/sweater7.svg"
        bong="/bong16.svg"
        bong1="/bong17.svg"
        bong2="/bong18.svg"
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
        tShirt5="/tshirt80.svg"
        propTop="0px"
        propLeft="0px"
      />
      <div className={styles.bonusChild} />
      <div className={styles.frameParent}>
        <FrameComponent7
          usDollarCircled="/us-dollar-circled.svg"
          saldoNaConta="Saldo na conta"
        />
        <FrameComponent7
          usDollarCircled="/cash.svg"
          saldoNaConta="Bonus em dinheiro"
        />
        <FrameComponent7 usDollarCircled="/cash.svg" saldoNaConta="Total" />
      </div>
      <b className={styles.seuBnus}>Seu Bônus</b>
      <div className={styles.bonusItem} />
      <div className={styles.bonusInner} />
    </div>
  );
};

export default Bonus;
