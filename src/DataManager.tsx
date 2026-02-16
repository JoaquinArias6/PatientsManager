import { useEffect, useState } from 'react';
import PatientsList from './components/PatientsList/PatientsList';
import './DataManager.css'
import usePatientsData from './hooks/usePatientsData';
import type { Patient } from './types/Patient';
import PatientModal from './components/PatientModal/PatientModal';

const DataManager = () => {
  const { patients } = usePatientsData()
  const [localPatients, setLocalPatients] = useState<Patient[]>([]);
  const [isCreatingPatient, setIsCreatingPatient] = useState<boolean>(false);
  const [editPatient, setEditPatient] = useState<Patient | null>(null);

  useEffect(() => {
    setLocalPatients(patients);
  }, [patients]);

  const handleCreatePatient = (newPatient: Patient) => {
    setLocalPatients(prev => [newPatient, ...prev])
    alert("User Created Successfully!")
  }

  const handleEditPatient = (patient: Patient) => {
    console.log("IS EDITING")
    setEditPatient(patient);
  }

  const handleSavePatient = (updatedPatient: Patient) => {
    setLocalPatients(prev =>
      prev.map(p => p.id === updatedPatient.id ? updatedPatient : p))
    alert("User Edited Successfully!")
  }

  console.log(editPatient)

  return (
    <>
      <h1>Data Manager</h1>
      <button onClick={() => setIsCreatingPatient(true)}>+ New Patient</button>
      <PatientsList 
        patients={localPatients}
        onEditPatient={handleEditPatient}
      />
      { isCreatingPatient && 
        <PatientModal
          patient={null}
          onModalClose={() => setIsCreatingPatient(false)}
          onSave={handleCreatePatient}
        />
      }
      { editPatient && 
        <PatientModal
          patient={editPatient}
          onModalClose={() => setEditPatient(null)}
          onSave={handleSavePatient}
        />
      }
    </>
  )
}

export default DataManager;
