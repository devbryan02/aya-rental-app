import Link from "next/link";
import { HiArrowSmLeft } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { CiBadgeDollar } from "react-icons/ci";
import {getVehicleById} from "@/services/vehiculo"

interface VehiculoPaginaProps {
  params: {
    id: string;
  };
}

export default async function VehiculoPagina({ params }: VehiculoPaginaProps) {
  const vehicle = await getVehicleById(params.id);
  return (
    <>
      {vehicle ? 
      <div
      key={vehicle.id}
      className="flex flex-wrap gap-5 justify-center items-center h-[80vh]"
    >
      <div>
        <Link className="mb-2" href="/vehiculos/todos">
          <HiArrowSmLeft size={30} color="#353b48" />
        </Link>
        <p className="text-4xl font-semibold text-gray-700 mb-3">
          {vehicle.brand} {vehicle.model}
        </p>
        <p className="text-lg text-gray-600 mb-3">{vehicle.description}</p>
        <div className="flex gap-2 mb-3">
          <p className="badge badge-warning text-white">{vehicle.year}</p>
          <p className="badge badge-info text-white">{vehicle.typeVehicle}</p>
          <p className="badge badge-success text-white">
            {vehicle.vehicleStatus}
          </p>
        </div>
        <p className="btn w-full">
          <CiBadgeDollar size={20} color="white"/>{vehicle.price}
          {"/dia"}
        </p>
        <a className="btn text-white btn-success mt-2 w-full" href={`https://wa.me/+51992450988?text=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20el%20${vehicle.brand+" "+vehicle.model}`} target="_blank">
          <FaWhatsapp size={20}/> Seguir compra en WhatsApp
        </a>
      </div>
      <figure className="flex flex-col gap-3 justify-end">
        <img
          className="rounded-box shadow-lg"
          src={vehicle.imageUrl}
          alt="imagen de auto"
          width={500}
        />
        <div className="flex justify-end gap-2">
          <p className="badge text-end ">Placa {vehicle.plate}</p>
          <p className="badge text-end ">
            Capacidad {vehicle.passengerCapacity}
          </p>
        </div>
      </figure>
    </div>
     : "Cargando" }
    </>
  );
}
