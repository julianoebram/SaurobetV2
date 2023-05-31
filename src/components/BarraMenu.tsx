import { FunctionComponent } from "react";
import styles from "./BarraMenu.module.css";
const BarraMenu: FunctionComponent = () => {
  return (
    <div className={styles.menuWrapper}>
      <section className={styles.menu} id="Abrir menu">
        <div className={styles.menuChild} />
        <div className={styles.menuChild} />
        <div className={styles.menuChild} />
      </section>
    </div>
  );
};

export default BarraMenu;
