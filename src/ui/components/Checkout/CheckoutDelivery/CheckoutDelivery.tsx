import React from "react";
import { Link } from "react-router-dom";
import styles from "./CheckoutDelivery.module.scss";

export const CheckoutDelivery = () => {
  return (
    <article className="checkout_delivery">
      <form
        action=""
        className="update_account_form"
        //   ref={updateAccountFormRef}
        //   onSubmit={handleSubmit}
      >
        <legend>Levering</legend>
        <div id="email" className={styles.CheckoutDelivery_input}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Email" disabled required />
          <Link to="cart">Skift</Link>
        </div>

        <div id="send_to" className={styles.CheckoutDelivery_input}>
          <label htmlFor="send_to">Send til</label>
          <input type="text" id="send_to" name="send_to" placeholder="Send til" disabled required />
          <Link to="cart">Skift</Link>
        </div>

        <legend>Leveringsmetode</legend>
        <div id="delivery_metode">
          <label htmlFor="delivery_metode">Vælg levering</label>
          <div className={styles.CheckoutDelivery_input_radio}>
            <input
              type="radio"
              id="delivery_metode"
              name="delivery_metode"
              placeholder="Standard"
              required
            />
            <input
              type="text"
              id="radio_text"
              name="radio_text"
              placeholder="Standard"
              disabled
              required
            />
            {/* <span className={styles.CheckoutDelivery_delivery_radio_text}>
              <p> Standard</p>
            </span> */}

            <p>49,00 kr</p>
          </div>
        </div>

        <nav className={styles.CheckoutDelivery_buttons}>
          <Link to="/cart">
            <p> {"<"} Tilbage til information</p>
          </Link>
          <button className="primary_btn" type="submit">
            Gennemgå orden
          </button>
        </nav>
      </form>
    </article>
  );
};
