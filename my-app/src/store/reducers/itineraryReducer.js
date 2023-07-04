import { FETCH_ITINERARIES_SUCCESS, FETCH_ITINERARIES_FAILURE } from '../actions/itineraryActions';

// Estado inicial del reductor
const initialState = {
  itineraries: [],
  error: null
};

// Reductor de itinerarios
const itineraryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITINERARIES_SUCCESS:
      return {
        ...state,
        itineraries: action.payload,
        error: null
      };
    case FETCH_ITINERARIES_FAILURE:
      return {
        ...state,
        itineraries: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default itineraryReducer;
