import React from "react";
import PatientItem from "./PatientItem";

const PatientList = ({ patients, onShowPatientDetails }) => {
  return (
    <div className="patient-list-content">
      {patients.map((patient) => (
        <PatientItem
          patient={patient}
          onShowPatientDetails={onShowPatientDetails}
          key={patient.id}
        />
      ))}
    </div>
  );
};

export default PatientList;
