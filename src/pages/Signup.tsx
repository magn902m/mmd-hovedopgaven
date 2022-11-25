import React, { useRef } from "react";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {
  const emailRef: any = useRef(null);
  const passwordRef: any = useRef(null);
  const passwordConfirmRef: any = useRef(null);
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e: any) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Kodeordene er ikke ens");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/account");
    } catch {
      setError("Kunne ikke oprette en konto");
    }
    setLoading(false);
  }

  return (
    <>
      <div className="signup_form">
        <h2>Opret konto</h2>
        {error && error}
        <form action="" onSubmit={handleSubmit}>
          <div id="email">
            <label htmlFor="">Email</label>
            <p className="hint">Indtast din email</p>
            <input type="email" ref={emailRef} placeholder="&nbsp;" required />
          </div>
          <div id="password">
            <label htmlFor="">Kodeord</label>
            <p className="hint">Indtast din kodeord</p>
            <input type="password" ref={passwordRef} placeholder="&nbsp;" required />
          </div>
          <div id="password_confirm">
            <label htmlFor="">Kodeords bekræftelse</label>
            <input type="password_confirm" ref={passwordConfirmRef} placeholder="&nbsp;" required />
          </div>
          <button disabled={loading} type="submit">
            Opret konto
          </button>
        </form>
        <div>
          Har du allerede en bruger? <Link to="/login">Login</Link>
        </div>
      </div>
    </>
  );
};
