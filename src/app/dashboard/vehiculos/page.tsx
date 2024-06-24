import { Suspense } from "react";
import VehiculosDashboard from "@/components/dashboard/VehiculosDashboard";
import { fetchData } from "@/services/vehiculo";
import { Vehicle } from "@/interfaces/Vehiculo";
import { revalidatePath } from "next/cache";

async function VehiculoData() {
  try {
    const data: Vehicle[] = await fetchData();
    return <VehiculosDashboard autos={data} />;
  } catch (error) {
    console.error("Error fetching vehicle data:", error);
    return <ErrorComponent />;
  }
}

function ErrorComponent() {
  return (
    <div>
      <h2>Error al cargar los vehículos</h2>
      <button onClick={() => revalidatePath("/dashboard/vehiculos")}>
        Intentar de nuevo
      </button>
    </div>
  );
}

function LoadingComponent() {
  return (
    <>
      <div className="flex justify-center h-[80vh]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    </>
  );
}

export default function VehiculoDashPage() {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <VehiculoData />
    </Suspense>
  );
}
