import React, { useState } from "react";
import "./App.scss";
import "./App.css";

{/**     User Routes   */}

import Header from "./User/Components/Navigation/Header";
import Home from "./User/Components/Home/Home";
import WorkOutPlan from "./User/Components/WorkOutPlan/WorkOutPlan";
import Coaches from "./User/Components/Coaches/Coaches";
import SignIn from "./User/Components/Login/SignIn";
import SignUp from "./User/Components/Login/SingUp";
import Shop from "./User/Components/Shop/Shop";
import ContactUs from "./User/Components/ContactUs/ContactUs";
import FAQ from "./User/Components/FAQ/Faq";
import UserAccount from "./User/Components/UserAccount/UserAccount";

{/**     Admin Routes   */}

import AdminLogin from "./Admin/AdminLogin/AdminLogin";

/** user Protected Routes */
import ProtectedRouteUser from "./ProtectedRouteUser";
import MyInfo from "./User/Components/MyInfo/MyInfo";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [isUserAuth, ] = useState(localStorage.getItem("token"));

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/workoutPlan" component={WorkOutPlan} />
                <Route exact path="/coaches" component={Coaches} />
                <Route exact path="/SignIn" component={SignIn} />
                <ProtectedRouteUser
                  exact
                  path="/myinfo"
                  component={MyInfo}
                  isUserAuth={isUserAuth}
                />
                <Route exact path="/userAccount" component={UserAccount} />
                <Route exact path="/SignUp" component={SignUp} />
                <Route exact path="/shop" component={Shop} />
                <Route exact path="/contactUs" component={ContactUs} />
                <Route exact path="/faq" component={FAQ} />
              </Switch>

              {/**   Admin Section  */}
              
              <Route path="/Admin-Login" component={AdminLogin} />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
