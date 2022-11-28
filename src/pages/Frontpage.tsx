import React from "react";
import { Button } from "../ui/components/1-atoms/Button";
import Terminal from "../ui/Asset_1.png";
import Logos from "../ui/logostrip-complete_1728x.webp";
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
          <h2>Betalingsterminaler til alle typer af butikker</h2>
          <p>
            Hos Nets får du alt, hvad du skal bruge til at tage imod betalinger
            med alle de kortbrands, dine kunder ønsker at betale med. Så kan du
            fokusere på det, du brænder for og er bedst til. Vi sørger for, at
            dine betalinger går hurtigt og sikkert igennem. Kom hurtigt i gang
            med at tage imod betalinger med én af vores pakkeløsninger.
          </p>
          <Button
            onClick={() => goTo("/products")}
            label="Vælg pakkeløsning"
          ></Button>
        </div>
        <div className="frontpage_hero_img">
          <img src={Terminal} alt="nets terminal" />
        </div>
      </section>

      <section>
        <div className="frontpage_headers">
          <p>Få en alt-i-én betalingsløsning</p>
          <p>Tag imod alle de populære kortbrands</p>
          <p>Få pengene hurtigt på din konto</p>
        </div>
        <img src={Logos} alt="" />
      </section>

      <section className="frontpage_how_to">
        <h3>Sådan kommer du i gang:</h3>
        <div className="frontpage_how_to_grid">
          <article>
            <h4>1. Spar penge med den pakkeløsning, som passer dig</h4>
            <p>
              Vælg den pakkeløsning, der passer til dit behov. Vær særligt
              opmærksom på transaktionsgebyret. Hos Nets kan du spare penge ved
              at vælge den pakke, der passer dig. Du kan altid skifte pakke,
              hvis din omsætning ændrer sig!
            </p>
          </article>
          <article>
            <h4>2. Vælg den terminal, der passer til din forretning</h4>
            <p>
              Har du brug for en mobil eller stationær betalingsterminal? En
              mobil terminal giver dig mulighed for at tage imod betalinger, der
              hvor dine kunder er. En stationær terminal er til dig, hvor
              betalingen klares ved kassen.
            </p>
          </article>
          <article>
            <h4>
              3. Bestil online i dag - nemt og hurtigt. Vi sikrer, at du kommer
              godt i gang
            </h4>
            <p>
              Bestil produktet. Du vil herefter blive ringet op af én af vores
              specialister, der sikrer, at du kommer hurtigt og trygt i gang med
              den løsning og pris, der passer til din forretning. Det er derfor
              mange forretninger vælger os.
            </p>
          </article>
        </div>
      </section>

      <section className="frontpage_green_id">
        <h3>En grøn vision, som passer til din visuelle identitet</h3>
        <div className="frontpage_green_id_grid">
          <img src={Terminal} alt="" />
          <article>
            <p>
              Natur og vores planet er vigtig for os alle, derfor har vi taget
              to tiltag, som skal være starten på et mere bæredygtig
              internetter. Derudover er vigtig for os, at de produkter de køber
              passer ind i din visuelle identitet, så det passer med resten af
              din virksomhed.
              <br />
              Som en del af de produkter du køber, går 1% af dit køb til at
              kompensere for det klimaaftryk produkter har og vil lave i
              fremtiden.
              <ul>
                <li>
                  Mulighed for at kompensere mere end 1% for at nutralisere mere
                  CO2
                </li>
                <li>Juster nemt og hurtigt</li>
                <li>
                  Få gratis tilpasning af dit produkt med i købtet, hvis du
                  kompensere mere end 5%
                </li>
              </ul>
            </p>
            <div>
              <Button
                onClick={() => goTo("/green-goal")}
                label="Læs mere om vores mål"
              ></Button>
              <Button
                onClick={() => goTo("/products")}
                label="Tilpas dit produkt nu"
              ></Button>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};
