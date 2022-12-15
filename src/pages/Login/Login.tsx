import React, { useRef } from "react";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../ui/components";
import { Helmet } from "react-helmet";

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
    <>
      <Helmet>
        <title>
          Login ind eller opret en konto, for at kunne tilpasse dit produkt, til din virksomheds
          brand - Nets Denmark
        </title>
        <meta
          name="title"
          content="Login ind eller opret en konto, for at kunne tilpasse dit produkt, til din virksomheds brand - Nets Denmark"
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
          content="Login ind eller opret en konto, for at kunne tilpasse dit produkt, til din virksomheds brand - Nets Denmark"
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

      <main id="main">
        <section className="login_form">
          <h1>Log ind</h1>

          <form action="" onSubmit={handleSubmit}>
            <p>Log ind for at kunne designe din terminal og andre fordele.</p>

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
    </>
  );
};
