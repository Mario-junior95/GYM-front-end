import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Header from "../Navigation/Header";
import UserAccount from "../UserAccount/UserAccount";
import "./Classes.css";

const Classes = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [render, setRender] = useState(false);
  const [listClasses, setListClasses] = useState([]);

  const expireToken = () => {
    localStorage.clear() && <Redirect exact="true" to="/SignIn" />;
  };

  useEffect(async () => {
    await Axios.get(
      `http://localhost:8000/api/user/${localStorage.getItem("idUser")}`,
      {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    ).then((response) => {
      if (
        response.data.status === "Token is Expired" ||
        response.data.status === "Token is Invalid" ||
        response.data.status === "Authorization Token not found"
      ) {
        expireToken();
        return window.location.reload();
      } else {
        setListClasses(response.data.user.membership);
        // console.log(response.data.user.membership[0].name)
        setName(response.data.user.membership[0].name);
        setAmount(response.data.user.membership[0].amount);
        setDate(response.data.user.membership[0].date);
      }
    });
  }, []);

  return (
    <div className="LoginSection">
      <Header />
      <div className="container">
        <div className="wrapper">
          <div className="home">
            <div>
              <UserAccount />
              <table>
                <tr>
                  <th>MemberShip Type</th>
                  <th> Amount </th>
                  <th>Date</th>
                </tr>
                <tr>
                  <td>
                    <span className="infoText">{name}</span>
                  </td>
                  <td>
                    {" "}
                    <span className="infoText">
                      {amount}
                      {"$"}
                    </span>
                  </td>
                  <td>
                    {" "}
                    <span className="infoText">{date}</span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
