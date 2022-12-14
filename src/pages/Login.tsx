import React, { useRef } from "react";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/components";

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
      navigate(-1);
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Kunne ikke logge ind");
    }
    setLoading(false);
  }

  return (
    <main id="main">
      <section className="login_form">
        <h1>Login</h1>

        <form action="" onSubmit={handleSubmit}>
          <p>
            For at kunne tilgå dele af hjemmeside, skal man have en konto. Opret en konto, eller
            login her
          </p>

          {error && error}
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

          <Button btnTypeStyle="primary_btn" disabled={loading} type="submit" label="Login" />
          <Link to="/forgot-password">Glemt dit koedord?</Link>
          <hr />
          <Link className="secondary_btn" to="/signup">
            Opret en konto
          </Link>
        </form>
      </section>
    </main>
  );
};
