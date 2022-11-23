import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Button } from "../ui/components/1-atoms/Button";
import Terminal from "../ui/Asset_1.png";

export const Products = () => {
  return (
    <section className="products">
      <h2>Products</h2>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <h3>Vælg den pakkeløsning, som passer til din forretning:</h3>
        <Grid xs={8}></Grid>
      </Grid>
    </section>
  );
};
