
"use client";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import Link from "next/link"
import React, { useState } from "react";
import { Boletin } from "@/interfaces/Boletin";
import axios from "axios";
import Swal from "sweetalert2";

export default function Footer() {

  const [boletin, setBoletin] = useState<Boletin>({
    id:"",
    name:"",
    email:""
  })

  const handleChange = (e :React.ChangeEvent<HTMLInputElement>) => {
    setBoletin({
      ...boletin,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    try{
      const URL = "http://localhost:8080/boletin/create"
      const response = await axios.post(URL, boletin)
      if(response.status){
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Gracias por enviar sus datos",
          showConfirmButton: false,
          timer: 1500
        });
        setBoletin({
          id:"",
          name:"",
          email:""
        })
      }
    }catch(error){
      console.log(error)
    }
  }

  return (
    <>
      <footer className="flex flex-col gap-5 p-10 bg-gray-100 text-gray-700">
        <div className="flex flex-row justify-around flex-wrap gap-3">
          <div className="flex flex-col gap-3">
            <h5 className="text-4xl font-semibold">AYA RENTAL</h5>
            <p className="text-2xl">Contactanos</p>
            <span className="inline-flex">
              <FaWhatsapp size={20} />
              {"_"}
              <a href="tel:+51992450988" className="hover:text-green-500">
                +51 9999999999999
              </a>
            </span>
            <span className="inline-flex items-center">
              <FaFacebookSquare size={20} />
              {"_"}
              <a
                href="https://www.facebook.com/percy.condenunez.7"
                className="hover:text-blue-500"
                target="_blank"
              >
                AyaRental FB
              </a>
            </span>
            <span className="inline-flex items-center">
              <MdMarkEmailRead />
              {"_"}
              <a
                href="mailto:ayarenatal.serv@gmail.com"
                className="hover:text-red-500"
                target="_blank"
              >
                ayarenatal.serv@gmail.com
              </a>
            </span>
          </div>
          <div className="flex flex-col gap-3 items-start justify-center">
            <a
              href="https://www.pactomundial.org/politica-de-cookies/"
              target="_blank"
            >
              Politicas de cookies
            </a>
            <a href="/servicios">Reservar</a>
            <a
              href="https://www.google.com/intl/es/policies/terms/archive/20070416/"
              target="_blank"
            >
              Politicas y condiciones
            </a>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-3 ">
                <p className="font-semibold">Boletin informativo</p>
                <input
                  className="input bg-gray-100 text-gray-900 rounded-lg"
                  type="text"
                  placeholder="Ingrese su nombre"
                  name="name"
                  value={boletin.name}
                  onChange={handleChange}
                  required
                />
                <input
                  className="input bg-gray-100 text-gray-900 rounded-lg"
                  type="email"
                  value={boletin.email}
                  onChange={handleChange}
                  placeholder="Ingrese su email"
                  name="email"
                  required
                />
                <input
                  className="btn bg-gray-300 border-none text-gray-600 p-3 font-semibold rounded-lg"
                  type="submit"
                  value="Enviar"
                />
              </div>
            </form>
          </div>
        </div>
        <p className="text-center uppercase">Aya Rental,derechos reservados 2024</p>
      </footer>
    </>
  );
}
