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
        router.push("/dashboard/vehiculos");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Bienvenido "+credentials.username,
          showConfirmButton: false,
          timer: 1500
        });
      }  else {
        router.push("/login")
      }
    } catch (error) {
      Swal.fire({
        title:"Error de inicio",
        icon: "error",
        text:"Datos invalidos",
        showConfirmButton: true,
      })
      console.log("Error en el inicio");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
    </form>
  );
};

export default LoginForm;
