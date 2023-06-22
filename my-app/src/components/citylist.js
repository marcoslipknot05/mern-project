import React from 'react';
import { connect } from 'react-redux';
import appLogo from "../images/MYtineraryLogo.png";
import { fetchCities } from '../store/actions/cityActions';
import { userMenu } from "./Landing";
import { Link } from "react-router-dom";
import homeImage from "../images/Home_logo.png";
import ItineraryList from './itineraryList';

class CityList extends React.Component {
  componentDidMount() {
    this.props.fetchCities();
  }

  render() {
    const { cities, error } = this.props;

    if (error) {
      return <div>Error al cargar las ciudades: {error.message}</div>;
    }

    if (cities.length === 0) {
      return <div>Cargando ciudades...</div>;
    }

    return (
      <div className="city-list-container">
        <header>
          <div>
            <img src={appLogo} alt="Descripción de la imagen" className="logo-landing" />
          </div>
        </header>
        <ul>
          {cities.map((city, index) => (
            <li key={`city-${index}`}>
              <Link to={`/cities/${city.name}/itineraries`}>{city.name}</Link>
            </li>
          ))}
        </ul>
        <ul className="acces_menu">
          {userMenu.map((menuItem, index) => (
            <li key={`menu-${index}`}>
              <Link to={menuItem.link}>{menuItem.name}</Link>
            </li>
          ))}
        </ul>
        <footer>
          <Link to="/">
            <img
              src={homeImage}
              alt={homeImage}
              style={{ width: "50px", height: "50px" }}
            />
          </Link>
        </footer>

        {/* Agrega el componente ItineraryList */}
        {cities.map((city, index) => (
          <ItineraryList key={`itinerary-${index}`} cityId={city.id} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cities: state.cities.cities, // Acceder al array de nombres de ciudades
  error: state.cities.error
});

const mapDispatchToProps = {
  fetchCities
};

export default connect(mapStateToProps, mapDispatchToProps)(CityList);