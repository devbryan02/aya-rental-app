"use client";
import React, { use, useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

// Definir una interfaz o tipo para las opciones del select
interface SelectOption {
  value: string;
  label: string;
}

// Definir las opciones para los selects
const colorOptions: SelectOption[] = [
  { value: "", label: "Seleccione el color" },
  { value: "Gris", label: "Gris" },
  { value: "Blanco", label: "Blanco" },
];

const priceOptions: SelectOption[] = [
  { value: "", label: "Seleccione el precio" },
  { value: "200", label: "200" },
  { value: "250", label: "250" },
  { value: "300", label: "300" },
  { value: "350", label: "350" },
  { value: "400", label: "400" },
];

const statusOptions: SelectOption[] = [
  { value: "", label: "Seleccione el estado" },
  { value: "Disponible", label: "Disponible" },
  { value: "Mantenimiento", label: "Mantenimiento" },
];

const capacityOptions: SelectOption[] = [
  { value: "", label: "Seleccione la capacidad" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
];

const typeOptions: SelectOption[] = [
  { value: "", label: "Seleccione el tipo" },
  { value: "Auto", label: "Auto" },
  { value: "Camioneta", label: "Camioneta" },
];

interface FormData {
  brand: string;
  model: string;
  color: string;
  year: number;
  price: number;
  description: string;
  plate: string;
  passengerCapacity: string;
  type: string;
  status: string;
}

function NuevoVehicleForm() {
  const params = useParams();
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    brand: "",
    model: "",
    color: "",
    year: 0,
    price: 0,
    description: "",
    plate: "",
    passengerCapacity: "",
    type: "",
    status: "",
  });

  const [image, setImage] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  //metodo para cargar datos
  useEffect(() => {
    if (params.id) {
      axios.get(`http://localhost:8080/vehicle/${params.id}`).then((res) => {
        setFormData({
          brand: res.data.brand,
          model: res.data.model,
          color: res.data.color,
          year: res.data.year,
          price: res.data.price,
          description: res.data.description,
          plate: res.data.plate,
          passengerCapacity: res.data.passengerCapacity,
          type: res.data.typeVehicle,
          status: res.data.vehicleStatus,
        });
      });
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (!params.id) {
        const token = localStorage.getItem("token");
        const formDataWithImage = new FormData();
        formDataWithImage.append("vehicleRequest", JSON.stringify(formData));
        if (image) {
          formDataWithImage.append("image", image);
        }

        const response = await axios.post<any>(
          "http://localhost:8080/vehicle/create",
          formDataWithImage,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data);
        Swal.fire("Éxito", "Vehículo registrado correctamente", "success");
        router.push("/dashboard/vehiculos")
        router.refresh();
      } else {
        const token = localStorage.getItem("token");
        const response = await axios.patch<any>(
          `http://localhost:8080/vehicle/update/${params.id}`,
          formData,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data);
        Swal.fire("Éxito", "Vehículo actualizado correctamente", "success");
        router.push("/dashboard/vehiculos")
        router.refresh();
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Hubo un error al enviar datos", "error");
    }
  };

  return (
    <>
      <div className="w-[80%] mx-auto mt-5">
        <div className="flex mb-3 font-semibold uppercase text-xl shadow-lg rounded-lg ">
          <p className="p-2 text-white bg-red-400 rounded-l-lg ">
            {params.id ? "Actualizar" : "Agregar"}
          </p>
          <p className="p-2 bg-gray-100 text-gray-500 rounded-r-lg w-full ">
            vehiculo
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex shadow-lg flex-wrap md:gap-10 justify-start p-5 md:p-10 rounded-box">
            <div className="flex flex-col gap-3 ">
              <label className="mx-2 text-sm text-gray-600">Marca</label>
              <input
                className="input input-bordered w-full max-w-xs bg-transparent text-sm"
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                placeholder="Ejem. Toyota"
                required
              />
              <label className="mx-2 text-sm text-gray-600">Color</label>
              <select
                name="color"
                value={formData.color}
                onChange={handleChange}
                className="text-sm select select-bordered bg-transparent w-full max-w-xs"
                required
              >
                {colorOptions.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    disabled={option.value === ""}
                  >
                    {option.label}
                  </option>
                ))}
              </select>
              <label className="mx-2 text-sm text-gray-600">Precio</label>
              <select
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="text-sm select select-bordered bg-transparent w-full max-w-xs"
                required
              >
                {priceOptions.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    disabled={option.value === ""}
                  >
                    {option.label}
                  </option>
                ))}
              </select>
              <label className="mx-2 text-sm text-gray-600">Estado</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="text-sm select select-bordered bg-transparent w-full max-w-xs"
                required
              >
                {statusOptions.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    disabled={option.value === ""}
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <div className="flex flex-col gap-3">
                <label className="mx-2 text-sm text-gray-600">Modelo</label>
                <input
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  className="input input-bordered w-full max-w-xs bg-transparent text-sm"
                  type="text"
                  placeholder="Ejem. Corrolla"
                  required
                />
                <label className="mx-2 text-sm text-gray-600">Año</label>
                <input
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="input input-bordered w-full max-w-xs bg-transparent text-sm"
                  type="text"
                  placeholder="Ejem. 2013"
                  required
                />
                <label className="mx-2 text-sm text-gray-600">
                  Descripcion
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="textarea  text-sm textarea-bordered bg-transparent"
                  placeholder="Ingrese la descripcion del vehiculo"
                  required
                ></textarea>
                {!params.id ? 
                <input
                type="file"
                onChange={handleImageChange}
                className="file-input mt-5 bg-transparent file-input-bordered w-full max-w-xs"
                required
              />
                 : ""}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label className="mx-2 text-sm text-gray-600">Placa</label>
              <input
                name="plate"
                value={formData.plate}
                onChange={handleChange}
                className="input input-bordered w-full max-w-xs bg-transparent text-sm"
                type="text"
                placeholder="Ejem. H4402M"
                required
              />
              <label className="mx-2 text-sm text-gray-600">Capacidad</label>
              <select
                name="passengerCapacity"
                value={formData.passengerCapacity}
                onChange={handleChange}
                className="text-sm select select-bordered bg-transparent w-full max-w-xs"
                required
              >
                {capacityOptions.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    disabled={option.value === ""}
                  >
                    {option.label}
                  </option>
                ))}
              </select>
              <label className="mx-2 text-sm text-gray-600">Tipo</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="text-sm select select-bordered bg-transparent w-full max-w-xs"
                required
              >
                {typeOptions.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    disabled={option.value === ""}
                  >
                    {option.label}
                  </option>
                ))}
              </select>
              <input
                className="btn border-none bg-red-300 mt-7 uppercase text-white hover:bg-red-400 shadow-lg"
                type="submit"
                value={params.id ? "Guardar cambios" : "Guardar"}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default NuevoVehicleForm;
