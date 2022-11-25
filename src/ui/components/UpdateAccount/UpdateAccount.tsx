import React, { useRef } from "react";
import { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export const UpdateProfile = () => {
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
        <form action="" onSubmit={handleSubmit}>
          <legend>Opdater profil</legend>

          <div id="email">
            <label htmlFor="">Email</label>
            <p className="hint">Indtast din email</p>

            <input type="email" ref={emailRef} defaultValue={currentUser.email} />
          </div>
          <div id="password">
            <label htmlFor="">Kodeord</label>
            <p className="hint">Indtast nyt kodeord</p>

            <input
              type="password"
              ref={passwordRef}
              placeholder="Lad stå tomt for at bevare det samme"
            />
          </div>
          <div id="password_confirm">
            <label htmlFor="">Kodeords bekræftelse</label>
            <input
              type="password_confirm"
              ref={passwordConfirmRef}
              placeholder="Lad stå tomt for at bevare det samme"
            />
          </div>
          <button disabled={loading} type="submit">
            Update
          </button>
        </form>
      </div>
      <div>
        <Link to="/">Cancel</Link>
      </div>
    </>
  );
};
