import React, { useState, useContext, useEffect } from "react";
import styles from "./Modal.module.scss";
import { PrivateRoute } from "../../../../pages/PrivateRoute";
import { Button } from "../../1-atoms";
import { PaymentTerminalCanvas } from "../../3-organisms";
import { ColorPicker } from "../ColorPicker";

import { useAuth } from "../../../../contexts/AuthContext";
import { child, get, getDatabase, ref, update } from "firebase/database";
import { ThreeJSContext } from "../../../../contexts/ThreeJSContext";
import {
  getStorage,
  ref as refStorage,
  uploadBytes,
  getDownloadURL,
  list,
} from "firebase/storage";

export const Modal = (props: any) => {
  const { updateModel, setUpdateModel } = useContext(ThreeJSContext);

  const [isRatation360Clicked, setIsRatation360Clicked] = useState(false);
  const [isRatation180Clicked, setIsRatation180Clicked] = useState(false);
  const [showImage, setShowImage] = useState(true);

  //* Database start

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

  //* Database end

  //* Storage start

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

  const handleShowImage = () => setShowImage(!showImage);

  //* Storage end

  function updateModelSettings() {
    setUpdateModel((old: any) => {
      return {
        ...old,
        pickedColor,
        handlePickedColor,
        isRatation360Clicked,
        setIsRatation360Clicked,
        isRatation180Clicked,
        setIsRatation180Clicked,
        imageUrl,
        showImage,
      };
    });
  }

  useEffect(() => {
    updateModelSettings();
  }, [
    pickedColor,
    isRatation360Clicked,
    isRatation180Clicked,
    imageUrl,
    showImage,
  ]);

  return (
    <>
      <PrivateRoute>
        <aside className={styles.Modal_centered}>
          <section className={styles.Modal_modal}>
            <div className={styles.Modal_wrapper}>
              <header className={styles.Modal_header}>
                <div>
                  <h2>Design dit produkt</h2>
                  <p>
                    Prøv at vælge en farve og udforsk terminal ved at trække
                    rundt på den
                  </p>
                </div>
                {/* <Button
                  label="Luk og gem dine ændringer"
                  onClick={() => {
                    saveUserPreference();
                    props.setIsOpen(false);
                  }}
                /> */}
              </header>
              <article className={styles.Modal_content}>
                <div>
                  <PaymentTerminalCanvas />
                  <div className={styles.Modal_rotate_container}>
                    <h4>Drej produktet</h4>
                    <div className={styles.Modal_action_btns_container}>
                      <Button
                        label={"Drej 360°"}
                        onClick={() =>
                          updateModel.setIsRatation360Clicked(true)
                        }
                      />
                      <Button
                        label={"Vend 180°"}
                        onClick={() =>
                          updateModel.setIsRatation180Clicked(true)
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.Modal_actions_container}>
                  <div className={styles.Modal_image_container}>
                    <label className={styles.Modal_image_label}>
                      Vælg dit logo
                    </label>

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
                        label="Upload nyt logo"
                        type="button"
                        onClick={() => {
                          uploadFile();
                          setIsNewImageUpload(true);
                        }}
                      />
                    </div>
                    <div className={styles.Modal_image_checkbox}>
                      <label htmlFor="show_image">Vis logo</label>
                      <input
                        type="checkbox"
                        name="show_image"
                        id="show_image"
                        onChange={handleShowImage}
                        checked={showImage}
                      />
                    </div>
                    {/* <img src={imageUrl} alt="Logo eller ikon, som bruger har uploadet" /> */}
                  </div>

                  {/* <div className={styles.Modal_rotate_container}>
                    <h4>Drej produktet</h4>
                    <div className={styles.Modal_action_btns_container}>
                      <Button
                        label={"Drej 360°"}
                        onClick={() =>
                          updateModel.setIsRatation360Clicked(true)
                        }
                      />
                      <Button
                        label={"Vend 180°"}
                        onClick={() =>
                          updateModel.setIsRatation180Clicked(true)
                        }
                      />
                    </div>
                  </div> */}

                  <div className={styles.Modal_color_container}>
                    <h4>Vælg din farve</h4>
                    <p>
                      Du kan vælge en farve ved at trykke på farvefeltet eller
                      indtaste en hexkode
                    </p>
                    <ColorPicker
                      onChange={handlePickedColor}
                      value={pickedColor}
                      profilcolor={profilData?.color}
                    />
                  </div>
                  <Button
                    label="Luk og gem dine ændringer"
                    onClick={() => {
                      saveUserPreference();
                      props.setIsOpen(false);
                    }}
                  />
                </div>
              </article>
            </div>
          </section>
        </aside>
      </PrivateRoute>
    </>
  );
};
