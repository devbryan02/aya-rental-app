import React from "react";
import Modal from "react-modal";
import { motion, AnimatePresence } from "framer-motion";

interface ConfirmationModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}
const modalOverlay = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalBox = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  exit: { scale: 0 },
};

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onConfirm,
  onCancel,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={modalOverlay}
        >
          <motion.div
            className="bg-white rounded-lg p-6"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={modalBox}
          >
            <h2 className="text-xl text-gray-600 font-bold mb-4">
              ¿Estás seguro de que quieres salir?
            </h2>
            <div className="flex justify-end gap-4">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded"
                onClick={onConfirm}
              >
                Sí
              </button>
              <button
                className="px-4 py-2 bg-gray-700 text-gray-100 rounded"
                onClick={onCancel}
              >
                Cancelar
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConfirmationModal;
