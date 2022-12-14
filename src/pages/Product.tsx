import React, { useState } from "react";
import WebshopItems from "../data/terminals.json";
import { useParams } from "react-router-dom";
import { NetsAccordion } from "../ui/components/2-molecules/NetsAccordion";
import { Button } from "../ui/components/1-atoms/Button";
import { useShoppingCart } from "../contexts/ShoppingCartContex";
import { Modal } from "../ui/components";
import { Helmet } from "react-helmet";

export const Product = () => {
  const params = useParams();

  const singleProduct = WebshopItems.filter((t) => {
    return t.id === Number(params.productid);
  })[0];

  const { increaseCartQuantity } = useShoppingCart();

  //Modal
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>
          Tag imod betalinger med den pakkeløsning, som passer din virksomhed best - Nets Denmark
        </title>
        <meta
          name="title"
          content="Tag imod betalinger med den pakkeløsning, som passer din virksomhed best - Nets Denmark"
        />
        <meta
          name="description"
          content="Uanset om du sælger børnetøj, reparerer cykler eller serverer kaffe til morgentrætte kunder, har vi en terminal, der passer til dine behov."
        />
        <meta name="keyword" content="Nets betalingsløsninger bæredygtighed betalingsterminal" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mmd-hovedopgaven.web.app/" />
        <meta
          property="og:title"
          content="Tag imod betalinger med den pakkeløsning, som passer din virksomhed best - Nets Denmark"
        />
        <meta
          property="og:description"
          content="Uanset om du sælger børnetøj, reparerer cykler eller serverer kaffe til morgentrætte kunder, har vi en terminal, der passer til dine behov."
        />
        <meta
          property="og:image"
          content={process.env.PUBLIC_URL + "./images/payment_terminal.svg"}
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://mmd-hovedopgaven.web.app/" />
        <meta
          property="twitter:title"
          content="Tag imod betalinger når som helst, hvor som helstU+002d Nets Denmark"
        />
        <meta
          property="twitter:description"
          content="Uanset om du sælger børnetøj, reparerer cykler eller serverer kaffe til morgentrætte kunder, har vi en terminal, der passer til dine behov."
        />
        <meta
          property="twitter:image"
          content={process.env.PUBLIC_URL + "./images/payment_terminal.svg"}
        />
      </Helmet>

      <main id="main" className="nets_product">
        <section className="nets_product_top">
          <img
            src={process.env.PUBLIC_URL + "/images/payment_terminal.svg"}
            alt="Payment terminal"
            width="1600"
            height="900"
          />
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
            <img
              src={process.env.PUBLIC_URL + "/images/logostrip-complete_1728x.webp"}
              alt="Cards you can pay with"
              width="1600"
              height="900"
            />
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
    </>
  );
};
