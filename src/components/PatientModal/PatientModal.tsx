import { useState } from "react";
import type { Patient } from "../../types/Patient";
import "./PatientModal.css"

type props = {
    patient: Patient;
    onModalClose: () => void;
    onSave: (updatedPatient: Patient) => void;
};

const PatientModal = ({ patient, onModalClose, onSave }: props) => {
    const [formData, setFormData] = useState<Patient>(patient);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSave(formData);
      onModalClose();
    }

    return (
      <div className="modal-container">
        <form onSubmit={handleSubmit}>
          <h2>Edit {patient.name}</h2>
          <label>
              Name:
              <input 
                type="text" 
                name="name"
                value={formData.name} 
                onChange={handleChange}
                required
              />
          </label>
          <label>
              Avatar:
              <input 
                type="url" 
                name="avatar"
                value={formData.avatar} 
                onChange={handleChange}
              />
          </label>
          <label>
              Website:
              <input 
                type="url" 
                name="website"
                value={formData.website} 
                onChange={handleChange}
              />
          </label>
          <label>
              Description:
              <textarea 
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
          </label>
          <input type="submit" value="Submit"/>
          <button onClick={onModalClose}>Close</button>
        </form>
      </div>
    );
}

export default PatientModal;