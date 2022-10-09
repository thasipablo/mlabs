import React from "react";
import { Outlet } from "react-router-dom";
import PatientList from "./PatientList";

const Patients = () => {
  return (
    <div className="patients-container">
      <div className="patients-list">
        <div className="header with-separator">
          <div className="section-title">Patients</div>
          <div className="actions">
            <div>Search</div>
            <button>+</button>
          </div>
        </div>
        <PatientList />
      </div>
      <div className="patient-details">
        <Outlet />
      </div>
    </div>
  );
};

export default Patients;
