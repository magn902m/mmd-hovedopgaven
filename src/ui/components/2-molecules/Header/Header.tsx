import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import "./Header.scss";

export const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <nav className="nets_header">
      <NavLink to="/" className="nets_header_logo">
        <img
          src="https://images.ctfassets.net/m7fx3qzqlluq/4cxOWm16Re2uMv7ViCKb4H/5c7567614fcff06e2b49633a25ef5a7d/netsLogoColored.svg?w=100"
          width="100"
          alt="Nets logo"
        />
      </NavLink>
      <ul className={click ? "nets_header_nav active" : "nets_header_nav"}>
        <li className="nets_header_nav_items">
          <NavLink
            to="/products"
            className="nets_header_nav_links active"
            onClick={handleClick}
          >
            Products
          </NavLink>
        </li>
        <li className="nets_header_nav_items">
          <NavLink
            to="/green-goal"
            className="nets_header_nav_links active"
            onClick={handleClick}
          >
            Vores Grønne Mål
          </NavLink>
        </li>
        <li className="nets_header_nav_items">
          <a
            href="https://www.nets.eu/dk-da/kontakt"
            className="nets_header_nav_links active"
            onClick={handleClick}
          >
            Kontakt os
          </a>
        </li>
      </ul>
      <div className="nets_header_icons">
        <NavLink
          to="/login"
          className="nets_header_nav_links active"
          onClick={handleClick}
        >
          <PersonOutlineOutlinedIcon />
        </NavLink>
        <NavLink
          to="/cart"
          className="nets_header_nav_links active"
          onClick={handleClick}
        >
          <ShoppingBagOutlinedIcon />
        </NavLink>

        <input
          className="nets_header_burger_menu"
          onClick={handleClick}
          id="menu__toggle"
          type="checkbox"
        />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span></span>
        </label>
      </div>
    </nav>
  );
};
