import React from "react";
import "./Frontpage.scss";
import { Button } from "../../ui/components/1-atoms/Button";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export const Frontpage = () => {
  const navigate = useNavigate();

  const goTo = (props: any) => {
    navigate(props);
  };

  return (
    <>
      <Helmet>
        <title>Tag imod betalinger når som helst, hvor som helst - Nets Denmark</title>
        <meta
          name="title"
          content="Tag imod betalinger når som helst, hvor som helst - Nets Denmark"
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
          content="Tag imod betalinger når som helst, hvor som helst - Nets Denmark"
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

      <main id="main" className="frontpage">
        <section className="frontpage_hero">
          <div className="frontpage_hero_text">
            <div>
              <h1>Design din egen betalingsterminal</h1>
              <span className="frontpage_hero_text_span">- med en grøn omtankte</span>
            </div>
            <p>
              Hos Nets stræber vi os på at give tilbage - både til dig og naturen. Med vores
              betalingsterminaler får du alt, hvad du skal bruge til at tage imod betalinger med
              alle de kortbrands, dine kunder ønsker at betale med. Som noget nyt kan du skræddersy
              dem, så de passer præcist ind i din visuelle verden. Vi har selvfølgelig også tænkt på
              miljøet, og hvordan vi kan mindske vores CO2 aftryk.
            </p>
            <div className="frontpage_hero_buttons">
              <Button
                btnTypeStyle="primary_btn"
                onClick={() => goTo("/products")}
                label="Kom i gang"
              />
              <Button
                className="secondary_btn"
                onClick={() => goTo("/green-goal")}
                // label="Læs om vores nye bæredygtige initiativer"
                label="Læs om vores low impact webshop"
              />
            </div>
          </div>
          <div className="frontpage_hero_img">
            <svg
              id="frontpage_turbine"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 325.46 326.93"
              className="frontpage_turbine"
            >
              <polygon
                id="_body_"
                points="257.3 217.95 239.64 217.95 245.28 89.4 251.95 89.4 257.3 217.95"
                style={{ fill: "none", stroke: "#000", strokeMiterlimit: "10" }}
              />
              <g id="blades2">
                <circle
                  id="_center_"
                  cx="248.51"
                  cy="82.32"
                  r="5.42"
                  style={{
                    fill: "none",
                    stroke: "#000",
                    strokeMiterlimit: "10",
                  }}
                />
                <polyline
                  points="242.66 82.8 222.8 84.12 175.38 119.3 176.04 120.4 244.3 85.74"
                  style={{
                    fill: "none",
                    stroke: "#000",
                    strokeMiterlimit: "10",
                  }}
                />
                <polyline
                  points="250.62 76.9 257.88 58.43 246.52 .52 245.27 .6 246.36 77.34"
                  style={{
                    fill: "none",
                    stroke: "#000",
                    strokeMiterlimit: "10",
                  }}
                />
                <polyline
                  points="252.57 86.56 266.74 100.44 324.5 112.44 324.86 111.21 253.93 83.27"
                  style={{
                    fill: "none",
                    stroke: "#000",
                    strokeMiterlimit: "10",
                  }}
                />
              </g>
              <g id="terminal">
                <path
                  d="m102.02,326.43H6.1c-3.09,0-5.6-2.51-5.6-5.6v-191.15c0-12.37,7.15-21.31,19.53-21.31l.11.02,67.79.18-.05.02c12.03,0,19.74,8.44,19.74,20.48v191.77c0,3.09-2.51,5.6-5.6,5.6Z"
                  style={{
                    fill: "none",
                    stroke: "#56555a",
                    strokeMiterlimit: "10",
                  }}
                />
                <path
                  d="m107.54,144.99c1.81,1.81,3.03,8.61,3.03,11.37v146.17c0,2.71-1.19,7.74-2.94,9.54"
                  style={{
                    fill: "none",
                    stroke: "#56555a",
                    strokeMiterlimit: "10",
                  }}
                />
                <rect
                  x="2.9"
                  y="125.71"
                  width="102.13"
                  height="198.53"
                  rx="25.47"
                  ry="25.47"
                  style={{
                    fill: "none",
                    stroke: "#49494c",
                    strokeMiterlimit: "10",
                  }}
                />
                <rect
                  x="11.63"
                  y="133.78"
                  width="83.34"
                  height="117.16"
                  rx="13.28"
                  ry="13.28"
                  style={{
                    fill: "none",
                    stroke: "#0c0c0c",
                    strokeMiterlimit: "10",
                  }}
                />
                <rect
                  x="20.14"
                  y="143.6"
                  width="66.54"
                  height="84.87"
                  style={{
                    fill: "none",
                    stroke: "#00a0c5",
                    strokeMiterlimit: "10",
                  }}
                />
                <rect x="11.63" y="254.87" width="20.07" height="14.13" style={{ fill: "none" }} />
                <path
                  d="m13.81,265.43v-6.05c0-1.41,1.05-2.55,2.34-2.55h11.77c1.29,0,2.34,1.14,2.34,2.55v6.05c0,1.41-1.05,2.55-2.34,2.55h-11.77c-1.29,0-2.34-1.14-2.34-2.55Z"
                  style={{
                    fill: "none",
                    stroke: "#898891",
                    strokeMiterlimit: "10",
                    strokeWidth: "1px",
                  }}
                />
                <rect x="31.7" y="254.87" width="20.07" height="14.13" style={{ fill: "none" }} />
                <path
                  d="m34.82,265.43v-6.05c0-1.41,1.05-2.55,2.34-2.55h11.77c1.29,0,2.34,1.14,2.34,2.55v6.05c0,1.41-1.05,2.55-2.34,2.55h-11.77c-1.29,0-2.34-1.14-2.34-2.55Z"
                  style={{
                    fill: "none",
                    stroke: "#898891",
                    strokeMiterlimit: "10",
                    strokeWidth: "1px",
                  }}
                />
                <rect x="51.77" y="254.87" width="20.07" height="14.13" style={{ fill: "none" }} />
                <path
                  d="m55.83,265.43v-6.05c0-1.41,1.05-2.55,2.34-2.55h11.77c1.29,0,2.34,1.14,2.34,2.55v6.05c0,1.41-1.05,2.55-2.34,2.55h-11.77c-1.29,0-2.34-1.14-2.34-2.55Z"
                  style={{
                    fill: "none",
                    stroke: "#898891",
                    strokeLinejoin: "round",
                    strokeWidth: "1px",
                  }}
                />
                <rect x="11.63" y="268.99" width="20.07" height="14.13" style={{ fill: "none" }} />
                <path
                  d="m13.81,281.57v-6.05c0-1.41,1.05-2.55,2.34-2.55h11.77c1.29,0,2.34,1.14,2.34,2.55v6.05c0,1.41-1.05,2.55-2.34,2.55h-11.77c-1.29,0-2.34-1.14-2.34-2.55Z"
                  style={{
                    fill: "none",
                    stroke: "#898891",
                    strokeMiterlimit: "10",
                    strokeWidth: "1px",
                  }}
                />
                <rect x="31.7" y="268.99" width="20.07" height="14.13" style={{ fill: "none" }} />
                <path
                  d="m34.82,281.57v-6.05c0-1.41,1.05-2.55,2.34-2.55h11.77c1.29,0,2.34,1.14,2.34,2.55v6.05c0,1.41-1.05,2.55-2.34,2.55h-11.77c-1.29,0-2.34-1.14-2.34-2.55Z"
                  style={{
                    fill: "none",
                    stroke: "#898891",
                    strokeMiterlimit: "10",
                    strokeWidth: "1px",
                  }}
                />
                <rect x="51.77" y="268.99" width="20.07" height="14.13" style={{ fill: "none" }} />
                <path
                  d="m55.83,281.57v-6.05c0-1.41,1.05-2.55,2.34-2.55h11.77c1.29,0,2.34,1.14,2.34,2.55v6.05c0,1.41-1.05,2.55-2.34,2.55h-11.77c-1.29,0-2.34-1.14-2.34-2.55Z"
                  style={{
                    fill: "none",
                    stroke: "#898891",
                    strokeMiterlimit: "10",
                    strokeWidth: "1px",
                  }}
                />
                <rect x="11.63" y="283.12" width="20.07" height="14.13" style={{ fill: "none" }} />
                <path
                  d="m13.81,297.7v-6.05c0-1.41,1.05-2.55,2.34-2.55h11.77c1.29,0,2.34,1.14,2.34,2.55v6.05c0,1.41-1.05,2.55-2.34,2.55h-11.77c-1.29,0-2.34-1.14-2.34-2.55Z"
                  style={{
                    fill: "none",
                    stroke: "#898891",
                    strokeMiterlimit: "10",
                    strokeWidth: "1px",
                  }}
                />
                <rect x="31.7" y="283.12" width="20.07" height="14.13" style={{ fill: "none" }} />
                <path
                  d="m34.82,297.7v-6.05c0-1.41,1.05-2.55,2.34-2.55h11.77c1.29,0,2.34,1.14,2.34,2.55v6.05c0,1.41-1.05,2.55-2.34,2.55h-11.77c-1.29,0-2.34-1.14-2.34-2.55Z"
                  style={{
                    fill: "none",
                    stroke: "#898891",
                    strokeMiterlimit: "10",
                    strokeWidth: "1px",
                  }}
                />
                <rect x="51.77" y="283.12" width="20.07" height="14.13" style={{ fill: "none" }} />
                <path
                  d="m55.83,297.7v-6.05c0-1.41,1.05-2.55,2.34-2.55h11.77c1.29,0,2.34,1.14,2.34,2.55v6.05c0,1.41-1.05,2.55-2.34,2.55h-11.77c-1.29,0-2.34-1.14-2.34-2.55Z"
                  style={{
                    fill: "none",
                    stroke: "#898891",
                    strokeMiterlimit: "10",
                    strokeWidth: "1px",
                  }}
                />
                <rect x="11.63" y="297.25" width="20.07" height="14.13" style={{ fill: "none" }} />
                <path
                  d="m13.81,314.29v-4.97c0-1.16,1.05-2.1,2.34-2.1h11.77c1.29,0,2.34.94,2.34,2.1v4.97c0,1.16-1.05,2.1-2.34,2.1h-11.77c-1.29,0-2.34-.94-2.34-2.1Z"
                  style={{
                    fill: "none",
                    stroke: "#898891",
                    strokeMiterlimit: "10",
                    strokeWidth: "1px",
                  }}
                />
                <rect x="31.7" y="297.25" width="20.07" height="14.13" style={{ fill: "none" }} />
                <path
                  d="m34.82,313.84v-6.05c0-1.41,1.05-2.55,2.34-2.55h11.77c1.29,0,2.34,1.14,2.34,2.55v6.05c0,1.41-1.05,2.55-2.34,2.55h-11.77c-1.29,0-2.34-1.14-2.34-2.55Z"
                  style={{
                    fill: "none",
                    stroke: "#898891",
                    strokeMiterlimit: "10",
                    strokeWidth: "1px",
                  }}
                />
                <rect x="51.77" y="297.25" width="20.07" height="14.13" style={{ fill: "none" }} />
                <path
                  d="m55.83,314.29v-4.97c0-1.16,1.05-2.1,2.34-2.1h11.77c1.29,0,2.34.94,2.34,2.1v4.97c0,1.16-1.05,2.1-2.34,2.1h-11.77c-1.29,0-2.34-.94-2.34-2.1Z"
                  style={{
                    fill: "none",
                    stroke: "#898891",
                    strokeMiterlimit: "10",
                    strokeWidth: "1px",
                  }}
                />
                <path
                  d="m91.45,269.04s-11.71.51-14.4-2.36c-1.34-1.42-1.22-7.62.57-8.43,2.11-.95,13.83-1.86,13.83-1.86.86,0,1.55.81,1.55,1.82v9.01c0,1-.69,1.82-1.55,1.82Z"
                  style={{
                    fill: "none",
                    stroke: "#898891",
                    strokeMiterlimit: "10",
                    strokeWidth: "1px",
                  }}
                />
                <path
                  d="m90.68,284.66h-11.94c-1.64,0-2.97-1.48-2.97-3.32v-6.51c0-1.83,1.33-3.32,2.97-3.32h10.33c1.97,0,4.59,5.11,4.59,5.12v4.71c0,1.83-1.33,3.32-2.97,3.32Z"
                  style={{
                    fill: "none",
                    stroke: "#db3c37",
                    strokeMiterlimit: "10",
                    strokeWidth: "1px",
                  }}
                />
                <rect
                  x="75.77"
                  y="286.64"
                  width="17.89"
                  height="11.4"
                  rx="4.37"
                  ry="4.37"
                  style={{
                    fill: "none",
                    stroke: "#ebcf49",
                    strokeMiterlimit: "10",
                    strokeWidth: "1px",
                  }}
                />
                <rect
                  x="75.77"
                  y="301.02"
                  width="17.89"
                  height="15.37"
                  rx="5.89"
                  ry="5.89"
                  style={{
                    fill: "none",
                    stroke: "#01aa71",
                    strokeMiterlimit: "10",
                    strokeWidth: "1px",
                  }}
                />
                <path
                  d="m30.93,245.59l-11.11.11c-.49,0-.89-.35-.89-.79v-7.7c0-.43.4-.79.89-.79h13.16c.18,0,.34.04.48.12.32.18.44.58.32.92l-2.85,8.12"
                  style={{
                    fill: "none",
                    stroke: "#373438",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }}
                />
                <path
                  d="m39.64,236.76h12.4c.46,0,.71.38.55.85l-2.84,8.33c-.16.47-.67.85-1.13.85h-12.4c-.46,0-.71-.38-.55-.85l2.84-8.33c.16-.47.67-.85,1.13-.85Z"
                  style={{
                    fill: "none",
                    stroke: "#373438",
                    strokeMiterlimit: "10",
                  }}
                />
                <path
                  d="m58.18,236.92h12.32c.46,0,.68.38.49.86l-3.32,8.38c-.19.47-.71.86-1.17.86h-12.32c-.46,0-.68-.38-.49-.86l3.32-8.38c.19-.47.71-.86,1.17-.86Z"
                  style={{
                    fill: "none",
                    stroke: "#373438",
                    strokeMiterlimit: "10",
                  }}
                />
                <path
                  d="m76.17,236.43h10.18c.47,0,1.09.65,1.09,1.09v6.11c0,.16-.14.49-.34.86-.35.62-.89,1.33-1.18,1.33l-13.04.44c-.47,0-.72-.37-.57-.83l2.74-8.15c.15-.46.66-.83,1.13-.83Z"
                  style={{
                    fill: "none",
                    stroke: "#373438",
                    strokeMiterlimit: "10",
                  }}
                />
                <circle cx="84.39" cy="262.18" r="1.85" />
                <circle
                  cx="84.39"
                  cy="262.18"
                  r="2.62"
                  style={{
                    fill: "none",
                    stroke: "#000",
                    strokeMiterlimit: "10",
                  }}
                />
                {/* <g id="lKCY8a.tif">
                  <image
                    id="Layer_0"
                    width="98"
                    height="29"
                    transform="translate(45.88 180.91) scale(.2)"
                    xlinkHref="data:image/png;base64,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"
                  />
                </g> */}
              </g>
              <g id="stikkontakt">
                <rect
                  x="243.52"
                  y="201.4"
                  width="9.9"
                  height="12.59"
                  style={{
                    fill: "#fff",
                    stroke: "#000",
                    strokeMiterlimit: "10",
                    strokeWidth: ".75px",
                  }}
                />
                <rect
                  x="243.85"
                  y="201.68"
                  width="9.58"
                  height="12.31"
                  style={{
                    fill: "#fff",
                    stroke: "#000",
                    strokeMiterlimit: "10",
                    strokeWidth: ".75px",
                  }}
                />
                <rect
                  x="245.44"
                  y="203.53"
                  width="6.38"
                  height="4.22"
                  style={{
                    fill: "#fff",
                    stroke: "#000",
                    strokeMiterlimit: "10",
                    strokeWidth: ".75px",
                  }}
                />
                <polyline
                  points="245.44 207.75 245.44 212.15 251.83 212.15 251.83 207.75"
                  style={{
                    fill: "#fff",
                    stroke: "#000",
                    strokeMiterlimit: "10",
                    strokeWidth: ".75px",
                  }}
                />
              </g>
              <g id="ledning">
                <g>
                  <rect
                    x="246.82"
                    y="209.21"
                    width="3.64"
                    height="2.01"
                    style={{
                      fill: "none",
                      stroke: "#56555a",
                      strokeMiterlimit: "10",
                      strokeWidth: ".25px",
                    }}
                  />
                  <path
                    d="m250.47,211.22h-3.64c-.12-.41-.25-.97-.25-1.66,0-.56.07-1.04.15-1.4.3.16.96.48,1.86.47.86,0,1.5-.31,1.79-.48.14.34.31.89.32,1.58.01.64-.12,1.15-.23,1.48Z"
                    style={{
                      fill: "none",
                      stroke: "#56555a",
                      strokeMiterlimit: "10",
                      strokeWidth: ".25px",
                    }}
                  />
                  <line
                    x1="246.72"
                    y1="208.16"
                    x2="246.82"
                    y2="209.21"
                    style={{
                      fill: "none",
                      stroke: "#56555a",
                      strokeMiterlimit: "10",
                      strokeWidth: ".25px",
                    }}
                  />
                  <line
                    x1="250.37"
                    y1="208.15"
                    x2="250.47"
                    y2="209.21"
                    style={{
                      fill: "none",
                      stroke: "#56555a",
                      strokeMiterlimit: "10",
                      strokeWidth: ".25px",
                    }}
                  />
                  <circle
                    cx="248.61"
                    cy="210.25"
                    r=".57"
                    style={{
                      fill: "none",
                      stroke: "#56555a",
                      strokeMiterlimit: "10",
                      strokeWidth: ".25px",
                    }}
                  />
                </g>
                <path
                  d="m248.64,209.95c-.27,2.17,1.03,6.35-.35,9.92-1.39,3.6-3.58,4.11-4.47,6.64-2.17,6.18,7.61,10.34,6.5,14.83-1.85,7.47-30.34,1.7-45.34,16.34-11.44,11.16-4.32,23.88-13.93,30.01-14.99,9.55-38.13-17.7-57.66-8.19-12.5,6.09-9.52,20.42-23.83,30"
                  style={{
                    fill: "none",
                    stroke: "#56555a",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: ".75p",
                  }}
                />
              </g>
            </svg>
          </div>
        </section>

        <section>
          <div className="frontpage_headers">
            <p>Få en alt-i-én betalingsløsning</p>
            <p>Tag imod alle de populære kortbrands</p>
            <p>Få pengene hurtigt på din konto</p>
          </div>
          <img
            src={process.env.PUBLIC_URL + "./images/logostrip-complete_1728x.webp"}
            alt="Cards you can pay with"
            width="1600"
            height="900"
          />
        </section>

        <section className="frontpage_how_to">
          <h2>Sådan kommer du i gang</h2>
          <div className="frontpage_how_to_grid">
            <article>
              <h3>1. Spar penge med den pakkeløsning, som passer dig</h3>
              <p>
                Vælg den pakkeløsning, der passer til dit behov. Vær særligt opmærksom på
                transaktionsgebyret. Hos Nets kan du spare penge ved at vælge den pakke, der passer
                dig. Du kan altid skifte pakke, hvis din omsætning ændrer sig!
              </p>
            </article>
            <article>
              <h3>2. Vælg den terminal, der passer til din forretning</h3>
              <p>
                Har du brug for en mobil eller stationær betalingsterminal? En mobil terminal giver
                dig mulighed for at tage imod betalinger, der hvor dine kunder er. En stationær
                terminal er til dig, hvor betalingen klares ved kassen.
              </p>
            </article>
            <article>
              <h3>3. Bestil online i dag - nemt og hurtigt. Vi sikrer, at du kommer godt i gang</h3>
              <p>
                Bestil produktet. Du vil herefter blive ringet op af én af vores specialister, der
                sikrer, at du kommer hurtigt og trygt i gang med den løsning og pris, der passer til
                din forretning. Det er derfor mange forretninger vælger os.
              </p>
            </article>
          </div>
        </section>

        <section className="frontpage_green_id">
          <h2>En grøn vision, som passer til din visuelle identitet</h2>
          <div className="frontpage_green_id_grid">
            <img
              src={process.env.PUBLIC_URL + "./images/payment_terminal.svg"}
              alt="Payment terminal"
              width="1600"
              height="900"
            />
            <article>
              <p>
                Natur og vores planet er vigtig for os alle, derfor har vi taget to tiltag, som skal
                være starten på et mere bæredygtig internetter. Derudover er vigtig for os, at de
                produkter de køber passer ind i din visuelle identitet, så det passer med resten af
                din virksomhed.
                <br />
                Som en del af de produkter du køber, går 1% af dit køb til at kompensere for det
                klimaaftryk produkter har og vil lave i fremtiden.
              </p>
              <ul>
                <li>Mulighed for at kompensere mere end 1% for at nutralisere mere CO2</li>
                <li>Juster nemt og hurtigt</li>
                <li>
                  Få gratis tilpasning af dit produkt med i købtet, hvis du kompensere mere end 5%
                </li>
              </ul>

              <div className="frontpage_green_id_buttons">
                <Button onClick={() => goTo("/green-goal")} label="Læs mere om vores mål"></Button>
                <Button onClick={() => goTo("/products")} label="Tilpas dit produkt nu"></Button>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
};
