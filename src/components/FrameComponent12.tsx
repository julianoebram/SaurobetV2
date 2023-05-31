import { FunctionComponent } from "react";
import styles from "./FrameComponent12.module.css";

type FrameComponent12Type = {
  icon?: string;
  inscrevaSeParaReceberNoti?: string;
};

const FrameComponent12: FunctionComponent<FrameComponent12Type> = ({
  icon,
  inscrevaSeParaReceberNoti,
}) => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.iconParent}>
        <img className={styles.icon} alt="" src={icon} />
        <div className={styles.inscrevaSeParaReceberNotifParent}>
          <div className={styles.inscrevaSeParaReceber}>
            {inscrevaSeParaReceberNoti}
          </div>
          <div className={styles.consecteturAdipiscingElit}>
            Consectetur adipiscing elit.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent12;
