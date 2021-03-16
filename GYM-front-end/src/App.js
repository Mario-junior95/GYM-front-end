import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ConfirmProvider } from "material-ui-confirm";
import "./App.scss";
import "./App.css";

/**     User Routes   */

import Home from "./User/Components/Home/Home";
import WorkOutPlan from "./User/Components/WorkOutPlan/WorkOutPlan";
import GYM from "./User/Components/WorkOutPlan/WorkOutPlanMenu/Gym";
import MMA from "./User/Components/WorkOutPlan/WorkOutPlanMenu/Mma";
import AEROBIC from "./User/Components/WorkOutPlan/WorkOutPlanMenu/Aerobic";
import CARDIO from "./User/Components/WorkOutPlan/WorkOutPlanMenu/Cardio";
import ZUMBA from "./User/Components/WorkOutPlan/WorkOutPlanMenu/Zumba";
import POOL from "./User/Components/WorkOutPlan/WorkOutPlanMenu/Pool";
import Payment from "./User/Components/WorkOutPlan/Payement/Payment";
import Coaches from "./User/Components/Coaches/Coaches";
import SignIn from "./User/Components/Login/SignIn";
import SignUp from "./User/Components/Login/SingUp";
import Shop from "./User/Components/Shop/Shop";
import ContactUs from "./User/Components/ContactUs/ContactUs";
import FAQ from "./User/Components/FAQ/Faq";
import UserAccount from "./User/Components/UserAccount/UserAccount";
import MyInfo from "./User/Components/MyInfo/MyInfo";
import MyClass from "./User/Components/Classe/Classes";
import EditInfo from "./User/Components/MyInfo/EditInfo";

/**     Admin Routes   */

import AdminLogin from "./Admin/AdminLogin/AdminLogin";
import AdminInfo from "./Admin/AdminInfo/AdminInfo";
import Members from "./Admin/Members/Members";
import MemberShipType from "./Admin/MemberShipType/MemberShipType";
import AdminWorkout from "./Admin/AdminWorkout/AdminWorkout";
import Instructor from "./Admin/Instructor/Instructor";
import InstructorDate from "./Admin/InstructorDate/InstructorDate";
import AdminShop from "./Admin/AdminShop/AdminShop";
import HomeAdmin from "./Admin/HomeAdmin/HomeAdmin";
import FaqAdmin from "./Admin/FaqAdmin/FaqAdmin";
import ContactUsAdmin from "./Admin/ContactUsAdmin/ContactUsAdmin";
import WorkWithUs from "./Admin/WorkWithUs/WorkWithUs";
import TheMerchandise from "./User/TheMerchandise/TheMerchandise";

//eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9hZG1pbi1sb2dpbiIsImlhdCI6MTYxNDc5NjA2OCwiZXhwIjoxNjE0Nzk5NjY4LCJuYmYiOjE2MTQ3OTYwNjgsImp0aSI6Im1GN29uZUpKREN1enlodFciLCJzdWIiOjEsInBydiI6ImNmMjg0YzJiMWUwNmYzM2MyNmJkNTc5NzU2NmQ5ZmQ3NGJlMTFiZjUifQ.G0OnJAQOcz8Q7NVbVdMrjlKEB1uHNdyaQ3_pOMw_s8A

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
        <Route exact path="/workoutPlan/Gym" component={GYM} />
        <Route exact path="/workoutPlan/Mma" component={MMA} />
        <Route exact path="/workoutPlan/Aerobic" component={AEROBIC} />
        <Route exact path="/workoutPlan/Cardio" component={CARDIO} />
        <Route exact path="/workoutPlan/Zumba" component={ZUMBA} />
        <Route exact path="/workoutPlan/Pool" component={POOL} />
        <Route exact path="/coaches" component={Coaches} />
        <Route exact path="/SignIn" component={SignIn} />
        <ProtectedRouteUser
          exact
          path="/myinfo"
          component={MyInfo}
          isUserAuth={isUserAuth}
        />
        <ProtectedRouteUser
          exact
          path="/myclasses"
          component={MyClass}
          isUserAuth={isUserAuth}
        />
        <ProtectedRouteUser
          exact
          path="/editInfo"
          component={EditInfo}
          isUserAuth={isUserAuth}
        />
        <ProtectedRouteUser
          exact
          path="/payment"
          component={Payment}
          isUserAuth={isUserAuth}
        />
        <ProtectedRouteUser
          exact
          path="/merchandise"
          component={TheMerchandise}
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
            path="/admin-home"
            component={HomeAdmin}
            isAdminAuth={isAdminAuth}
          />
          <ProtectedRouteAdmin
            exact
            path="/admin"
            component={AdminInfo}
            isAdminAuth={isAdminAuth}
          />
          <ProtectedRouteAdmin
            exact
            path="/admin-memberShip"
            component={Members}
            isAdminAuth={isAdminAuth}
          />
          <ProtectedRouteAdmin
            exact
            path="/admin-workout"
            component={AdminWorkout}
            isAdminAuth={isAdminAuth}
          />
          <ProtectedRouteAdmin
            exact
            path="/admin-membershipType"
            component={MemberShipType}
            isAdminAuth={isAdminAuth}
          />
          <ProtectedRouteAdmin
            exact
            path="/admin-instructor"
            component={Instructor}
            isAdminAuth={isAdminAuth}
          />
          <ProtectedRouteAdmin
            exact
            path="/admin-instructorDate"
            component={InstructorDate}
            isAdminAuth={isAdminAuth}
          />
          <ProtectedRouteAdmin
            exact
            path="/admin-shop"
            component={AdminShop}
            isAdminAuth={isAdminAuth}
          />
          <ProtectedRouteAdmin
            exact
            path="/admin-faq"
            component={FaqAdmin}
            isAdminAuth={isAdminAuth}
          />
          <ProtectedRouteAdmin
            exact
            path="/admin-contactus"
            component={ContactUsAdmin}
            isAdminAuth={isAdminAuth}
          />
          <ProtectedRouteAdmin
            exact
            path="/admin-workWithUs"
            component={WorkWithUs}
            isAdminAuth={isAdminAuth}
          />
        </ConfirmProvider>
      </Switch>
    </Router>
  );
}

export default App;
