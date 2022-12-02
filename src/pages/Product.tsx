import React, { useState } from "react";
import Terminal from "../assets/images/asset_1.png";
import { Terminals } from "./terminals";
import Switch from "@mui/material/Switch";
import { Link, useParams } from "react-router-dom";
import { NetsAccordion } from "../ui/components/2-molecules/NetsAccordion";
import Logos from "../ui/logostrip-complete_1728x.webp";
import { Button } from "../ui/components/1-atoms/Button";
import { useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const Product = () => {
  const [checked, setChecked] = useState(true);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  const params = useParams();
  console.log(params.produktid);

  const singleProduct = Terminals.filter((t) => {
    return t.id === params.produktid;
  })[0];
  const navigate = useNavigate();
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
          <div className="nets_product_top_customize">
            <label>Tilføj eget logo</label>
            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>

          <Button
            className="nets_modal_open"
            label={"Skræddersy din terminal"}
            onClick={handleOpen}
          ></Button>
          <Button
            className="nets_card_button"
            label={"Tilføj til kurv"}
            onClick={() => navigate(`/cart`, { state: singleProduct })}
          ></Button>
        </div>
      </section>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="nets_modal">
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
