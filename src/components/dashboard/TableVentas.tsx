"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Input } from "../ui/input";
import React, { useState } from "react";
import SelectVehicle from "@/components/dashboard/SelectVehicle";
import { Booking } from "@/interfaces/Booking";
import axios from "axios";
import { SingleValue } from "react-select";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { Bookings } from "@/interfaces/Bookings";
import ButtonPrint from "./ButtonPrint";

interface OptionType {
  value: string;
  label: string;
}

const API_URL = "http://localhost:8080/booking/list";

function Tableventas() {
  const [booking, setBooking] = useState<Booking>({
    id: "",
    startDate: "",
    endDate: "",
    purpose: "",
  });

  const [bookings, setBookings] = useState<Bookings[]>([]);
  
  const [selectedVehicle, setSelectedVehicle] =
    useState<SingleValue<OptionType>>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBooking({
      ...booking,
      [e.target.name]: e.target.value,
    });
  };

  // estdos par refrescar los cambios
  const [refreshData, setRefreshData] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // peticion hacia el servidor
  useEffect(() => {
    const fecthBookings = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("Toquen no encontrado");
      }
      try {
        const response = await axios.get(API_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBookings(response.data);
      } catch (error) {
        console.log("Error en solicitar las reservas");
      }finally{
        setIsLoading(false)
      }
    };
    fecthBookings();
  }, [refreshData]);

  if (isLoading) {
    return (
      <>
      <div className="flex justify-center h-[80vh]">
      <span className="loading loading-spinner loading-lg"></span>
      </div>
      </>
    );
  }


  // envio de datos hacia el servidor
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!selectedVehicle) {
        Swal.fire("Por favor seleccione un vehiculo");
        return;
      }
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:8080/booking/create",
        booking,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          params: {
            vehicleId: selectedVehicle.value,
          },
        }
      );
      if (response.status) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Reserva registrado correctamente",
          showConfirmButton: false,
          timer: 1500,
        });
        setRefreshData((prev) => !prev);
      }
      console.log("Booking created successfully:", response.data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ocurrió un error!",
      });
    }
  };

  return (
    <>
      <div className="flex gap-3 flex-col mt-3 mx-auto w-[70%] pb-10 ">
        <div>
          <h2 className="text-3xl drop-shadow-lg text-gray-600 font-semibold uppercase">
            Generar <span className="text-warning">Reservas</span>
          </h2>
          <AlertDialog>
            <AlertDialogTrigger className="btn btn-warning shadow-lg text-white mt-3">
              <IoIosAddCircleOutline size={20} />
              Nueva reserva
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="text-gray-600 uppercase">
                  Registrar nueva reserva
                </AlertDialogTitle>
                <AlertDialogDescription>
                  <form onSubmit={handleSubmit}>
                    <div className="flex flex-wrap gap-3">
                      <label> Fecha inicio </label>
                      <Input
                        type="date"
                        name="startDate"
                        onChange={handleChange}
                        value={booking.startDate}
                      />
                      <label> Fecha fin </label>
                      <Input
                        type="date"
                        name="endDate"
                        onChange={handleChange}
                        value={booking.endDate}
                      />
                      <label> Proposito</label>
                      <Input
                        type="text"
                        name="purpose"
                        onChange={handleChange}
                        value={booking.purpose}
                      />
                      <SelectVehicle
                        selectedOption={selectedVehicle}
                        setSelectedOption={setSelectedVehicle}
                      />

                      <AlertDialogFooter>
                        <AlertDialogAction type="submit" value="Registrar">
                          Registrar
                        </AlertDialogAction>
                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                      </AlertDialogFooter>
                    </div>
                  </form>
                </AlertDialogDescription>
              </AlertDialogHeader>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <div>
          <table className="table border-collapse table-auto">
            <thead>
              <tr className="text-gray-700">
                <th>Vehiculo</th>
                <th>Fecha inicio</th>
                <th>fecha fin</th>
                <th>Precio/dia</th>
                <th>Accion</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr className="text-gray-600" key={booking.id}>
                  <td className="border-t border-gray-300">{booking.vehicleModel+" "+booking.vehicleBrand}</td>
                  <td className="border-t border-gray-300">
                    {booking.startDate}
                  </td>
                  <td className="border-t border-gray-300">
                    {booking.endDate}
                  </td>
                  <td className="border-t border-gray-300">
                    S/ {booking.totalPrice}
                  </td>
                  <td className="border-t border-gray-300">
                    <ButtonPrint idBooking={booking.id}/>
                  </td>
                </tr>
              ))}
            </tbody>  
          </table>
        </div>
      </div>
    </>
  );
}

export default Tableventas;
