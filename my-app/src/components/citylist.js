import React from 'react';
import { connect } from 'react-redux';
import { fetchCities } from '../store/actions/cityActions';


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
        <ul>
          {cities.map(city => (
            <li key={city.id}>{city.name}</li>
          ))}
        </ul>
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