import React from "react";
import { Link } from "react-router-dom";
import styles from "./CheckoutInformation.module.scss";

export const CheckoutInformation = ({ toggleCheckoutArr }: any) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    toggleCheckoutArr.setToggleCheckoutInformation(false);
    toggleCheckoutArr.setToggleCheckoutDelivery(true);
    toggleCheckoutArr.setIsCurrent(2);
  };

  return (
    <article className={styles.CheckoutInformation_container}>
      <form
        action=""
        className="update_account_form"
        //   ref={updateAccountFormRef}
        onSubmit={handleSubmit}
      >
        <legend>Kontaktinformation</legend>
        <div id="email">
          <label htmlFor="email">Email</label>
          <p className="hint">Indtast din email</p>
          <input
            type="email"
            id="email"
            name="email"
            //   ref={emailRef}
            placeholder="&nbsp;"
          />
        </div>

        <legend>Leveringsadresse</legend>
        <div id="region">
          <label htmlFor="region">Region</label>
          <p className="hint">Hvilken region skal levering forgå</p>
          <select name="region" id="region">
            <option value="nordjylland">Nordjylland</option>
            <option value="midtjylland">Midtjylland</option>
            <option value="syddanmark">Syddanmark</option>
            <option value="sjaelland">Sjælland</option>
            <option value="hovedstaden">Hovedstaden</option>
          </select>
        </div>
        <div className="form_double">
          <div id="firstname">
            <label htmlFor="firstname">Fornavn</label>
            <p className="hint">Indtast din fornavn</p>
            <input type="text" id="firstname" name="firstname" placeholder="&nbsp;" />
          </div>
          <div id="lastname">
            <label htmlFor="lastname">Efternavn</label>
            <p className="hint">Indtast din efternavn</p>
            <input type="text" id="lastname" name="lastname" placeholder="&nbsp;" />
          </div>
        </div>

        <div className="form_double">
          <div className="phone_code">
            <label htmlFor="phone_code">Landekode</label>
            <p className="hint">Indtast kode</p>
            <select name="phone_code" id="phone_code">
              <option value="45">+45</option>
              <option value="47">+47</option>
              <option value="00">+00</option>
            </select>
          </div>
          <div className="phone_num">
            <label htmlFor="phone_num">Telefon nr.</label>
            <p className="hint">Indtast din telefon nummer</p>
            <input
              type="tel"
              id="phone_num"
              name="phone_num"
              inputMode="tel"
              pattern="[0-9]+"
              // maxLength="10" minLength="8"
              placeholder="&nbsp;"
            />
          </div>
        </div>
        <div id="adresse">
          <label htmlFor="adresse">Adresse</label>
          <p className="hint">Indtast firma adresse</p>
          <input type="text" id="adresse" name="adresse" placeholder="&nbsp;" />
        </div>

        <div className="form_double">
          <div id="company_name">
            <label htmlFor="company_name">Firmanavn</label>
            <p className="hint">Indtast firmanavn</p>
            <input type="text" id="company_name" name="company_name" placeholder="&nbsp;" />
          </div>
          <div id="cvr_number">
            <label htmlFor="cvr_number">CVR nr.</label>
            <p className="hint">Indtast firma CVR nummer</p>
            <input type="number" id="cvr_number" name="cvr_number" placeholder="&nbsp;" />
          </div>
        </div>

        <div className="form_double">
          <div id="zip_code">
            <label htmlFor="zip_code">Postnr.</label>
            <p className="hint">Indtast firmaets postnummer</p>
            <input type="number" id="zip_code" name="zip_code" placeholder="&nbsp;" />
          </div>
          <div id="city">
            <label htmlFor="city">By</label>
            <p className="hint">Indtast firmas by</p>
            <input type="text" id="city" name="city" placeholder="&nbsp;" />
          </div>
        </div>

        <nav className={styles.CheckoutInformation_buttons}>
          <Link to="/cart">
            <p> {"<"} Returner til kurven?</p>
          </Link>
          <button className="primary_btn" type="submit">
            Fortsæt til levering
          </button>
        </nav>
      </form>
    </article>
  );
};
