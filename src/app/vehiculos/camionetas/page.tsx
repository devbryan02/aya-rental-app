import Camionetas from "@/components/vehiculo/Camionetas";
import { motion } from "framer-motion";

export default function Camioneta() {
  return (
    <>
      <div
        className="flex flex-wrap gap-5 p-5 justify-center"
      >
        <Camionetas />
      </div>
    </>
  );
}
