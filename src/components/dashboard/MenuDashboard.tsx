"use client";
import React, { useState } from 'react';
import Link from "next/link";
import { FaCar } from "react-icons/fa";
import { SiVbulletin } from "react-icons/si";
import { TbLogout2 } from "react-icons/tb";
import Modal from "@/components/dashboard/Modal"
import {useRouter} from "next/navigation"
import { MdDashboard } from "react-icons/md";

export default function MenuDashboard() {
  const router = useRouter();
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const handleLogout = () => {
    setShowConfirmationModal(true);
  };

  const handleConfirmLogout = () => {
    router.push("/login")
    setShowConfirmationModal(false);
  };

  const handleCancelLogout = () => {
    setShowConfirmationModal(false);
  };

  return (
    <>
      <div className="bg-gray-100 w-full flex p-3 gap-5 justify-around items-center ">
        <ul className='menu bg-gray-100 menu-horizontal'>
          <li>
          <Link href="/dashboard/vehiculos" className='font-bold uppercase text-gray-600'>
          <MdDashboard size={20}/>
          aya rental
          </Link>
          </li>
        </ul>
        <ul className="menu bg-gray-100 menu-horizontal">
          <li>
            <Link className="text-gray-600" href="/dashboard/vehiculos">
              <FaCar size={20} />
              Vehiculos
            </Link>
          </li>
          <li>
            <Link className="text-gray-600" href="">
              <SiVbulletin size={15} />
              Boletin
            </Link>
          </li>
          <li>
            <button className="text-gray-600" onClick={handleLogout}>
              <TbLogout2 size={20} />
              Salir
            </button>
          </li>
        </ul>
      </div>
      <Modal
        isOpen={showConfirmationModal}
        onConfirm={handleConfirmLogout}
        onCancel={handleCancelLogout}
      />
    </>
  );
}