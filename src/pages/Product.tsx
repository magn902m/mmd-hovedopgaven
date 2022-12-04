import React, { useState, useContext, useEffect, useRef } from "react";
import { useAuth } from "../contexts/AuthContext";
import { child, get, getDatabase, ref, update } from "firebase/database";
import { PaymentTerminalCanvas } from "../ui/components/3-organisms/PaymentTerminalCanvas/PaymentTerminalCanvas";
import { ColorPicker } from "../ui/components/UpdateAccount/ColorPicker/ColorPicker";
import { ThreeJSContext } from "../contexts/ThreeJSContext";
import { Link } from "react-router-dom";

export const Product = () => {
  const productRef: any = useRef(null);
  const { updateModel, setUpdateModel } = useContext(ThreeJSContext);
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
      const snapshot = await get(child(dbRef, `users/${currentUser.uid}`));
      if (snapshot.exists()) {
        // console.log(snapshot.val());
        setProfilData(snapshot.val());
        setPickedColor(snapshot.val().color);
      } else {
        console.log("No data available");
      }
    }
    fetchData();
    // get(child(dbRef, `users/${currentUser.uid}`))
    //   .then((snapshot) => {
    //     if (snapshot.exists()) {
    //       setProfilData(snapshot.val());
    //       setPickedColor(profilData.color);
    //       console.log(pickedColor);
    //     } else {
    //       console.log("No data available");
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
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

  async function saveUserPreference(e: any) {
    console.log("saveUserPreference");

    // e.preventDefault();

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
        console.log("Kontoen er opdateret, reload siden");
      })
      .catch(() => {
        console.log("Kontoen kunne ikke opdateres");
      });
  }

  return (
    <>
      <section className="product" ref={productRef}>
        <PaymentTerminalCanvas />
        <ColorPicker
          onChange={handlePickedColor}
          value={pickedColor}
          profilcolor={profilData?.color}
        />
        <Link to="/cart" onClick={saveUserPreference}>
          Køb
        </Link>
      </section>
    </>
  );
};
