import React, { useRef } from "react";
import { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export const UpdateAccount = () => {
  const emailRef: any = useRef(null);
  const passwordRef: any = useRef(null);
  const passwordConfirmRef: any = useRef(null);
  const { currentUser, updateEmail, updatePassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e: any) {
    e.preventDefault();
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

    Promise.all(promises)
      .then(() => {
        // navigate("/account");
        setMessage("Kontoen er opdateret");
      })
      .catch(() => {
        setError("Kontoen kunne ikke opdateres");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <div className="card">
        {error && error}
        {message && message}
        <form action="update_account_form" onSubmit={handleSubmit}>
          <legend>Opdater profil</legend>
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
            <div id="cvr_nummer">
              <label htmlFor="cvr_nummer">Email</label>
              <p className="hint">Indtast firma CVR nummer</p>
              <input
                type="number"
                id="cvr_nummer"
                name="cvr_nummer"
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
            <input type="text" id="company" name="company" placeholder="&nbsp;" required />
          </div>
          <div id="password">
            <label htmlFor="password">Kodeord</label>
            <p className="hint">Indtast nyt kodeord</p>
            <input
              type="password"
              id="password"
              name="password"
              ref={passwordRef}
              placeholder="Lad stå tomt for at bevare det samme"
              required
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
              required
            />
          </div>
          <button disabled={loading} type="submit">
            Update konto
          </button>
        </form>
      </div>
    </>
  );
};
