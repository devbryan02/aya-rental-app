import { CiCircleCheck } from "react-icons/ci";
import { IoTimerOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

export default function Benneficios() {
  return (
    <>
      <h3 className="text-3xl text-gray-700 text-center mb-10 font-bold uppercase">
        Beneficios Aya rental
      </h3>
      <div className="flex flex-col md:flex-row gap-10 justify-center mb-10">
        <article className="flex flex-col gap-2 justify-center items-center text-center w-[300px] bg-gray-50 shadow-lg p-5 rounded-lg">
          <CiSearch size={60} color="#1e272e" />
          <h4 className="text-xl font-semibold text-gray-700">
            Encuentra el auto perfecto
          </h4>
          <p className=" text-sm text-slate-800  text-center">
            Registrate solo por una vez y explora los autos compartidos por
            anfitriones locales.
          </p>
        </article>
        <article className="flex flex-col gap-2 justify-center items-center text-center w-[300px] bg-gray-50 shadow-lg p-5 rounded-lg">
          <CiCircleCheck size={60} color="#1e272e" />
          <h4 className="text-xl font-semibold text-gray-700">
          Elige y Reserva
          </h4>
          <p className=" text-sm text-slate-800  text-center">
          Reserva la fecha y el auto que deseas. Saluda a tu anfitrión para coordinar la entrega de las llaves.
          </p>
        </article>
        <article className="flex flex-col gap-2 justify-center items-center text-center w-[300px] bg-gray-50 shadow-lg p-5 rounded-lg">
          <IoTimerOutline size={60} color="#1e272e" />
          <h4 className="text-xl font-semibold text-gray-700">
          Disfruta tu viaje
          </h4>
          <p className=" text-sm text-slate-800  text-center">
          Un viaje se mide mejor en experiencias que en kilómetros
          </p>
        </article>
      </div>
    </>
  );
}
