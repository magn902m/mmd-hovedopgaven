import React from "react";
import { Link } from "react-router-dom";
import { CheckoutDelivery } from "../ui/components/Checkout/CheckoutDelivery/CheckoutDelivery";
import { CheckoutInformation } from "../ui/components/Checkout/CheckoutInformation/CheckoutInformation";
import { CheckoutOverview } from "../ui/components/Checkout/CheckoutOverview/CheckoutOverview";

export const Checkout = () => {
  return (
    <section className="checkout">
      <h1>Checkout</h1>
      <Link to="/cart">Tilbage til kurven</Link>
      {/* <CheckoutInformation /> */}
      {/* <CheckoutDelivery /> */}
      <CheckoutOverview />
    </section>
  );
};
