"use client";
import { Boletin } from "@/interfaces/Boletin";
import { useEffect, useState } from "react";
import { TbMessagePlus } from "react-icons/tb";
import { LuUsers } from "react-icons/lu";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import axios from "axios";

const API_URL = "http://localhost:8080/boletin/list";

const ListBoletin: React.FC = () => {
  const mensaje =
    "Hola Marco,Espero que te encuentres bien. Quería compartir contigo algo emocionante: ¡nuestra página web ha lanzado nuevas funciones y contenido que estoy seguro te encantará! Desde artículos informativos hasta herramientas interactivas, nuestra página está diseñada para ofrecerte una experiencia enriquecedora. Te invitamos a explorar y aprovechar al máximo todo lo que tenemos para ofrecer.No dudes en visitarnos hoy mismo haciendo clic en el siguiente enlace: www.ayarental.com ¡Esperamos verte pronto en nuestra página web! Saludos cordiales,";

  const [boletines, setBoletines] = useState<Boletin[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshData, setRefreshData] = useState(false);

  useEffect(() => {
    const fetchBoletines = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Token no encontrado");
        setIsLoading(false);
        return;
      }

      try {
        const response = await axios.get(API_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBoletines(response.data);
        setError(null);
      } catch (error) {
        setError("Error al cargar los boletines");
        console.error("Error fetching boletines:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBoletines();
  }, [refreshData]);

  const handleRefresh = () => {
    setRefreshData((prev) => !prev);
  };

  if (isLoading) {
    return (
      <>
        <div className="flex justify-center h-[80vh]">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <div>
        Error: {error} <button onClick={handleRefresh}>Reintentar</button>
      </div>
    );
  }

  return (
    <div className="flex gap-3 bg-white rounded-box p-5 shadow-lg flex-col mt-3 mx-auto w-[70%] pb-10">
      <h2 className="text-3xl drop-shadow-lg font-semibold text-gray-600 uppercase mb-5">
        Boletin de <span className="text-green-500">usuarios</span>{" "}
      </h2>
      <div className="overflow-x-auto overflow-y-auto h-[370px]">
        <table className="table border-gray-200">
          <thead>
            <tr className="text-gray-700">
              <th>Usuario</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            {boletines.map((b) => (
              <tr key={b.id}>
                <td className="border-t border-gray-300">
                  <a href="#">
                    <LuUsers size={20} className="text-blue-600" />
                  </a>
                </td>
                <td className="border-t border-gray-300">{b.name}</td>
                <td className="border-t border-gray-300">
                  <p className="p-1 bg-red-400 flex gap-1 shadow-lg items-center badge badge-lg text-white badge-error">
                    <MdOutlineMarkEmailRead /> {b.email}
                  </p>
                </td>
                <td className="border-t border-gray-300">
                  <div className="dropdown dropdown-hover">
                    <label
                      tabIndex={0}
                      className="btn btn-sm btn-success shadow-lg text-white m-1"
                    >
                      <TbMessagePlus className="mr-1" /> Enviar mensaje
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-gray-100 rounded-box w-52"
                    >
                      <li>
                        <a
                          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${
                            b.email
                          }&su=${encodeURIComponent(
                            "¡Descubre lo mejor de nuestra página web!"
                          )}&body=${encodeURIComponent(
                            `Hola ${b.name},\n\nEspero que te encuentres bien. Quería compartir contigo algo emocionante: ¡nuestra página web ha lanzado nuevas funciones y contenido que estoy seguro te encantará! Desde artículos informativos hasta herramientas interactivas, nuestra página está diseñada para ofrecerte una experiencia enriquecedora. Te invitamos a explorar y aprovechar al máximo todo lo que tenemos para ofrecer.\n\nNo dudes en visitarnos hoy mismo haciendo clic en el siguiente enlace: www.ayarental.com\n\n¡Esperamos verte pronto en nuestra página web!\n\nSaludos cordiales,`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Gmail
                        </a>
                      </li>
                      <li>
                        <a
                          href={`https://outlook.office.com/mail/deeplink/compose?to=${
                            b.email
                          }&subject=${encodeURIComponent(
                            "¡Descubre lo mejor de nuestra página web!"
                          )}&body=${encodeURIComponent(
                            `Hola ${b.name},\n\nEspero que te encuentres bien. Quería compartir contigo algo emocionante: ¡nuestra página web ha lanzado nuevas funciones y contenido que estoy seguro te encantará! Desde artículos informativos hasta herramientas interactivas, nuestra página está diseñada para ofrecerte una experiencia enriquecedora. Te invitamos a explorar y aprovechar al máximo todo lo que tenemos para ofrecer.\n\nNo dudes en visitarnos hoy mismo haciendo clic en el siguiente enlace: www.ayarental.com\n\n¡Esperamos verte pronto en nuestra página web!\n\nSaludos cordiales,`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Outlook
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListBoletin;
