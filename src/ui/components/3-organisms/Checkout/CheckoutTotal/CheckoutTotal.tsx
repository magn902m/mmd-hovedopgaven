import React from "react";
import styles from "./CheckoutTotal.module.scss";

import { useShoppingCart } from "../../../../../contexts/ShoppingCartContex";
import PaymentTerminalImg from "../../../../../assets/images/asset_1.png";
import WebshopItems from "../../../../../data/terminals.json";

export const CheckoutTotal = ({ deliveryMetode }: any) => {
  const { cartItems } = useShoppingCart();

  const checkoutItems = cartItems.map((cartItem) => {
    const itemInfo = WebshopItems.find((i) => i.id === cartItem.id);
    const itemQuantity = cartItem.quantity;
    const item = { ...itemInfo, itemQuantity };

    return { ...item };
  });

  console.log(checkoutItems);

  const subtotal = checkoutItems.map((checkoutItem) => {
    const itemQuantity = checkoutItem.itemQuantity;
    const itemPrice: any = checkoutItem.price;
    const itemSubtotal = itemQuantity * itemPrice;
    return itemSubtotal;
  });
  console.log(subtotal);

  const calcSubtotal = subtotal.reduce((total, currentValue) => total + currentValue, 0);

  const taxPrice = Math.floor((calcSubtotal / 100) * 25);

  const deliveryPrice = deliveryMetode.price;

  const totalPrice = calcSubtotal + deliveryPrice + taxPrice;

  return (
    <section className={styles.CheckoutTotal_container}>
      {checkoutItems.map((checkoutItem, index) => (
        <div key={index} className={styles.CheckoutTotal_product_info}>
          {/* <img src={checkoutItem.img} alt="" /> */}
          <img src={PaymentTerminalImg} alt="" />
          <div>
            <p className={styles.CheckoutTotal_item_name}>{checkoutItem.name}</p>
            <p>{checkoutItem.desc}</p>
          </div>
          <p className="price">{checkoutItem.price} kr.</p>
        </div>
      ))}

      <hr />
      <div className={styles.CheckoutTotal_price_layout}>
        <p className={styles.CheckoutTotal_price_text}>Subtotal</p>
        <p className="price">{calcSubtotal} kr.</p>
      </div>
      <div className={styles.CheckoutTotal_price_layout}>
        <p className={styles.CheckoutTotal_price_text}>Levering</p>
        <p className="price">{deliveryPrice} kr.</p>
      </div>
      <div className={styles.CheckoutTotal_price_layout}>
        <p className={styles.CheckoutTotal_price_text}>Moms</p>
        <p className="price">{taxPrice} kr.</p>
      </div>
      <hr />
      <div className={styles.CheckoutTotal_price_layout}>
        <h4>I alt</h4>
        <p className="total_price">{totalPrice} kr.</p>
      </div>
    </section>
  );
};
