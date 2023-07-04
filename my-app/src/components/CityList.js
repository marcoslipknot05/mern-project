import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import homeImage from '../images/Home_logo.png';
import { fetchCities } from '../store/actions/cityActions';

const CityList = ({ cities, error }) => {
  const navigate = useNavigate();

  useEffect(() => {
    fetchCities();
  }, [fetchCities]);

  if (error) {
    return <div>Error al cargar las ciudades: {error.message}</div>;
  }

  if (cities.length === 0) {
    return <div>Cargando ciudades...</div>;
  }

  const handleCityClick = (cityName) => {
    const itineraryPath = `/itineraries/${cityName}/itineraries`;
    navigate(itineraryPath);
  };

  return (
    <div className="city-list-container">
      <header></header>
      <ul>
        {cities.map((city, index) => (
          <li key={`city-${index}`} onClick={() => handleCityClick(city.name)}>
            {city.name}
          </li>
        ))}
      </ul>
      <ul className="acces_menu">
        <li>
          <Link to="/login">Log in</Link>
        </li>
        <li>
          <Link to="/createaccount">Create Account</Link>
        </li>
      </ul>
      <footer>
        <Link to="/">
          <img src={homeImage} alt={homeImage} style={{ width: '50px', height: '50px' }} />
        </Link>
      </footer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cities: state.cities.cities,
  error: state.cities.error
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
