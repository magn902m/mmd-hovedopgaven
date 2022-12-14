import React, { useRef } from "react";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { Button } from "../ui/components";

export const ForgotPassword = () => {
  const emailRef: any = useRef(null);
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Tjek din indbakke for yderligere instruktioner");
    } catch {
      setError("Kunne ikke nulstille kodeord");
    }
    setLoading(false);
  }

  return (
    <main id="main">
      <section className="forgot_password_form">
        <h1>Nulstil kodeord</h1>
        {error && error}
        {message && message}
        <form action="" onSubmit={handleSubmit}>
          <div id="email">
            <label htmlFor="">Email</label>
            <p className="hint">Indtast din email</p>
            <input type="email" ref={emailRef} placeholder="&nbsp;" required />
          </div>
          <Button
            btnTypeStyle="primary_btn"
            disabled={loading}
            type="submit"
            label="Nulstil kodeord"
          />

          <Link to="/signup">Opret en konto</Link>
        </form>
      </section>
    </main>
  );
};
