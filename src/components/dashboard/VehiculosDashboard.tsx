import { CiMedicalCross } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";

export default function VehiculosDashboard() {
  return (
    <>
      <div className="flex gap-10 flex-col mt-10 mx-auto w-[70%]">
        <div>
          <h2 className="text-3xl text-gray-600 font-semibold mb-5">
            Inventario vehiculos{" "}
            <span className="text-red-400 uppercase font-semibold">
              Aya rental
            </span>
          </h2>
          <a className="btn btn-error text-white" href="">
            <CiMedicalCross size={20} color="white" />
            Nuevo
          </a>
        </div>
        <div className="overflow-x-auto text-gray-700">
          <table className="table">
            {/* head */}
            <thead className="text-gray-700">
              <tr>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Imagen</th>
                <th>Precio</th>
                <th>Placa</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Toyota</th>
                <td>Corola</td>
                <td>[img]</td>
                <td>500/dia</td>
                <td>JKSDNG</td>
                <td>
                  <a className="btn btn-sm btn-success text-white" href="">
                    <FaRegEdit size={15} />
                    Editar
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
