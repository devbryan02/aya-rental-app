import Link  from "next/link";
import { FaCar } from "react-icons/fa";

export default function NavBar() {
  return (
    <>
      <div className="navbar bg-gray-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/vehiculos/todos">Vehiculos</Link>
              </li>
              <li>
                <Link href="/nosotros">Nosotros</Link>
              </li>
            </ul>
          </div>
          <Link className="btn btn-ghost text-gray-600" href="/">
          <FaCar size={25}/> AYA RENTAL
          </Link>
        </div>
        <div className="navbar-center hidden text-gray-700  lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/vehiculos/todos">Vehiculos</Link>
            </li>
            <li>
              <Link href="/nosotros">Nosotros</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end text-gray-600">
        <a className="mr-5 btn btn-ghost" href="/login">Login</a>
        </div>
      </div>
    </>
  );
}

