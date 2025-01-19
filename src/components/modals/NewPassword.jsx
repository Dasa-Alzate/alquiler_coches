import React, { useState } from "react";

const NewPasswordModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-neutral-900 p-8 rounded-3xl shadow-xl w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-5xl text-white hover:text-red-500"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-6 text-white text-center">
          New Password
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4 relative">
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              placeholder="New Password"
              value={formData.newPassword}
              onChange={handleChange}
              required
              className="w-full p-2 pl-12 rounded-2xl bg-neutral-900 text-white placeholder:text-gray-50 shadow-inner-3xl shadow-black/75 focus:border-primary-50"
            />
            <img
              src="/public/key.png"
              alt="key"
              className="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 invert"
            />
          </div>

          <div className="mb-6 relative">
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full p-2 pl-12 rounded-2xl bg-neutral-900 text-white placeholder:text-gray-50 shadow-inner-3xl shadow-black/75 focus:border-primary-50"
            />
            <img
              src="/public/key.png"
              alt="key"
              className="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 invert"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-neutral-800 text-white py-1.5 px-3 text-sm rounded-2xl hover:bg-primary-600 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPasswordModal;
