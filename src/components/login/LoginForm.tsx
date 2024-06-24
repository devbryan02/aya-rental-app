"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const LoginForm = () => {
  const router = useRouter();

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
    try {
      const response = await axios.post(
        "http://localhost:8080/auth/log-in",
        credentials
      );
      console.log(response);
      if (response.data.status === true) {
        localStorage.removeItem("token");
        localStorage.setItem("token", response.data.jwt);
        router.push("/dashboard/vehiculos");
      } else {
        router.push("/login");
      }
    } catch (error) {
      Swal.fire({
        title: "Error de inicio",
        icon: "error",
        text: "Datos invalidos",
        showConfirmButton: true,
      });
      console.log("Error en el inicio");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-5">
        <h3 className="text-center font-bold text-3xl text-gray-600 uppercase drop-shadow-lg">Iniciar sesión</h3>
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
    </form>
  );
};

export default LoginForm;
