import React from "react";
import "./Home.css";
import Header from "../Navigation/Header";
// import "../Navigation/Header.css";

const Home = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="wrapper">
          <div className="home">
            <div className="containers">
              <div className="Home_banner"></div>
              <div>Home</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
