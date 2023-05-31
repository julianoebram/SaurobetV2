import { FunctionComponent } from "react";
import styles from "./FrameComponent20.module.css";
const FrameComponent20: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameWrapper}>
        <div className={styles.alterarSenhaWrapper}>
          <b className={styles.alterarSenha}>Alterar Senha</b>
        </div>
      </div>
      <div className={styles.typebox}>
        <div className={styles.senhaAtual}>Senha atual</div>
      </div>
      <div className={styles.typebox1}>
        <div className={styles.senhaAtual}>Nova senha</div>
      </div>
      <div className={styles.typebox2}>
        <div className={styles.senhaAtual}>Confirme a nova senha</div>
      </div>
      <div className={styles.buttonreviewOrderdarkBlue}>
        <b className={styles.reviewOrder}>Alterar</b>
        <img className={styles.akarIconscheckBox} alt="" />
      </div>
    </div>
  );
};

export default FrameComponent20;
