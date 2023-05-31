import { FunctionComponent } from "react";
import FrameComponent12 from "./FrameComponent12";
import styles from "./BoxWhite3Boxes1.module.css";
const BoxWhite3Boxes1: FunctionComponent = () => {
  return (
    <div className={styles.boxwhite3Boxes}>
      <div className={styles.vectorParent}>
        <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
        <div className={styles.iconParent}>
          <img className={styles.icon} alt="" src="/icon.svg" />
          <div className={styles.verifiqueSeuEMailParent}>
            <div className={styles.verifiqueSeuEMail}>Verifique seu e-mail</div>
            <div className={styles.consecteturAdipiscingElit}>
              Consectetur adipiscing elit.
            </div>
          </div>
        </div>
      </div>
      <FrameComponent12
        icon="/icon1.svg"
        inscrevaSeParaReceberNoti="Inscreva-se para receber notificações"
      />
      <FrameComponent12
        icon="/frame-1000003600.svg"
        inscrevaSeParaReceberNoti="Indique um amigo"
      />
    </div>
  );
};

export default BoxWhite3Boxes1;
