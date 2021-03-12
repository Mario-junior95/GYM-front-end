import React from "react";

import Rodal from "rodal";
import "rodal/lib/rodal.css";

const ViewInstructorRodal = (props) => {
  return (
    <Rodal
      visible={props.visible}
      onClose={props.hide}
      animation={props.animation}
      duration={props.duration}
      closeMaskOnClick={props.closeMaskOnClick}
      closeOnEsc={props.closeOnEsc}
      height={props.height}
      width={props.width}
      show={props.show}
    >
      <form className="addAdmin">
        <h1 className="Rodal_Title" style={{ textAlign: "center" }}>
          View Instructor Info
        </h1>
        <img
          src={`http://localhost:8000/storage/${props.val.image}`}
          style={{ width: "50%", margin: "0 21%" }}
          alt="error_instructor_img"
        />
        {/* <p style={{ textAlign: "center" }}>
          <strong>Full Name :</strong>
          {props.val.name}
        </p>
        <p style={{ textAlign: "center" }}>
          <strong>Email :</strong>
          {props.val.email}
        </p>
        <p style={{ textAlign: "center" }}>
          <strong>Phone Number : </strong>
          {props.val.phone}
        </p>
        <p style={{ textAlign: "center" }}>
          <strong> Address : </strong>
          {props.val.address}
        </p> */}
        <p style={{ textAlign: "center" }}>
          <strong> Description : </strong>
          <br />
          {props.val.description}
        </p>
      </form>
    </Rodal>
  );
};

export default ViewInstructorRodal;
