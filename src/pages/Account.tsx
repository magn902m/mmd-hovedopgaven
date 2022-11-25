import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { UpdateProfile } from "../ui/components/UpdateAccount/UpdateAccount";

export const Account = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
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
      <div>
        <div>
          <h2>Din konto</h2>
          {error && error}
          <strong>Email:</strong> {currentUser.email}
        </div>
      </div>
      <div className="w-100 text-center mt-2">
        <button onClick={handleLogout}>Log ud</button>
      </div>
      <UpdateProfile />
    </>
  );
};
