import React from "react";
import { useNavigate } from "react-router-dom";

const LogOutModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Aquí iría la lógica de logout
    navigate("/");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-[#171717] p-8 rounded-3xl shadow-xl w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-5xl text-white hover:text-red-500"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-6 text-white text-center">
          ¿Estás seguro que deseas cerrar sesión?
        </h2>

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={onClose}
            className="px-6 py-2 text-sm bg-[#cb6b30] text-white rounded-2xl hover:bg-[#ab5c2c] transition-colors"
          >
            Eliminar cuenta
          </button>
          <button
            onClick={handleLogout}
            className="px-6 py-2 text-sm bg-red-600 text-white rounded-2xl hover:bg-red-700 transition-colors"
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogOutModal;
