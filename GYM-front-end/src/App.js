import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ConfirmProvider } from "material-ui-confirm";

import "./App.scss";
import "./App.css";

/**     User Routes   */

import Home from "./User/Components/Home/Home";
import WorkOutPlan from "./User/Components/WorkOutPlan/WorkOutPlan";
import Coaches from "./User/Components/Coaches/Coaches";
import SignIn from "./User/Components/Login/SignIn";
import SignUp from "./User/Components/Login/SingUp";
import Shop from "./User/Components/Shop/Shop";
import ContactUs from "./User/Components/ContactUs/ContactUs";
import FAQ from "./User/Components/FAQ/Faq";
import UserAccount from "./User/Components/UserAccount/UserAccount";
import MyInfo from "./User/Components/MyInfo/MyInfo";

/**     Admin Routes   */

import AdminLogin from "./Admin/AdminLogin/AdminLogin";
import AdminInfo from "./Admin/AdminInfo/AdminInfo";
import MemberShipType from "./Admin/MemberShipType/MemberShipType";

/** user Protected Routes */

import ProtectedRouteUser from "./ProtectedRouteUser";

/**admin Protected Routes */

import ProtectedRouteAdmin from "./ProtectedRouteAdmin";

function App() {
  const [isUserAuth] = useState(localStorage.getItem("token"));
  const [isAdminAuth] = useState(localStorage.getItem("tokens"));

  return (
    <Router>
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

      <Switch>
        <Route path="/admin-Login" component={AdminLogin} />
        <ConfirmProvider>
          <ProtectedRouteAdmin
            exact
            path="/admin"
            component={AdminInfo}
            isAdminAuth={isAdminAuth}
          />
          <ProtectedRouteAdmin
            exact
            path="/admin-memberShip"
            component={MemberShipType}
            isAdminAuth={isAdminAuth}
          />
        </ConfirmProvider>
      </Switch>
    </Router>
  );
}

export default App;
