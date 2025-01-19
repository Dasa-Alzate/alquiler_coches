import React, { useState } from "react";

const SignUpModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
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
          Sign Up
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4 relative">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full p-2 pl-12 rounded-2xl bg-neutral-900 placeholder:text-gray-50 shadow-inner-3xl shadow-black/75 focus:border-primary-50"
            />
            <img
              src="/public/user.png"
              alt="user"
              className="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 invert"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="@ email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2  rounded-2xl bg-neutral-900 placeholder:text-gray-50 shadow-inner-3xl shadow-black/75 focus:border-primary-50"
            />
          </div>

          <div className="mb-6 relative">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-2 pl-12 rounded-2xl bg-neutral-900 placeholder:text-gray-50 shadow-inner-3xl shadow-black/75 focus:border-primary-50"
            />
            <img
              src="/public/key.png"
              alt="key"
              className="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 invert"
            />
          </div>
          <div className="flex justify-between gap-2 mt-2">
            <button
              type="button"
              className="w-full basis-1/2 bg-primary-700 text-white py-1.5 px-3 text-sm rounded hover:bg-primary-600 transition-colors"
            >
              Submit
            </button>
            <button
              type="button"
              className="w-full basis-1/2 bg-neutral-800 text-white py-1.5 px-3 text-sm rounded hover:bg-primary-600 transition-colors"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpModal;
