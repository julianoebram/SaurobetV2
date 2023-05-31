import { FunctionComponent } from "react";
import styles from "./FrameComponent7.module.css";

type FrameComponent7Type = {
  usDollarCircled?: string;
  saldoNaConta?: string;
};

const FrameComponent7: FunctionComponent<FrameComponent7Type> = ({
  usDollarCircled,
  saldoNaConta,
}) => {
  return (
    <div className={styles.usDollarCircledParent}>
      <img className={styles.usDollarCircled} alt="" src={usDollarCircled} />
      <div className={styles.saldoNaContaParent}>
        <b className={styles.saldoNaConta}>{saldoNaConta}</b>
        <div className={styles.r000}>R$ 0,00</div>
      </div>
    </div>
  );
};

export default FrameComponent7;
