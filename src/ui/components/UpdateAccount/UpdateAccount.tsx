import React, { useRef, useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { getDatabase, ref, update } from "firebase/database";
import { ColorPicker } from "./ColorPicker/ColorPicker";
import classNames from "classnames";
import styles from "./UpdateAccount.module.scss";

export const UpdateAccount = ({ profilData }: any) => {
  const updateAccountFormRef: any = useRef(null);
  const emailRef: any = useRef(null);
  const passwordRef: any = useRef(null);
  const passwordConfirmRef: any = useRef(null);
  const { currentUser, updateEmail, updatePassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [pickedColor, setPickedColor] = useState("#005776");

  async function handleSubmit(e: any) {
    console.log("submittedGet and resetPassword");

    e.preventDefault();

    const firstname = updateAccountFormRef.current.querySelector(
      ".update_account_form  [name=firstname]"
    ).value;
    const lastname = updateAccountFormRef.current.querySelector(
      ".update_account_form  [name=lastname]"
    ).value;
    const email = updateAccountFormRef.current.querySelector(
      ".update_account_form  [name=email]"
    ).value;
    const phoneNum = updateAccountFormRef.current.querySelector(
      ".update_account_form  [name=phone_num]"
    ).value;
    const phoneCode = updateAccountFormRef.current.querySelector(
      ".update_account_form  [name=phone_code]"
    ).value;
    const cvrNumber = updateAccountFormRef.current.querySelector(
      ".update_account_form  [name=cvr_number]"
    ).value;
    const adresse = updateAccountFormRef.current.querySelector(
      ".update_account_form  [name=adresse]"
    ).value;
    const companyName = updateAccountFormRef.current.querySelector(
      ".update_account_form  [name=company_name]"
    ).value;

    const postData: any = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      phoneNum: phoneNum,
      phoneCode: phoneCode,
      cvrNumber: cvrNumber,
      adresse: adresse,
      companyName: companyName,
      color: pickedColor,
      uid: profilData.uid,
    };

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Kodeordene er ikke ens");
    }

    const promises = [];
    setLoading(true);
    setError("");

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    promises.push(updateAccountData(postData));

    function updateAccountData(postData: any) {
      const db = getDatabase();
      const updates: any = {};
      updates["/users/" + postData.uid + "/"] = postData;

      return update(ref(db), updates);
    }

    Promise.all(promises)
      .then(() => {
        setMessage("Kontoen er opdateret, reload siden");
        setPickedColor(pickedColor);
      })
      .catch(() => {
        setError("Kontoen kunne ikke opdateres");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const handlePickedColor = (e: any) => {
    setPickedColor(e.target.value);
  };

  return (
    <>
      <div className="card">
        {error && error}
        {message && message}
        <form
          action=""
          className="update_account_form"
          ref={updateAccountFormRef}
          onSubmit={handleSubmit}
        >
          <legend>Opdater profil</legend>
          <div className="form_double">
            <div id="firstname">
              <label htmlFor="firstname">Fornavn</label>
              <p className="hint">Indtast din fornavn</p>
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="&nbsp;"
                defaultValue={profilData?.firstname}
                required
              />
            </div>
            <div id="lastname">
              <label htmlFor="lastname">Efternavn</label>
              <p className="hint">Indtast din efternavn</p>
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="&nbsp;"
                defaultValue={profilData?.lastname}
                required
              />
            </div>
          </div>
          <div id="email">
            <label htmlFor="email">Email</label>
            <p className="hint">Indtast din email</p>
            <input
              type="email"
              id="email"
              name="email"
              ref={emailRef}
              placeholder="&nbsp;"
              defaultValue={profilData?.email}
              required
            />
          </div>

          <div className={classNames("form_double", styles.UpdateAccountFullPhoneNum)}>
            <div className="phone_code">
              <label htmlFor="phone_code">Landekode</label>
              <p className="hint">Indtast kode</p>
              <select name="phone_code" id="phone_code" required>
                <option value={profilData?.phoneCode}>{profilData?.phoneCode}</option>
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
                defaultValue={profilData?.phoneNum}
                // maxLength="10" minLength="8"
                placeholder="&nbsp;"
                required
              />
            </div>
          </div>
          <div id="adresse">
            <label htmlFor="adresse">Adresse</label>
            <p className="hint">Indtast firma adresse</p>
            <input
              type="text"
              id="adresse"
              name="adresse"
              placeholder="&nbsp;"
              defaultValue={profilData?.adresse}
              required
            />
          </div>

          <div className="form_double">
            <div id="company_name">
              <label htmlFor="company_name">Firmanavn</label>
              <p className="hint">Indtast firmanavn</p>
              <input
                type="text"
                id="company_name"
                name="company_name"
                placeholder="&nbsp;"
                defaultValue={profilData?.companyName}
                required
              />
            </div>
            <div id="cvr_number">
              <label htmlFor="cvr_number">CVR nr.</label>
              <p className="hint">Indtast firma CVR nummer</p>
              <input
                type="number"
                id="cvr_number"
                name="cvr_number"
                placeholder="&nbsp;"
                defaultValue={profilData?.cvrNumber}
                required
              />
            </div>
          </div>

          <hr />

          <legend>Visuel identitet</legend>
          <div id="form-color">
            <label htmlFor="colorText">Farve</label>
            <p className="hint">Vælg en farve, som dit produkt skal have</p>
            <ColorPicker
              onChange={handlePickedColor}
              value={pickedColor}
              profilColor={profilData?.color}
            />
          </div>

          <div id="file">
            <label htmlFor="file">Logo eller icon</label>
            <p className="hint">Upload et logo eller icon, som skal være på produkt</p>
            <input type="file" id="file" name="file" placeholder="&nbsp;" />
          </div>

          <hr />

          <legend>Nultil kodeord</legend>
          <div id="password">
            <label htmlFor="password">Kodeord</label>
            <p className="hint">Indtast nyt kodeord</p>
            <input
              type="password"
              id="password"
              name="password"
              ref={passwordRef}
              placeholder="Lad stå tomt for at bevare det samme"
            />
          </div>
          <div id="password_confirm">
            <label htmlFor="password_confirm">Kodeords bekræftelse</label>
            <p className="hint">Indtast nyt kodeord</p>
            <input
              type="password_confirm"
              id="password_confirm"
              name="password_confirm"
              ref={passwordConfirmRef}
              placeholder="Lad stå tomt for at bevare det samme"
            />
          </div>

          <button disabled={loading} className="primary_btn" type="submit">
            Update konto
          </button>
        </form>
      </div>
    </>
  );
};
