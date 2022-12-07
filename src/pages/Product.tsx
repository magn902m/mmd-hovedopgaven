import React, { useState, useContext, useEffect } from "react";
import Terminal from "../assets/images/asset_1.png";
import WebshopItems from "../data/terminals.json";
import { Link, useParams } from "react-router-dom";
import { NetsAccordion } from "../ui/components/2-molecules/NetsAccordion";
import Logos from "../assets/images/logostrip-complete_1728x.webp";
import { Button } from "../ui/components/1-atoms/Button";
import { useShoppingCart } from "../contexts/ShoppingCartContex";
import { useAuth } from "../contexts/AuthContext";
import { child, get, getDatabase, ref, update } from "firebase/database";
import { ThreeJSContext } from "../contexts/ThreeJSContext";

import { Modal } from "../ui/components";

export const Product = () => {
  const params = useParams();

  const singleProduct = WebshopItems.filter((t) => {
    return t.id === Number(params.productid);
  })[0];

  const { increaseCartQuantity } = useShoppingCart();

  // const [checked, setChecked] = useState(true);
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setChecked(event.target.checked);
  // };

  //Modal
  const [isOpen, setIsOpen] = useState(false);

  // ThreeJS
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

  async function saveUserPreference(e: any) {
    console.log("saveUserPreference");

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
    <main className="nets_product">
      <section className="nets_product_top">
        <img src={Terminal} alt="" />
        <div className="nets_product_top_info">
          <h2>{singleProduct.name}</h2>
          <p>{singleProduct.desc}</p>
          {/* link til accordian */}
          <Link to="">Læs mere</Link>
          <div className="nets_product_top_footprint"></div>

          <Button
            className="nets_modal_open"
            label={"Skræddersy din terminal"}
            onClick={() => setIsOpen(true)}
          ></Button>
          <Button
            className="nets_card_button"
            label={"Tilføj til kurv"}
            onClick={() => increaseCartQuantity(singleProduct.id)}
          ></Button>
        </div>
      </section>

      {isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          handlePickedColor={handlePickedColor}
          pickedColor={pickedColor}
          profilcolor={profilData?.color}
          saveUserPreference={saveUserPreference}
          name={singleProduct.name}
          desc={singleProduct.desc}
        />
      )}

      <section className="nets_product_bottom">
        <div>
          <h4>Modtag de mest populære kort</h4>
          <p>
            Med pakkeløsningen LARGE får du alt du skal bruge for at tage imod kortbetalinger samt
            vores komplette service og tilvalgspakke. I aftalen kan du vælge mellem en mobil eller
            stationær terminal, og du får en indløsningsaftale, så dine kunder kan betale med de
            mest populære kort.
          </p>
          <img src={Logos} alt="" />
        </div>
        <div>
          <p>
            Pakkeløsningen Large passer til forretninger, der kortomsætter for mere end 90.000 kr.
            pr. måned baseret på månedspris og gennemsnitligt transaktionsgebyr.*
          </p>
          <NetsAccordion />
        </div>
      </section>
    </main>
  );
};
