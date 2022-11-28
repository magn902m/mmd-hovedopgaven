import React from "react";
import { Button } from "../ui/components/1-atoms/Button";
import Terminal from "../ui/Asset_1.png";
import Logos from "../ui/logostrip-complete_1728x.webp";

export const Frontpage = () => {
  return (
    <div className="frontpage">
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
          <Button label="Vælg pakkeløsning"></Button>
        </div>
        <div className="frontpage_hero_img">
          <img src={Terminal} alt="nets terminal" />
        </div>
      </section>

      <section>
        <div className="frontpage_headers">
          <h4>Få en alt-i-én betalingsløsning</h4>
          <h4>Tag imod alle de populære kortbrands</h4>
          <h4>Få pengene hurtigt på din konto</h4>
        </div>
        <img src={Logos} alt="" />
      </section>

      <section className="frontpage_how_to">
        <h3>Sådan kommer du i gang:</h3>
        <div className="frontpage_how_to_">
          <article>
            <h3>1. Spar penge med den pakkeløsning, som passer dig</h3>
            <p>
              Vælg den pakkeløsning, der passer til dit behov. Vær særligt
              opmærksom på transaktionsgebyret. Hos Nets kan du spare penge ved
              at vælge den pakke, der passer dig. Du kan altid skifte pakke,
              hvis din omsætning ændrer sig!
            </p>
          </article>
          <article>
            <h3>2. Vælg den terminal, der passer til din forretning</h3>
            <p>
              Har du brug for en mobil eller stationær betalingsterminal? En
              mobil terminal giver dig mulighed for at tage imod betalinger, der
              hvor dine kunder er. En stationær terminal er til dig, hvor
              betalingen klares ved kassen.
            </p>
          </article>
          <article>
            <h3>
              3. Bestil online i dag - nemt og hurtigt. Vi sikrer, at du kommer
              godt i gang
            </h3>
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
        <div className="frontpage_green_id_">
          <img src={Terminal} alt="" />
          <div>
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
                  <legend>
                    Få gratis tilpasning af dit produkt med i købtet, hvis du
                    kompensere mere end 5%
                  </legend>
                </li>
              </ul>
            </p>
            <div>
              <Button label="Læs mere om vores mål"></Button>
              <Button label="Tilpas dit produkt nu"></Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
