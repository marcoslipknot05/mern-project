import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCities } from '../store/actions/cityActions';
import appLogo from "../images/MYtineraryLogo.png";
import "../utilities/landing.css";
import startImage from "../images/start-landing-image.png"; // Cambia el nombre de la imagen aquí
import { Link } from "react-router-dom";
import homeImage from "../images/Home_logo.png";

const userMenu = [
  { name: 'Log in', link: '/LogIn' },
  { name: 'Create Account', link: '/CreateAccount' },
];

const Landing = ({ fetchCities }) => {
  useEffect(() => {
    fetchCities();
  }, [fetchCities]);

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
          <Link to="/cities"> {/* Agrega el enlace aquí */}
            <img
              className="browser_image"
              src={startImage} // Cambia el nombre de la imagen aquí
              alt="Start"
              style={{ width: "200px", height: "200px" }}
            />
          </Link>
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

const mapDispatchToProps = {
  fetchCities
};

export default connect(null, mapDispatchToProps)(Landing);