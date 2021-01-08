import React from "react";
import "../assets/styles/nav.scss";
import logo from "../assets/icons/user-icon.png";
import logoHome from "../assets/icons/icon-home.svg";
import logoGroup from "../assets/icons/icon-group.png";

const Nav = () =>{
  return (
    <header className="header">
      <p className="header__title">Meet Dev</p>
     <a href="/"><img src={logoHome} alt="home" /></a> 
     <a href="/"><img src={logoGroup} alt="events" /></a> 

      <div className="header__menu">
        <div className="header__menu--profile">
          <img src={logo} alt="user" />
          <p>Compte</p>
        </div>
        <ul>
          <li>
            <a href="/">Mon Profile</a>
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
