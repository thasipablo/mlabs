import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Modal from "../../../components/UI/Modal";
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
    clinician: "Claudia",
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
          },
        ],
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
          },
          {
            id: 2,
            name: "Pigment bilaire",
            result: "Result 1",
            observations: "Observation 1",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Lorenzo",
    phone: "000 000 002",
    address: "Vutetse",
    gender: "Masculin",
    age: 21,
    weight: 55.7,
    clinician: "Claudia Warren",
    analysisReports: [
      {
        id: 1,
        patient: "Patient 2",
        date: "Thursday 2022-01-01",
        exams: [],
      },
      {
        id: 2,
        patient: "Patient 2",
        date: "Thursday 2022-01-01",
        exams: [],
      },
      {
        id: 3,
        patient: "Patient 2",
        date: "Thursday 2022-01-01",
        exams: [],
      },
    ],
  },
  {
    id: 3,
    name: "Margarita",
    phone: "000 000 003",
    address: "Vungili",
    gender: "Féminin",
    age: 30,
    weight: 70,
    clinician: "Monitar Gad",
  },
];

const Patients = () => {
  const [patient, setPatient] = useState(patients[0]);
  const [filteredPatients, setFilteredPatients] = useState(patients);
  const [showModal, setShowModal] = useState(false);

  /**
   * this toggles the new patient modal form
   * @param {e} e event
   */
  const hideModal = (e) => {
    if (e.target === e.currentTarget) {
      setShowModal(!showModal);
    }
  };

  const onShowPatientDetails = (id) => {
    patients.map((patient) => {
      if (patient.id === id) {
        setPatient(patient);
      }
    });
  };

  const onSearchPatients = (e) => {
    const searchTerm = e.target.value;
    const foundPatients = patients.filter((patient) => {
      return (
        patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.phone.includes(searchTerm) ||
        patient.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.gender.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredPatients(foundPatients);
  };

  return (
    <div className="patients-container">
      <div className="patients-list">
        <div className="header with-separator">
          <div className="section-title">Patients</div>
          <div className="actions">
            <button className="icon" onClick={() => setShowModal(!showModal)}>
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

        {/* add patient form modal */}
        {showModal && (
          <Modal hideModal={hideModal}>
            <form action="">
              <input type="text" placeholder="patient name" />
            </form>
          </Modal>
        )}

        {/* Patients search and filters */}
        <div className="search-filter">
          <div className="search">
            <label className="icon" htmlFor="search-field">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </label>
            <input
              type="text"
              onChange={onSearchPatients}
              id="search-field"
              placeholder="Chercher un patient..."
            />
          </div>
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
              />
            </svg>
          </div>
        </div>

        {/* Patients list */}
        <PatientList
          patients={filteredPatients}
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
