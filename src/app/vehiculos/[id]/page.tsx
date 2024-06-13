"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowSmLeft } from "react-icons/hi";

interface VehiculoPaginaProps {
  params: {
    id: string;
  };
}

async function getVehicleById(id: string) {
  const rest = await fetch(`http://localhost:8080/vehicle/${id}`);
  const data = rest.json();
  return data;
}

export default async function VehiculoPagina({ params }: VehiculoPaginaProps) {
  const vehicle = await getVehicleById(params.id);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.3 }}
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
          <p className="mt-3 font-semibold p-3 cursor-pointer bg-red-400 hover:bg-red-500 rounded-lg text-center text-white">
            {vehicle.price}
            {"/dia"}
          </p>
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
      </motion.div>
    </>
  );
}
