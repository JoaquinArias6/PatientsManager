import { useState } from "react";
import type { Patient } from "../../types/Patient";
import "./PatientModal.css"
import close from "../../assets/images/close.png"

type props = {
    patient: Patient | null;
    onModalClose: () => void;
    onSave: (patient: Patient) => void;
};

const PatientModal = ({ patient, onModalClose, onSave }: props) => {
    const [formData, setFormData] = useState<Patient>(
      patient || {
        id: crypto.randomUUID(),
        name: "",
        avatar: "",
        description: "",
        website: "",
      }
    );

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
      <div className="modal-overlay">
        <div className="modal-container">
          <form onSubmit={handleSubmit}>
            <div className="title-container">
              <div/>
              <h2>{ patient ? `Edit ${patient.name}` : 'Add New Patient'}</h2>
              <button className="close-button" onClick={onModalClose}>
                <img src={close} width={20} height={20}/>
              </button>
            </div>
            <div className="inputs-container">
              <label className="label-container">
                  Name: 
                  <input 
                    className="field-box"
                    type="text" 
                    name="name"
                    value={formData.name} 
                    onChange={handleChange}
                    required
                  />
              </label>
              <label className="label-container">
                  Avatar: 
                  <input 
                    className="field-box"
                    type="url" 
                    name="avatar"
                    value={formData.avatar} 
                    onChange={handleChange}
                  />
              </label>
              <label className="label-container">
                  Website: 
                  <input 
                    className="field-box"
                    type="url" 
                    name="website"
                    value={formData.website} 
                    onChange={handleChange}
                  />
              </label>
              <label className="description-container">
                  Description: 
                  <textarea 
                    className="description-box"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                  />
              </label>
            </div>
            <input 
              className="submit-button"
              type="submit" 
              value="Submit"
            />
          </form>
        </div>
        </div>
    );
}

export default PatientModal;