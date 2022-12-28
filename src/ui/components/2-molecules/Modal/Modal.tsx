import React, { useState, useContext, useEffect } from "react";
import styles from "./Modal.module.scss";
import { PrivateRoute } from "../../../../pages/PrivateRoute";
import { Button } from "../../1-atoms";
import { PaymentTerminalCanvas } from "../../3-organisms";
import { ColorPicker } from "../ColorPicker";

import { useAuth } from "../../../../contexts/AuthContext";
import { child, get, getDatabase, ref, update } from "firebase/database";
import { ThreeJSContext } from "../../../../contexts/ThreeJSContext";
import { getStorage, ref as refStorage, uploadBytes, getDownloadURL, list } from "firebase/storage";

export const Modal = (props: any) => {
  const { updateModel, setUpdateModel } = useContext(ThreeJSContext);

  const [isRatation360Clicked, setIsRatation360Clicked] = useState(false);
  const [isRatation180Clicked, setIsRatation180Clicked] = useState(false);

  //* Database

  const { currentUser } = useAuth();
  const [profilData, setProfilData] = useState({
    adresse: "",
    cvrNumber: "",
    email: "",
    firstname: "",
    lastname: "",
    telefon: "",
    companyName: "",
    color: "",
    uid: "",
  });

  const [pickedColor, setPickedColor] = useState("");
  const handlePickedColor = (e: any) => setPickedColor(e.target.value);

  useEffect(() => {
    const dbRef = ref(getDatabase());
    async function fetchData() {
      const snapshot = await get(child(dbRef, `users/${currentUser.uid}/`));
      if (snapshot.exists()) {
        setProfilData(snapshot.val());
        setPickedColor(snapshot.val().color);
      } else {
        console.log("No data available");
      }
    }
    fetchData();
  }, []);

  function updateModelSettings() {
    setUpdateModel((old: any) => {
      return {
        ...old,
        pickedColor,
        handlePickedColor,
      };
    });
  }
  useEffect(() => {
    updateModelSettings();
  }, [pickedColor]);

  async function saveUserPreference() {
    const postData: any = {
      ...profilData,
      color: updateModel.pickedColor,
      uid: profilData.uid,
    };

    const promises = [];

    promises.push(updateAccountData(postData));

    function updateAccountData(postData: any) {
      const db = getDatabase();
      const updates: any = {};
      updates["/users/" + postData.uid + "/"] = postData;
      return update(ref(db), updates);
    }

    Promise.all(promises)
      .then(() => {
        console.log("Produkt er opdateret");
      })
      .catch(() => {
        console.log("Produkt kunne ikke opdateres");
      });
  }

  //* Database

  function updateCubeSettings() {
    setUpdateModel((old: any) => {
      return {
        ...old,
        isRatation360Clicked,
        setIsRatation360Clicked,
        isRatation180Clicked,
        setIsRatation180Clicked,
      };
    });
  }

  useEffect(() => {
    updateCubeSettings();
  }, [isRatation360Clicked, isRatation180Clicked]);

  //* Storage
  const [imageUpload, setImageUpload]: any = useState();
  const [imageUrl, setImageUrl] = useState("");
  const [isNewImageUpload, setIsNewImageUpload] = useState(false);

  const storage = getStorage();
  const imagesListRef = refStorage(storage, "images/");
  const uploadFile = () => {
    if (imageUpload === null) return;
    // const imageRef = refStorage(storage, `images/${imageUpload.name + currentUser.uid}`);
    const imageRef = refStorage(storage, `images/${currentUser.uid}`);

    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrl(url);
      });
    });
  };

  useEffect(() => {
    setIsNewImageUpload(false);
    list(imagesListRef).then((response) => {
      response.items.map((item) => {
        if (item.name === currentUser.uid) {
          getDownloadURL(item).then((url) => {
            setImageUrl(url);
          });
        }
        return null;
      });
    });
  }, [isNewImageUpload]);

  return (
    <>
      <PrivateRoute>
        <aside className={styles.Modal_centered}>
          <section className={styles.Modal_modal}>
            <div className={styles.Modal_wrapper}>
              <header className={styles.Modal_header}>
                <div>
                  <h2>Design dit produkt</h2>
                  <p>Prøv at vælg en farve og udforsk terminal, ved at trække rundt på den</p>
                </div>
                <Button
                  label="Luk og gem dine ændringer"
                  onClick={() => {
                    saveUserPreference();
                    props.setIsOpen(false);
                  }}
                />
              </header>
              <article className={styles.Modal_content}>
                <PaymentTerminalCanvas />
                <div className={styles.Modal_actions_container}>
                  <div className={styles.Modal_image_container}>
                    <label className={styles.Modal_image_label}>Vælg dit logo eller ikon</label>

                    <div className={styles.Modal_image_main_content}>
                      <input
                        type="file"
                        id="image_file"
                        name="image_file"
                        placeholder="&nbsp;"
                        required
                        onChange={(event: any) => {
                          setImageUpload(event.target.files[0]);
                        }}
                      />
                      <Button
                        btnTypeStyle="se_btn"
                        label="Upload billede"
                        type="button"
                        onClick={() => {
                          uploadFile();
                          setIsNewImageUpload(true);
                        }}
                      />
                    </div>

                    <img src={imageUrl} alt="Logo eller ikon, som bruger har uploadet" />
                  </div>

                  <div className={styles.Modal_rotate_container}>
                    <h4>Drej produktet</h4>
                    <div className={styles.Modal_action_btns_container}>
                      <Button
                        label={"Drej 360°"}
                        onClick={() => updateModel.setIsRatation360Clicked(true)}
                      />
                      <Button
                        label={"Vend 180°"}
                        onClick={() => updateModel.setIsRatation180Clicked(true)}
                      />
                    </div>
                  </div>

                  <div className={styles.Modal_color_container}>
                    <h4>Vælg din farve</h4>
                    <ColorPicker
                      onChange={handlePickedColor}
                      value={pickedColor}
                      profilcolor={profilData?.color}
                    />
                  </div>
                </div>
              </article>
            </div>
          </section>
        </aside>
      </PrivateRoute>
    </>
  );
};
