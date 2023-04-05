import React from "react";
import CarouselBox from "../Components/CarouselBox";
import ServiceComponent from "../Components/ServiceComponent";
import s from "./Home.module.css";

const Home: React.FC = () => {
  return (
    <div className={s.root}>
      <CarouselBox />
      <ServiceComponent />
    </div>
  );
};

export default Home;
