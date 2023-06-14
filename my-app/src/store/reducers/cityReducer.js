import { FETCH_CITIES_SUCCESS, FETCH_CITIES_FAILURE } from '../actions/cityActions';

// Estado inicial del reductor
const initialState = {
  cities: [],
  error: null
};

// Reductor de ciudades
const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CITIES_SUCCESS:
      return {
        ...state,
        cities: action.payload,
        error: null
      };
    case FETCH_CITIES_FAILURE:
      return {
        ...state,
        cities: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default cityReducer;