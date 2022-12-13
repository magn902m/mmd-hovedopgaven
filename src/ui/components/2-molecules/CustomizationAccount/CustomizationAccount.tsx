import React, { useRef } from "react";
import { useState } from "react";
import { useAuth } from "../../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "../../1-atoms";

export const CustomizationAccount = () => {
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
          <legend>Mit firmas visuelle identitet</legend>

          <div id="color">
            <label htmlFor="color">Farve</label>
            <p className="hint">
              Vælg en farve, som dit produkt skal have ved at indtaste en hexcode
            </p>
            <input type="text" id="color" name="color" placeholder="&nbsp;" required />
            <input type="color" id="color" name="color" placeholder="&nbsp;" required />
          </div>

          <div id="file">
            <label htmlFor="file">Email</label>
            <p className="hint">Indtast din email</p>
            <input type="file" id="file" name="file" placeholder="&nbsp;" required />
          </div>

          <Button disabled={loading} type="submit" label="Gem visuelle identitet" />
        </form>
      </div>
    </>
  );
};
