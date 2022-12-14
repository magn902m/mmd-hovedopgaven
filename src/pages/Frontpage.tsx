import React from "react";
import { Button } from "../ui/components/1-atoms/Button";
// import Terminal from "./images/asset_1.png";
// import Terminal from "../assets/images/payment_terminal.svg";
// import Logos from "./images/logostrip-complete_1728x.webp";
import { useNavigate } from "react-router-dom";

export const Frontpage = () => {
  const navigate = useNavigate();

  const goTo = (props: any) => {
    navigate(props);
  };

  return (
    <main className="frontpage">
      <section className="frontpage_hero">
        <div className="frontpage_hero_text">
          <h1>Betalingsterminaler lavet til dig</h1>
          <p>
            Hos Nets stræber vi os på at give tilbage - både til dig og naturen. Med vores
            betalingsterminaler får du alt, hvad du skal bruge til at tage imod betalinger med alle
            de kortbrands, dine kunder ønsker at betale med. Som noget nyt kan du skræddersy dem, så
            de passer præcist ind i din visuelle verden. Vi har selvfølgelig også tænkt på miljøet,
            og hvordan vi kan mindske vores CO2 aftryk.
          </p>
          <div className="frontpage_hero_buttons">
            <Button
              btnTypeStyle="primary_btn"
              onClick={() => goTo("/products")}
              label="Vælg pakkeløsning"
            />
            <Button
              className="secondary_btn"
              onClick={() => goTo("/green-goal")}
              // label="Læs om vores nye bæredygtige initiativer"
              label="Læs om vores grønne mål"
            />
          </div>
        </div>
        <div className="frontpage_hero_img">
          <img
            src={process.env.PUBLIC_URL + "./images/payment_terminal.svg"}
            alt="Payment terminal"
            width="1600"
            height="900"
          />
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
        <h2>Sådan kommer du i gang:</h2>
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
  );
};
