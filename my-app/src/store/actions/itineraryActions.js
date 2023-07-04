import axios from 'axios';

export const FETCH_ITINERARIES_SUCCESS = 'FETCH_ITINERARIES_SUCCESS';
export const FETCH_ITINERARIES_FAILURE = 'FETCH_ITINERARIES_FAILURE';

const fetchItinerariesSuccess = (itineraries) => {
    return {
        type: FETCH_ITINERARIES_SUCCESS,
        payload: itineraries
    };
};

const fetchItinerariesFailure = (error) => {
    return {
        type: FETCH_ITINERARIES_FAILURE,
        payload: error
    };
};

export const fetchItineraries = (cityName) => {
  return (dispatch) => {
      axios.get(`http://localhost:3002/itineraries/${cityName}/itineraries`)
        .then((response) => {
            const itineraries = response.data;
            dispatch(fetchItinerariesSuccess(itineraries));
        })
        .catch(error => {
            dispatch(fetchItinerariesFailure(error));
        });
  }
};
