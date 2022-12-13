import React, { useState } from "react";
import { useAuth } from "../../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "../../1-atoms";

export const LogoutAccount = () => {
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/");
    } catch {
      setError("Kunne ikke logge ud");
    }
  }

  return (
    <>
      {error && error}
      <Button onClick={handleLogout} label="Log ud" />
    </>
  );
};
