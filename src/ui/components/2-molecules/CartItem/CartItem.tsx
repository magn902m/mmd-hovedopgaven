import React from "react";
import "./CartItem.scss";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../../../../contexts/ProductContex";
import { Terminals } from "../../../../pages/terminals";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = Terminals.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <section className="nets_cart_item">
      <img src="" alt="" />
      <div className="nets_cart_item_desc">
        <Link to="/products">{item.name}</Link>
        <p>Til dig med månedlig kortomsætning over 90.000 kr.*</p>
        <a onClick={() => removeFromCart(item.id)}>Fjern</a>
      </div>

      <div>
        <p>{`${item.price} kr. pr. måned`}</p>
        <div>
          <label htmlFor="">Antal</label>
          <input type="text" />
        </div>
      </div>
      <p className="table_body_total">{item.price * quantity}</p>
    </section>
  );
}
