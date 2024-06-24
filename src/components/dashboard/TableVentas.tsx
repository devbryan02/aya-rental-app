"use client";
import { FaPrint } from "react-icons/fa";
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

interface OptionType {
  value: string;
  label: string;
}

function Tableventas() {
  
  const [booking, setBooking] = useState<Booking>({
    id: "",
    startDate: "",
    endDate: "",
    purpose: "",
  });
  const [selectedVehicle, setSelectedVehicle] =
    useState<SingleValue<OptionType>>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name + e.target.value);
    setBooking({
      ...booking,
      [e.target.name]: e.target.value,
    });
  };

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
      if(response.status){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Venta registrado correctamente",
          showConfirmButton: false,
          timer: 1500
        });
      }
      console.log("Booking created successfully:", response.data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ocurrió un error!",
      });
      console.error("Error creating booking:", error);
    }
  };

  return (
    <>
      <div className="flex gap-3 flex-col mt-3 mx-auto w-[70%] pb-10 ">
        <div>
          <h2 className="text-3xl text-gray-600 font-semibold uppercase">
            Generar <span className="text-indigo-400">ventas</span>
          </h2>
          <AlertDialog>
            <AlertDialogTrigger className="btn btn-error text-white mt-3">
              <IoIosAddCircleOutline size={20} />
              Nueva venta
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="text-gray-600 uppercase">
                  Registrar nueva venta
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
                <th>Codigo</th>
                <th>Fecha inicio</th>
                <th>fecha fin</th>
                <th>Precio</th>
                <th>Accion</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-gray-600">
                <td className="border-t border-gray-300">2ASG-ASGG-1123235</td>
                <td className="border-t border-gray-300">12/12/2024</td>
                <td className="border-t border-gray-300">12/12/2024</td>
                <td className="border-t border-gray-300">200/dia</td>
                <td className="border-t border-gray-300">
                  <a className="btn btn-sm btn-warning text-white" href="#">
                    <FaPrint /> Imprimir
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Tableventas;
