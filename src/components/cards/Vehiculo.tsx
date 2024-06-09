import Link from "next/link";

export default function Vehiculo() {
  return (
    <>
      <div className="card card-compact w-96 bg-base-100 bg-transparent mt-5 rounded-none">
        <Link href="/XD">
          <figure>
            <img
              src="https://neoauto.com/noticias/wp-content/uploads/2015/10/toyota-86-neoauto.png"
              alt="Shoes"
            />
          </figure>
        </Link>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn">Reservar</button>
          </div>
        </div>
      </div>
    </>
  );
}
