import React from "react";
import "../assets/styles/nav.scss";
import logo from "../icons/user-icon.png";
import logoHome from "../assets/icons/icon-home.svg";
import logoGroup from "../assets/icons/icons/groupes.svg";

function Nav() {
  return (
    <header className="header">
      <p className="header__title">Meet Dev</p>
      <img src={logoHome} alt="home" />
      <img src={logoGroup} alt="events" />

      <div className="header__menu">
        <div className="header__menu--profile">
          <img src={logo} alt="user" />
          <p>profile</p>
        </div>
        <ul>
          <li>
            <a href="/">Compte</a>
          </li>
          <li>
            <a href="/">Déconnexion</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
export default Nav;
