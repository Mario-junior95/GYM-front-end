import React from "react";
import { Link } from "react-router-dom";
import "./UserAccount.css";

const UserAccount = () => {
  return (
    <div className="block_userAccount">
      <Link exact="true" to="/myinfo">
        My Breaks
      </Link>
    </div>
  );
};

export default UserAccount;
