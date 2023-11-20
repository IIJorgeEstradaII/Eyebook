import "./assets/styles/landing.css";
import { LandingPage } from "./components/pages/LandingPage";
import { LoginPage } from "./components/pages/LoginPage";

function App() {
  const token = localStorage.getItem("token");

  return <>{token ? <LandingPage /> : <LoginPage />}</>;
}

export default App;
