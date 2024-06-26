import { CiCircleCheck, CiSearch } from "react-icons/ci";
import { IoTimerOutline } from "react-icons/io5";

export default function Beneficios() {
  const beneficios = [
    {
      icon: <CiSearch className="text-gray-600" size={60} />,
      title: "Encuentra el auto perfecto",
      description: "Regístrate solo una vez y explora los autos compartidos por anfitriones locales."
    },
    {
      icon: <CiCircleCheck className="text-gray-600" size={60} />,
      title: "Elige y Reserva",
      description: "Reserva la fecha y el auto que deseas. Coordina la entrega de las llaves con tu anfitrión."
    },
    {
      icon: <IoTimerOutline className="text-gray-600" size={60} />,
      title: "Disfruta tu viaje",
      description: "Un viaje se mide mejor en experiencias que en kilómetros."
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white to-indigo-50 py-12 sm:py-16 md:py-20 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-600 mb-8 sm:mb-12">
          Beneficios Aya Rental
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {beneficios.map((beneficio, index) => (
            <article key={index} className="bg-white rounded-lg shadow-lg p-4 sm:p-6 transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-2">
              <div className="flex justify-center mb-4">
                {beneficio.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-center text-gray-600 mb-2 sm:mb-3">
                {beneficio.title}
              </h3>
              <p className="text-gray-600 text-center text-sm sm:text-base">
                {beneficio.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}