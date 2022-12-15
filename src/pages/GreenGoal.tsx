import React from "react";
import { Helmet } from "react-helmet";

export const GreenGoal = () => {
  return (
    <>
      <Helmet>
        <title>
          Vi ønsker hos Nets at være mere bæredygtige, deres har vi en række grønne mål - Nets
          Denmark
        </title>
        <meta
          name="title"
          content="Vi ønsker hos Nets at være mere bæredygtige, deres har vi en række grønne mål - Nets Denmark"
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
          content="Vi ønsker hos Nets at være mere bæredygtige, deres har vi en række grønne mål - Nets Denmark"
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

      <main id="main" className="green_goals">
        <header className="green_goals_header">
          <h1>Vores grønne mål</h1>
          <p>
            Hos Nets er vi gået igang med at kæmpe for mere CO2 nutralisering, og du har som kunde
            hos os en stemme for en grønnere plant. Lad os gøre noget godt sammen, for os alle. Læs
            mere om <a href="#green_goals_points">hvad, hvorfor og hvordan</a> vi vil gør planeten
            grønne.
          </p>
        </header>

        <section id="green_goals_points" className="green_goals_points">
          <article>
            <div>
              <h2>Hvad</h2>
              <p>
                Vores nye low impact webshop er vores bud på et grønt digitalt bidrag til vores
                planet. Vi har været i stand til at reducere vores digitale CO2 aftryk med hele 70%
                i forhold til vores almindelig webshop
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="200"
              fill="currentColor"
              className="bi bi-tree"
              viewBox="0 0 16 16"
            >
              <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777l-3-4.5zM6.437 4.758A.5.5 0 0 0 6 4.5h-.066L8 1.401 10.066 4.5H10a.5.5 0 0 0-.424.765L11.598 8.5H11.5a.5.5 0 0 0-.447.724L12.69 12.5H3.309l1.638-3.276A.5.5 0 0 0 4.5 8.5h-.098l2.022-3.235a.5.5 0 0 0 .013-.507z" />
            </svg>
            {/* <img
              src={process.env.PUBLIC_URL + "./images/payment_terminal.svg"}
              alt="Payment terminal"
              width="1600"
              height="900"
            />*/}
          </article>

          <article>
            {/* <img
              src={process.env.PUBLIC_URL + "./images/payment_terminal.svg"}
              alt="Payment terminal"
              width="1600"
              height="900"
            /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="200"
              fill="currentColor"
              className="bi bi-wifi"
              viewBox="0 0 16 16"
            >
              <path d="M15.385 6.115a.485.485 0 0 0-.048-.736A12.443 12.443 0 0 0 8 3 12.44 12.44 0 0 0 .663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.717 2.164.204.148.489.13.668-.049z" />
              <path d="M13.229 8.271c.216-.216.194-.578-.063-.745A9.456 9.456 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.577 1.336c.205.132.48.108.652-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.472 6.472 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.408.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.611-.091l.015-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .708 0l.707-.707z" />
            </svg>
            <div>
              <h2>Hvorfor</h2>
              <p>
                Internettet er ansvarlig for 3,7% af verdens CO2 udledning. Dette skyldes, at vores
                digitale adfærd kræver enorme mængder elektricitet for at vedligeholde datalagring.
              </p>
            </div>
          </article>

          <article>
            <div>
              <h2>Hvordan</h2>
              <p>
                Ved at skifte vores leverandører på webhosting og database til nye leverandøre som
                kun gøre brug af grøn energi, har vi været i stand til at reducere vores nye sites
                CO2 aftryk
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="200"
              fill="currentColor"
              className="bi bi-people"
              viewBox="0 0 16 16"
            >
              <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
            </svg>
            {/* <img
              src={process.env.PUBLIC_URL + "./images/payment_terminal.svg"}
              alt="Payment terminal"
              width="1600"
              height="900"
            /> */}
          </article>
        </section>
      </main>
    </>
  );
};
