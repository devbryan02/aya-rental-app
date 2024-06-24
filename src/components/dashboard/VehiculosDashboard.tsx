"use client";
import { IoAddCircleOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import Link from "next/link";
import { Vehicle } from "@/interfaces/Vehiculo";
import ButtonDelete from "../vehiculo/ButtonDelete";
import { PiCurrencyDollarSimpleFill } from "react-icons/pi";

interface AutosListProps {
  autos: Vehicle[];
}

export default function VehiculosDashboard({ autos }: AutosListProps) {
  return (
    <>
      <div className="flex gap-3 flex-col mt-3 mx-auto w-[70%] pb-10">
        <div>
          <h2 className="text-3xl drop-shadow-lg uppercase text-gray-600 font-semibold mb-3">
            Inventario vehiculos{" "}
            <span className="text-red-400 uppercase font-semibold">
              Aya rental
            </span>
          </h2>
          <Link
            className="btn bg-red-400 border-none shadow-lg hover:bg-red-500 text-white"
            href="/dashboard/vehiculos/nuevo"
          >
            <IoAddCircleOutline size={20} color="white" />
            Nuevo
          </Link>
        </div>
        <div className="overflow-x-auto h-[370px] overflow-y-auto text-gray-700">
          <table className="table border-collapse table-auto">
            {/* head */}
            <thead className="text-gray-700 ">
              <tr>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Imagen</th>
                <th>Precio</th>
                <th>Placa</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody className="hover">
              {autos.map((auto) => (
                <tr key={auto.id}>
                  <td className="border-t border-gray-300">{auto.brand}</td>
                  <td className="border-t border-gray-300">{auto.model}</td>
                  <td className="border-t border-gray-300">
                    <img src={auto.imageUrl} alt={auto.model} width={50} />
                  </td>
                  <td className="border-t border-gray-300">
                    <p className="badge badge-error shadow-lg text-white">
                      <PiCurrencyDollarSimpleFill />
                      {auto.price}/dia
                    </p>
                  </td>
                  <td className="border-t border-gray-300">{auto.plate}</td>
                  <td className="border-t border-gray-300">
                    <Link
                      className="btn btn-sm shadow-lg btn-success text-white text-sm"
                      href={`/dashboard/vehiculos/editar/${auto.id}`}
                    >
                      <FaRegEdit size={15} />
                    </Link>
                    <ButtonDelete idVehicle={auto.id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
