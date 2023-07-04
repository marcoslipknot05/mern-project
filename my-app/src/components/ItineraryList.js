import React, {useEffect} from 'react';
import { fetchItineraries } from '../store/actions/itineraryActions';
import { useParams } from 'react-router-dom';
import {connect} from "react-redux";

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
          <li key={`${itinerary.id}-${index}`}>{itinerary.rating}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  itineraries: state.itineraries.itineraries,
  error: state.itineraries.error
});

const mapDispatchToProps = {
  fetchItineraries
};

export default connect(mapStateToProps, mapDispatchToProps)(ItineraryList);
