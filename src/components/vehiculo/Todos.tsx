import Link from "next/link";
import { Vehicle } from "@/interfaces/Vehiculo";
import fetchData from "@/api/ObtenerTodos";

export default async function TodosLosAutos() {
  let autos: Vehicle[] = [];

  try {
    autos = await fetchData();
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <>
      {autos.map((auto) => (
        <div
          key={auto.id}
          className="card card-compact w-96 shadow-sm hover:shadow-lg  mt-5  "
        >
          <Link href={`/vehiculos/${auto.id}`}>
            <figure>
              <img className="w-full rounded-box" src={auto.imageUrl} alt="Shoes" />
            </figure>
          </Link>
          <div className="flex gap-1 justify-center items-center p-2 mt-2">
            <h2 className="card-title text-gray-600">
              {auto.brand} {auto.model}
            </h2>
            <div className="flex flex-wrap gap-1">
              <p className="badge text-white badge-error">
                {auto.price}
                {"/dia"}
              </p>
              <p className="badge text-white badge-info">
                {auto.passengerCapacity} <span className="text-sm">{"-"} Pasajeros</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
