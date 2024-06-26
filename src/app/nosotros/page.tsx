import { Metadata } from "next";
import NavBar from "@/components/nav/NavBar";
import Footer from "@/components/inicio/Footer";

export const metadata: Metadata = {
  title: "Nosotros - Aya Rental",
  description: "Contactos aya rental",
};

export default function ComponenteNosotros() {


  const users = [
    {
      id: 1,
      name: "Brayan Cardenas",
      cargo: "Desarrollor back-end",
      image: "brayan.jpeg"
    },
    {
      id: 2,
      name: "Percy Conde",
      cargo: "Desarrollador front-end",
      image: "percy.jpeg"
    },
    {
      id: 3,
      name: "Brady Lopez",
      cargo: "Diagramador",
      image: "brandy.jpeg"
    },
    {
      id: 4,
      name: "Pilar Mitma",
      cargo: "Analista de requerimientos",
      image: "pilar.jpeg"
    },
    {
      id: 5,
      name: "Mavel trejo",
      cargo: "Analista de requerimientos",
      image: "mavel.jpeg"
    }
  ]

  return (
    <>
      <NavBar />

      <div className="flex flex-col justify-center items-center min-h-screen px-4 py-8 bg-gradient-to-r from-slate-50 to-slate-100">
        <h3 className="text-2xl sm:text-3xl md:text-4xl uppercase font-bold mb-6 sm:mb-10 text-gray-700 underline text-center">
          ¿Quienes somos?
        </h3>
        <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl">
          <p className="text-center text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            Somos
            <span className="inline-block bg-neutral text-white font-bold px-2 py-1 mx-1 rounded">
              Aya rental
            </span>
            una empresa de alquiler de autos pionera en Ayacucho, Perú, que
            combina la pasión por el servicio de calidad con la innovación
            tecnológica. Nos hemos dedicado a revolucionar la industria del
            alquiler de vehículos en nuestra región.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row p-6 sm:p-10 md:p-16 lg:p-20 gap-8 md:gap-12 min-h-screen justify-center items-center bg-gradient-to-r from-sky-100 to-sky-50 text-neutral">
        {/**Mision */}
        <div className="flex flex-col gap-4 max-w-md">
          <h3 className="text-3xl sm:text-4xl font-semibold uppercase underline text-center md:text-left">
            Misión
          </h3>
          <p className="text-base sm:text-lg leading-relaxed text-center md:text-left">
            Nos comprometemos a ofrecer una experiencia de alquiler de autos sin
            igual, utilizando tecnología de vanguardia para simplificar
            procesos, maximizar la eficiencia y superar las expectativas de
            nuestros clientes en cada interacción.
          </p>
        </div>

        {/**Vision */}
        <div className="flex flex-col gap-4 max-w-md">
          <h3 className="text-3xl sm:text-4xl font-semibold uppercase underline text-center md:text-left">
            Visión
          </h3>
          <p className="text-base sm:text-lg leading-relaxed text-center md:text-left">
            Aspiramos a ser reconocidos como la empresa líder en alquiler de
            autos en Perú, estableciendo nuevos estándares de excelencia en la
            industria. Buscamos expandir nuestra presencia más allá de Ayacucho,
            llevando nuestra innovadora plataforma y servicio excepcional a todo
            el país.
          </p>
        </div>
      </div>

      {/**Equipo*/}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-20 justify-center items-start p-5 sm:p-8 md:p-12 lg:p-20">
        <div className="w-full md:w-2/5 lg:w-[40%] flex flex-col gap-4">
          <h5 className="text-3xl sm:text-4xl font-semibold underline text-neutral">
            Nuestro equipo
          </h5>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            En Aya Rental, somos un equipo diverso y apasionado, unido por la
            innovación y el servicio excepcional. Desde expertos en tecnología
            hasta especialistas en atención al cliente, cada miembro contribuye
            con su experiencia única para revolucionar la experiencia de
            alquiler de autos en Ayacucho.
          </p>
        </div>
        <div className="w-full md:w-3/5 lg:w-[60%] grid grid-cols-2 sm:grid-cols-3 gap-6 mt-8 md:mt-0">
          {users.map((item) => (
            <div key={item.id} className="flex flex-col items-center text-center">
              <figure className="mb-2">
                <img
                  src={item.image}
                  alt="team user"
                  className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full"
                />
              </figure>
              <h6 className="font-semibold text-gray-600 text-sm">{item.name}</h6>
              <p className="text-gray-400 text-[13px]">{item.cargo}</p>
            </div>
          ))}
        </div>
      </div>

      {/**Historia*/}
      <div className="bg-gradient-to-r from-slate-100 to-slate-50 text-neutral font-serif py-8 sm:py-12 px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
          <h3 className="text-3xl sm:text-4xl underline text-center mb-6 sm:mb-8">
            Nuestra historia
          </h3>
          <div className="space-y-4 text-sm sm:text-base md:text-lg leading-relaxed">
            <p>
              <span className="text-xl sm:text-2xl md:text-3xl font-semibold">
                E
              </span>
              mpresa Alquiler de Autos AYA RENTAL es una compañía con más de 3
              años de trayectoria en el mercado de alquiler de vehículos.
              Fundada en 2021 en la ciudad de Ayacucho, la empresa inició sus
              operaciones con una pequeña flota de 10 automóviles y un equipo de
              5 colaboradores.
            </p>
            <p>
              A lo largo de su historia, Alquiler de Autos AYA RENTAL ha logrado
              consolidarse como uno de los principales referentes en su rubro a
              nivel regional, ampliando progresivamente su flota hasta alcanzar
              los 500 vehículos en la actualidad. Su estrategia de expansión se
              ha centrado en ofrecer un servicio de excelencia, incorporando las
              últimas tecnologías para facilitar el proceso de reserva y
              atención al cliente.
            </p>
            <p>
              Sin embargo, el acelerado crecimiento que ha experimentado la
              empresa en los últimos años ha puesto en evidencia la necesidad de
              mejorar sus procesos de gestión comercial y ventas. Los sistemas
              manuales y desconectados que se utilizaban hasta hace poco,
              dificultaban el seguimiento de las oportunidades de negocio, el
              control de inventario y la asignación eficiente de los vehículos
              disponibles.
            </p>
            <p>
              Fue en el año 2024, cuando la gerencia de Alquiler de Autos AYA
              RENTAL tomó la decisión estratégica de invertir en un sistema
              integrado de gestión de relaciones con clientes y un programa de
              capacitación para su fuerza de ventas. Esta iniciativa apuntaba a
              optimizar los procesos comerciales, mejorar la productividad de
              los ejecutivos y brindar una experiencia de servicio superior a
              sus clientes.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
