import Camionetas from "@/components/vehiculo/Camionetas";
import { obtenerVehiculoCamioneta } from "@/api/ObtenerTodos";
import { Vehicle } from "@/interfaces/Vehiculo";

export default async function Camioneta() {
  const autos: Vehicle[] = await obtenerVehiculoCamioneta();
  return (
    <>
      <div className="flex flex-wrap gap-5 p-5 justify-center">
        <Camionetas autos={autos} />
      </div>
    </>
  );
}
