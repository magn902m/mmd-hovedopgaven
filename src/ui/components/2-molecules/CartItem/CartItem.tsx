import React from "react";
import "./CartItem.scss";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../../../../contexts/ShoppingCartContex";
import WebshopItems from "../../../../data/terminals.json";
import InputLabel from "@mui/material/InputLabel";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart, increaseCartQuantity } = useShoppingCart();
  const item = WebshopItems.find((i) => i.id === id);
  if (item == null) return null;
  console.log(item.img);

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
          {/* <label htmlFor="item_amount">Antal</label>
          <input id="item_amount" type="text" /> */}

          <label htmlFor="uncontrolled-native">Antal</label>
          <select
            name="antal"
            id="uncontrolled-native"
            onChange={() => increaseCartQuantity(id)}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
          </select>
        </div>
      </div>
      <p className="table_body_total">{`${
        item.price * quantity
      } kr. pr. måned`}</p>
    </section>
  );
}
