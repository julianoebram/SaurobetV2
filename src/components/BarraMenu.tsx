import { FunctionComponent } from "react";
import React, { useState } from 'react';
import styles from "./BarraMenu.module.css";
import MenuLateral from "./MenuLateral";


const BarraMenu: FunctionComponent = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className={styles.menuWrapper} onClick={toggleMenu}>
        <section className={styles.menu} id="Abrir menu">
          <div className={styles.menuChild} />
          <div className={styles.menuChild} />
          <div className={styles.menuChild} />
        </section>
      </div>

      {showMenu && <div className="menuLateral"></div>}
    </>
  );
};

export default BarraMenu;

