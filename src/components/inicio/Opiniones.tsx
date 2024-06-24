export default function Opiniones() {
  return (
    <>
      <h3 className="text-3xl  font-semibold text-center text-gray-700 uppercase mt-10 md:mt-20">
        Lo que opinan nuestro cliente
      </h3>
      <div className="flex  flex-wrap gap-10 justify-center mt-10 mb-10">
        <article className="flex flex-col p-5 bg-gray-50 gap-1 shadow-lg rounded-lg w-[250px] h-auto">
          <div className="flex items-center">
            <figure>
              <img src="usuario2.webp" alt="logo users opinions" width="60px" />
            </figure>
            <div>
              <p className="text-md text-gray-800 font-semibold">Maria Lopez</p>
              <slot />
            </div>
          </div>
          <div className="text-sm text-slate-700">
            ¡Excelente servicio! Alquilé un auto por un viaje familiar y todo
            salió perfecto. El proceso de reserva en línea fue muy sencillo y el
            automóvil estaba impecable. La atención del personal también fue
            excepcional, muy amables y serviciales. Sin duda volveré a utilizar
            sus servicios en el futuro. ¡Muchas gracias!
          </div>
          <p className="text-[10px] mt-3 text-gray-500 italic text-end">
            2024-10-12
          </p>
        </article>
        <article className="flex flex-col p-5 bg-gray-50 gap-1 shadow-lg rounded-lg w-[250px] h-auto">
          <div className="flex items-center">
            <figure>
              <img src="usuario1.webp" alt="logo users opinions" width="60px" />
            </figure>
            <div>
              <p className="text-md text-gray-800 font-semibold">Maria Lopez</p>
              <slot />
            </div>
          </div>
          <div className="text-sm text-slate-700">
            ¡Excelente servicio! Alquilé un auto por un viaje familiar y todo
            salió perfecto. El proceso de reserva en línea fue muy sencillo y el
            automóvil estaba impecable. La atención del personal también fue
            excepcional, muy amables y serviciales. Sin duda volveré a utilizar
            sus servicios en el futuro. ¡Muchas gracias!
          </div>
          <p className="text-[10px] mt-3 text-gray-500 italic text-end">
            2024-10-12
          </p>
        </article>
        <article className="flex flex-col p-5 bg-gray-50 gap-1 shadow-lg rounded-lg w-[250px] h-auto">
          <div className="flex items-center">
            <figure>
              <img src="usuario3.webp" alt="logo users opinions" width="60px" />
            </figure>
            <div>
              <p className="text-md text-gray-800 font-semibold">Maria Lopez</p>
              <slot />
            </div>
          </div>
          <div className="text-sm text-slate-700">
            ¡Excelente servicio! Alquilé un auto por un viaje familiar y todo
            salió perfecto. El proceso de reserva en línea fue muy sencillo y el
            automóvil estaba impecable. La atención del personal también fue
            excepcional, muy amables y serviciales. Sin duda volveré a utilizar
            sus servicios en el futuro. ¡Muchas gracias!
          </div>
          <p className="text-[10px] mt-3 text-gray-500 italic text-end">
            2024-10-12
          </p>
        </article>
      </div>
    </>
  );
}
