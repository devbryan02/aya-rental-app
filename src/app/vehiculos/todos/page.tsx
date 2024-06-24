import TodosLosAutos from "@/components/vehiculo/Todos"
import {fetchData} from "@/services/vehiculo"
import { Vehicle } from "@/interfaces/Vehiculo"
import { useRouter } from "next/router";

export default async function TodosLosVehiculos(){

    const autos :Vehicle[] = await fetchData();

    return(
        <>
       <div className="flex flex-wrap gap-5 p-5 justify-center">
       <TodosLosAutos autos={autos}/> 
       </div>
        </>
    )
}