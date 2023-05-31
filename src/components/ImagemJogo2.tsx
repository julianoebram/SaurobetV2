import { FunctionComponent } from "react";
import ImagemJogo from "./ImagemJogo";
import styles from "./ImagemJogo2.module.css";
const ImagemJogo2: FunctionComponent = () => {
  return (
    <div className={styles.imagemJogo}>
      <div className={styles.rollJogos}>
        <div className={styles.nossosJogos}>Popular</div>
        <div className={styles.frameParent}>
          <div className={`${styles.gameSlotContainer} ${styles.fortuneOx}`}>
            <div className={styles.cashOrCrashContainer}>
            </div>
          </div>
          <div className={`${styles.gameSlotContainer} ${styles.fortuneTiger}`}>
            <div className={styles.cashOrCrashContainer}>
            </div>
            </div>
          <div className={`${styles.gameSlotContainer} ${styles.spaceman}`}>
            <div className={styles.cashOrCrashContainer}>
            </div>
          </div>
          <div className={`${styles.gameSlotContainer} ${styles.sweetBonanza}`}>
            <div className={styles.cashOrCrashContainer}>
            </div>
          </div>
                
       
          
        </div>
      </div>
     
      
    </div>
    
  );
};

export default ImagemJogo2;
