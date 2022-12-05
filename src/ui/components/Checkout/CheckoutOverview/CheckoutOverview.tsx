import React from "react";
import { Link } from "react-router-dom";
import styles from "./CheckoutOverview.module.scss";
import { useNavigate } from "react-router-dom";

export const CheckoutOverview = ({ toggleCheckoutArr }: any) => {
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    navigate("/");
  };

  return (
    <article className="checkout_overview">
      <form
        action=""
        className="update_account_form"
        //   ref={updateAccountFormRef}
        onSubmit={handleSubmit}
      >
        <legend>Levering og oplysninger</legend>
        <div id="email" className={styles.CheckoutOverview_input}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Email" disabled />
          <Link to="cart">Skift</Link>
        </div>

        <div id="send_to" className={styles.CheckoutOverview_input}>
          <label htmlFor="send_to">Send til</label>
          <input type="text" id="send_to" name="send_to" placeholder="Send til" disabled />
          <Link to="cart">Skift</Link>
        </div>

        <div id="delivery_metode">
          <label htmlFor="delivery_metode">Metode</label>
          <input
            type="text"
            id="radio_text"
            name="radio_text"
            placeholder="Standard - 49,00 kr."
            disabled
          />
        </div>

        <legend>Oversigt</legend>
        <div id="payment" className={styles.CheckoutOverview_input}>
          <label htmlFor="payment">Alle tranaktioner er skire og krypterede.</label>
          <input
            type="text"
            id="payment"
            name="payment"
            placeholder="Betaling via fakture"
            disabled
          />
        </div>

        <legend>Faktureringsadresse</legend>
        <div id="payment" className={styles.CheckoutOverview_input}>
          <label htmlFor="payment">
            Vælg den adresse, der matcher dit kort eller betalingsmetode.
          </label>
          <div className={styles.CheckoutOverview_input_radio}>
            <input
              type="radio"
              id="delivery_metode"
              name="delivery_metode"
              placeholder="Standard"
            />
            <input
              type="text"
              id="payment"
              name="payment"
              placeholder="Samme adresse som leveringsadressen"
              disabled
            />
          </div>
        </div>

        <div id="delivery_metode">
          <div className={styles.CheckoutOverview_input_radio}>
            <input
              type="radio"
              id="delivery_metode"
              name="delivery_metode"
              placeholder="Standard"
            />
            <input
              type="text"
              id="payment"
              name="payment"
              placeholder="Brug en anden faktureringsadresse"
              disabled
            />
          </div>
        </div>

        <nav className={styles.CheckoutOverview_buttons}>
          <button
            onClick={() => {
              toggleCheckoutArr.setToggleCheckoutOverview(false);
              toggleCheckoutArr.setToggleCheckoutDelivery(true);
            }}
          >
            <p> {"<"} Tilbage til levering</p>
          </button>
          <button className="primary_btn" type="submit">
            Fuldfør ordren
          </button>
        </nav>
      </form>
    </article>
  );
};
