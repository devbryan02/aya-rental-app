"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { MdDeleteOutline } from "react-icons/md";

interface ButtonDeleteProps {
  idVehicle: string;
}

export default function ButtonDelete({ idVehicle }: ButtonDeleteProps) {
  const router = useRouter();

  return (
    <>
      <button
        className="btn btn-error shadow-lg btn-sm mx-3 text-white"
        onClick={async () => {
          Swal.fire({
            title: "¿Estas segura de eliminar este vehiculo?",
            text: "Se borrará permanentemente",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, quiero eliminar",
          }).then(async (result) => {
            if (result.isConfirmed) {
              const token = localStorage.getItem("token");
              const response = await axios.delete(
                `http://localhost:8080/vehicle/delete/${idVehicle}`,
                {
                  headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                  },
                }
              );
              if (response.status) {
                Swal.fire({
                  title: "Eliminado!",
                  text: "Vehiculo eliminado correctamente",
                  icon: "success",
                });
                router.refresh();
              }
            }
          });
        }}
      >
       <MdDeleteOutline size={15}/>
      </button>
    </>
  );
}
