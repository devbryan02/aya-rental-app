export default function Banner() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full min-h-screen">
        <section className="flex gap-20 justify-center flex-col-reverse md:flex-row md:justify-around">
          <article className="flex flex-col gap-5 justify-center md:justify-start items-center md:items-start">
            <p className="text-2xl md:text-5xl  text-center md:text-start text-[#171717] w-full md:w-[550px]">
              Viaja a tu ritmo, sin prisa, sin estrés. Alquilando tu mejor
              vehículo.
            </p>
            <a
              className="w-[200px] px-5 py-3 bg-[#171717] hover:bg-[#252424] rounded-lg text-[#F8F8F9] cursor-pointer"
              href="/vehiculos/todos"
            >
              Comenzar reserva
            </a>
          </article>
          <article>
            <img src="auto2.webp" alt="logo auto banner" width="450px" />
          </article>
        </section>
      </div>
    </>
  );
}
