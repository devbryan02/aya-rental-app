import { Bookings } from "@/interfaces/Bookings";
import { Document, Page, Text, View } from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";

const tw = createTw({
  theme: {
    fontFamily: {
      sans: ["Helvetica"],
      serif: ["Times-Roman"],
      mono: ["Courier"],
    },
    extend: {
      colors: {
        custom: "#bada55",
      },
    },
  },
});

interface BookingProps {
  booking: Bookings;
}

function MyPDF({ booking }: BookingProps) {
  const fechaInicio = new Date(booking.startDate);
  const fechaFin = new Date(booking.endDate);
  const duracionEnDias = Math.ceil(
    (fechaFin.getTime() - fechaInicio.getTime()) / (1000 * 3600 * 24)
  );

  const precioVehiculo = booking.totalPrice; // precio por día
  const precioTotal = precioVehiculo * duracionEnDias;

  return (
    <Document>
      <Page size={[226, 400]} style={tw("p-4 font-sans")}>
        {/* Header */}
        <View style={tw("mb-3 bg-red-500 p-3 rounded")}>
          <Text style={tw("text-white font-bold text-lg text-center")}>
            AYA RENTAL AYACUCHO
          </Text>
          <Text style={tw("text-white text-sm text-center")}>
            Reserva: {booking.id}
          </Text>
        </View>

        {/* Main Content */}
        <View style={tw("mb-3 bg-gray-100 p-3 rounded text-xs")}>
          <Text style={tw("font-bold text-center mb-2")}>
            Detalles de la Reserva
          </Text>

          <View style={tw("mb-2")}>
            <Text style={tw("font-bold")}>Fecha y Hora:</Text>
            <Text>{booking.bookingDate}</Text>

            <Text style={tw("font-bold mt-1")}>Motivo:</Text>
            <Text>{booking.purpose}</Text>

            <Text style={tw("font-bold mt-1")}>Cliente:</Text>
            <Text>PÚBLICO EN GENERAL</Text>
          </View>

          <View style={tw("mb-2")}>
            <Text style={tw("font-bold")}>Vehículo:</Text>
            <Text>{booking.vehicleBrand} {booking.vehicleModel}</Text>

            <Text style={tw("font-bold mt-1")}>Fecha de Inicio:</Text>
            <Text>{booking.startDate}</Text>

            <Text style={tw("font-bold mt-1")}>Fecha de Fin:</Text>
            <Text>{booking.endDate}</Text>
          </View>

          <View style={tw("mt-2 border-t border-gray-300 pt-2")}>
            <Text>Duración: {duracionEnDias} días</Text>
            <Text>Precio por día: S/ {precioVehiculo.toFixed(2)}</Text>
            <Text style={tw("font-bold text-center mt-3")}>
              Total a Pagar: S/ {precioTotal.toFixed(2)}
            </Text>
          </View>
        </View>

        {/* Footer */}
        <View style={tw("absolute bottom-0 left-0 right-0 p-2")}>
          <Text style={tw("text-center text-xs text-gray-500")}>
            AYA RENTAL 2024 - AYACUCHO, PERÚ
          </Text>
        </View>
      </Page>
    </Document>
  );
}

export default MyPDF;