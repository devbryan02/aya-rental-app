export default function Banner() {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16">
        <section className="flex flex-col-reverse lg:flex-row items-center justify-around gap-12">
          <article className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl mx-auto lg:mx-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Viaja a tu ritmo, sin prisa, sin estrés. Alquilando tu mejor vehículo.
            </h1>
            <a
              href="/vehiculos/todos"
              className="btn"
            >
              Comenzar reserva
            </a>
          </article>
          <article className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
            <img 
              src="/auto2.webp" 
              alt="Auto banner" 
              className="w-full h-auto object-cover rounded-lg shadow-xl"
            />
          </article>
        </section>
      </div>
    </div>
  );
}