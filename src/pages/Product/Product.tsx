import React, { useState } from "react";
import "./Product.scss";
import WebshopItems from "../../data/terminals.json";
import { useParams } from "react-router-dom";
import { NetsAccordion } from "../../ui/components/2-molecules/NetsAccordion";
import { Button } from "../../ui/components/1-atoms/Button";
import { useShoppingCart } from "../../contexts/ShoppingCartContex";
import { Modal } from "../../ui/components";
import { Helmet } from "react-helmet";

export const Product = () => {
  const params = useParams();
  const { increaseCartQuantity } = useShoppingCart();
  const [isOpen, setIsOpen] = useState(false);
  const [isImage, setIsImage] = useState(false);

  const singleProduct = WebshopItems.filter((webshopItem) => {
    return webshopItem.id === Number(params.productid);
  })[0];

  const changeImage = () => {
    setIsImage(!isImage);
  };

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
          <article className="product_top_image">
            {isImage ? (
              <>
                <img
                  className="real_product_image"
                  src={process.env.PUBLIC_URL + "/images/move-3500-nexi-square-tilt.webp"}
                  alt="Payment terminal"
                  width="1600"
                  height="900"
                  onClick={changeImage}
                />
                <p>Klik på billede for at se det optimerede billede</p>
              </>
            ) : (
              <>
                <img
                  src={process.env.PUBLIC_URL + "/images/payment_terminal.svg"}
                  alt="Payment terminal"
                  width="1600"
                  height="900"
                  onClick={changeImage}
                />
                <p>Klik på billede for at se den rigtige terminal</p>
              </>
            )}
          </article>
          <article className="nets_product_top_content">
            <div className="nets_product_top_text">
              <div>
                <h2>{singleProduct.name}</h2>
                <h4>{singleProduct.desc1}</h4>
                <p>
                  {singleProduct.desc2} til {`${singleProduct.price} kr. pr. måned`}
                </p>
              </div>
              <a href="#product_info">Læs mere om pakkeløsningen</a>
              <div className="nets_product_top_footprint"></div>
            </div>
            <div className="nets_product_top_btns">
              <Button
                btnTypeStyle="primary_btn"
                className="nets_modal_open"
                label={"Design dit produkt"}
                onClick={() => setIsOpen(true)}
              />

              <Button
                className="nets_card_button"
                label={"Tilføj til kurv"}
                onClick={() => increaseCartQuantity(singleProduct.id)}
              />
            </div>
          </article>
        </section>

        {isOpen && (
          <Modal setIsOpen={setIsOpen} name={singleProduct.name} desc1={singleProduct.desc1} />
        )}

        <section id="product_info" className="nets_product_bottom">
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
