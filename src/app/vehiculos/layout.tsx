import NavVehiculo from "@/components/vehiculo/NavVehiculo";
import NavBar from "@/components/nav/NavBar";
import Footer from "@/components/inicio/Footer";


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
