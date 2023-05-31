import { FunctionComponent, memo } from "react";
import styles from "./Notificacao.module.css";
const Notificacao: FunctionComponent = memo(() => {
  return (
    <div className={styles.vectorParent}>
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} />
        <div className={styles.div}>1</div>
      </div>
    </div>
  );
});

export default Notificacao;
