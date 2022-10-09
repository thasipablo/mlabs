import React from "react";
import { NavLink } from "react-router-dom";
import { RouteNames } from "../../../data/RouteNames";

const PatientItem = ({patientId}) => {
  return (
    <NavLink
      to={`${RouteNames.PATIENT}/${patientId}`}
      className="patient-item with-separator"
    >
      <div className="avatar"></div>
      <div className="meta-data">
        <div className="name">Patient Name</div>
        <div className="address">
          Address , +243 000 000 000
        </div>
      </div>
    </NavLink>
  );
};

export default PatientItem;
