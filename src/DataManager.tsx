import PatientsList from './components/PatientsList/PatientsList';
import './DataManager.css'
import usePatientsData from './hooks/usePatientsData';

const DataManager = () => {
  const { patients } = usePatientsData()

  return (
    <>
      <div>Data Manager</div>
      <PatientsList patients={patients}/>
    </>
  )
}

export default DataManager;
