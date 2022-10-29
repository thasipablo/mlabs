import React from "react";

const PatientDetails = ({ patient }) => {
  return (
    <div className="patient-details">
      <div className="section">
        <div className="section-title">identite</div>
        <div className="section-content patient-identity">
          <div className="avatar">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div className="data">
            <h2 className="name">{patient.name}</h2>
            <div className="data-plus">
              <div className="left">
                <div>Genre: <strong>{patient.gender}</strong></div>
                <div>Phone: <strong>{patient.phone}</strong></div>
                <div>Addresse: <strong>{patient.address}</strong></div>
              </div>
              <div className="right">
                <div>Age: <strong>{patient.age} ans</strong></div>
                <div>Poid: <strong>{patient.weight} Kg</strong></div>
                <div>Clinicien demandeur: <strong>{patient.clinician}</strong></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="section-title">bulletins d'analyse</div>
        <div className="section-content patient-data">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;
