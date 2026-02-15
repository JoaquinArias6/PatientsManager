import type { Patient } from "../types/Patient";

const API_URL = "https://63bedcf7f5cfc0949b634fc8.mockapi.io/users"

export async function fetchPatients(): Promise<Patient[]> {
    const response = await fetch(`${API_URL}`);

    if (!response.ok) {
        throw new Error("Error on fetch")
    }

    return response.json();
}

