import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";

export default function Footer() {
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
            <a href="/login">Intranet</a>
          </div>
          <div>
            <form action="">
              <div className="flex flex-col gap-3 ">
                <p className="font-semibold">Boletin informativo</p>
                <input
                  className="input bg-gray-100 text-gray-900 rounded-lg"
                  type="email"
                  placeholder="Ingrese su nombre"
                  name="text"
                  required
                />
                <input
                  className="input bg-gray-100 text-gray-900 rounded-lg"
                  type="email"
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
