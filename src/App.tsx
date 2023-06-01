import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomeCassino from "./pages/HomeCassino";
import HomeEsportes3 from "./pages/HomeEsportes3";
import HomeCassinoMenuMensagens from "./pages/HomeCassinoMenuMensagens";
import SettingsValidao2 from "./pages/SettingsValidao2";
import SettingsValidao4 from "./pages/SettingsValidao4";
import SettingsTransaes from "./pages/SettingsTransaes";
import SettingsPreferencias from "./pages/SettingsPreferencias";
import SettingsSenha from "./pages/SettingsSenha";
import SettingsHistrico from "./pages/SettingsHistrico";
import HomeEsportesJogos2 from "./pages/HomeEsportesJogos2";
import HomeEsportes2 from "./pages/HomeEsportes2";
import Bet from "./pages/Bet";
import SettingsPerfil2 from "./pages/SettingsPerfil2";
import SettingsValidao5 from "./pages/SettingsValidao5";
import Bonus from "./pages/Bonus";
import HomeEsportesJogos from "./pages/HomeEsportesJogos";
import HomeEsportes from "./pages/HomeEsportes";
import SettingsValidao3 from "./pages/SettingsValidao3";
import SettingsValidao from "./pages/SettingsValidao";
import SettingsPerfil from "./pages/SettingsPerfil";
import Recompensas from "./pages/Recompensas";
import HomeCassinoMenuConta from "./pages/HomeCassinoMenuConta";
import { useEffect } from "react";
import LoginPage from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/home-esportes-3":
        title = "";
        metaDescription = "";
        break;
      case "/home-cassino-menu-mensagens":
        title = "";
        metaDescription = "";
        break;
      case "/settings-validao-2":
        title = "";
        metaDescription = "";
        break;
      case "/settings-validao-4":
        title = "";
        metaDescription = "";
        break;
      case "/settings-transaes":
        title = "";
        metaDescription = "";
        break;
      case "/settings-preferencias":
        title = "";
        metaDescription = "";
        break;
      case "/settings-senha":
        title = "";
        metaDescription = "";
        break;
      case "/settings-histrico":
        title = "";
        metaDescription = "";
        break;
      case "/home-esportes-jogos-2":
        title = "";
        metaDescription = "";
        break;
      case "/home-esportes-2":
        title = "";
        metaDescription = "";
        break;
      case "/bet":
        title = "";
        metaDescription = "";
        break;
      case "/settings-perfil-2":
        title = "";
        metaDescription = "";
        break;
      case "/settings-validao-5":
        title = "";
        metaDescription = "";
        break;
      case "/bonus":
        title = "";
        metaDescription = "";
        break;
      case "/home-esportes-jogos":
        title = "";
        metaDescription = "";
        break;
      case "/home-esportes":
        title = "";
        metaDescription = "";
        break;
      case "/settings-validao-3":
        title = "";
        metaDescription = "";
        break;
      case "/settings-validao":
        title = "";
        metaDescription = "";
        break;
      case "/settings-perfil":
        title = "";
        metaDescription = "";
        break;
      case "/recompensas":
        title = "";
        metaDescription = "";
        break;
      case "/home-cassino-menu-conta":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomeCassino />} />
      <Route path="/home-esportes-3" element={<HomeEsportes3 />} />
      <Route
        path="/home-cassino-menu-mensagens"
        element={<HomeCassinoMenuMensagens />}
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/Signup" element={<Signup />} />
      
      <Route path="/settings-validao-2" element={<SettingsValidao2 />} />
      <Route path="/settings-validao-4" element={<SettingsValidao4 />} />
      <Route path="/settings-transaes" element={<SettingsTransaes />} />
      <Route path="/settings-preferencias" element={<SettingsPreferencias />} />
      <Route path="/settings-senha" element={<SettingsSenha />} />
      <Route path="/settings-histrico" element={<SettingsHistrico />} />
      <Route path="/home-esportes-jogos-2" element={<HomeEsportesJogos2 />} />
      <Route path="/home-esportes-2" element={<HomeEsportes2 />} />
      <Route path="/bet" element={<Bet />} />
      <Route path="/settings-perfil-2" element={<SettingsPerfil2 />} />
      <Route path="/settings-validao-5" element={<SettingsValidao5 />} />
      <Route path="/bonus" element={<Bonus />} />
      <Route path="/home-esportes-jogos" element={<HomeEsportesJogos />} />
      <Route path="/home-esportes" element={<HomeEsportes />} />
      <Route path="/settings-validao-3" element={<SettingsValidao3 />} />
      <Route path="/settings-validao" element={<SettingsValidao />} />
      <Route path="/settings-perfil" element={<SettingsPerfil />} />
      <Route path="/recompensas" element={<Recompensas />} />
      <Route
        path="/home-cassino-menu-conta"
        element={<HomeCassinoMenuConta />}
      />
    </Routes>
  );
}
export default App;
