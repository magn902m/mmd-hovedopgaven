import React from "react";
import { Link } from "react-router-dom";
import "../ui/styles/globals.scss";
import { Button } from "../ui/components/1-atoms/Button";

export const Cart = () => {
  return (
    <main className="nets_cart">
      <header className="nets_cart_header">
        <h1>Din indkøbskurv</h1>
        <Link to="/products">Tilbage til produckter</Link>
      </header>

      <section className="nets_cart_grid">
        <div className="nets_cart_grid_header">
          <h4 className="grid_header_product">Produkt</h4>
          <h4 className="grid_header_price">Pris</h4>
          <h4 className="grid_header_amount">Antal</h4>
          <h4 className="grid_header_total">I alt</h4>
        </div>
        <div className="nets_cart_grid_body">
          <td>Billede</td>
          <div className="nets_cart_grid_product_desc">
            <Link to="/products">
              Small: Få fast lav månedlig ydelse. Transaktionsgebyr fra 0,89%
            </Link>

            <p>Til dig med månedlig kortomsætning over 90.000 kr.*</p>
            <Link to="/products">Tilbage til produkter</Link>
          </div>
          <div>
            <p>459,00 kr. pr. måned</p>
            <div>
              <p>Antal</p>
              <input type="text" />
            </div>
          </div>
          <p className="table_body_total">459,00 kr. pr. måned</p>
        </div>
        <div className="nets_cart_grid_footer">
          <p>Subtotal</p>
          <p>459,00 kr. pr. måned</p>
        </div>
      </section>

      <Button label="Fortsæt til bestilling"></Button>
    </main>
  );
};
