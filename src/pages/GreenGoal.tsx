import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Button } from "../ui/components/1-atoms/Button";
import Terminal from "../assets/images/asset_1.png";

export const GreenGoal = () => {
  return (
    <section className="greenGoal">
      <article style={{ margin: "3rem 8rem" }}>
        <h1>Vores grønne mål</h1>
        <p>
          Hos Nets får du alt, hvad du skal bruge til at tage imod betalinger med alle de
          kortbrands, dine kunder ønsker at betale med. Så kan du fokusere på det, du brænder for og
          er bedst til. Vi sørger for, at dine betalinger går hurtigt og sikkert igennem. Kom
          hurtigt i gang med at tage imod betalinger med én af vores pakkeløsninger.
        </p>
      </article>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={6}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt libero quasi sint
            a aut quae porro neque eos praesentium? Nulla eveniet iste tempore. Tenetur ea eligendi
            maiores rem eos!
          </p>
          <Button></Button>
        </Grid>
        <Grid xs={6}>
          <img src={Terminal} alt="" />
        </Grid>
        <Grid xs={6}>
          <img src="" alt="" />
        </Grid>
        <Grid xs={6}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, consectetur accusantium
            sapiente, quos hic aliquam ipsam mollitia quam, excepturi praesentium ipsum voluptatum?
            Cum, minus? Similique, aperiam. Officiis doloremque tempora consequuntur!
          </p>
        </Grid>
        <Grid xs={6}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt libero quasi sint
            a aut quae porro neque eos praesentium? Nulla eveniet iste tempore. Tenetur ea eligendi
            maiores rem eos!
          </p>
        </Grid>
        <Grid xs={6}>
          <img style={{ width: "100%" }} src={Terminal} alt="" />
        </Grid>
        <Grid xs={6}>
          <img src="" alt="" />
        </Grid>
        <Grid xs={6}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, consectetur accusantium
            sapiente, quos hic aliquam ipsam mollitia quam, excepturi praesentium ipsum voluptatum?
            Cum, minus? Similique, aperiam. Officiis doloremque tempora consequuntur!
          </p>
        </Grid>
      </Grid>
    </section>
  );
};
