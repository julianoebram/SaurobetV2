import { FunctionComponent } from "react";
import Line1 from "./Line1";
import styles from "./FrameComponent22.module.css";
const FrameComponent22: FunctionComponent = () => {
  return (
    <div className={styles.transaesParent}>
      <b className={styles.transaes}>Transações</b>
      <Line1 depsito="Depósito" prop="+R$12,00" />
      <Line1
        depsito="Saque"
        prop="-R$ 205,00"
        propBackgroundColor="#0a1411"
        propBorder="1px solid var(--color-darkslategray-100)"
        propBoxShadow="0px 11.15633487701416px 14.88px rgba(0, 0, 0, 0.16)"
        propColor="#d03131"
      />
      <Line1
        depsito="Depósito"
        prop="+R$12,00"
        propBackgroundColor="#0a1411"
        propBorder="1px solid var(--color-darkslategray-100)"
        propBoxShadow="0px 11.15633487701416px 14.88px rgba(0, 0, 0, 0.16)"
        propColor="#a4e273"
      />
      <Line1
        depsito="Depósito"
        prop="+R$1232,00"
        propBackgroundColor="#0a1411"
        propBorder="1px solid var(--color-darkslategray-100)"
        propBoxShadow="0px 11.15633487701416px 14.88px rgba(0, 0, 0, 0.16)"
        propColor="#a4e273"
      />
      <Line1
        depsito="Saque"
        prop="-R$ 205,00"
        propBackgroundColor="#0a1411"
        propBorder="1px solid var(--color-darkslategray-100)"
        propBoxShadow="0px 11.15633487701416px 14.88px rgba(0, 0, 0, 0.16)"
        propColor="#d03131"
      />
      <Line1
        depsito="Saque"
        prop="-R$ 205,00"
        propBackgroundColor="#0a1411"
        propBorder="1px solid var(--color-darkslategray-100)"
        propBoxShadow="0px 11.15633487701416px 14.88px rgba(0, 0, 0, 0.16)"
        propColor="#d03131"
      />
      <Line1
        depsito="Depósito"
        prop="+R$1232,00"
        propBackgroundColor="#0a1411"
        propBorder="1px solid var(--color-darkslategray-100)"
        propBoxShadow="0px 11.15633487701416px 14.88px rgba(0, 0, 0, 0.16)"
        propColor="#a4e273"
      />
    </div>
  );
};

export default FrameComponent22;
