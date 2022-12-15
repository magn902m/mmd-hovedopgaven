import React, { useRef } from "react";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { Button } from "../ui/components";
import { Helmet } from "react-helmet";

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
    <>
      <Helmet>
        <title>Glemt dit kodeord? Så kan du nulstille der her - Nets Denmark</title>
        <meta
          name="title"
          content="Glemt dit kodeord? Så kan du nulstille der her - Nets Denmark"
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
          content="Glemt dit kodeord? Så kan du nulstille der her - Nets Denmark"
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
        <section className="forgot_password_form">
          <h1>Nulstil kodeord</h1>
          <p>
            Indtast den e-mailadresse, du har brugt til at oprette dit virksomhedsprofil konto, så
            sender vi et link, hvor du kan nulstille dit password.
          </p>
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
    </>
  );
};
