import type { Patient } from "../../types/Patient";
import PatientCard from "../PatientCard/PatientCard";

type props = {
  patients: Patient[];
}

const PatientsList = ({ patients }: props) => {
    return <div>
        <div>Patients List</div>
        { patients.map(patient => (
          <PatientCard
            patient={patient}
          />
        ))}
    </div> 
}

export default PatientsList;