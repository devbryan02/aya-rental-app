"use client";

import { IoAddCircleOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import Link from "next/link";
import { PiCurrencyDollarSimpleFill } from "react-icons/pi";
import { MdDeleteOutline } from "react-icons/md";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { fetchData } from "@/services/vehiculo";
import { Vehicle } from "@/interfaces/Vehiculo";

export default function VehiculosDashboard() {
  const [autos, setAutos] = useState<Vehicle[]>([]);
  const [refreshData, setRefreshData] = useState(false);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const data = await fetchData();
        setAutos(data);
        setRefreshData(true);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataAsync();
  }, [refreshData]); // Añadir refreshData como dependencia

  const handleDelete = async (idVehicle: string) => {
    const result = await Swal.fire({
      title: "¿Estas segura de eliminar este vehiculo?",
      text: "Se borrará permanentemente",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, quiero eliminar",
    });

    if (result.isConfirmed) {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.delete(
          `http://localhost:8080/vehicle/delete/${idVehicle}`,
          {
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`,
            },
          }
        );
        if (response.status === 200) {
          await Swal.fire({
            title: "Eliminado!",
            text: "Vehiculo eliminado correctamente",
            icon: "success",
          });
          setRefreshData(prev => !prev); // Actualizar el estado para forzar el re-render
        }
      } catch (error) {
        console.error("Error deleting vehicle:", error);
        Swal.fire({
          title: "Error!",
          text: "No se pudo eliminar el vehiculo",
          icon: "error",
        });
      }
    }
  };

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
                    <button
                      className="btn btn-error shadow-lg btn-sm mx-3 text-white"
                      onClick={() => handleDelete(auto.id)}
                    >
                      <MdDeleteOutline size={15} />
                    </button>
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
