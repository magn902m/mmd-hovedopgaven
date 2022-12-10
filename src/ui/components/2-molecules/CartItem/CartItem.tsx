import React from "react";
import "./CartItem.scss";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../../../../contexts/ShoppingCartContex";
import WebshopItems from "../../../../data/terminals.json";
import { Button } from "../../1-atoms/Button";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart();
  const item = WebshopItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <section className="nets_cart_item">
      <div className="nets_cart_item_desc">
        <img src={item.img} alt="" />
        <div>
          <Link to={`/product/${item.id}`}>{item.name}</Link>
          <p>Til dig med månedlig kortomsætning over 90.000 kr.*</p>
          <a onClick={() => removeFromCart(item.id)}>Fjern</a>
        </div>
      </div>

      <div className="nets_cart_item_price">
        <p>{`${item.price} kr. pr. måned`}</p>
        <div className="item_amount">
          <Button onClick={() => decreaseCartQuantity(id)} label="-"></Button>

          <span className="fs-3">{quantity}</span>

          <Button onClick={() => increaseCartQuantity(id)} label="+"></Button>
        </div>
      </div>
      <p className="table_body_total">{`${
        item.price * quantity
      } kr. pr. måned`}</p>
    </section>
  );
}
