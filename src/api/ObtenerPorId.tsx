async function getVehicleById(id: string) {
  try {
    const res = await fetch(`http://localhost:8080/vehicle/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching vehicle data:", error);
    throw error;
  }
}

export default getVehicleById;
