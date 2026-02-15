import type { Patient } from "../../types/Patient";
import PatientCard from "../PatientCard/PatientCard";
import './PatientsList.css'

type props = {
  patients: Patient[];
  onEditPatient: (patient: Patient) => void;
}

const PatientsList = ({ patients, onEditPatient }: props) => {
    return (
      <div>
        <h2>Patients List</h2>
        <div className="patients-list-container">
          { patients.map(patient => (
            <PatientCard
              key={patient.id}
              patient={patient}
              onEdit={onEditPatient}
            />
          ))}
        </div>
      </div> 
    );
}

export default PatientsList;