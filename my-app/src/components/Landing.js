import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCities } from '../store/actions/cityActions';
import CityList from './citylist';
import "../utilities/landing.css";
import startImage from "../images/start-landing-image.png";
import { Link } from "react-router-dom";

export const userMenu = [
  { name: 'Log in', link: '/LogIn' },
  { name: 'Create Account', link: '/CreateAccount' },
];

const Landing = ({ fetchCities }) => {
  const [showCityList, setShowCityList] = useState(false);

  useEffect(() => {
    fetchCities();
  }, [fetchCities]);

  const handleStartImageClick = () => {
    setShowCityList(true);
  };

  return (
    <div>
      <main>
        <h1 className="title">
          Find your perfect trip, designed by insiders who know and love their cities.
        </h1>
        <div className="start_browser">
          <p className="browser_text">Start browsing</p>
          <Link to="/cities">
            <img
              className="browser_image"
              src={startImage}
              alt="Start"
              style={{ width: "200px", height: "200px" }}
              onClick={handleStartImageClick}
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
        {showCityList && <CityList />}
      </main>
      {/* Comentario: Footer comentado
      <footer>
        <img
          src={homeImage}
          alt={homeImage}
          style={{ width: "50px", height: "50px" }}
        />
      </footer> */}
    </div>
  );
};

const mapDispatchToProps = {
  fetchCities
};

export default connect(null, mapDispatchToProps)(Landing);