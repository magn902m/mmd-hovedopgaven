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
            Hos Nets får du alt, hvad du skal bruge til at tage imod betalinger med alle de
            kortbrands, dine kunder ønsker at betale med. Så kan du fokusere på det, du brænder for
            og er bedst til. Vi sørger for, at dine betalinger går hurtigt og sikkert igennem. Kom
            hurtigt i gang med at tage imod betalinger med én af vores pakkeløsninger.
          </p>
        </header>

        <section className="green_goals_points">
          <article>
            <div>
              <h2>Hvad</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt libero quasi
                sint a aut quae porro neque eos praesentium? Nulla eveniet iste tempore. Tenetur ea
                eligendi maiores rem eos!
              </p>
            </div>
            <img
              src={process.env.PUBLIC_URL + "./images/payment_terminal.svg"}
              alt="Payment terminal"
              width="1600"
              height="900"
            />{" "}
          </article>

          <article>
            <img
              src={process.env.PUBLIC_URL + "./images/payment_terminal.svg"}
              alt="Payment terminal"
              width="1600"
              height="900"
            />{" "}
            <div>
              <h2>Hvorfor</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, consectetur accusantium
                sapiente, quos hic aliquam ipsam mollitia quam, excepturi praesentium ipsum
                voluptatum? Cum, minus? Similique, aperiam. Officiis doloremque tempora
                consequuntur!
              </p>
            </div>
          </article>

          <article>
            <div>
              <h2>Hvordan</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, consectetur accusantium
                sapiente, quos hic aliquam ipsam mollitia quam, excepturi praesentium ipsum
                voluptatum? Cum, minus? Similique, aperiam. Officiis doloremque tempora
                consequuntur!
              </p>
            </div>
            <img
              src={process.env.PUBLIC_URL + "./images/payment_terminal.svg"}
              alt="Payment terminal"
              width="1600"
              height="900"
            />{" "}
          </article>
        </section>
      </main>
    </>
  );
};
