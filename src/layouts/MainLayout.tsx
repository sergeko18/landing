import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import s from "./MainLayout.module.css";

const MainLayout: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <Header />
      </div>

      <div className={s.main}>
        <Outlet />
      </div>
      <div className={s.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
