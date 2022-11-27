import React, { useEffect, useState } from "react";
import { getDatabase, ref, child, get } from "firebase/database";
import { UpdateAccount } from "../ui/components/UpdateAccount/UpdateAccount";
import { LogoutAccount } from "../ui/components/LogoutAccount/LogoutAccount";
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
    uid: "",
  });
  const { currentUser } = useAuth();

  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${currentUser.uid}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          // console.log(snapshot.val());
          setProfilData(snapshot.val());
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
        <UpdateAccount profilData={profilData} />
        <LogoutAccount />
      </section>
    </>
  );
};
