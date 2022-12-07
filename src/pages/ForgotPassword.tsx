import React from "react";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "../ui/components";

export const ForgotPassword = () => {
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  interface UserSubmitForm {
    email: string;
  }

  const validationSchema = yup.object().shape({
    email: yup.string().required("E-mail er påkrævet").email("E-mailen er ugyldig"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema),
  });

  async function onSubmit(data: UserSubmitForm) {
    const formData = data;

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(formData.email);
      setMessage("Tjek din indbakke for yderligere instruktioner");
    } catch {
      setError("Kunne ikke nulstille kodeord");
    }
    setLoading(false);
  }

  return (
    <>
      <div className="forgot_password_form">
        <h2>Nulstil kodeord</h2>
        {error && error}
        {message && message}
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Email</label>
            <p className="hint">Indtast din email</p>
            <input
              type="text"
              {...register("email")}
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
            />
            <p className="invalid-feedback">{errors.email?.message}</p>
          </div>

          <Button className="primary" disabled={loading} type="submit" label={"Nulstil kodeord"} />
          <Link to="/login">Har du allerede en konto?</Link>
        </form>
      </div>
      <div></div>
    </>
  );
};
