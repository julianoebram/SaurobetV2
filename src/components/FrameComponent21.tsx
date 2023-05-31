import { FunctionComponent } from "react";
import Line from "./Line";
import styles from "./FrameComponent21.module.css";
const FrameComponent21: FunctionComponent = () => {
  return (
    <div className={styles.prefernciasParent}>
      <b className={styles.preferncias}>Preferências</b>
      <div className={styles.line}>
        <div className={styles.lineInner}>
          <div className={styles.frameParent}>
            <div className={styles.recebaAtualizaesSobreDepWrapper}>
              <b className={styles.recebaAtualizaesSobre}>
                Receba atualizações sobre depósitos e saques por email
              </b>
            </div>
            <div className={styles.darkLight}>
              <div className={styles.moonWrapper}>
                <img className={styles.moonIcon} alt="" src="/moon.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.lineInner}>
          <div className={styles.frameParent}>
            <div className={styles.recebaAtualizaesSobreDepWrapper}>
              <b className={styles.recebaAtualizaesSobre}>
                Receba atualizações sobre depósitos e saques por email
              </b>
            </div>
            <div className={styles.darkLight}>
              <div className={styles.moonWrapper}>
                <img className={styles.moonIcon} alt="" src="/moon1.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Line
        receberComunicaesDeMarket="Receber comunicações de marketing"
        moon="/moon2.svg"
      />
      <Line
        receberComunicaesDeMarket="Receber comunicações via SMS"
        moon="/moon.svg"
        propTransform="unset"
        propTransformOrigin="unset"
        propBackgroundColor="unset"
        propBackground="linear-gradient(214.58deg, #00cb08, #00bf6f), #12211c"
      />
      <Line
        receberComunicaesDeMarket="Mostrar recompensas de nível superior"
        moon="/moon2.svg"
        propTransform=" rotate(-180deg)"
        propTransformOrigin="0 0"
        propBackgroundColor="#1d3a31"
        propBackground="unset"
      />
      <Line
        receberComunicaesDeMarket="Receber notificações em geral por email"
        moon="/moon.svg"
        propTransform="unset"
        propTransformOrigin="unset"
        propBackgroundColor="unset"
        propBackground="linear-gradient(214.58deg, #00cb08, #00bf6f), #12211c"
      />
    </div>
  );
};

export default FrameComponent21;
