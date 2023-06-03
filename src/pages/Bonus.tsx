import { FunctionComponent } from "react";
import MenuLateral1 from "../components/MenuLateral1";
import HeaderTop2 from "../components/HeaderTop2";
import FrameComponent8 from "../components/FrameComponent8";
import HeaderTop from "../components/HeaderTop";
import FrameComponent7 from "../components/FrameComponent7";
import styles from "./Bonus.module.css";
const Bonus: FunctionComponent = () => {
  return (
    <div className={styles.bonus}>
            <MenuLateral1 />
      <HeaderTop2 />
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
