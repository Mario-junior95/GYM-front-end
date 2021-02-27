import React from "react";
import "./App.scss";
import "./App.css";

import Header from "./User/Components/Navigation/Header";
import Home from "./User/Components/Home/Home";
import WorkOutPlan from "./User/Components/WorkOutPlan/WorkOutPlan";
import Coaches from "./User/Components/Coaches/Coaches";
import Login from "./User/Components/Login/Login";
import ContactUs from "./User/Components/ContactUs/ContactUs";
import FAQ from "./User/Components/FAQ/Faq";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/workoutPlan" component={WorkOutPlan} />
                <Route exact path="/coaches" component={Coaches} />
                <Route exat path = "/Login" component = {Login}/>
                <Route exact path = "/contactUs" component = {ContactUs}/>
                <Route exact path = "/faq" component = {FAQ}/>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
