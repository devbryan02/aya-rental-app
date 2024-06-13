"use client";
import { Vehicle } from "@/interfaces/Vehiculo";
import Link from "next/link";
import { motion } from "framer-motion";

async function fetchData(): Promise<Vehicle[]> {
  const URL = "http://localhost:8080/vehicle/filter/max";
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }
  const data: Vehicle[] = await response.json();
  return data;
}

export default async function VehiculoDeMenorAMayor() {
  let autos: Vehicle[] = [];

  try {
    autos = await fetchData();
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
