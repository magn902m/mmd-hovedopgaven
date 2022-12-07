import React from "react";
import { Link } from "react-router-dom";
import styles from "./CheckoutDelivery.module.scss";

export const CheckoutDelivery = ({ toggleCheckoutArr, setDeliveryMetode }: any) => {
  const handleSubmit = (e: any) => {
    toggleCheckoutArr.setToggleCheckoutDelivery(false);
    toggleCheckoutArr.setToggleCheckoutOverview(true);
    toggleCheckoutArr.setIsCurrent(3);
  };

  return (
    <article className={styles.CheckoutDelivery_container}>
      <form
        action=""
        className="update_account_form"
        //   ref={updateAccountFormRef}
        onSubmit={handleSubmit}
      >
        <legend>Levering</legend>
        <div id="email" className={styles.CheckoutDelivery_input}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Email" disabled />
          <Link to="cart">Skift</Link>
        </div>

        <div id="send_to" className={styles.CheckoutDelivery_input}>
          <label htmlFor="send_to">Send til</label>
          <input type="text" id="send_to" name="send_to" placeholder="Send til" disabled />
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
              onClick={() => setDeliveryMetode({ metode: "standard", price: 49 })}
            />
            <input type="text" id="radio_text" name="radio_text" placeholder="Standard" disabled />
            {/* <span className={styles.CheckoutDelivery_delivery_radio_text}>
              <p> Standard</p>
            </span> */}

            <p>49,00 kr</p>
          </div>
        </div>

        <nav className={styles.CheckoutDelivery_buttons}>
          <button
            onClick={() => {
              toggleCheckoutArr.setToggleCheckoutDelivery(false);
              toggleCheckoutArr.setToggleCheckoutInformation(true);
              toggleCheckoutArr.setIsCurrent(1);
            }}
          >
            <p> {"<"} Tilbage til information</p>
          </button>
          <button className="primary_btn" type="submit">
            Gennemgå orden
          </button>
        </nav>
      </form>
    </article>
  );
};
