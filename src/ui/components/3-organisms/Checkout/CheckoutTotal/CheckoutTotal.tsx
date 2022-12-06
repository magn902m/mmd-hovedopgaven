import React from "react";
import styles from "./CheckoutTotal.module.scss";

import { useShoppingCart } from "../../../../../contexts/ShoppingCartContex";
import PaymentTerminalImg from "../../../../../assets/images/asset_1.png";

export const CheckoutTotal = () => {
  const { cartItems } = useShoppingCart();

  console.log(cartItems);

  return (
    <>
      <div className={styles.CheckoutTotal_product_info}>
        <img src={PaymentTerminalImg} alt="" />
        <div>
          <h5>Small</h5>
          <p>Stationær</p>
        </div>
        <p className="price">459,00 kr.</p>
      </div>
      <hr />
      <div className={styles.CheckoutTotal_price_layout}>
        <h5>Subtotal</h5>
        <p className="price">459,00 kr.</p>
      </div>
      <div className={styles.CheckoutTotal_price_layout}>
        <h5>Levering</h5>
        <p className="price">Ukendt</p>
      </div>
      <div className={styles.CheckoutTotal_price_layout}>
        <h5>Moms</h5>
        <p className="price">114,75 kr.</p>
      </div>
      <hr />
      <div className={styles.CheckoutTotal_price_layout}>
        <h4>I alt</h4>
        <p className="total_price">573,75 kr.</p>
      </div>
    </>
  );
};
