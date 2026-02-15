import type { Patient } from "../types/Patient";

export async function fetchPatients(): Promise<Patient[]> {
    const patients = await fetch("https://63bedcf7f5cfc0949b634fc8.mockapi.io/users");

    if (!patients.ok) {
        throw new Error("Error on fetch")
    }

    return patients.json();
}
