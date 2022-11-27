import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { getDatabase, ref, set } from "firebase/database";

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
      const telefon = formPostRef.current.querySelector(".signup_form form [name=telefon]").value;
      const cvrNumber = formPostRef.current.querySelector(
        ".signup_form form [name=cvrNumber]"
      ).value;
      const adresse = formPostRef.current.querySelector(".signup_form form [name=adresse]").value;
      const companyName = formPostRef.current.querySelector(
        ".signup_form form [name=company_name]"
      ).value;
      const postData: any = {
        firstname,
        lastname,
        email,
        telefon,
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
      telefon: postData?.telefon,
      cvrNumber: postData?.cvrNumber,
      adresse: postData?.adresse,
      companyName: postData?.companyName,
      uid: postData.currentUserUid.user?.uid,
    });
  }

  return (
    <>
      <div className="signup_form">
        {error && error}
        <form action="" ref={formPostRef} onSubmit={handleSubmit}>
          <legend>Opret konto</legend>

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
          <div className="form_double">
            <div id="telefon">
              <label htmlFor="telefon">Telefon nr.</label>
              <p className="hint">Indtast din telefon nummer</p>
              <input type="number" id="telefon" name="telefon" placeholder="&nbsp;" required />
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
          <div id="adresse">
            <label htmlFor="adresse">Adresse</label>
            <p className="hint">Indtast firma adresse</p>
            <input type="text" id="adresse" name="adresse" placeholder="&nbsp;" required />
          </div>
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
          <button disabled={loading} type="submit">
            Opret konto
          </button>
          <Link to="/login">Har du allerede en bruger?</Link>
        </form>
      </div>
    </>
  );
};
