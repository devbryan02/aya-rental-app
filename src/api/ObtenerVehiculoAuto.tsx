import fetchData from "@/api/ObtenerTodos"
export default async function obtenerVehiculoAuto() {
    const data = await fetchData();
    const dataAuto = data.filter((auto) => auto.typeVehicle === "Auto");
    return dataAuto;
  }