import VehiculoAuto from "@/components/vehiculo/Autos";
import {obtenerVehiculoAuto} from "@/services/vehiculo";

export default async function Auto() {
  const autos = await obtenerVehiculoAuto();

  return (
    <>
      <div className="flex flex-wrap gap-5 p-5 justify-center">
        <VehiculoAuto autos={autos} />
      </div>
    </>
  );
}
