import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { ProductCard } from "../ui/components/1-atoms/ProductCard";
import Terminal from "../ui/Asset_1.png";

export const Products = () => {
  return (
    <section className="products">
      <h2>Products</h2>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <h3>Vælg den pakkeløsning, som passer til din forretning:</h3>
        <ProductCard
          img={Terminal}
          title="Large: Spar penge på lave gebyrer. Transaktionsgebyr fra 0,69%"
          text="Til dig med månedlig kortomsætning under 35.000 kr.*"
          btnLabel="Månedpris fra 299 kr."
        ></ProductCard>
        <ProductCard
          img={Terminal}
          title="Medium: Få lave begyr og en udvidet servicepakke. Transaktionsgebyr fra 0,79%"
          text="Til dig med månedlig kortomsætning mellem 35.000-90.000 kr.*"
          btnLabel="Månedpris fra 349 kr."
        ></ProductCard>
        <ProductCard
          img={Terminal}
          title="Small: Få fest lav månedlig ydelse. Transaktionsgebyr fra 0,89%"
          text="Til dig med månedlig kortomsætning over 90.000 kr.*"
          btnLabel="Månedpris fra 459 kr."
        ></ProductCard>
      </Grid>
    </section>
  );
};
