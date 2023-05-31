import { FunctionComponent } from "react";
import styles from "./ImagemJogo.module.css";

type ImagemJogoType = {
  rectangle1544?: string;
  minesDare?: string;
  win?: string;
};

const ImagemJogo: FunctionComponent<ImagemJogoType> = ({
  rectangle1544,
  minesDare,
  win,
}) => {
  return (
    <div className={styles.imagemJogo}>
      <div className={styles.rectangleParent}>
        <img className={styles.frameChild} alt="" src={rectangle1544} />
        <div className={styles.minesDare2Container}>
          <p className={styles.minesDare}>{minesDare}</p>
          <p className={styles.win}>{win}</p>
        </div>
      </div>
    </div>
  );
};

export default ImagemJogo;
