import VehiculosDashboard from "@/components/dashboard/VehiculosDashboard";
import {fetchData} from "@/api/ObtenerTodos"
import { Vehicle } from "@/interfaces/Vehiculo";

export default async function VehiculoDashPage(){

    const data :Vehicle[] = await fetchData();

    return(
        <>
        <VehiculosDashboard autos={data}/>
        </>
    )
}