import React from "react";
import Grid from "@mui/material/Unstable_Grid2";

export const Frontpage = () => {
  return (
    <section className="frontpage">
      <Grid container spacing={2}>
        <Grid xs={8}>
          <h2>Betalingsterminaler til alle typer af butikker</h2>
          <p>
            Hos Nets får du alt, hvad du skal bruge til at tage imod betalinger
            med alle de kortbrands, dine kunder ønsker at betale med. Så kan du
            fokusere på det, du brænder for og er bedst til. Vi sørger for, at
            dine betalinger går hurtigt og sikkert igennem. Kom hurtigt i gang
            med at tage imod betalinger med én af vores pakkeløsninger.
          </p>
        </Grid>
        <Grid xs={4}>
          <img>xs=4</img>
        </Grid>
      </Grid>
    </section>
  );
};
