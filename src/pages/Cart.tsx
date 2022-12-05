import React from "react";
import { Link } from "react-router-dom";
import "../ui/styles/globals.scss";
import { Button } from "../ui/components/1-atoms/Button";
import { useShoppingCart } from "../contexts/ProductContex";
import { CartItem } from "../ui/components/2-molecules";
import { Terminals } from "./terminals";

export const Cart = () => {
  const { cartItems } = useShoppingCart();
  // const location = useLocation();
  // const cartItem = location.state;
  return (
    <main className="nets_cart">
      <header className="nets_cart_header">
        <h1>Din indkøbskurv</h1>
        <Link to={`/products`}>Tilbage til produkter</Link>
      </header>

      <section className="nets_cart_grid">
        <div className="nets_cart_grid_header">
          <h4 className="grid_header_product">Produkt</h4>
          <h4 className="grid_header_price">Pris</h4>
          <h4 className="grid_header_amount">Antal</h4>
          <h4 className="grid_header_total">I alt</h4>
        </div>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
        <div className="nets_cart_grid_footer">
          <p>I alt</p>
          <p>
            {cartItems.reduce((total, cartItem) => {
              const item = Terminals.find((i) => i.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0)}
            kr. pr. måned
          </p>
        </div>
      </section>

      <Button label="Fortsæt til bestilling"></Button>
    </main>
  );
};
