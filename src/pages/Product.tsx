import React, { useState } from "react";
import Terminal from "../assets/images/asset_1.png";
import WebshopItems from "./terminals.json";
import Switch from "@mui/material/Switch";
import { Link, useParams } from "react-router-dom";
import { NetsAccordion } from "../ui/components/2-molecules/NetsAccordion";
import Logos from "../ui/logostrip-complete_1728x.webp";
import { Button } from "../ui/components/1-atoms/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useShoppingCart } from "../contexts/ProductContex";

const style = {
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  bgcolor: "background.paper",
  p: 4,
};

export const Product = () => {
  const params = useParams();

  const singleProduct = WebshopItems.filter((t) => {
    return t.id === Number(params.produktid);
  })[0];

  const { increaseCartQuantity } = useShoppingCart();

  const [checked, setChecked] = useState(true);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  //Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            onClick={handleOpen}
          ></Button>
          <Button
            className="nets_card_button"
            label={"Tilføj til kurv"}
            onClick={() => increaseCartQuantity(singleProduct.id)}
          ></Button>
        </div>
      </section>

      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="nets_modal">
          <section className="nets_modal_top">
            <h3>{singleProduct.name}</h3>
            <Button
              className="nets_modal_close"
              label={"Færdig"}
              onClick={handleClose}
            ></Button>
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
      </Modal>

      <section className="nets_product_bottom">
        <div>
          <h4>Modtag de mest populære kort</h4>
          <p>
            Med pakkeløsningen LARGE får du alt du skal bruge for at tage imod
            kortbetalinger samt vores komplette service og tilvalgspakke. I
            aftalen kan du vælge mellem en mobil eller stationær terminal, og du
            får en indløsningsaftale, så dine kunder kan betale med de mest
            populære kort.
          </p>
          <img src={Logos} alt="" />
        </div>
        <div>
          <p>
            Pakkeløsningen Large passer til forretninger, der kortomsætter for
            mere end 90.000 kr. pr. måned baseret på månedspris og
            gennemsnitligt transaktionsgebyr.*
          </p>
          <NetsAccordion />
        </div>
      </section>
    </main>
  );
};
