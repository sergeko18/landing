import React, { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./Pages/Home";
import { Spinner } from "react-bootstrap";

const About = React.lazy(() => import("./Pages/About"));
const Service = React.lazy(() => import("./Pages/Service"));
const Contacts = React.lazy(() => import("./Pages/Contacts"));
const Forma = React.lazy(() => import("./Pages/Forma"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="/about"
          element={
            <Suspense
              fallback={
                <div className="container">
                  <Spinner variant="success" animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </div>
              }
            >
              <About />
            </Suspense>
          }
        />
        <Route
          path="service"
          element={
            <Suspense
              fallback={
                <div className="container ">
                  <Spinner variant="success" animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </div>
              }
            >
              <Service />
            </Suspense>
          }
        />
        <Route
          path="contacts"
          element={
            <Suspense
              fallback={
                <div className="container ">
                  <Spinner variant="success" animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </div>
              }
            >
              <Contacts />
            </Suspense>
          }
        />
        <Route
          path="forma"
          element={
            <Suspense
              fallback={
                <div className="container ">
                  <Spinner variant="success" animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </div>
              }
            >
              <Forma />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
