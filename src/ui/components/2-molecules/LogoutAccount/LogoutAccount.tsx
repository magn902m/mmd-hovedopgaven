import React, { useState } from "react";
import { useAuth } from "../../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

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
      <button className="secondary_btn" onClick={handleLogout}>
        Log ud
      </button>
    </>
  );
};
