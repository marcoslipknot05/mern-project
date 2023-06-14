import React from "react";
import { Outlet } from "react-router-dom";
//import CityList from "./citylist";

const Layout = () => {
  return (
    <>
      <h1>Layout</h1>
      {/* <CityList /> */}
      <Outlet />
    </>
  );
};

export default Layout;