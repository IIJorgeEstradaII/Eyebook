import React, { useState } from "react";
import Icons from "../../assets/styles/icons.d";
import axios from "axios";
import CryptoJS from "crypto-js";
import "../../assets/styles/styles.css";
import "../../assets/styles/signup-form.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}
//ReactNode, Este tipo permite que el prop acepte cualquier cosa que pueda ser renderizada por React,
// como componentes, elementos JSX, cadenas de texto, números, etc.

export const SignUpForm = ({ isOpen, onClose }: ModalProps) => {
  const [formData, setFormData] = useState({
    user: {
      email: "",
      password: "",
      password_confirmation: "",
      name: "",
      lastname: "",
    },
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:3000/users",
        formData
      );
      const token = response.data.token;
      localStorage.setItem("token", token);

      const user = response.data.user;
      const encryptedData = CryptoJS.AES.encrypt(
        JSON.stringify(user),
        "23201118"
      ).toString();
      localStorage.setItem("user", encryptedData);
      window.location.reload();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("Error response:", error.response);
      } else {
        console.error("Error desconocido:", error);
      }
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      user: {
        ...prevFormData.user,
        [name]: value,
      },
    }));
  };

  const months = [
    "ene",
    "feb",
    "mar",
    "abr",
    "may",
    "jun",
    "jul",
    "ago",
    "sep",
    "oct",
    "nov",
    "dic",
  ];

  const years: number[] = [];
  for (let year = 2023; year >= 1905; year--) {
    years.push(year);
  }

  console.log(formData);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="sig-msg">
          <div className="rg-msg-cm">
            <div className="md-t">Registrate</div>
            <div className="cm-ic" onClick={onClose}>
              <Icons.CloseX />
            </div>
          </div>
          <div className="md-sb">No cobro.</div>
        </div>
        <div className="signup-form">
          <form action="" onSubmit={handleSubmit}>
            <div className="fullname-field">
              <div className="name-field">
                <input
                  className="n-f"
                  name="name"
                  type="text"
                  placeholder="Nombre"
                  value={formData.user.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="lastname-field">
                <input
                  className="ln-f"
                  name="lastname"
                  type="text"
                  placeholder="Apellido"
                  value={formData.user.lastname}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mail-field">
              <input
                className="m-f"
                name="email"
                type="text"
                placeholder="Número de celular o correo electrónico"
                value={formData.user.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="password-field">
              <input
                className="pw-f"
                name="password"
                type="password"
                placeholder="Contraseña nueva"
                value={formData.user.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="password-field">
              <input
                className="pw-f"
                name="password_confirmation"
                type="password"
                placeholder="Repita la contraseña"
                value={formData.user.password_confirmation}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <div className="birth-d-msg">
                Fecha de Nacimiento <Icons.QuestionMark />
              </div>
            </div>
            <div className="birth-date-data">
              <div>
                <select className="day-d" name="day" id="day" required>
                  {[...Array(31)].map((_, index) => (
                    <option key={index + 1} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>
              </div>
              <div className="month">
                <select className="mth-d" name="" id="month" required>
                  {months.map((month, index) => (
                    <option key={index} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>
              <div className="year">
                <select className="year-d" name="" id="year" required>
                  {years.map((year, index) => (
                    <option key={index} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="gender-s">
              <div>
                Sexo <Icons.QuestionMark />
              </div>
            </div>
            <div className="gender">
              <div className="male">
                <label htmlFor="male">Hombre</label>
                <input
                  id="male"
                  className="ma-i"
                  value="male"
                  type="radio"
                  name="gender"
                  required
                />
              </div>
              <div className="female">
                <label htmlFor="female">Mujer</label>
                <input
                  id="female"
                  className="fa-i"
                  value="female"
                  type="radio"
                  name="gender"
                  required
                />
              </div>
              <div className="personalized">
                <label htmlFor="personalized">Personalizado</label>
                <input
                  id="personalized"
                  className="pe-i"
                  type="radio"
                  name="gender"
                />
              </div>
            </div>
            <div className="end-msg">
              <div className="fst-msg">
                Es posible que las personas que usan nuestro servicio hayan
                subido tu información de contacto a Facebook.{" "}
                <a href="">Obtén más información</a>.
              </div>
              <div className="snd-msg">
                Al hacer clic en "Registrarte", aceptas nuestras Condiciones, la{" "}
                <a href="">Política de privacidad</a> y la
                <a href=""> Política de cookies</a>. Es posible que te enviemos
                notificacionespor SMS, que puedes desactivar cuando quieras.
              </div>
            </div>
            <button className="rgst-sbm-btn" type="submit">
              Registrarte
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
