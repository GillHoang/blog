import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const MainLayout = () => {
  return <div className="min-h-screen relative">
    <Navbar />
    <Outlet></Outlet>
  </div>;
};

export default MainLayout;
