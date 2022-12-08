import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

const MainLayout: React.FC = () => {
  return (
    <>
      <Header />

      <div>
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
