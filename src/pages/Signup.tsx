import { useState } from "react";
import styles from "./Signup.module.css";

const Signup: React.FC = () => {
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [repetirSenha, setRepetirSenha] = useState("");

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCpf(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSenhaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSenha(e.target.value);
  };

  const handleRepetirSenhaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepetirSenha(e.target.value);
  };

  const handleCadastro = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("CPF:", cpf);
    console.log("E-mail:", email);
    console.log("Senha:", senha);
    console.log("Repetir Senha:", repetirSenha);
  };

  return (
    <div className={styles.loginBackground}>
      <div className={styles.margin}>
          <img src="/logo--saurobet-1-1@2x.png" alt="Logo do Site" className={styles.logo} />
          </div>
    <div className={styles.cadastroContainer}>
      <h2 className={styles.cadastroTitle}>Cadastro</h2>
      <form onSubmit={handleCadastro}>
        <div className={styles.formField}>
          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            id="cpf"
            value={cpf}
            onChange={handleCpfChange}
            required
          />
        </div>
        <div className={styles.formField}>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className={styles.formField}>
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={handleSenhaChange}
            required
          />
        </div>
        <div className={styles.formField}>
          <label htmlFor="repetirSenha">Repetir Senha:</label>
          <input
            type="password"
            id="repetirSenha"
            value={repetirSenha}
            onChange={handleRepetirSenhaChange}
            required
          />
        </div>
        <button type="submit" className={styles.cadastroButton}>Cadastrar</button>
      </form>
    </div>
    </div>
  );
};

export default Signup;
