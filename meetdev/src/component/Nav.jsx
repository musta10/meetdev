import React from "react";
import "../assets/styles/nav.scss";
import logo from "../assets/icons/user-icon.png";
import logoHome from "../assets/icons/icon-home.svg";
import logoGroup from "../assets/icons/icon-group.png";
import {Link} from  'react-router-dom'
const Nav = () =>{

  const signOut = () =>{
    localStorage.clear();
  }

  return (
    <header className="header">
      <p className="header__title">Meet Dev</p>
     <Link to="/"><img src={logoHome} alt="home" /></Link> 
     <Link to="/"><img src={logoGroup} alt="events" /></Link> 

      <div className="header__menu">
        <div className="header__menu--profile">
          <img src={logo} alt="user" />
          <p>Compte</p>
        </div>
        <ul>
          <li>
            <Link to="/">Mon Profile</Link>
          </li>
          <li>
            <Link to="/admin" onClick={signOut}>Déconnexion</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
export default Nav;
