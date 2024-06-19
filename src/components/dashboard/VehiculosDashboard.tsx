import { IoAddCircleOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import fetchData from "@/api/ObtenerTodos";
import Link from "next/link";

export default async function VehiculosDashboard() {
  const autos = await fetchData();

  return (
    <>
      <div className="flex gap-3 flex-col mt-3 mx-auto w-[70%] pb-10">
        <div>
          <h2 className="text-3xl uppercase text-gray-600 font-semibold mb-3">
            Inventario vehiculos{" "}
            <span className="text-red-400 uppercase font-semibold">
              Aya rental
            </span>
          </h2>
          <Link
            className="btn bg-red-400 border-none hover:bg-red-500 text-white"
            href="/dashboard/vehiculos/nuevo"
          >
            <IoAddCircleOutline size={20} color="white" />
            Nuevo
          </Link>
        </div>
        <div className="overflow-x-auto h-[370px] overflow-y-auto text-gray-700">
          <table className="table">
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
                  <th>{auto.brand}</th>
                  <td>{auto.model}</td>
                  <td>
                    <img src={auto.imageUrl} alt={auto.model} width={50} />
                  </td>
                  <td>{auto.price}/dia</td>
                  <td>{auto.plate}</td>
                  <td>
                    <Link
                      className="btn btn-sm btn-success text-white"
                      href={`/dashboard/vehiculos/editar/${auto.id}`}
                    >
                      <FaRegEdit size={15} />
                      Editar
                    </Link>
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
