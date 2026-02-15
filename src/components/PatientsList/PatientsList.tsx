import type { Patient } from "../../types/Patient";
import PatientCard from "../PatientCard/PatientCard";
import './PatientsList.css'

type props = {
  patients: Patient[];
}

const PatientsList = ({ patients }: props) => {
    return (
      <div>
        <h2>Patients List</h2>
        <div className="patients-list-container">
          { patients.map(patient => (
            <PatientCard
              patient={patient}
            />
          ))}
        </div>
      </div> 
    );
}

export default PatientsList;