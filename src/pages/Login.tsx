import { useState } from "react";
import styles from "./Login.module.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    console.log("E-mail:", email);
    console.log("Senha:", password);
  };

  return (
    <div>
      
    
      <div className={styles.loginBackground}>
      <div className={styles.margin}>
          <img src="/logo--saurobet-1-1@2x.png" alt="Logo do Site" className={styles.logo} />
          </div>
        <div className={styles.loginContainer}>
        
          <h2 className={styles.loginTitle}>Login</h2>
          
          <form onSubmit={handleLogin}>
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
              <label htmlFor="password">Senha:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <button type="submit" className={styles.loginButton}>Entrar</button>
          </form>
        </div>
      </div>
    
  </div>
  );
};

export default Login;
