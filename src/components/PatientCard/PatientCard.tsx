import { useState } from "react";
import type { Patient } from "../../types/Patient";
import './PatientCard.css'
import doctorImage from "../../assets/images/doctor.png"

type props = {
  patient: Patient;
  onEdit: (patient: Patient) => void;
}

const PatientCard = ({patient, onEdit}: props) => {
  const [isExpanded, setExpanded] = useState<boolean>(false);

  return (
    <div className="patient-container">
      <div className="patient-wrapper">
        { patient.avatar &&
          <img 
            className="patient-avatar" 
            src={patient.avatar || doctorImage} 
            alt={patient.name}
            onError={(e) => {
              e.currentTarget.src = doctorImage
            }}
          />
        }
        <div className="patient-name">
          <h2>{patient.name}</h2>
          { patient.website && 
            <a className="patient-link" href={patient.website}>WEBSITE</a>
          }
          <button className="edit-button" onClick={() => onEdit(patient)}>Edit</button>
          <button 
            className="button" 
            onClick={() => setExpanded(!isExpanded)}
          >
            { !isExpanded ? 'See description..' : 'Close' }
          </button>
        </div>
      </div>
      { patient.description &&
        <div>
          { isExpanded &&
            <p>{patient.description}</p>
          }
        </div>
      }
    </div>
  );
}

export default PatientCard;
