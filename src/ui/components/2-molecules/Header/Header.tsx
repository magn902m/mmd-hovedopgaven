import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import "./Header.scss";
import { useAuth } from "../../../../contexts/AuthContext";

export const Header = () => {
  const [click, setClick] = useState(false);
  const { currentUser } = useAuth();

  const handleClick = () => setClick(!click);
  return (
    <nav className="nets_header">
      <NavLink to="/" className="nav-logo">
        <img
          src="https://images.ctfassets.net/m7fx3qzqlluq/4cxOWm16Re2uMv7ViCKb4H/5c7567614fcff06e2b49633a25ef5a7d/netsLogoColored.svg?w=100"
          width="100"
          alt="Nets logo"
        />
      </NavLink>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <NavLink to="/products" className="nav-links active" onClick={handleClick}>
            Products
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/green-goal" className="nav-links active" onClick={handleClick}>
            Vores Grønne Mål
          </NavLink>
        </li>
        <li className="nav-item">
          <a
            href="https://www.nets.eu/dk-da/kontakt"
            className="nav-links active"
            onClick={handleClick}
          >
            Kontakt os
          </a>
        </li>
      </ul>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <NavLink
            to={currentUser ? "/account" : "/login"}
            className="nav-links active"
            onClick={handleClick}
          >
            {currentUser ? <ManageAccountsIcon /> : <PersonOutlineOutlinedIcon />}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/cart" className="nav-links active" onClick={handleClick}>
            <ShoppingBagOutlinedIcon />
          </NavLink>
        </li>
      </ul>
      <input className="nav-icon" onClick={handleClick} id="menu__toggle" type="checkbox" />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
      </label>
    </nav>
  );
};
