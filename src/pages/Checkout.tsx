import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CheckoutDelivery } from "../ui/components/3-organisms/Checkout/CheckoutDelivery/CheckoutDelivery";
import { CheckoutInformation } from "../ui/components/3-organisms/Checkout/CheckoutInformation/CheckoutInformation";
import { CheckoutOverview } from "../ui/components/3-organisms/Checkout/CheckoutOverview/CheckoutOverview";
import { ProgressBar } from "../ui/components/3-organisms/Checkout/ProgressBar/ProgressBar";

export const Checkout = () => {
  const [toggleCheckoutInformation, setToggleCheckoutInformation] = useState(true);
  const [toggleCheckoutDelivery, setToggleCheckoutDelivery] = useState(false);
  const [toggleCheckoutOverview, setToggleCheckoutOverview] = useState(false);

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
    <section className="checkout">
      <h1>Checkout</h1>
      <Link to="/cart">Tilbage til kurven</Link>
      <ProgressBar toggleCheckoutArr={toggleCheckoutArr} />
      {toggleCheckoutInformation && <CheckoutInformation toggleCheckoutArr={toggleCheckoutArr} />}
      {toggleCheckoutDelivery && <CheckoutDelivery toggleCheckoutArr={toggleCheckoutArr} />}
      {toggleCheckoutOverview && <CheckoutOverview toggleCheckoutArr={toggleCheckoutArr} />}
    </section>
  );
};
