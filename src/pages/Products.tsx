import React from "react";
import { ProductCard } from "../ui/components/1-atoms/ProductCard";
import WebshopItems from "../data/terminals.json";
import { useNavigate } from "react-router-dom";

export const Products = () => {
  const navigate = useNavigate();

  const goToSingleview = (e: any, id: any) => {
    const url = `/product/${id}`;

    return navigate(url);
  };
  return (
    <main className="nets_products">
      <header>
        <h1>Produkter</h1>
      </header>
      <section className="nets_products_overview">
        {/* <div className="nets_products_overview_grid"> */}
        {WebshopItems.map((t) => (
          <ProductCard
            img={t.img}
            title={t.name}
            text={t.desc}
            btnLabel={`${t.price} kr pr måned`}
            id={t.id}
            key={t.id}
            onClick={(e) => goToSingleview(e, t.id)}
          ></ProductCard>
        ))}
        {/* </div> */}
      </section>
    </main>
  );
};
