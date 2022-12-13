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

  //Modal
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="nets_product">
      <section className="nets_product_top">
        <img src={Terminal} alt="" />
        <div className="nets_product_top_info">
          <h2>{singleProduct.name}</h2>
          <h4>{singleProduct.desc1}</h4>
          <p>{singleProduct.desc2}</p>
          {/* link til accordian */}
          <p>Læs mere under produktet</p>
          <div className="nets_product_top_footprint"></div>

          <Button
            className="nets_modal_open"
            label={"Skræddersy din terminal"}
            onClick={() => setIsOpen(true)}
          />

          <Button
            className="nets_card_button"
            label={"Tilføj til kurv"}
            onClick={() => increaseCartQuantity(singleProduct.id)}
          />
        </div>
      </section>

      {isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          // handlePickedColor={handlePickedColor}
          // pickedColor={pickedColor}
          // profilcolor={profilData?.color}
          // saveUserPreference={saveUserPreference}
          name={singleProduct.name}
          desc={singleProduct.desc1}
        />
      )}

      <section className="nets_product_bottom">
        <div className="product_bottom_div">
          <h4>Modtag de mest populære kort</h4>
          <p>
            Med pakkeløsningen LARGE får du alt du skal bruge for at tage imod kortbetalinger samt
            vores komplette service og tilvalgspakke. I aftalen kan du vælge mellem en mobil eller
            stationær terminal, og du får en indløsningsaftale, så dine kunder kan betale med de
            mest populære kort.
          </p>
          <img src={Logos} alt="" />
        </div>
        <div className="product_bottom_div">
          <p>
            Pakkeløsningen Large passer til forretninger, der kortomsætter for mere end 90.000 kr.
            pr. måned baseret på månedspris og gennemsnitligt transaktionsgebyr.*
          </p>
          {/* <Accordion data={accordionData} /> */}
          {isOpen ? null : <NetsAccordion />}
        </div>
      </section>
    </main>
  );
};
