import React from "react";
import { ProductCard } from "../ui/components/1-atoms/ProductCard";
import { Terminals } from "./terminals";
import { useNavigate } from "react-router-dom";

export const Products = () => {
  const navigate = useNavigate();

  const goToSingleview = (e: any, id: any) => {
    console.log(id);
    const url = `/product/${id}`;
    console.log(url);
    return navigate(url);
  };
  return (
    <main className="nets_products">
      <h1>Products</h1>
      <section className="nets_products_overview">
        <div className="nets_products_overview_grid">
          {Terminals.map((t) => {
            return (
              <ProductCard
                img={t.img}
                title={t.name}
                text={t.desc}
                btnLabel={t.price}
                id={t.id}
                key={t.id}
                onClick={(e) => goToSingleview(e, t.id)}
              ></ProductCard>
            );
          })}
        </div>
      </section>
    </main>
  );
};
