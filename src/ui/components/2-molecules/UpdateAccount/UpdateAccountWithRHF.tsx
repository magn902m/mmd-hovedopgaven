import React, { useState } from "react";
import { useAuth } from "../../../../contexts/AuthContext";
import { getDatabase, ref, update } from "firebase/database";
import { ColorPicker } from "../ColorPicker/ColorPicker";
import classNames from "classnames";
import styles from "./UpdateAccount.module.scss";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "../../1-atoms/Button";

export const UpdateAccount = ({ profilData, pickedColor, setPickedColor }: any) => {
  const { currentUser, updateEmail, updatePassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

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

  // const validationSchema = yup.object().shape({
  //   firstname: yup.string().required("Fornavn er påkrævet").default(profilData?.firstname),
  //   lastname: yup.string().required("Efternavn er påkrævet"),
  //   email: yup.string().required("E-mail er påkrævet").email("E-mail er ugyldig"),
  //   phone_code: yup.string().required("Telefonkode er påkrævet"),
  //   phone_num: yup
  //     .string()
  //     .min(8, "Nummeret skal skal 8 tal")
  //     .max(8, "Nummeret må ikke have mere end 8 tal")
  //     .required("Telefonnummer er påkrævet"),
  //   company_name: yup.string().required("Virksomhedsnavn er påkrævet"),
  //   adresse: yup.string().required("Adresse er påkrævet"),
  //   cvr_number: yup
  //     .string()
  //     .min(5, "Nummeret skal min være 5 tal")
  //     .max(8, "Nummeret må ikke have mere end 8 tal")
  //     .required("CVR-nummer er påkrævet"),
  //   password: yup
  //     .string()
  //     .min(6, "Adgangskoden skal være på mindst 6 tegn")
  //     .max(40, "Adgangskoden må ikke overstige 40 tegn"),
  //   password_confirm: yup
  //     .string()
  //     .oneOf([yup.ref("password"), null], "Bekræft adgangskoden matcher ikke"),
  // });

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    mode: "onChange",
    // resolver: yupResolver(validationSchema),
    // defaultValues: validationSchema.cast(),
  });

  // const [user, setUser] = useState({});

  // useEffect(() => {
  //   // simulate async api call with set timeout
  //   setTimeout(() => setUser(profilData));
  // }, []);

  // // effect runs when user state is updated
  // useEffect(() => {
  //   // reset form with user data
  //   console.log(user);
  //   reset(user);
  // }, [user]);

  async function onSubmit(data: UserSubmitForm) {
    const formData = data;

    if (formData.password !== formData.password_confirm) {
      return setError("Kodeordene er ikke ens");
    }

    const profilUid = profilData.uid;

    const postData = {
      ...formData,
      profilUid,
    };

    const promises = [];
    setLoading(true);
    setError("");

    console.log(formData);

    console.log(formData.email !== currentUser.email, formData.email, currentUser.email);
    // if (formData.email !== currentUser.email) {
    //   promises.push(updateEmail(formData.email));
    // }
    if (formData.password) {
      promises.push(updatePassword(formData.password));
    }

    promises.push(updateAccountData(postData));

    function updateAccountData(postData: any) {
      const db = getDatabase();
      const updates: any = {};
      updates["/users/" + postData.uid + "/"] = postData;

      return update(ref(db), updates);
    }

    Promise.all(promises)
      .then(() => {
        setMessage("Kontoen er opdateret, reload siden");
        setPickedColor(pickedColor);
      })
      .catch(() => {
        setError("Kontoen kunne ikke opdateres");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const handlePickedColor = (e: any) => {
    setPickedColor(e.target.value);
  };

  return (
    <>
      <div className="update_account">
        {error && error}
        {message && message}
        <form action="" className="update_account_form" onSubmit={handleSubmit(onSubmit)}>
          <legend>Opdater profil</legend>
          <div className="form_group">
            <div className="form_field">
              <label htmlFor="firstname">Fornavn</label>
              <p className="hint">Indtast din fornavn</p>
              <input
                type="text"
                id="firstname"
                placeholder="&nbsp;"
                required
                defaultValue={profilData.firstname}
                {...register("firstname")}
                className={`form_control ${errors.firstname ? "is-invalid" : ""}`}
              />
              {/* <div className="invalid-feedback">{errors.firstname?.message}</div> */}
            </div>
            <div className="form_field">
              <label htmlFor="lastname">Efternavn</label>
              <p className="hint">Indtast din efternavn</p>
              <input
                type="text"
                id="lastname"
                required
                defaultValue={profilData.lastname}
                {...register("lastname")}
                className={`form_control ${errors.lastname ? "is-invalid" : ""}`}
              />
              {/* <div className="invalid-feedback">{errors.lastname?.message}</div> */}
            </div>
          </div>

          <div className="form_field">
            <label htmlFor="email">Email</label>
            <p className="hint">Indtast din email</p>
            <input
              type="email"
              id="email"
              placeholder="&nbsp;"
              required
              defaultValue={profilData.email}
              {...register("email")}
              className={`form_control ${errors.email ? "is-invalid" : ""}`}
            />
            {/* <div className="invalid-feedback">{errors.email?.message}</div> */}
          </div>

          <div className="form_group full_phone_num">
            <div className="form_field">
              <label htmlFor="phone_code">Landekode</label>
              <p className="hint">Indtast kode</p>
              <select
                id="phone_code"
                required
                defaultValue={profilData.phoneCode}
                {...register("phone_code")}
                onChange={(e) => setValue("phone_code", e.target.value, { shouldValidate: true })}
                className={`form_control ${errors.phone_code ? "is-invalid" : ""}`}
              >
                <option value="45">+45</option>
                <option value="47">+47</option>
                <option value="00">+00</option>
              </select>
              {/* <p className="invalid-feedback">{errors.phone_code?.message}</p> */}
            </div>
            <div className="form_field">
              <label htmlFor="phone_num">Telefon nr.</label>
              <p className="hint">Indtast din telefon nummer</p>

              <input
                type="tel"
                id="phone_num"
                inputMode="tel"
                pattern="[0-9]+"
                // maxLength="10" minLength="8"

                required
                defaultValue={profilData.phoneNum}
                {...register("phone_num")}
                className={`form_control ${errors.phone_num ? "is-invalid" : ""}`}
              />
              {/* <p className="invalid-feedback">{errors.phone_num?.message}</p> */}
            </div>
          </div>

          <div className="form_field">
            <label htmlFor="adresse">Adresse</label>
            <p className="hint">Indtast firma adresse</p>
            <input
              type="text"
              id="adresse"
              placeholder="&nbsp;"
              defaultValue={profilData?.adresse}
              required
              {...register("adresse")}
              className={`form_control ${errors.adresse ? "is-invalid" : ""}`}
            />
            {/* <p className="invalid-feedback">{errors.adresse?.message}</p> */}
          </div>
          <div className="form_group">
            <div className="form_field">
              <label htmlFor="company_name">Firmanavn</label>
              <p className="hint">Indtast firmanavn</p>
              <input
                type="text"
                id="company_name"
                placeholder="&nbsp;"
                defaultValue={profilData?.companyName}
                required
                {...register("company_name")}
                className={`form_control ${errors.company_name ? "is-invalid" : ""}`}
              />
              {/* <p className="invalid-feedback">{errors.company_name?.message}</p> */}
            </div>

            <div className="form_field">
              <label htmlFor="cvr_number">CVR nr.</label>
              <p className="hint">Indtast firma CVR nummer</p>
              <input
                type="number"
                id="cvr_number"
                placeholder="&nbsp;"
                defaultValue={profilData?.cvrNumber}
                required
                {...register("cvr_number")}
                className={`form_control ${errors.cvr_number ? "is-invalid" : ""}`}
              />
              {/* <p className="invalid-feedback">{errors.cvr_number?.message}</p> */}
            </div>
          </div>

          <hr />

          <legend>Visuel identitet</legend>
          <div id="form-color">
            <label htmlFor="colorText">Farve</label>
            <p className="hint">Vælg en farve, som dit produkt skal have</p>
            <ColorPicker
              onChange={handlePickedColor}
              value={pickedColor}
              profilcolor={profilData?.color}
            />
          </div>

          <div id="file">
            <label htmlFor="file">Logo eller icon</label>
            <p className="hint">Upload et logo eller icon, som skal være på produkt</p>
            <input type="file" id="file" name="file" placeholder="&nbsp;" />
          </div>

          <hr />

          <legend>Nultil kodeord</legend>

          <div className="form_field">
            <label htmlFor="password">Kodeord</label>
            <p className="hint">Indtast nyt kodeord</p>
            <input
              type="text"
              id="password"
              placeholder="Lad stå tomt for at bevare det samme"
              {...register("password")}
              className={`form_control ${errors.password ? "is-invalid" : ""}`}
            />
            {/* <p className="invalid-feedback">{errors.password?.message}</p> */}
          </div>

          <div className="form_field">
            <label htmlFor="password_confirm">Kodeords bekræftelse</label>

            <input
              type="text"
              id="password_confirm"
              placeholder="Lad stå tomt for at bevare det samme"
              {...register("password_confirm")}
              className={`form_control ${errors.password_confirm ? "is-invalid" : ""}`}
            />
            {/* <p className="invalid-feedback">{errors.password_confirm?.message}</p> */}
          </div>

          <Button disabled={loading} type="submit" label={"Update konto"} />
        </form>
      </div>
    </>
  );
};
