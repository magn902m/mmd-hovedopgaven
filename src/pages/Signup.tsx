import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { getDatabase, ref, set } from "firebase/database";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "../ui/components";

export const Signup = () => {
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  interface UserSubmitForm {
    firstname: string;
    lastname: string;
    email: string;
    phone_code: string;
    phone_num: number;
    company_name: string;
    adresse: string;
    cvr_number: number;
    password: string;
    password_confirm: string;
  }

  const validationSchema = yup.object().shape({
    firstname: yup.string().required("Fornavn er påkrævet"),
    lastname: yup.string().required("Efternavn er påkrævet"),
    email: yup.string().required("E-mail er påkrævet").email("E-mail er ugyldig"),
    phone_code: yup.string().required("Telefonkode er påkrævet"),
    phone_num: yup
      .string()
      .min(8, "Nummeret skal skal 8 tal")
      .max(8, "Nummeret må ikke have mere end 8 tal")
      .required("Telefonnummer er påkrævet"),
    company_name: yup.string().required("Virksomhedsnavn er påkrævet"),
    adresse: yup.string().required("Adresse er påkrævet"),
    cvr_number: yup
      .string()
      .min(5, "Nummeret skal min være 5 tal")
      .max(8, "Nummeret må ikke have mere end 8 tal")
      .required("CVR-nummer er påkrævet"),
    password: yup
      .string()
      .required("Adgangskode er påkrævet")
      .min(6, "Adgangskoden skal være på mindst 6 tegn")
      .max(40, "Adgangskoden må ikke overstige 40 tegn"),
    password_confirm: yup
      .string()
      .required("Bekræft adgangskode er påkrævet")
      .oneOf([yup.ref("password"), null], "Bekræft adgangskoden matcher ikke"),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  async function onSubmit(data: UserSubmitForm) {
    const formData = data;

    if (formData.password !== formData.password_confirm) {
      return setError("Kodeordene er ikke ens");
    }

    try {
      setError("");
      setLoading(true);
      const currentUserUid = await signup(formData.email, formData.password);

      const postData = {
        ...formData,
        currentUserUid,
      };

      writeUserData(postData);

      navigate("/account");
    } catch {
      setError("Kunne ikke oprette en konto");
    }
    setLoading(false);
  }

  function writeUserData(postData: any) {
    const db = getDatabase();
    set(ref(db, "users/" + postData.currentUserUid.user?.uid), {
      firstname: postData?.firstname,
      lastname: postData?.lastname,
      email: postData?.email,
      phoneNum: postData?.phone_num,
      phoneCode: postData?.phone_code,
      cvrNumber: postData?.cvr_number,
      adresse: postData?.adresse,
      companyName: postData?.company_name,
      color: "#005776",
      uid: postData.currentUserUid.user?.uid,
    });
  }

  return (
    <>
      <div className="signup_form">
        <form onSubmit={handleSubmit(onSubmit)}>
          {error && error}

          <legend>Opret konto</legend>

          <div className="form_group">
            <div className="form_field">
              <label htmlFor="firstname">Fornavn</label>
              <p className="hint">Indtast din fornavn</p>
              <input
                type="text"
                {...register("firstname")}
                className={`form_control ${errors.firstname ? "is-invalid" : ""}`}
              />
              <div className="invalid-feedback">{errors.firstname?.message}</div>
            </div>
            <div className="form_field">
              <label htmlFor="lastname">Efternavn</label>
              <p className="hint">Indtast din efternavn</p>
              <input
                type="text"
                {...register("lastname")}
                className={`form_control ${errors.lastname ? "is-invalid" : ""}`}
              />
              <div className="invalid-feedback">{errors.lastname?.message}</div>
            </div>
          </div>

          <div className="form_field">
            <label htmlFor="email">Email</label>
            <p className="hint">Indtast din email</p>
            <input
              type="text"
              {...register("email")}
              className={`form_control ${errors.email ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.email?.message}</div>
          </div>

          <div className="form_group full_phone_num">
            <div className="form_field">
              <label htmlFor="phone_code">Landekode</label>
              <p className="hint">Indtast kode</p>
              <select
                id="phone_code"
                {...register("phone_code")}
                onChange={(e) => setValue("phone_code", e.target.value, { shouldValidate: true })}
                className={`form_control ${errors.phone_code ? "is-invalid" : ""}`}
              >
                <option value="45">+45</option>
                <option value="47">+47</option>
                <option value="00">+00</option>
              </select>
              <p className="invalid-feedback">{errors.phone_code?.message}</p>
            </div>
            <div className="form_field">
              <label htmlFor="phone_num">Telefon nr.</label>
              <p className="hint">Indtast din telefon nummer</p>

              <input
                type="tel"
                inputMode="tel"
                pattern="[0-9]+"
                // max="8"
                // min="8"
                {...register("phone_num")}
                className={`form_control ${errors.phone_num ? "is-invalid" : ""}`}
              />
              <p className="invalid-feedback">{errors.phone_num?.message}</p>
            </div>
          </div>

          <div className="form_field">
            <label htmlFor="adresse">Adresse</label>
            <p className="hint">Indtast firma adresse</p>
            <input
              type="text"
              {...register("adresse")}
              className={`form_control ${errors.adresse ? "is-invalid" : ""}`}
            />
            <p className="invalid-feedback">{errors.adresse?.message}</p>
          </div>
          <div className="form_group">
            <div className="form_field">
              <label htmlFor="company_name">Firmanavn</label>
              <p className="hint">Indtast firmanavn</p>
              <input
                type="text"
                {...register("company_name")}
                className={`form_control ${errors.company_name ? "is-invalid" : ""}`}
              />
              <p className="invalid-feedback">{errors.company_name?.message}</p>
            </div>

            <div className="form_field">
              <label htmlFor="cvr_number">CVR nr.</label>
              <p className="hint">Indtast firma CVR nummer</p>
              <input
                type="text"
                {...register("cvr_number")}
                className={`form_control ${errors.cvr_number ? "is-invalid" : ""}`}
              />
              <p className="invalid-feedback">{errors.cvr_number?.message}</p>
            </div>
          </div>

          <div className="form_field">
            <label htmlFor="password">Kodeord</label>
            <p className="hint">Indtast din kodeord</p>
            <input
              type="number"
              {...register("password")}
              className={`form_control ${errors.password ? "is-invalid" : ""}`}
            />
            <p className="invalid-feedback">{errors.password?.message}</p>
          </div>

          <div className="form_field">
            <label htmlFor="password_confirm">Kodeords bekræftelse</label>

            <input
              type="number"
              {...register("password_confirm")}
              className={`form_control ${errors.password_confirm ? "is-invalid" : ""}`}
            />
            <p className="invalid-feedback">{errors.password_confirm?.message}</p>
          </div>

          <Button disabled={loading} type="submit" label={"Opret konto"} />

          <Link to="/login">Har du allerede en bruger?</Link>
        </form>
      </div>
    </>
  );
};
