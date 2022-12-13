import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import "./Header.scss";
import { useAuth } from "../../../../contexts/AuthContext";
import { useShoppingCart } from "../../../../contexts/ShoppingCartContex";

export const Navbar = () => {
  const { cartQuantity } = useShoppingCart();
  const [click, setClick] = useState(false);
  const { currentUser } = useAuth();

  const handleClick = () => setClick(!click);

  return (
    <nav className="nets_navbar">
      <NavLink to="/" className={"nets_navbar_logo"}>
        <img
          src="https://images.ctfassets.net/m7fx3qzqlluq/4cxOWm16Re2uMv7ViCKb4H/5c7567614fcff06e2b49633a25ef5a7d/netsLogoColored.svg?w=100"
          width="100"
          alt="Nets logo"
        />
      </NavLink>

      <ul className={click ? "nets_navbar_menu active" : "nets_navbar_menu"}>
        <li className="nets_navbar_items">
          <NavLink
            to="/products"
            className="nets_navbar_links"
            onClick={handleClick}
          >
            Produkter
          </NavLink>
        </li>
        <li className="nets_navbar_items">
          <NavLink
            to="/green-goal"
            onClick={handleClick}
            className="nets_navbar_links"
          >
            Vores Grønne Mål
          </NavLink>
        </li>
        <li className="nets_navbar_items">
          <a
            href="https://www.nets.eu/dk-da/kontakt"
            className="nets_navbar_links"
            onClick={handleClick}
          >
            Kontakt os
          </a>
        </li>

        <li>
          <NavLink
            to={currentUser ? "/account" : "/login"}
            className="nav-links login_mobile nets_navbar_links "
            onClick={handleClick}
          >
            {currentUser ? "Din profil" : "Log ind"}
          </NavLink>
        </li>
      </ul>

      <ul className="nets_navbar_burger">
        <NavLink
          to={currentUser ? "/account" : "/login"}
          className="nav-links login_desctop"
          onClick={handleClick}
        >
          {currentUser ? "Din profil" : "Log ind"}
        </NavLink>

        <NavLink
          to="/cart"
          className="nav-links shopping_cart"
          onClick={handleClick}
        >
          <ShoppingBagOutlinedIcon />
          <div className="header_cart_quantity">
            <p>{cartQuantity}</p>
          </div>
        </NavLink>

        <input
          className="nav-icon"
          onClick={handleClick}
          id="menu__toggle"
          type="checkbox"
        />
        <label className="burger_menu_btn" htmlFor="menu__toggle">
          <span></span>
        </label>
      </ul>
    </nav>
  );
};
