import NavVehiculo from "@/components/vehiculo/NavVehiculo";

function LayoutVehiculo({children,}: Readonly<{ children: React.ReactNode }>){

    return(
        <>
        <NavVehiculo/>
        {children}
        </>
    )

}

export default LayoutVehiculo;