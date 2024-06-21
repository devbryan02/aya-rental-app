
import { FaCarSide } from "react-icons/fa";
import { FaShuttleVan } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import Link from "next/link";

import {fetchData} from "@/services/vehiculo"
import { Vehicle } from "@/interfaces/Vehiculo";

async function obtenerTotalVehiculo(){
  const autos = await fetchData();
  return autos.length;
}

async function obtenerTotalVehiculoAuto(){
  const autos : Vehicle[] = await fetchData();
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
    <div className="mt-5 md:mt-3 flex flex-wrap gap-5 justify-center md:justify-center items-center">
        <ul className="menu bg-gray-100 rounded-box menu-vertical md:menu-horizontal ml-5">
        <li>
            <Link className="text-gray-600" href="/vehiculos/todos">
              <FaCarSide size={20} />
              Todos los vehiculos
              <span className="badge badge-sm bg-gray-700">+{total}</span>
            </Link>
          </li>
          <li>
            <Link className="text-gray-600" href="/vehiculos/autos">
              <FaCarSide size={20} />
              Autos
              <span className="badge badge-sm bg-gray-700">+{totalAutos}</span>
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
        </ul>
      </div>
    </>
  );
}
