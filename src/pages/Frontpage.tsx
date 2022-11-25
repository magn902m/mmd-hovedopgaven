import React from "react";
import { Link } from "react-router-dom";

export const Frontpage = () => {
  return (
    <>
      <h1>Frontpage</h1>
      <Link to="/login">Go to login page</Link>
    </>
  );
};
