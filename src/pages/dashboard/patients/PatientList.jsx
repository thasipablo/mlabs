import React from "react";
import PatientItem from "./PatientItem";

const PatientList = () => {
  return (
    <div className="">
      <PatientItem patientId={1} />
      <PatientItem patientId={2}/>
      <PatientItem patientId={3}/>
      <PatientItem patientId={4}/>
      <PatientItem patientId={5}/>
    </div>
  );
};

export default PatientList;
