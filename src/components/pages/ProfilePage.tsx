import { Navbar } from "../Navbar";
import CryptoJS from "crypto-js";
import myImage from "../../assets/imgs/eye-img.jpg";
import defaultProfileImg from "../../assets/imgs/2084710789e50b60951eed9203a066f2.jpg";
import Icons from "../../assets/styles/icons.d";
import "../../assets/styles/styles.css";

export const ProfilePage = () => {
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
      <div className="grid-container2">
        <div className="item-1">
          <Navbar />
        </div>
        <div className="item-2">
          <div className="img-container">
            <img className="img-pc" src={myImage} alt="" />
            <div className="avatar">
              <div className="mk-ava">
                <div className="mk-ava-ic">
                  <Icons.Avatar />
                </div>
                <div className="mk-ava-txt">Crear Con avatar</div>
              </div>
              <div className="up-photo">
                <div className="mk-ava-ic">
                  <Icons.Camera />
                </div>
                <div className="mk-ava-txt">Editar foto de portada</div>
              </div>
            </div>
          </div>
        </div>
        <div className="item-3">
          <div className="user-information">
            <div className="user-profile-photo">
              <div className="user-photo">
                <img className="profile-photo" src={defaultProfileImg} alt="" />
              </div>
            </div>
            <div className="user-upl-photo">
              <div className="upl-photo-btn">
                <Icons.Camera />
              </div>
            </div>
            <div className="user-name">
              <div className="name">
                {userObject
                  ? userObject.name + " " + userObject.lastname
                  : "No hay datos"}
              </div>
              <div className="user-friends">268 amigos</div>
            </div>
            <div className="user-actions">
              <div className="element-add-hi">
                <div className="user-add-history">
                  <div className="add-his-icon">
                    <Icons.AddHistory />
                  </div>
                  <div className="add-his-txt">Añadir Historia</div>
                </div>
              </div>
              <div className="element-ed-pr">
                <div className="user-edit-profile">
                  <div className="edit-pofile-icon">
                    <Icons.Pen />
                  </div>
                  <div className="edit-profile-txt">Editar perfil</div>
                </div>
              </div>
              <div className="element-fnd-eye">
                <div className="user-find-eyebooks">
                  <div className="find-eyebooks-arrow">
                    <Icons.DownArrow />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
