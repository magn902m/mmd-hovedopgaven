import React, { useState, useContext, useEffect, useRef } from "react";
import Terminal from "../assets/images/asset_1.png";
import WebshopItems from "../data/terminals.json";
import { Link, useParams } from "react-router-dom";
import { NetsAccordion } from "../ui/components/2-molecules/NetsAccordion";
import Logos from "../assets/images/logostrip-complete_1728x.webp";
import { Button } from "../ui/components/1-atoms/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useShoppingCart } from "../contexts/ShoppingCartContex";
import { useAuth } from "../contexts/AuthContext";
import { child, get, getDatabase, ref, update } from "firebase/database";
import { PaymentTerminalCanvas } from "../ui/components/3-organisms/PaymentTerminalCanvas/PaymentTerminalCanvas";
import { ColorPicker } from "../ui/components/UpdateAccount/ColorPicker/ColorPicker";
import { ThreeJSContext } from "../contexts/ThreeJSContext";

const style = {
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  bgcolor: "background.paper",
  p: 4,
};

// interface WebshopItemProps {
//   id: number;
//   desc: string;
//   name: string;
//   price: number;
//   img: string;
// }
// ({ id, desc, name, price, img }: WebshopItemProps)

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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // ThreeJS
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
    <main className="nets_product">
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
            onClick={handleOpen}
          ></Button>
          <Button
            className="nets_card_button"
            label={"Tilføj til kurv"}
            onClick={() => increaseCartQuantity(singleProduct.id)}
          ></Button>
        </div>
      </section>

      {/* <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="nets_modal">
          <section className="nets_modal_top">
            <h3>{singleProduct.name}</h3>
            <Button className="nets_modal_close" label={"Færdig"} onClick={handleClose}></Button>
          </section>
          <img src="" alt="" />
          <section className="nets_modal_bottom">
            <div>
              <label htmlFor="color">Vælg farve</label>
              <select name="color" id="color">
                <option value="color">Rød</option>
              </select>
            </div>
          </section>
        </Box>
      </Modal> */}

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
