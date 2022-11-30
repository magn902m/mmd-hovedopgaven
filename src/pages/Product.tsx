import React from "react";
import Terminal from "../assets/images/asset_1.png";
import { Terminals } from "./terminals";

import { Link, useParams } from "react-router-dom";

export const Product = () => {
  const params = useParams();
  console.log(params.produktid);

  const singleProduct = Terminals.filter((t) => {
    return t.id === params.produktid;
  })[0];
  return (
    <main className="nets_product">
      <section className="nets_product_view">
        <img src={Terminal} alt="" />
        <div className="nets_product_view_info">
          <h2>{singleProduct.name}</h2>
          <p>{singleProduct.desc}</p>
          <Link to="">Læs mere</Link>
          <div>
            <label>Tilføj eget logo</label>
            <input type="radio" />
          </div>{" "}
          <div>
            <label htmlFor="color">Vælg farve</label>
            <select name="color" id="color">
              <option value="volvo">Volvo</option>
            </select>
          </div>
        </div>
      </section>
    </main>
  );
};
