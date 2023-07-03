import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchItineraries } from '../store/actions/itineraryActions';
import { useParams } from 'react-router-dom';

const ItineraryList = ({ itineraries, error, fetchItineraries }) => {
  const Params = useParams()
  const {cityName} = Params;
    useEffect(() => {
    fetchItineraries(cityName);
  }, [cityName, fetchItineraries]);

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
};

const mapStateToProps = (state, ownProps) => ({
  itineraries: state.itineraries.itineraries[ownProps.cityId] || [],
  error: state.itineraries.error
});

const mapDispatchToProps = {
  fetchItineraries
};

export default connect(mapStateToProps, mapDispatchToProps)(ItineraryList);