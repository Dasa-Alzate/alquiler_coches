import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <ul className="flex space-x-4">
        <li><a href="/" className="hover:text-gray-200">Inicio</a></li>
        <li><a href="/about" className="hover:text-gray-200">Acerca de</a></li>
        <li><a href="/contact" className="hover:text-gray-200">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
