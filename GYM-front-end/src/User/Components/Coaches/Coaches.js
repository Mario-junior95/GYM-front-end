import React from "react";
import "./Coaches.css";
import Header from "../Navigation/Header";

const Coaches = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="wrapper">
          <div className="home">
            <div className="containers">
              <div className="Coaches_banner"></div>
              <div>Coaches</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coaches;
