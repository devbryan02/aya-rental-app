"use client";
import { createContext } from "react";
import Link from "next/link";
import { Vehicle } from "@/interfaces/Vehiculo";
import fetchData from "@/api/ObtenerTodos";
import { motion } from "framer-motion";

async function obtenerVehiculoCamioneta() {
  const data = await fetchData();
  const dataCamioneta = data.filter((auto) => auto.typeVehicle === "Camioneta");
  return dataCamioneta;
}

export default async function TodosLosVehiculoCamioneta() {
  let autos: Vehicle[] = [];

  try {
    autos = await obtenerVehiculoCamioneta();
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
      </motion.div>
      ))}
    </>
  );
}
