import React from 'react';
import { connect } from 'react-redux';
import { fetchItineraries } from '../store/actions/itineraryActions';

class ItineraryList extends React.Component {
  componentDidMount() {
    const { cityId } = this.props;
    this.props.fetchItineraries(cityId);
  }

  render() {
    const { itineraries, error } = this.props;

    if (error) {
      return <div>Error al cargar los itinerarios: {error.message}</div>;
    }

    if (itineraries.length === 0) {
      return <div>Cargando itinerarios...</div>;
    }

    return (
      <div>
        <h2>Itinerarios:</h2>
        <ul>
          {itineraries.map((itinerary, index) => (
            <li key={`${itinerary.id}-${index}`}>{itinerary.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  itineraries: state.itineraries.itineraries[ownProps.cityId] || [], // Acceder a los itinerarios correspondientes a la ciudad
  error: state.itineraries.error
});

const mapDispatchToProps = {
  fetchItineraries
};

export default connect(mapStateToProps, mapDispatchToProps)(ItineraryList);