import React, { useState, useContext, useEffect } from "react";
import styles from "./Modal.module.scss";
import { PrivateRoute } from "../../../../pages/PrivateRoute";
import { Button } from "../../1-atoms";
import { PaymentTerminalCanvas } from "../../3-organisms";
import { ColorPicker } from "../ColorPicker";

import { useAuth } from "../../../../contexts/AuthContext";
import { child, get, getDatabase, ref, update } from "firebase/database";
import { ThreeJSContext } from "../../../../contexts/ThreeJSContext";

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

  return (
    <>
      <PrivateRoute>
        <aside className={styles.Model_centered}>
          <div className={styles.Model_modal}>
            <header>
              <div>
                <h3 className={styles.Model_heading}>{props.name}</h3>
                <p className={styles.Model_description}>{props.desc}</p>
              </div>
              <Button
                label="Færdig"
                onClick={() => {
                  saveUserPreference();
                  props.setIsOpen(false);
                }}
              />
            </header>

            <PaymentTerminalCanvas />
            <div className={styles.Model_actions_container}>
              <div className={styles.Model_action_btns_container}>
                <Button
                  label={"Se produkt 360°"}
                  onClick={() => updateModel.setIsRatation360Clicked(true)}
                />
                <Button
                  label={"Vend 180°"}
                  onClick={() => updateModel.setIsRatation180Clicked(true)}
                />
              </div>
              <ColorPicker
                onChange={handlePickedColor}
                value={pickedColor}
                profilcolor={profilData?.color}
              />
            </div>
          </div>
        </aside>
      </PrivateRoute>
    </>
  );
};
