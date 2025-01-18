import React, { useState } from "react";

const ResetPasswordModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handlePasswordReset(formData.email);
      onClose();
    } catch (error) {
      console.error("Error al resetear la contraseña:", error);
    }
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
          Reset Password
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="@ email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 rounded-3xl bg-[#171717] placeholder:text-gray-50 shadow-inner-3xl shadow-black/75 border-gray-600"
            />
          </div>
          <div className="flex justify-center gap-2 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm bg-[#252525] text-white rounded-2xl hover:bg-primary-600 transition-colors"
            >
              Submit
            </button>
            <button
              type="button"
              className="px-4 py-2 text-sm bg-[#252525] text-white rounded-2xl
                       hover:bg-primary-600 transition-colors"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordModal;
