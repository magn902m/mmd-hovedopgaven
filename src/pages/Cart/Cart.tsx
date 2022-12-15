import React from "react";
import styles from "./Cart.module.scss";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../../contexts/ShoppingCartContex";
import { CartItem } from "../../ui/components/2-molecules";
import WebshopItems from "../../data/terminals.json";
import classNames from "classnames";

export const Cart = () => {
  const { cartItems } = useShoppingCart();

  return (
    <main id="main" className={styles.Cart_container}>
      <section className={styles.Cart_section}>
        <h1>Din indkøbskurv</h1>
        {cartItems.length > 0 ? <Link to={`/products`}>Tilbage til produkter</Link> : null}
      </section>
      {cartItems.length > 0 ? (
        <section className={styles.Cart_grid}>
          <div className={styles.Cart_grid_header}>
            <h4 className={styles.Cart_grid_product}>Produkt</h4>
            <h4 className={styles.Cart_grid_subtotal}>Total pris</h4>
          </div>

          <div className={styles.Cart_grid_body}>
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>

          <div className={styles.Cart_grid_footer}>
            <h4>I alt</h4>
            <h4 className={styles.Cart_grid_footer_total}>
              {cartItems.reduce((total, cartItem) => {
                const item = WebshopItems.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)}
              kr. pr. måned
            </h4>
          </div>
          <Link className={classNames(styles.Cart_primary_btn, "primary_btn")} to="/checkout">
            Fortsæt til bestilling
          </Link>
        </section>
      ) : (
        <section>
          <p>Din kurv er ligenu tom, gå til produkterne</p>

          <Link className="primary_btn" to="/products">
            Tilbage til produkter
          </Link>
        </section>
      )}
    </main>
  );
};
