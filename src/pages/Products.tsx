import React from "react";
import { ProductCard } from "../ui/components/1-atoms/ProductCard";
import Terminal from "../assets/images/asset_1.png";

export const Products = () => {
  return (
    <main className="nets_products">
      <h1>Products</h1>

      <section className="nets_products_overview">
        <div className="nets_products_overview_grid">
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
        </div>
      </section>
    </main>
  );
};
