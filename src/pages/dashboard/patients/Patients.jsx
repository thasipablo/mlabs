import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import PatientDetails from "./PatientDetails";
import PatientList from "./PatientList";

const patients = [
  {
    id: 1,
    name: "Bedriften",
    phone: "000 000 001",
    address: "Vulumbi",
    gender: "Masculin",
    age: 43,
    weight: 67.7,
    clinician : "Claudia",
    analysisReports: [
      {
        id: 1,
        patient: "Patient 1",
        date: "Thursday 2022-01-01",
        exams: [
          {
            id: 1,
            name: "Pigment bilaire",
            result: "Result 1",
            observations: "Observation 1",
          }
        ]
      },
      {
        id: 2,
        patient: "Patient 1",
        date: "Friday 2022-01-02",
        exams: [
          {
            id: 1,
            name: "Pigment bilaire",
            result: "Result 1",
            observations: "Observation 1",
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Lorenzo",
    phone: "000 000 002",
    address: "Vutetse",
    gender: "Masculin",
    age: 21,
    weight: 55.7,
    clinician : "Claudia Warren",
    analysisReports: [
      { 
        id: 1,
        patient: "Patient 2",
        date: "Thursday 2022-01-01",
        exams: []
      }
    ]
  },
  {
    id: 3,
    name: "Margarita",
    phone: "000 000 003",
    address: "Vungili",
    gender: "Féminin",
    age: 30,
    weight: 70,
    clinician : "Monitar Gad",
  },
];

const Patients = () => {
  const [patient, setPatient] = useState(patients[0]);

  const onShowPatientDetails = (id) => {
    patients.map((patient) => {
      if (patient.id === id) {
        setPatient(patient)
      }
    });
  };

  return (
    <div className="patients-container">
      <div className="patients-list">
        <div className="header with-separator">
          <div className="section-title">Patients</div>
          <div className="actions">
            <div>Search</div>
            <button className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Patients list */}
        <PatientList
          patients={patients}
          onShowPatientDetails={onShowPatientDetails}
        />
      </div>

      {/* Patient details */}
      <PatientDetails patient={patient} />
      {/* <Outlet /> */}
    </div>
  );
};

export default Patients;
