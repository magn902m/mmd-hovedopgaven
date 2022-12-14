import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { getDatabase, ref, set } from "firebase/database";
import { Button } from "../ui/components";
import { Helmet } from "react-helmet";

export const Signup = () => {
  const emailRef: any = useRef(null);
  const passwordRef: any = useRef(null);
  const passwordConfirmRef: any = useRef(null);
  const formPostRef: any = useRef(null);
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    console.log("submittedPost");

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Kodeordene er ikke ens");
    }

    try {
      setError("");
      setLoading(true);
      const currentUserUid = await signup(emailRef.current.value, passwordRef.current.value);

      const firstname = formPostRef.current.querySelector(
        ".signup_form form [name=firstname]"
      ).value;
      const lastname = formPostRef.current.querySelector(".signup_form form [name=lastname]").value;
      const email = formPostRef.current.querySelector(".signup_form form [name=email]").value;
      const phoneNum = formPostRef.current.querySelector(
        ".signup_form form [name=phone_num]"
      ).value;
      const phoneCode = formPostRef.current.querySelector(
        ".signup_form form [name=phone_code]"
      ).value;
      const cvrNumber = formPostRef.current.querySelector(
        ".signup_form form [name=cvr_number]"
      ).value;
      const adresse = formPostRef.current.querySelector(".signup_form form [name=adresse]").value;
      const companyName = formPostRef.current.querySelector(
        ".signup_form form [name=company_name]"
      ).value;
      const postData: any = {
        firstname,
        lastname,
        email,
        phoneNum,
        phoneCode,
        cvrNumber,
        adresse,
        companyName,
        currentUserUid,
      };
      writeUserData(postData);

      navigate("/account");
    } catch {
      setError("Kunne ikke oprette en konto");
    }
    setLoading(false);
  }

  function writeUserData(postData: any) {
    const db = getDatabase();
    set(ref(db, "users/" + postData.currentUserUid.user?.uid), {
      firstname: postData?.firstname,
      lastname: postData?.lastname,
      email: postData?.email,
      phoneNum: postData?.phoneNum,
      phoneCode: postData?.phoneCode,
      cvrNumber: postData?.cvrNumber,
      adresse: postData?.adresse,
      companyName: postData?.companyName,
      uid: postData.currentUserUid.user?.uid,
    });
  }

  return (
    <>
      <Helmet>
        <title>
          Opret en konto, for at få muligheden for at kunne tilpasse dit produkt, til din virksomhed
          - Nets Denmark
        </title>
        <meta
          name="title"
          content="Opret en konto, for at få muligheden for at kunne tilpasse dit produkt, til din virksomhed - Nets Denmark"
        />
        <meta
          name="description"
          content="Uanset om du sælger børnetøj, reparerer cykler eller serverer kaffe til morgentrætte kunder, har vi en terminal, der passer til dine behov."
        />
        <meta name="keyword" content="Nets betalingsløsninger bæredygtighed betalingsterminal" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mmd-hovedopgaven.web.app/" />
        <meta
          property="og:title"
          content="Opret en konto, for at få muligheden for at kunne tilpasse dit produkt, til din virksomhed - Nets Denmark"
        />
        <meta
          property="og:description"
          content="Uanset om du sælger børnetøj, reparerer cykler eller serverer kaffe til morgentrætte kunder, har vi en terminal, der passer til dine behov."
        />
        <meta
          property="og:image"
          content={process.env.PUBLIC_URL + "./images/payment_terminal.svg"}
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://mmd-hovedopgaven.web.app/" />
        <meta
          property="twitter:title"
          content="Tag imod betalinger når som helst, hvor som helstU+002d Nets Denmark"
        />
        <meta
          property="twitter:description"
          content="Uanset om du sælger børnetøj, reparerer cykler eller serverer kaffe til morgentrætte kunder, har vi en terminal, der passer til dine behov."
        />
        <meta
          property="twitter:image"
          content={process.env.PUBLIC_URL + "./images/payment_terminal.svg"}
        />
      </Helmet>

      <main id="#main">
        <section className="signup_form">
          {error && error}
          <h1>Opret konto</h1>

          <form action="" ref={formPostRef} onSubmit={handleSubmit}>
            <legend>Lav din konto</legend>
            <div className="form_double">
              <div id="firstname">
                <label htmlFor="firstname">Fornavn</label>
                <p className="hint">Indtast din fornavn</p>
                <input type="text" id="firstname" name="firstname" placeholder="&nbsp;" required />
              </div>
              <div id="lastname">
                <label htmlFor="lastname">Efternavn</label>
                <p className="hint">Indtast din efternavn</p>
                <input type="text" id="lastname" name="lastname" placeholder="&nbsp;" required />
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
                required
              />
            </div>

            <div className="form_double full_phone_num">
              <div className="phone_code">
                <label htmlFor="phone_code">Landekode</label>
                <p className="hint">Indtast kode</p>
                <select name="phone_code" id="phone_code" required>
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
                  required
                />
              </div>
            </div>
            <div id="adresse">
              <label htmlFor="adresse">Adresse</label>
              <p className="hint">Indtast firma adresse</p>
              <input type="text" id="adresse" name="adresse" placeholder="&nbsp;" required />
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
                  required
                />
              </div>
            </div>
            <div id="password">
              <label htmlFor="password">Kodeord</label>
              <p className="hint">Indtast din kodeord</p>
              <input
                type="password"
                id="password"
                name="password"
                ref={passwordRef}
                placeholder="&nbsp;"
                required
              />
            </div>
            <div id="password_confirm">
              <label htmlFor="password_confirm">Kodeords bekræftelse</label>
              <input
                type="password_confirm"
                id="password_confirm"
                name="password_confirm"
                ref={passwordConfirmRef}
                placeholder="&nbsp;"
                required
              />
            </div>
            <Button
              disabled={loading}
              type="submit"
              label="Opret konto"
              btnTypeStyle="primary_btn"
            />
            <Link to="/login">Har du allerede en bruger?</Link>
          </form>
        </section>
      </main>
    </>
  );
};
