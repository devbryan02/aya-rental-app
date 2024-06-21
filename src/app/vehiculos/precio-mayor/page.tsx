import VehiculoPrecioMayor from "@/components/vehiculo/VehiculoMax"
import {obtenerVehiculoMax} from "@/services/vehiculo"

export default async  function PrecioMayor(){

    const data  = await obtenerVehiculoMax()

    return(
        <>
        <div className="flex flex-wrap gap-5 p-5 justify-center">
        <VehiculoPrecioMayor autos={data}/>
        </div>
        </>
    )
}