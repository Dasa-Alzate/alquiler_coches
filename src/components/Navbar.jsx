import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

const Navbar = ({ activeLink, isLogged }) => {
  const links = ['Inicio', 'Reseñas', 'Contacto'];

  return (
    <nav className="bg-primary-900/50 font-lato text-2xl text-white/75 p-4 flex w-full justify-around items-center">

      <img src="logo.svg" alt="logo" />

      <ul className="flex space-x-8">
        {links.map((link) => {
          return (
            <li key={link}>
              <Link to={`/${link.toLowerCase()}`} className={`hover:text-gray-200 ${activeLink == link ? 'font-semibold text-white' : ''}`} >
                {link}
              </Link>
            </li>
          )
        })}
      </ul>

      <SearchBar/>

      <ul className="flex space-x-8">
        <li><a href="/" className="text-secondary-500 hover:text-amber-200">Log In</a></li>
        <li><a href="/about" className="hover:text-gray-200">Sign Up</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
