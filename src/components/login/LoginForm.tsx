"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const LoginForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8080/auth/log-in",
        credentials
      );
      if (response.data.status === true) {
        localStorage.removeItem("token");
        localStorage.setItem("token", response.data.jwt);
        router.push("/dashboard/vehiculos");
      } else if (response.status === 401) {
        Swal.fire("Usuario o contraseña incorrectos");
        setIsLoading(false);
      }
    } catch (error) {
      Swal.fire("Hubo un error al iniciar sesión");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Si se está redirigiendo, mostramos la carga
    if (isLoading) {
      // Aquí podrías agregar lógica adicional si es necesario
    }
  }, [isLoading]);

  return (
    <form onSubmit={handleSubmit}>
      {isLoading ? (
        <div className="flex justify-center h-[80vh] ml-5">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          <h3 className="text-center font-bold text-3xl text-gray-600 uppercase drop-shadow-lg">
            Iniciar sesión
          </h3>
          <label>
            <input
              className="input bg-slate-100"
              type="text"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              placeholder="Username"
              required
            />
          </label>
          <label>
            <input
              className="input bg-slate-100"
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </label>
          <button
            className="px-4 py-3 bg-blue-300 shadow-xl text-white font-bold rounded-lg hover:bg-blue-400"
            type="submit"
          >
            Iniciar
          </button>
        </div>
      )}
    </form>
  );
};

export default LoginForm;
