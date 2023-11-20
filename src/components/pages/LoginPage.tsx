import "../../assets/styles/login-page.css";
import Icons from "../../assets/styles/icons.d";
import { LoginForm } from "../login_components/LoginForm";
import { SignUpForm } from "../login_components/SignUpForm";
import { useState } from "react";

export const LoginPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div>
        <div className="user-inter">
          <div className="current-modal">
            <div>
              <h1 className="logo-name">Eyebook</h1>
            </div>
            <div className="ls-t2">Inicios de sesión recientes</div>
            <div className="ls-t3">
              Haz clic en tu foto o agrega una cuenta.
            </div>
            <div className="add-account">
              <div className="add-acc-icon">
                <Icons.AddAccount />
              </div>
              <div className="add-account-modal">Agregar cuenta</div>
            </div>
          </div>
          <div className="login-box">
            <div className="login-form">
              <LoginForm />
              <div className="a-recover">
                <a href="">¿Olvidaste tu contraseña?</a>
              </div>
              <div className="line-b"></div>
              <div>
                <button className="su-b" onClick={openModal}>
                  Crear cuenta nueva
                </button>
              </div>
            </div>
            <div className="msg">
              <strong>
                <a href="">Crea una página</a>
              </strong>{" "}
              para una celebridad, una marca o un negocio.
            </div>
          </div>
        </div>
        <div className="inter-footer">
          <div className="lang-select">
            <ul className="lang-list1">
              <li className="first-li">
                {" "}
                <a href="">Español</a>
              </li>
              <li className="swt-li">
                <a href="">English (US)</a>
              </li>
              <li className="swt-li">
                <a href="">Italiano</a>
              </li>
              <li className="swt-li">
                <a href="">Português (Brasil)</a>
              </li>
              <li className="swt-li">
                <a href="">Français (France)</a>
              </li>
              <li className="swt-li">
                <a href="">Deutsch</a>
              </li>
              <li className="swt-li">
                <a href="">日本語</a>
              </li>
              <li className="swt-li">
                <a href="">中文(简体)</a>
              </li>
              <li className="swt-li">
                <a href="">العربية</a>
              </li>
              <li className="swt-li">
                <a href="">हिन्दी</a>
              </li>
              <li className="swt-li">
                <button className="more-lang">+</button>
              </li>
            </ul>
          </div>
          <div className="lang-sep"></div>
          <div>
            <div className="options-list">
              <ul className="lang-list2">
                <li>
                  <a href="">Registrarte</a>
                </li>
                <li className="other-li">
                  <a href="">Iniciar sesión</a>
                </li>
                <li className="other-li">
                  <a href="">Messenger</a>
                </li>
                <li className="other-li">
                  <a href="">Facebook Lite</a>
                </li>
                <li className="other-li">
                  <a href="">Video</a>
                </li>
                <li className="other-li">
                  <a href="">Lugares</a>
                </li>
                <li className="other-li">
                  <a href="">Juegos</a>
                </li>
                <li className="other-li">
                  <a href="">Marketplace</a>
                </li>
                <li className="other-li">
                  <a href="">Meta Play</a>
                </li>
                <li className="other-li">
                  <a href="">Meta Store</a>
                </li>
                <li className="other-li">
                  <a href="">Meta Quest</a>
                </li>
                <li className="other-li">
                  <a href="">Instagram</a>
                </li>
                <li className="other-li">
                  <a href="">Threads</a>
                </li>
                <li>
                  <a href="">Recaudaciones de fondos</a>
                </li>
                <li className="other-li">
                  <a href="">Servicios</a>
                </li>
                <li className="other-li">
                  <a href="">Centro de información de votación</a>
                </li>
                <li className="other-li">
                  <a href="">Política de privacidad</a>
                </li>
                <li className="other-li">
                  <a href="">Centro de privacidad</a>
                </li>
                <li className="other-li">
                  <a href="">Grupos</a>
                </li>
                <li className="other-li">
                  <a href="">Información</a>
                </li>
                <li className="other-cut">
                  <a href="">Crear anuncio</a>
                </li>
                <li>
                  <a href="">Crear página</a>
                </li>
                <li className="other-li">
                  <a href="">Desarrolladores</a>
                </li>
                <li className="other-li">
                  <a href="">Empleo</a>
                </li>
                <li className="other-li">
                  <a href="">Cookies</a>
                </li>
                <li className="other-li">
                  <a href="">Opciones de anuncios</a>{" "}
                  <span>
                    {" "}
                    <Icons.Play />{" "}
                  </span>
                </li>
                <li className="other-li">
                  <a href="">Condiciones</a>
                </li>
                <li className="other-li">
                  <a href="">Ayuda</a>
                </li>
                <li className="other-li">
                  <a href="">Subir contactos y no usuariosConfiguración</a>
                </li>
              </ul>
            </div>
            <div className="brand">
              Meta <Icons.CopyRight /> 2023
            </div>
          </div>
        </div>
      </div>
      <SignUpForm isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};
