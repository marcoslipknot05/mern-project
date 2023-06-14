import axios from 'axios';

// Action Types
export const FETCH_CITIES_SUCCESS = 'FETCH_CITIES_SUCCESS';
export const FETCH_CITIES_FAILURE = 'FETCH_CITIES_FAILURE';

// Action Creators
export const fetchCitiesSuccess = (cities) => {
  return {
    type: FETCH_CITIES_SUCCESS,
    payload: cities
  };
};

export const fetchCitiesFailure = (error) => {
  return {
    type: FETCH_CITIES_FAILURE,
    payload: error
  };
};

// Async Action Creator
export const fetchCities = () => {
  return (dispatch) => {
    axios.get('http://localhost:3002/cities/all')
      .then(response => {
        const cities = response.data;
        dispatch(fetchCitiesSuccess(cities));
      })
      .catch(error => {
        dispatch(fetchCitiesFailure(error));
      });
  };
};