"use client";
import axios from "axios";
import { useState } from "react";
import { FaPrint } from "react-icons/fa";
import { PDFDownloadLink } from '@react-pdf/renderer';
import MyPDF from "./MyPDF";
import { Bookings } from "@/interfaces/Bookings";

interface ButtonParam {
  idBooking: string;
}

function ButtonPrint({ idBooking }: ButtonParam) {
  const [booking, setBooking] = useState<Bookings | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchBookingById = async () => {
    setIsLoading(true);
    const API_URL = `http://localhost:8080/booking/${idBooking}`;
    const token = localStorage.getItem("token");

    try {
      const response = await axios.get(API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBooking(response.data);
    } catch (error) {
      console.log(`Error en la solicitud: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePrint = () => {
    if (!booking) {
      fetchBookingById();
    }
  };

  return (
    <>
      {!booking ? (
        <button
          className="btn btn-sm btn-warning text-white shadow-lg"
          onClick={handlePrint}
          disabled={isLoading}
        >
          <FaPrint /> {isLoading ? "Cargando..." : "Imprimir"}
        </button>
      ) : (
        <PDFDownloadLink
          document={<MyPDF booking={booking} />}
          fileName={`reserva-${booking.vehicleBrand}-${booking.vehicleModel}.pdf`}
          className="btn btn-sm btn-warning text-white shadow-lg"
        >
          {({ blob, url, loading, error }) =>
            loading ? 'Generando PDF...' : 'Descargar PDF'
          }
        </PDFDownloadLink>
      )}
    </>
  );
}

export default ButtonPrint;