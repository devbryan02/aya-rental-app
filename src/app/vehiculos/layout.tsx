import NavVehiculo from "@/components/vehiculo/NavVehiculo";
import NavBar from "@/components/nav/NavBar";
import Footer from "@/components/inicio/Footer";
import { Metadata } from "next";

export const metadata : Metadata = {
  title : "Descubre vehiculos",
  description: "Vehiculos disponibles en aya rental"
}

function LayoutVehiculo({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
    <NavBar/>
      <NavVehiculo />
      {children}
      <Footer /> 
    </>
  );
}

export default LayoutVehiculo;
