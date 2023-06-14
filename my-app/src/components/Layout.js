import React from "react";
import { Outlet } from "react-router-dom";
import appLogo from "../images/MYtineraryLogo.png";
//import CityList from "./citylist";
import "../utilities/citylist.css";

const Layout = () => {
  return (
    <>
      <header>
        <div>
          <img src={appLogo} alt="Descripción de la imagen" className="logo-landing" />
        </div>
      </header>
      {/* <CityList /> */}
      <Outlet />
    </>
  );
};

export default Layout;