import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./GroupComponent.module.css";

type GroupComponentType = {
  frame1410103126?: string;
  endereoSpng?: string;

  /** Style props */
  propLeft?: Property.Left;
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  frame1410103126,
  endereoSpng,
  propLeft,
}) => {
  const frameDiv21Style: CSS.Properties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className={styles.settingsValidao5Inner}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.vectorWrapper} style={frameDiv21Style}>
          <img className={styles.vectorIcon} alt="" src="/vector4.svg" />
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <img className={styles.frameItem} alt="" src={frame1410103126} />
            <b className={styles.recebemosSeuDocumento}>
              Recebemos seu documento!
            </b>
            <div className={styles.tudoCertoAgora}>
              Tudo certo, agora você pode fechar esta janela.
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.typeboxWrapper}>
              <div className={styles.typebox}>
                <div className={styles.botao1}>
                  <img
                    className={styles.checkmarkIcon}
                    alt=""
                    src="/checkmark.svg"
                  />
                  <div className={styles.endereoSpng}>{endereoSpng}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
