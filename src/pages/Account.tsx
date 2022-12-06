import React, { useEffect, useState } from "react";
import { getDatabase, ref, child, get } from "firebase/database";
import { UpdateAccount } from "../ui/components/2-molecules/UpdateAccount/UpdateAccount";
import { LogoutAccount } from "../ui/components/2-molecules/LogoutAccount/LogoutAccount";
import { useAuth } from "../contexts/AuthContext";

export const Account = () => {
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
  const { currentUser } = useAuth();
  const [pickedColor, setPickedColor] = useState("#005776");

  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${currentUser.uid}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProfilData(snapshot.val());
          setPickedColor(snapshot.val().color);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <h2>Din konto</h2>

      <section className="account">
        <UpdateAccount
          profilData={profilData}
          setPickedColor={setPickedColor}
          pickedColor={pickedColor}
        />
        <LogoutAccount />
      </section>
    </>
  );
};
