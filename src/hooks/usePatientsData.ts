import { useEffect, useState } from "react";
import { fetchPatients } from "../services/PatientsService";
import type { Patient } from "../types/Patient";

function usePatientsData() {
    const [patients, setPatients] = useState<Patient[]>([])
    
    console.log("FETCHING INFORMAITON")

    useEffect(() => {
        fetchPatients()
            .then (data => {
                setPatients(data);
            })
    }, []);

    return {patients}
}

export default usePatientsData;
