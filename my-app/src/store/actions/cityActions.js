import axios from 'axios';

export const FETCH_CITIES_SUCCESS = 'FETCH_CITIES_SUCCESS';
export const FETCH_CITIES_FAILURE = 'FETCH_CITIES_FAILURE';
export const FETCH_ITINERARIES_SUCCESS = 'FETCH_ITINERARIES_SUCCESS';
export const FETCH_ITINERARIES_FAILURE = 'FETCH_ITINERARIES_FAILURE';

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

// export const fetchItineraries = () => {
//   return (dispatch) => {
//     axios.get('http://localhost:3002/itineraries/all')
//       .then(response => {
//         const itineraries = response.data;
//         dispatch(fetchItinerariesSuccess(itineraries));
//       })
//       .catch(error => {
//         dispatch(fetchItinerariesFailure(error));
//       });
//   };
// };

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