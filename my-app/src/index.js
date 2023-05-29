import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals'; 
import Landing from './components/Landing';
import LogIn from "./components/LogIn";
import CreateAccount from "./components/CreateAccount";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/createaccount",
    element: <CreateAccount />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Landing />
    </RouterProvider>
  </React.StrictMode>
);

reportWebVitals();
