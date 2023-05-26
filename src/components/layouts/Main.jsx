import React, { useContext } from "react";
import Header from "../Pages/shared/Header/Header";
import Footer from "../Pages/shared/Footer/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    
        <div>
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
     
  );
};

export default Main;
