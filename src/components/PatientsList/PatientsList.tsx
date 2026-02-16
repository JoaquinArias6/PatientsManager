import { useState } from "react";
import type { Patient } from "../../types/Patient";
import PatientCard from "../PatientCard/PatientCard";
import './PatientsList.css'

type props = {
  patients: Patient[];
  onEditPatient: (patient: Patient) => void;
}

const PatientsList = ({ patients, onEditPatient }: props) => {
    const [page, setPage] = useState<number>(1);
    const totalPages = Math.ceil(patients.length / 10);
    const firstPatient = (page - 1) * 10;
    const currentPatients = patients.slice(firstPatient, firstPatient + 10);

    return (
      <div>
        <div className="patients-list-container">
          <h2>Patients List</h2>
          { currentPatients.map(patient => (
            <PatientCard
              key={patient.id}
              patient={patient}
              onEdit={onEditPatient}
            />
          ))}
          <div className="page-buttons">
            <button
              onClick={() => setPage(page - 1)}
              disabled = {page === 1}
            >
              Previous
            </button>
            <span>{page}/{totalPages}</span>
            <button
              onClick={() => setPage(page + 1)}
              disabled = {page === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div> 
    );
}

export default PatientsList;