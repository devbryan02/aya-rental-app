import { FaCarSide } from "react-icons/fa";
import { FaShuttleVan } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import Link from "next/link";
import fetchData from "@/api/ObtenerTodos"

async function obtenerTotalVehiculo(){
  const autos = await fetchData();
  return autos.length;
}

async function obtenerTotalVehiculoAuto(){
  const autos = await fetchData();
  const VehiculosAutos = autos.filter(auto => auto.typeVehicle === "Auto")
  return VehiculosAutos.length;
}

async function obtenerTotalVehiculoCamioneta(){
  const autos = await fetchData();
  const VehiculosAutos = autos.filter(auto => auto.typeVehicle === "Camioneta")
  return VehiculosAutos.length;
}

export default async function NavVehiculo() {

  const total = await obtenerTotalVehiculo();
  const totalAutos = await obtenerTotalVehiculoAuto();
  const totalCamionetas = await obtenerTotalVehiculoCamioneta();

  return (
    <>
      <div className="mt-5 md:mt-3 flex flex-wrap gap-5 justify-center md:justify-end items-center">
        <ul className="menu bg-transparent menu-vertical md:menu-horizontal">
        <li>
            <Link className="text-gray-600" href="/vehiculos/todos">
              <FaCarSide size={20} />
              Todos los vehiculos
              <span className="badge badge-sm">+{total}</span>
            </Link>
          </li>
          <li>
            <Link className="text-gray-600" href="/vehiculos/autos">
              <FaCarSide size={20} />
              Autos
              <span className="badge badge-sm">+{totalAutos}</span>
            </Link>
          </li>
          <li>
            <Link className="text-gray-600" href="/vehiculos/camionetas">
              <FaShuttleVan size={20} />
              Camionetas
              <span className="badge badge-sm bg-gray-700">+{totalCamionetas}</span>
            </Link>
          </li>
          <li>
            <Link className="text-gray-600" href="/vehiculos/precio-mayor">
              <FaArrowUp size={20} />
              Precio mayor
            </Link>
          </li>
          <li>
            <Link className="text-gray-600" href="/vehiculos/precio-menor">
              <FaArrowDown size={20} />
              Precio menor
            </Link>
          </li>
          <li>
            <input
              type="text"
              className="bg-gray-100 mx-auto md:mx-1 text-gray-700 grow input input-bordered input-sm w-full max-w-xs flex"
              placeholder="Buscar vehiculo"
            />
          </li>
        </ul>
      </div>
    </>
  );
}
