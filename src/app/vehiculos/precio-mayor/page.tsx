import VehiculoPrecioMayor from "@/components/vehiculo/VehiculoMax"
import {obtenerVehiculoMax} from "@/api/ObtenerTodos"

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