import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import "./Footer.scss";

export const Footer = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <nav className="nets_footer">
      <ul className={click ? "nets_footer_menu active" : "nav-menu"}>
        <li className="nets_footer_item">
          <a
            href="https://www.nets.eu/dk-da/kontakt"
            className="nets_footer_links active"
            onClick={handleClick}
          >
            Kontakt os
          </a>
        </li>

        <li className="nav-item">
          <NavLink
            to="/login"
            className="nets_footer_links active"
            onClick={handleClick}
          >
            <PersonOutlineOutlinedIcon />
          </NavLink>
        </li>
        <li className="nets_footer_item">
          <NavLink
            to="/cart"
            className="nets_footer_links active"
            onClick={handleClick}
          >
            <ShoppingBagOutlinedIcon />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
