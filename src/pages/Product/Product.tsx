import React, { useState, useEffect, useContext } from "react";
import "./Product.scss";
import WebshopItems from "../../data/terminals.json";
import { useParams } from "react-router-dom";
import { StsAccordion } from "../../ui/components/2-molecules/StsAccordion/StsAccordion";
import { Button } from "../../ui/components/1-atoms/Button";
import { useShoppingCart } from "../../contexts/ShoppingCartContex";
import { Modal } from "../../ui/components";
import { Helmet } from "react-helmet";
import { getDatabase, ref, child, get } from "firebase/database";
import { useAuth } from "../../contexts/AuthContext";
import { ThreeJSContext } from "../../contexts/ThreeJSContext";

export const Product = () => {
  const params = useParams();
  const { increaseCartQuantity } = useShoppingCart();
  const [isOpen, setIsOpen] = useState(false);
  const [isImage, setIsImage] = useState(false);
  const { currentUser } = useAuth();
  const [pickedColor, setPickedColor] = useState("#005776");
  const { updateModel } = useContext(ThreeJSContext);

  const singleProduct = WebshopItems.filter((webshopItem) => {
    return webshopItem.id === Number(params.productid);
  })[0];

  const changeImage = () => {
    setIsImage(!isImage);
  };

  useEffect(() => {
    if (currentUser) {
      const dbRef = ref(getDatabase());
      get(child(dbRef, `users/${currentUser.uid}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            setPickedColor(snapshot.val().color);
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  useEffect(() => {
    setPickedColor(updateModel.pickedColor);
  }, [updateModel.pickedColor]);

  return (
    <>
      <Helmet>
        <title>
          Tag imod betalinger med den pakkeløsning, som passer din virksomhed best - Sts Denmark
        </title>
        <meta
          name="title"
          content="Tag imod betalinger med den pakkeløsning, som passer din virksomhed best - Sts Denmark"
        />
        <meta
          name="description"
          content="Uanset om du sælger børnetøj, reparerer cykler eller serverer kaffe til morgentrætte kunder, har vi en terminal, der passer til dine behov."
        />
        <meta name="keyword" content="Sts betalingsløsninger bæredygtighed betalingsterminal" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mmd-hovedopgaven.web.app/" />
        <meta
          property="og:title"
          content="Tag imod betalinger med den pakkeløsning, som passer din virksomhed best - Sts Denmark"
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
        <meta
          property="twitter:url"
          content="https://mmd-hovedopgaven.web.app/"
        />
        <meta
          property="twitter:title"
          content="Tag imod betalinger når som helst, hvor som helstU+002d Sts Denmark"
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

      <main id="main" className="sts_product">
        <section className="sts_product_top">
          <article className="product_top_image">
            {isImage ? (
              <>
                <img
                  className="real_product_image"
                  src={
                    process.env.PUBLIC_URL +
                    "/images/move-3500-nexi-square-tilt.webp"
                  }
                  alt="Payment terminal"
                  width="1600"
                  height="900"
                  onClick={changeImage}
                />
                <p>Klik på billede for at se det optimerede billede</p>
              </>
            ) : (
              <>
                <svg
                  id="the_terminal"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 507.5 1002.5"
                  onClick={changeImage}
                >
                  <g id="Outer_body">
                    <path
                      d="m466.83,1001H27.17c-14.17,0-25.67-11.49-25.67-25.67V99.2C1.5,42.48,34.28,1.5,91,1.5l.5.09,310.71.83-.21.09c55.15,0,90.5,38.71,90.5,93.85v878.98c0,14.17-11.49,25.67-25.67,25.67Z"
                      style={{
                        fill: `${pickedColor}`,
                        stroke: "#373438",
                        strokeMiterlimit: "10",
                        strokeWidth: "5px",
                      }}
                    />
                    <path
                      d="m492.11,169.39c8.27,8.27,13.89,39.48,13.89,52.11v670c0,12.42-5.46,35.47-13.5,43.71"
                      style={{
                        fill: `${pickedColor}`,
                        strokeMiterlimit: "10",
                        strokeWidth: "5px",
                      }}
                    />
                  </g>
                  <g id="Inner_body">
                    <rect
                      id="Inner_line"
                      x="12.51"
                      y="81"
                      width="468.12"
                      height="910"
                      rx="25.47"
                      ry="25.47"
                      style={{
                        fill: `${pickedColor}`,
                        stroke: "#373438",
                        strokeMiterlimit: "10",
                        strokeWidth: "5px",
                      }}
                    />
                    <g id="Screen">
                      <rect
                        x="52.5"
                        y="118"
                        width="382"
                        height="537"
                        rx="13.28"
                        ry="13.28"
                        style={{
                          fill: "#0c0c0c",
                        }}
                      />
                      <g id="Inner_screen">
                        <rect
                          x="91.5"
                          y="163"
                          width="305"
                          height="389"
                          style={{
                            fill: "#CDF1F7",
                          }}
                        />
                        <g id="Upper_buttons">
                          <path
                            d="m141,630.5l-50.92.5c-2.25,0-4.08-1.61-4.08-3.61v-35.29c0-1.99,1.83-3.61,4.08-3.61h60.34c.8,0,1.56.21,2.19.56,1.46.82,2.03,2.66,1.47,4.24l-13.08,37.2"
                            style={{
                              fill: "#373438",
                            }}
                          />
                          <path
                            d="m180.92,590h56.84c2.12,0,3.25,1.75,2.51,3.9l-13.02,38.2c-.73,2.15-3.05,3.9-5.17,3.9h-56.84c-2.12,0-3.25-1.75-2.51-3.9l13.02-38.2c.73-2.15,3.05-3.9,5.17-3.9Z"
                            style={{
                              fill: "#373438",
                            }}
                          />
                          <path
                            d="m265.89,590.75h56.48c2.11,0,3.12,1.76,2.26,3.92l-15.21,38.4c-.86,2.17-3.26,3.92-5.37,3.92h-56.48c-2.11,0-3.12-1.76-2.26-3.92l15.21-38.4c.86-2.17,3.26-3.92,5.37-3.92Z"
                            style={{
                              fill: "#373438",
                            }}
                          />
                          <path
                            d="m348.35,588.5h46.65c2.14,0,5,3,5,5v28c0,.73-.65,2.27-1.58,3.92-1.61,2.86-4.06,6.08-5.42,6.08l-59.77,2c-2.14,0-3.3-1.71-2.59-3.82l12.56-37.37c.71-2.11,3.02-3.82,5.16-3.82Z"
                            style={{
                              fill: "#373438",
                            }}
                          />
                        </g>
                      </g>
                    </g>
                    <g id="Buttons">
                      <g id="Digits">
                        <path
                          d="m62.5,721.42v-27.72c0-6.46,4.8-11.7,10.72-11.7h53.93c5.92,0,10.72,5.24,10.72,11.7v27.72c0,6.46-4.8,11.7-10.72,11.7h-53.93c-5.92,0-10.72-5.24-10.72-11.7Z"
                          style={{
                            fill: "#898891",
                          }}
                        />
                        <path
                          d="m158.81,721.42v-27.72c0-6.46,4.8-11.7,10.72-11.7h53.93c5.92,0,10.72,5.24,10.72,11.7v27.72c0,6.46-4.8,11.7-10.72,11.7h-53.93c-5.92,0-10.72-5.24-10.72-11.7Z"
                          style={{
                            fill: "#898891",
                          }}
                        />
                        <path
                          d="m255.12,721.42v-27.72c0-6.46,4.8-11.7,10.72-11.7h53.93c5.92,0,10.72,5.24,10.72,11.7v27.72c0,6.46-4.8,11.7-10.72,11.7h-53.93c-5.92,0-10.72-5.24-10.72-11.7Z"
                          style={{
                            fill: "#898891",
                          }}
                        />
                        <path
                          d="m62.5,795.38v-27.72c0-6.46,4.8-11.7,10.72-11.7h53.93c5.92,0,10.72,5.24,10.72,11.7v27.72c0,6.46-4.8,11.7-10.72,11.7h-53.93c-5.92,0-10.72-5.24-10.72-11.7Z"
                          style={{
                            fill: "#898891",
                          }}
                        />
                        <path
                          d="m158.81,795.38v-27.72c0-6.46,4.8-11.7,10.72-11.7h53.93c5.92,0,10.72,5.24,10.72,11.7v27.72c0,6.46-4.8,11.7-10.72,11.7h-53.93c-5.92,0-10.72-5.24-10.72-11.7Z"
                          style={{
                            fill: "#898891",
                          }}
                        />
                        <path
                          d="m255.12,795.38v-27.72c0-6.46,4.8-11.7,10.72-11.7h53.93c5.92,0,10.72,5.24,10.72,11.7v27.72c0,6.46-4.8,11.7-10.72,11.7h-53.93c-5.92,0-10.72-5.24-10.72-11.7Z"
                          style={{
                            fill: "#898891",
                          }}
                        />
                        <path
                          d="m62.5,869.34v-27.72c0-6.46,4.8-11.7,10.72-11.7h53.93c5.92,0,10.72,5.24,10.72,11.7v27.72c0,6.46-4.8,11.7-10.72,11.7h-53.93c-5.92,0-10.72-5.24-10.72-11.7Z"
                          style={{
                            fill: "#898891",
                          }}
                        />
                        <path
                          d="m158.81,869.34v-27.72c0-6.46,4.8-11.7,10.72-11.7h53.93c5.92,0,10.72,5.24,10.72,11.7v27.72c0,6.46-4.8,11.7-10.72,11.7h-53.93c-5.92,0-10.72-5.24-10.72-11.7Z"
                          style={{
                            fill: "#898891",
                          }}
                        />
                        <path
                          d="m255.12,869.34v-27.72c0-6.46,4.8-11.7,10.72-11.7h53.93c5.92,0,10.72,5.24,10.72,11.7v27.72c0,6.46-4.8,11.7-10.72,11.7h-53.93c-5.92,0-10.72-5.24-10.72-11.7Z"
                          style={{
                            fill: "#898891",
                          }}
                        />
                        <path
                          d="m62.5,945.39v-22.77c0-5.31,4.8-9.61,10.72-9.61h53.93c5.92,0,10.72,4.3,10.72,9.61v22.77c0,5.31-4.8,9.61-10.72,9.61h-53.93c-5.92,0-10.72-4.3-10.72-9.61Z"
                          style={{
                            fill: "#898891",
                          }}
                        />
                        <path
                          d="m158.81,943.3v-27.72c0-6.46,4.8-11.7,10.72-11.7h53.93c5.92,0,10.72,5.24,10.72,11.7v27.72c0,6.46-4.8,11.7-10.72,11.7h-53.93c-5.92,0-10.72-5.24-10.72-11.7Z"
                          style={{
                            fill: "#898891",
                          }}
                        />
                        <path
                          d="m255.12,945.39v-22.77c0-5.31,4.8-9.61,10.72-9.61h53.93c5.92,0,10.72,4.3,10.72,9.61v22.77c0,5.31-4.8,9.61-10.72,9.61h-53.93c-5.92,0-10.72-4.3-10.72-9.61Z"
                          style={{
                            fill: "#898891",
                          }}
                        />
                      </g>
                      <g id="Side_buttons">
                        <path
                          d="m414.87,809.55h-54.74c-7.53,0-13.63-6.81-13.63-15.2v-29.82c0-8.4,6.1-15.2,13.63-15.2h47.34c9.03,0,21.03,23.42,21.03,23.46v21.57c0,8.4-6.1,15.2-13.63,15.2Z"
                          style={{
                            fill: "#db3c37",
                          }}
                        />
                        <rect
                          x="346.5"
                          y="818.64"
                          width="82"
                          height="52.27"
                          rx="15.88"
                          ry="15.88"
                          style={{
                            fill: "#ebcf49",
                          }}
                        />
                        <rect
                          x="346.5"
                          y="884.55"
                          width="82"
                          height="70.45"
                          rx="16.08"
                          ry="16.08"
                          style={{
                            fill: "#01aa71",
                          }}
                        />
                        <g>
                          <path
                            d="m418.4,737.95s-53.66,2.33-66-10.8c-6.13-6.52-5.61-34.94,2.6-38.64,9.68-4.36,63.4-8.52,63.4-8.52,3.92,0,7.1,3.73,7.1,8.33v41.29c0,4.6-3.18,8.33-7.1,8.33Z"
                            style={{
                              fill: "#898891",
                            }}
                          />
                          <circle cx="386" cy="706.5" r="8.5" />
                          <circle
                            cx="386"
                            cy="706.5"
                            r="12"
                            style={{
                              fill: "none",
                              stroke: "#000",
                              strokeMiterlimit: "10",
                            }}
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>

                <p>Klik på billede for at se den rigtige terminal</p>
              </>
            )}
          </article>
          <article className="sts_product_top_content">
            <div className="sts_product_top_text">
              <div>
                <h2>{singleProduct.name}</h2>
                <h4>{singleProduct.desc1}</h4>
                <p>
                  {singleProduct.desc2} til{" "}
                  {`${singleProduct.price} kr. pr. måned`}
                </p>
              </div>
              {currentUser ? (
                <p className="product_top_pickedcolor">
                  Din valgte farve:{" "}
                  <span style={{ backgroundColor: `${pickedColor}` }}>
                    {pickedColor}
                  </span>
                </p>
              ) : null}
              <a href="#product_info">Læs mere om pakkeløsningen</a>
              <div className="sts_product_top_footprint"></div>
            </div>
            <div className="sts_product_top_btns">
              <Button
                btnTypeStyle="primary_btn"
                className="sts_modal_open"
                label={"Design dit produkt"}
                onClick={() => setIsOpen(true)}
              />

              <Button
                className="sts_card_button"
                label={"Tilføj til kurv"}
                onClick={() => increaseCartQuantity(singleProduct.id)}
              />
            </div>
          </article>
        </section>

        {isOpen && (
          <Modal
            setIsOpen={setIsOpen}
            name={singleProduct.name}
            desc1={singleProduct.desc1}
          />
        )}

        <section id="product_info" className="sts_product_bottom">
          <div className="product_bottom_div">
            <h4>Modtag de mest populære kort</h4>
            <p>
              Med pakkeløsningen LARGE får du alt du skal bruge for at tage imod
              kortbetalinger samt vores komplette service og tilvalgspakke. I
              aftalen kan du vælge mellem en mobil eller stationær terminal, og
              du får en indløsningsaftale, så dine kunder kan betale med de mest
              populære kort.
            </p>
            <img
              src={
                process.env.PUBLIC_URL + "/images/logostrip-complete_1728x.webp"
              }
              alt="Cards you can pay with"
              width="1600"
              height="900"
            />
          </div>
          <div className="product_bottom_div">
            <p>
              Pakkeløsningen Large passer til forretninger, der kortomsætter for
              mere end 90.000 kr. pr. måned baseret på månedspris og
              gennemsnitligt transaktionsgebyr.*
            </p>
            {/* <Accordion data={accordionData} /> */}
            {isOpen ? null : <StsAccordion />}
          </div>
        </section>
      </main>
    </>
  );
};
