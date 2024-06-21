import { Vehicle } from "@/interfaces/Vehiculo";

// todos los vehiculo
export async function fetchData(): Promise<Vehicle[]> {
  const URL = "http://localhost:8080/vehicle/list";
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }
  const data: Vehicle[] = await response.json();
  return data;
}

//vehiculos de mayor a menor
export async function obtenerVehiculoMax(): Promise<Vehicle[]> {
  const URL = "http://localhost:8080/vehicle/filter/max";
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }
  const data: Vehicle[] = await response.json();
  return data;
}

//vehiculos camioneta
export async function obtenerVehiculoCamioneta(): Promise<Vehicle[]> {
  const data = await fetchData();
  const dataCamioneta = data.filter((auto) => auto.typeVehicle === "Camioneta");
  return dataCamioneta;
}

// obtener vehiclo menor a mayor
export async function obtenerVehicluloMin(): Promise<Vehicle[]> {
  const URL = "http://localhost:8080/vehicle/filter/min";
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }
  const data: Vehicle[] = await response.json();
  return data;
}

// vehiculos autos
export async function obtenerVehiculoAuto() {
  const data = await fetchData();
  const dataAuto = data.filter((auto) => auto.typeVehicle === "Auto");
  return dataAuto;
}

// vehiculo por ID
export async function getVehicleById(id: string) {
  try {
    const res = await fetch(`http://localhost:8080/vehicle/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching vehicle data:", error);
    throw error;
  }
}

export default {
  obtenerVehiculoMax,
  fetchData,
  obtenerVehicluloMin,
  obtenerVehiculoAuto,
  getVehicleById
};
