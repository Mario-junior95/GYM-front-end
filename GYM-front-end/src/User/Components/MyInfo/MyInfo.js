import React from "react";
// import "./MyInfo.css";
import Header from "../Navigation/Header";
import Male from "../../../Images/male.png";
import Female from "../../../Images/Female.png";
import UserAccount from "../UserAccount/UserAccount";

const MyInfo = () => {
  return (
    <div className="LoginSection">
      <Header />
      <div className="container">
        <div className="wrapper">
          <div className="home">
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
                    <span className="infoText">
                      {localStorage.getItem("lastname")}
                    </span>
                  </p>
                  <p>
                    Email :{" "}
                    <span className="infoText">
                      {localStorage.getItem("email")}
                    </span>
                  </p>
                  <p>
                    Phone :{" "}
                    <span className="infoText">
                      {localStorage.getItem("phone")}
                    </span>
                  </p>
                  <p>
                    Address :{" "}
                    <span className="infoText">
                      {localStorage.getItem("address")}
                    </span>
                  </p>
                  <p>
                    Date :{" "}
                    <span className="infoText">
                      {localStorage.getItem("date")}
                    </span>
                  </p>
                  <p>
                    Gender :{" "}
                    <span className="infoText">
                      {localStorage.getItem("gender")}
                    </span>
                  </p>
                </div>
                <div>
                  {localStorage.getItem("gender") === "Male" ? (
                    <img
                      src={Male}
                      alt="error_male_img"
                      className="gender_male"
                      style={{transform: 'translate3d(65px, 10.63vw, 83px)',
                        marginTop: '-28vw',
                        marginLeft: '30vw',
                        height: '30vw',
                    }}
                    />
                  ) : (
                    <img
                      src={Female}
                      alt="error_female_img"
                      className="gender_female"
                      style={{    transform: 'translate3d(78px, 5.63vw, 83px)',
                        marginTop: '-28vw',
                        marginLeft: '37vw',
                        height: '35vw'
                  }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
