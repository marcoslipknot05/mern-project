import React from 'react';
import appLogo from "../images/MYtineraryLogo.png"
import "../utilities/landing.css";
import imageLanding from "../images/start-landing-image.png";
import { Link } from "react-router-dom";
import homeImage from "../images/Home_logo.png";

const userMenu = [
  { name: 'Log in', link: '/LogIn' },
  { name: 'Create Account', link: '/CreateAccount' },
];

const Landing = () => {
  return (
    <div>
      <header>
        <div>
          <img src={appLogo} alt="Descripción de la imagen" className="logo-landing" />
        </div>
      </header>
      <main>
        <h1 className="title">
          Find your perfect trip, designed by insiders who know and love their cities.
        </h1>
        <div className="start_browser">
          <p className="browser_text">Start browsing</p>
          <img
            className="browser_image"
            src={imageLanding}
            alt={imageLanding}
            style={{ width: "200px", height: "200px" }}
          />
        </div>
        <div className="menu_container">
          <h2>Want to build your own MYtinerary?</h2>
          <div className="acces_menu">
            {userMenu.map((menuItem, index) => (
              <Link key={index} to={menuItem.link}>
                <li>{menuItem.name}</li>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <footer>
        <img
          src={homeImage}
          alt={homeImage}
          style={{ width: "50px", height: "50px" }}
        />
      </footer>
    </div>
  );
};

export default Landing;