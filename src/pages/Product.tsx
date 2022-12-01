import React, { useState } from "react";
import Terminal from "../assets/images/asset_1.png";
import { Terminals } from "./terminals";
import Switch from "@mui/material/Switch";
import { Link, useParams } from "react-router-dom";
import { NetsAccordion } from "../ui/components/2-molecules/NetsAccordion";
import Logos from "../ui/logostrip-complete_1728x.webp";

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
          <div>
            <label htmlFor="color">Vælg farve</label>
            <select name="color" id="color">
              <option value="color">Rød</option>
            </select>
          </div>
        </div>
      </section>

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
