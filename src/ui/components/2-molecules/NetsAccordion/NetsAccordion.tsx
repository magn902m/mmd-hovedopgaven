import * as React from "react";
import "./NetsAccordion.scss";
import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const NetsAccordion = () => {
  return (
    <div className="accordian">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p>Information om pakken</p>
        </AccordionSummary>
        <AccordionDetails>
          <p>Information omkring pakke og alle fordelene:</p>

          <br />

          <ul>
            <li>
              <p>Transaktionsgebyr: Fra 0,69 % pr. transaktion.</p>
            </li>
            <li>
              <p>Analytics PRO: Sammenlign din forretning med andre i din branche.</p>
            </li>
            <li>
              <p>Abonnement på bonruller: Modtag 20 bonruller i kvartalet</p>
            </li>
            <li>
              <p>
                Udbetaling: Hver anden dag på alle de internationale kortbrands – og med Dankort er
                der daglig udbetaling
              </p>
            </li>
            <li>
              <p>Kundeservice: 24/7</p>
            </li>
            <li>
              <p>Ombytningsservice på din terminal: På din adresse inden for 4 timer.</p>
            </li>
            <li>
              <p>
                Gratis kundeindsigt: App og portal med adgang til dine salgs- og transaktionsdata
              </p>
            </li>
            <li>
              <p>
                Indløsningsaftale der giver dig mulighed for at modtage betalinger med de mest
                populære kort
              </p>
            </li>
            <li>
              <p>Bindingsperiode: 36 måneder</p>
            </li>
          </ul>
          <p>
            *Intervaller er vejledende og afhænger af dit specifikke kortmix – og Dankort er
            særskilt
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <p>Hvad vil du gøre for klimaet?</p>
        </AccordionSummary>
        <AccordionDetails>
          <p>Gør noget godt for os alle:</p>
          <p>
            Som en del af de produkter du køber, går 1% af dit køb til at kompensere for det
            klimaaftryk produkter har og vil lave i fremtiden. Se mere omkring
            <Link to="/green-goal">vores grønne mål</Link> .
          </p>

          <ul>
            <li>
              <p>Mulighed for at kompensere mere end 1% for at nutralisere mere CO2</p>
            </li>
            <li>
              <p>Juster nemt og hurtigt</p>
            </li>
            <li>
              <p>Få gratis tilpasning af dit produkt med i købet, hvis du kompensere mere end 5%</p>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <p>Tilpas efter din visuelle identitet</p>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Det er vigtig for os, at de produkter de køber passer ind i din visuelle identitet, så
            det passer med resten af din virksomhed. Derfor har du nu mulighed for at lave en række
            ændringer til dine produkter.
          </p>
          <br />
          <p>
            Hvis du kompensere for 5% eller mere for at kompensere for dit CO2 aftryk, får man
            gratis tilpasning af dit produkt med i købtet
          </p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
