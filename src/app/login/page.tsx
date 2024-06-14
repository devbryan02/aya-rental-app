"use client";
import React, { useState } from "react";
import { loginUser } from "@/api/LoginPage";
import { useRouter } from "next/navigation";
import NavBar from "@/components/nav/NavBar";
import Footer from "@/components/inicio/Footer";

export default function LoginPage() {
  const router = useRouter();
  const [credenciales, setCredenciales] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredenciales({
      ...credenciales,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await loginUser(credenciales);
      console.log(response);
      localStorage.setItem("token", response.jwt);

      //validar si la solicitud fue exitosa
      if (response.status) {
        router.push("/dashboard");
      } else {
        router.push("/login");
      }
    } catch (error) {
      console.error(error);
      alert("Datos invalidos");
    }
  };

  return (
    <>
    <NavBar/>
      <div className="flex flex-col-reverse h-[80vh] gap-3 md:flex-row justify-center items-center p-2">
        <figure>
          <img
            className="rounded-box shadow-md hover:shadow-xl"
            src="login.png"
            alt="login image"
            width={320}
          />
        </figure>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col bg-gray-50 shadow-md hover:shadow-xl h-full p-5 rounded-box gap-3">
              <h3 className="text-gray-600 font-bold text-3xl px-3 drop-shadow-lg uppercase">
                Iniciar sessión
              </h3>
              <label>
                <input
                  className="input bg-slate-100"
                  type="text"
                  name="username"
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
        </div>
      </div>
      <Footer/>
    </>
  );
}
