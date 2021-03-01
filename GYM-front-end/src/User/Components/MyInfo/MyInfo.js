import React, { useState } from "react";
import "./MyInfo.modules.css";
import Male from "../../../Images/male.png";
import Female from "../../../Images/Female.png";
import UserAccount from "../UserAccount/UserAccount";

const MyInfo = () => {

  return (
    <div>
      <UserAccount />
      <div className="sideBox">
        <h1>My Info</h1>
        <span>Edit Info</span>
        <div>
          <p>
            First Name :{" "}
            <span className="infoText">
              {localStorage.getItem("firstname")}
            </span>
          </p>
          <p>
            Last Name :{" "}
            <span className="infoText">{localStorage.getItem("lastname")}</span>
          </p>
          <p>
            Email :{" "}
            <span className="infoText">{localStorage.getItem("email")}</span>
          </p>
          <p>
            Phone :{" "}
            <span className="infoText">{localStorage.getItem("phone")}</span>
          </p>
          <p>
            Address :{" "}
            <span className="infoText">{localStorage.getItem("address")}</span>
          </p>
          <p>
            Date :{" "}
            <span className="infoText">{localStorage.getItem("date")}</span>
          </p>
          <p>
            Gender :{" "}
            <span className="infoText">{localStorage.getItem("gender")}</span>
          </p>
        </div>
        <div>
        {localStorage.getItem("gender") === "Male" ? (
          <img src={Male} alt="error_male_img" className="gender_male" />
        ) : (
          <img src={Female} alt="error_female_img" className="gender_female" />
    
        )}
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
