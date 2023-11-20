import "../assets/styles/sidebar.css";
import Icons from "../assets/styles/icons.d";
import CryptoJS from "crypto-js";
import { useNavigate } from "react-router-dom";

export const SideBar = () => {
  const navigate = useNavigate();

  interface UserObject {
    id: number;
    email: string;
    created_at: string;
    updated_at: string;
    name: string;
    lastname: string;
  }

  let userObject: UserObject | undefined;

  const sensibleData = localStorage.getItem("user");

  if (sensibleData) {
    const user = CryptoJS.AES.decrypt(sensibleData, "23201118");
    const decryptedData = CryptoJS.enc.Utf8.stringify(user);

    try {
      userObject = JSON.parse(decryptedData);
    } catch (error) {
      console.error("Error al analizar JSON:", error);
    }
  }

  return (
    <>
      <div className="sidebar">
        <ul className="sb-elements">
          <li className="sb-li" onClick={() => navigate("/profile")}>
            <div className="ico-sidebar">{<Icons.Account />}</div>
            <span className="sb-span">
              {userObject
                ? userObject.name + " " + userObject.lastname
                : "No hay datos"}
            </span>
          </li>
          <li className="sb-li">
            <div className="ico-sidebar">{<Icons.Friends />}</div>
            <span className="sb-span">Friends</span>
          </li>
          <li className="sb-li">
            <div className="ico-sidebar">{<Icons.Memories />}</div>
            <span className="sb-span">Memories</span>
          </li>
          <li className="sb-li">
            <div className="ico-sidebar">{<Icons.Saved />}</div>
            <span className="sb-span">Saved</span>
          </li>
          <li className="sb-li">
            <div className="ico-sidebar">{<Icons.Groups />}</div>
            <span className="sb-span">Groups</span>
          </li>
          <li className="sb-li">
            <div className="ico-sidebar"> {<Icons.Videos />}</div>
            <span className="sb-span">Video</span>
          </li>
        </ul>
        <div className="sb-footer">
          <ul className="sb-footer-ul">
            <li>
              <a className="sb-footer-a" href="">
                Privacidad
              </a>
            </li>
            <li>
              <a className="sb-footer-a" href="">
                Condiciones
              </a>
            </li>
            <li>
              <a className="sb-footer-a" href="">
                Publicidad
              </a>
            </li>
            <li>
              <a className="sb-footer-a" href="">
                Opciones de Anuncios
              </a>
            </li>
            <li>
              <a className="sb-footer-a" href="">
                Cookies
              </a>
            </li>
            <li>
              <a className="sb-footer-a" href="">
                Más...
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
