import { FaCarSide } from "react-icons/fa";
import { FaShuttleVan } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import Link from "next/link";

export default function NavVehiculo() {
  return (
    <>
      <div className="mt-5 md:mt-3 flex gap-5 justify-center md:justify-end items-center">
        <ul className="menu bg-transparent menu-horizontal">
          <li>
            <Link className="text-gray-600" href="/vehiculos/autos">
              <FaCarSide size={20} />
              Autos
              <span className="badge badge-sm">+22</span>
            </Link>
          </li>
          <li>
            <Link className="text-gray-600" href="/vehiculos/camionetas">
              <FaShuttleVan size={20} />
              Camionetas
              <span className="badge badge-sm bg-gray-700">+30</span>
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
