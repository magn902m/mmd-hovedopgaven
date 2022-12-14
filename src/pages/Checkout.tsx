import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CheckoutDelivery } from "../ui/components";
import { CheckoutInformation } from "../ui/components";
import { CheckoutOverview } from "../ui/components";
import { CheckoutTotal } from "../ui/components/3-organisms/Checkout/CheckoutTotal/CheckoutTotal";
import { ProgressBar } from "../ui/components";

export const Checkout = () => {
  const [toggleCheckoutInformation, setToggleCheckoutInformation] = useState(true);
  const [toggleCheckoutDelivery, setToggleCheckoutDelivery] = useState(false);
  const [toggleCheckoutOverview, setToggleCheckoutOverview] = useState(false);
  const [deliveryMetode, setDeliveryMetode] = useState({ metode: "standard", price: 49 });

  const [isCurrent, setIsCurrent] = useState(1);

  const toggleCheckoutArr = {
    isCurrent,
    setIsCurrent,
    toggleCheckoutInformation,
    setToggleCheckoutInformation,
    toggleCheckoutDelivery,
    setToggleCheckoutDelivery,
    toggleCheckoutOverview,
    setToggleCheckoutOverview,
  };

  return (
    <main id="main">
      <section className="checkout">
        <section className="checkout_header">
          <h1>Checkout</h1>
          <Link to="/cart">Tilbage til kurven</Link>
        </section>
        <ProgressBar toggleCheckoutArr={toggleCheckoutArr} />
        <article className="checkout_information">
          {toggleCheckoutInformation && (
            <CheckoutInformation toggleCheckoutArr={toggleCheckoutArr} />
          )}
          {toggleCheckoutDelivery && (
            <CheckoutDelivery
              toggleCheckoutArr={toggleCheckoutArr}
              setDeliveryMetode={setDeliveryMetode}
            />
          )}
          {toggleCheckoutOverview && <CheckoutOverview toggleCheckoutArr={toggleCheckoutArr} />}

          <CheckoutTotal deliveryMetode={deliveryMetode} />
        </article>
      </section>
    </main>
  );
};
