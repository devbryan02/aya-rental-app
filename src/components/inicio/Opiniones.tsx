export default function Opiniones() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <h2 className="text-3xl font-semibold text-center text-gray-700  mt-10 md:mt-20">
          Lo que Opinan Nuestros Clientes
        </h2>
        <div className="flex flex-wrap gap-8 justify-center mt-10 mb-10 p-5">
          {[
            {
              image: "usuario2.webp",
              name: "María López",
              text: "¡Excelente servicio! Alquilé un auto por un viaje familiar y todo salió perfecto. El proceso de reserva en línea fue muy sencillo y el automóvil estaba impecable. La atención del personal también fue excepcional, muy amables y serviciales. Sin duda volveré a utilizar sus servicios en el futuro. ¡Muchas gracias!",
              date: "2024-10-12",
            },
            {
              image: "usuario1.webp",
              name: "Juan Pérez",
              text: "Tuve una experiencia increíble con esta empresa. Alquilé un vehículo para un viaje de negocios y todo fue perfecto. El proceso de reserva fue rápido y sencillo, y el auto estaba en excelentes condiciones. El personal fue muy amable y atento en todo momento. Definitivamente volveré a usar sus servicios.",
              date: "2024-09-28",
            },
            {
              image: "usuario3.webp",
              name: "Ana Gómez",
              text: "¡Excelente servicio! Alquilé un auto por un viaje familiar y todo salió perfecto. El proceso de reserva en línea fue muy sencillo y el automóvil estaba impecable. La atención del personal también fue excepcional, muy amables y serviciales. Sin duda volveré a utilizar sus servicios en el futuro. ¡Muchas gracias!",
              date: "2024-10-12",
            },
          ].map((opinion, index) => (
            <article
              key={index}
              className="flex flex-col p-5 bg-gray-50 gap-3 shadow-lg rounded-lg w-full sm:w-[300px] h-auto"
            >
              <div className="flex items-center gap-3">
                <figure>
                  <img
                    src={opinion.image}
                    alt={`Foto de ${opinion.name}`}
                    width="60"
                    height="60"
                    className="rounded-full"
                  />
                </figure>
                <div>
                  <p className="text-md text-gray-800 font-semibold">
                    {opinion.name}
                  </p>
                </div>
              </div>
              <div className="text-sm text-slate-700">{opinion.text}</div>
              <p className="text-[10px] mt-3 text-gray-500 italic text-end">
                {opinion.date}
              </p>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
