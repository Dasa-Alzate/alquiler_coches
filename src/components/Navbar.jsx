import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import LoginModal from "./modals/Login";
import SignUpModal from "./modals/Signup";

const Navbar = ({ activeLink, isLogged }) => {
  const links = ["Inicio", "Reseñas", "Contacto"];
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  return (
    <nav className="bg-primary-900/50 font-lato text-2xl text-white/75 p-4 flex w-full justify-around items-center">
      <img src="/logo.svg" alt="logo" />

      <ul className="lg:flex space-x-8 hidden">
        {links.map((link) => {
          return (
            <li key={link}>
              <Link
                to={`/${link.toLowerCase()}`}
                className={`hover:text-gray-200 ${
                  activeLink == link ? "font-semibold text-white" : ""
                }`}
              >
                {link}
              </Link>
            </li>
          );
        })}
      </ul>

      <SearchBar type="navbar" />

      <ul className="flex space-x-8">
        <li>
          <button
            onClick={() => setIsLoginOpen(true)}
            className="text-secondary-500 hover:text-amber-200"
          >
            Log In
          </button>
        </li>
        <li>
          <button
            onClick={() => setIsSignUpOpen(true)}
            className="text-secondary-500 hover:text-amber-200"
          >
            Sign Up
          </button>
        </li>
      </ul>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <SignUpModal isOpen={isSignUpOpen} onClose={() => setIsSignUpOpen(false)} />
    </nav>
  );
};

export default Navbar;
