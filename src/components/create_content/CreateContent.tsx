import CryptoJS from "crypto-js";
import Icons from "../../assets/styles/icons.d";
import usePhoto from "../../assets/imgs/2084710789e50b60951eed9203a066f2.jpg";
import "../../assets/styles/styles.css";

export const CreateContent = () => {
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
      <div className="content-container">
        <div className="wrt-txt">
          <div className="user-photo">
            <img className="photo" src={usePhoto} alt="" />
          </div>
          <input
            className="create-txt"
            type="text"
            placeholder={`¿Qué estás pensando, ${userObject?.name}`}
          />
        </div>
        <div className="add-cre-multimedia">
          <div className="create-live">
            <div className="create-live-icon">
              <Icons.LiveCamera />
            </div>
            <div className="create-live-txt">Video en directo</div>
          </div>
          <div className="upl-photo-video">
            <div className="photo-video-icon">
              <Icons.Gallery />
            </div>
            <div className="upl-photo-video-txt">Foto/video</div>
          </div>
          <div className="fe-act">
            <div className="fe-act-icon">
              <Icons.Emoticon />
            </div>
            <div className="fe-act-txt">Sentimiento/actividad</div>
          </div>
        </div>
      </div>
    </>
  );
};
