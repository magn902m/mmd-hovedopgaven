import React from "react";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "../ui/components";

export const Login = () => {
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  interface UserSubmitForm {
    email: string;
    password: string;
  }

  const validationSchema = yup.object().shape({
    email: yup.string().required("E-mail er påkrævet").email("E-mailen er ugyldig"),
    password: yup
      .string()
      .required("Adgangskode er påkrævet")
      .min(6, "Adgangskoden skal være på mindst 6 tegn")
      .max(40, "Adgangskoden må ikke overstige 40 tegn"),
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
    console.log(formData.email, formData);

    try {
      setError("");
      setLoading(true);
      await login(formData.email, formData.password);
      navigate("/account");
    } catch {
      setError("Kunne ikke logge ind");
    }
    setLoading(false);
  }

  return (
    <>
      <div className="login_form">
        {error && error}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Email</label>
            <p className="hint">Indtast din email</p>
            <input
              type="text"
              {...register("email")}
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
            />
            <p>Test email: test@test.com</p>
            <p className="invalid-feedback">{errors.email?.message}</p>
          </div>

          <div className="form-group">
            <label>Password</label>
            <p className="hint">Indtast din kodeord</p>
            <input
              type="password"
              {...register("password")}
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
            />
            <p>Test kodeord: 123456</p>
            <p className="invalid-feedback">{errors.password?.message}</p>
          </div>

          <Button className="primary_btn" disabled={loading} type="submit" label={"Login"} />

          <Link to="/forgot-password">Glemt dit koedord?</Link>
          <hr />
          <Link className="secondary_btn" to="/signup">
            Opret konto
          </Link>
        </form>
      </div>
    </>
  );
};
