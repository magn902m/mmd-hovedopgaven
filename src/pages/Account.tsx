import React from "react";

import { UpdateAccount } from "../ui/components/UpdateAccount/UpdateAccount";
import { LogoutAccount } from "../ui/components/LogoutAccount/LogoutAccount";
import { CustomizationAccount } from "../ui/components/CustomizationAccount/CustomizationAccount";

export const Account = () => {
  return (
    <section className="account">
      <h2>Din konto</h2>

      <LogoutAccount />
      <UpdateAccount />
      <CustomizationAccount />
    </section>
  );
};
