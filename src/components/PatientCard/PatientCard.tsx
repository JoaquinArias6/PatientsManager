import type { Patient } from "../../types/Patient";

type props = {
  patient: Patient;
}

const PatientCard = ({patient}: props) => {
  return <>
    <h3>{patient.name}</h3>
  </>
}

export default PatientCard;
