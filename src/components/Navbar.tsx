import Icons from "../assets/styles/icons.d";
import "../assets/styles/styles.css";
import { useState } from "react";
import { UserOptions } from "./UserOptions";
import { useNavigate } from "react-router-dom";

export const Navbar: React.FC = () => {
  const [isMenueOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleOpenMenu = () => {
    setMenuOpen(!isMenueOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  };

  const toMainPage = () => {
    navigate("/home");
  };

  return (
    <>
      <div className="navbar">
        <div className="logo-input">
          <a className="ic-main">{<Icons.MainIcon />}</a>
          <div>
            <input
              className="search-input"
              type="text"
              name=""
              id=""
              placeholder="Search Eyebook"
            />
          </div>
        </div>

        <div>
          <ul className="options">
            <li className="icon" onClick={toMainPage}>
              {<Icons.Home />}
            </li>
            <li className="icon">{<Icons.Video />}</li>
            <li className="icon">{<Icons.Store />}</li>
            <li className="icon">{<Icons.Group />}</li>
            <li className="icon">{<Icons.Games />}</li>
          </ul>
        </div>

        <div className="sections">
          <a className="icon ic-sections">{<Icons.Menu />}</a>
          <a className="icon ic-sections">{<Icons.Messenger />}</a>
          <a className="icon ic-sections">{<Icons.Notification />}</a>
          <a className="icon ic-sections" onClick={handleOpenMenu}>
            {<Icons.Account />}
          </a>
        </div>
      </div>
      <UserOptions isOpen={isMenueOpen}>
        <h4>User Options</h4>
        <ul className="up-ul">
          <li className="sb-li">
            <div className="ic-options">{<Icons.Gear />}</div>
            <span className="sb-span op-li">Configuracion y Privacidad</span>
            <div className="go-arrow">{<Icons.SemiArrow />}</div>
          </li>

          <li className="sb-li">
            <div className="ic-options">{<Icons.Help />}</div>
            <span className="sb-span op-li">Ayuda y asistencia</span>
            <div className="go-arrow">{<Icons.SemiArrow />}</div>
          </li>
          <li className="sb-li">
            <div className="ic-options">{<Icons.Moon />}</div>
            <span className="sb-span op-li">Pantalla y accesibilidad</span>
            <div className="go-arrow">{<Icons.SemiArrow />}</div>
          </li>
          <li className="sb-li">
            <div className="ic-options">{<Icons.Comments />}</div>
            <span className="sb-span">Enviar comentarios</span>
          </li>
          <li className="sb-li">
            <div className="ic-options">{<Icons.Logout />}</div>
            <span className="sb-span" onClick={handleLogout}>
              Cerrar sesión
            </span>
          </li>
        </ul>
      </UserOptions>
    </>
  );
};
