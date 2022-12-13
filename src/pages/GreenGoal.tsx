import React from "react";
import Terminal from "../assets/images/asset_1.png";

export const GreenGoal = () => {
  return (
    <main className="green_goals">
      <header className="green_goals_header">
        <h1>Vores grønne mål</h1>
        <p>
          Hos Nets får du alt, hvad du skal bruge til at tage imod betalinger
          med alle de kortbrands, dine kunder ønsker at betale med. Så kan du
          fokusere på det, du brænder for og er bedst til. Vi sørger for, at
          dine betalinger går hurtigt og sikkert igennem. Kom hurtigt i gang med
          at tage imod betalinger med én af vores pakkeløsninger.
        </p>
      </header>

      <section className="green_goals_points">
        <article>
          <div>
            <h2>Hvad</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
              deserunt libero quasi sint a aut quae porro neque eos praesentium?
              Nulla eveniet iste tempore. Tenetur ea eligendi maiores rem eos!
            </p>
          </div>

          <img src={Terminal} alt="" />
        </article>

        <article>
          <img src={Terminal} alt="" />
          <div>
            <h2>Hvorfor</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
              consectetur accusantium sapiente, quos hic aliquam ipsam mollitia
              quam, excepturi praesentium ipsum voluptatum? Cum, minus?
              Similique, aperiam. Officiis doloremque tempora consequuntur!
            </p>
          </div>
        </article>

        <article>
          <div>
            <h2>Hvordan</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
              consectetur accusantium sapiente, quos hic aliquam ipsam mollitia
              quam, excepturi praesentium ipsum voluptatum? Cum, minus?
              Similique, aperiam. Officiis doloremque tempora consequuntur!
            </p>
          </div>
          <img src={Terminal} alt="" />
        </article>
      </section>
    </main>
  );
};
