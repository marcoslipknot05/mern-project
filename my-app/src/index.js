import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals'; 
import Landing from './components/Landing';
import LogIn from "./components/LogIn";
import CreateAccount from "./components/CreateAccount";
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import cityReducer from './store/reducers/cityReducer';
import itineraryReducer from './store/reducers/itineraryReducer';
import Layout from './components/Layout';
import CityList from './components/Citylist';
import ItineraryList from './components/ItineraryList';

// Combina los reducers
const rootReducer = combineReducers({
  cities: cityReducer,
  itineraries: itineraryReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/createaccount" element={<CreateAccount />} />
            <Route path="/cities" element={<CityList />} />
            <Route path="/itineraries/:cityName/itineraries" element={<ItineraryList />} /> {/* Agrega esta ruta para ItineraryList */}
          </Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();