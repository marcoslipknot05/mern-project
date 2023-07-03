import axios from 'axios';

// Action Types
export const FETCH_ITINERARIES_SUCCESS = 'FETCH_ITINERARIES_SUCCESS';
export const FETCH_ITINERARIES_FAILURE = 'FETCH_ITINERARIES_FAILURE';

// Action Creators
export const fetchItinerariesSuccess = (itineraries) => {
  return {
    type: FETCH_ITINERARIES_SUCCESS,
    payload: itineraries
  };
};

export const fetchItinerariesFailure = (error) => {
  return {
    type: FETCH_ITINERARIES_FAILURE,
    payload: error
  };
};

// Async Action Creator
export const fetchItineraries = (cityName) => {
  return (dispatch) => {
    axios.get(`http://localhost:3002/itineraries/${cityName}/itineraries`)
      .then(response => {
        const itineraries = response.data;
        dispatch(fetchItinerariesSuccess(itineraries));
      })
      .catch(error => {
        dispatch(fetchItinerariesFailure(error));
      });
  };
};