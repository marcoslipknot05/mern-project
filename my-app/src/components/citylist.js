import React from 'react';
import { connect } from 'react-redux';
import appLogo from "../images/MYtineraryLogo.png";
import { fetchCities } from '../store/actions/cityActions';
import { userMenu } from "./Landing";
import { Link } from "react-router-dom";
import homeImage from "../images/Home_logo.png";


class CityList extends React.Component {
  componentDidMount() {
    // Llama a la acción fetchCities al montar el componente
    this.props.fetchCities();
  }

  render() {
    const { cities, error } = this.props;

    // Maneja el estado de carga y error
    if (error) {
      return <div>Error al cargar las ciudades: {error.message}</div>;
    }

    if (cities.length === 0) {
      return <div>Cargando ciudades...</div>;
    }

    // Renderiza la lista de ciudades
    return (
      <div className="city-list-container">
        <header>
          <div>
            <img src={appLogo} alt="Descripción de la imagen" className="logo-landing" />
          </div>
        </header>
        <ul>
          {cities.map(city => (
            <li key={city.id}>{city.name}</li>
          ))}
        </ul>
        <ul className="acces_menu">
          {userMenu.map((menuItem, index) => (
            <li key={index}>
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
      </div>
    );
  }
}

// Mapea el estado y las acciones al props del componente
const mapStateToProps = state => ({
  cities: state.cities,
  error: state.error
});

const mapDispatchToProps = {
  fetchCities
};

// Conecta el componente a Redux
export default connect(mapStateToProps, mapDispatchToProps)(CityList);