import { useState } from "react";
import type { Patient } from "../../types/Patient";
import './PatientCard.css'

type props = {
  patient: Patient;
}

const PatientCard = ({patient}: props) => {
  const [isExpanded, setExpanded] = useState<boolean>(false);

  return (
    <div className="patient-container">
      {patient.avatar &&
        <img className="patient-avatar" src={patient.avatar} alt={patient.name}></img>
      }
      <h3>{patient.name}</h3>
      <a className="patient-link" href={patient.website}>WEBSITE</a>
      <button className="button" onClick={() => setExpanded(!isExpanded)}>See description..</button>
      { isExpanded &&
        <p>{patient.description}</p>
      }
      <button className="button" onClick={() => {}}>Edit</button>
    </div>
  );
}

export default PatientCard;
