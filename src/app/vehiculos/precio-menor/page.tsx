
import VehiculoDeMenorAMayor from "@/components/vehiculo/VehiculoMin"
import {obtenerVehicluloMin} from "@/api/ObtenerTodos"
import { Vehicle } from "@/interfaces/Vehiculo"

export default async function PrecioMenor(){

    const autos: Vehicle[] = await obtenerVehicluloMin();
 
    return(
        <>
        <div
         className="flex flex-wrap gap-5 p-5 justify-center">
        <VehiculoDeMenorAMayor autos={autos}/>
        </div>
        </>
    )
}