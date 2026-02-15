import { useEffect, useState } from 'react';
import PatientsList from './components/PatientsList/PatientsList';
import './DataManager.css'
import usePatientsData from './hooks/usePatientsData';
import type { Patient } from './types/Patient';
import PatientModal from './components/PatientModal/PatientModal';

const DataManager = () => {
  const { patients } = usePatientsData()
  const [localPatients, setLocalPatients] = useState<Patient[]>([]);

  const [editPatient, setEditPatient] = useState<Patient | null>(null);

  useEffect(() => {
    setLocalPatients(patients);
  }, [patients]);

  const handleEditPatient = (patient: Patient) => {
    console.log("IS EDITING")
    setEditPatient(patient);
  }

  const handleSavePatient = (updatedPatient: Patient) => {
    setLocalPatients(prev =>
      prev.map(p => p.id === updatedPatient.id ? updatedPatient : p))
  }

  console.log(editPatient)


  return (
    <>
      <div>Data Manager</div>
      <PatientsList 
        patients={localPatients}
        onEditPatient={handleEditPatient}
      />
      {editPatient && 
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
