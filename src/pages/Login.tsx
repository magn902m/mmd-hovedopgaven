import React, { useRef } from "react";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const emailRef: any = useRef(null);
  const passwordRef: any = useRef(null);
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e: any) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/account");
    } catch {
      setError("Kunne ikke logge ind");
    }
    setLoading(false);
  }

  return (
    <>
      <div className="login_form">
        <h2>Login</h2>
        {error && error}
        <form action="" onSubmit={handleSubmit}>
          <div id="email">
            <label htmlFor="">Email</label>
            <p className="hint">Indtast din email</p>
            <input type="email" ref={emailRef} placeholder="&nbsp;" required />
            <p>Test email: test@test.com</p>
          </div>
          <div id="password">
            <label htmlFor="">Kodeord</label>
            <p className="hint">Indtast din kodeord</p>
            <input type="password" ref={passwordRef} placeholder="&nbsp;" required />
            <p>Test kodeord: 123456</p>
          </div>

          <button className="primary_btn" disabled={loading} type="submit">
            Login
          </button>
          <Link to="/forgot-password">Glemt dit koedord?</Link>
          <hr />
          <Link className="secondary_btn" to="/signup">
            Opret konto
          </Link>
        </form>
        <div></div>
      </div>
    </>
  );
};
