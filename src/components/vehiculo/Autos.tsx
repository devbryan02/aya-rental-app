"use client";
import Link from "next/link";
import { Vehicle } from "@/interfaces/Vehiculo";
import fetchData from "@/api/ObtenerTodos";
import { motion } from "framer-motion";

async function obtenerVehiculoAuto() {
  const data = await fetchData();
  const dataAuto = data.filter((auto) => auto.typeVehicle === "Auto");
  return dataAuto;
}

export default async function TodosLosVehiculoAutos() {
  let autos: Vehicle[] = [];

  try {
    autos = await obtenerVehiculoAuto();
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <>
      {autos.map((auto) => (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          key={auto.id}
          className="card card-compact w-96 bg-slate-100 mt-5 rounded-box shadow"
        >
          <Link href="/">
            <figure>
              <img className="w-full" src={auto.imageUrl} alt="Shoes" />
            </figure>
          </Link>
          <div className="card-body text-gray-700">
            <h2 className="card-title">
              {auto.brand} {auto.model}
            </h2>
            <div className="flex">
              <p className="font-semibold">
                {"S/."}
                {auto.price}
                {"/dia"}
              </p>
              <p className="font-semibold">
                {auto.passengerCapacity} Pasajeros
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
}
