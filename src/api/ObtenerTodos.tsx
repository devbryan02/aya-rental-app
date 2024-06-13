import { Vehicle } from "@/interfaces/Vehiculo";

export default async function fetchData(): Promise<Vehicle[]> {
  const URL = "http://localhost:8080/vehicle/list";
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }
  const data: Vehicle[] = await response.json();
  return data;
}
