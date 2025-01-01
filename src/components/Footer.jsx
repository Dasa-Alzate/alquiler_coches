import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ activeLink, isLogged }) => {
  const links = ['Inicio', 'Reseñas', 'Contacto'];

  return (
    <footer className="bg-zinc-900 font-lato text-white/75 p-10 flex w-full justify-evenly items-center">

      <div className="flex flex-col">
        <div className="flex">
          <img src="logo.svg" alt="logo" />
          <span className='ml-2 text-3xl font-bold'>Car Rentals</span>
        </div>
        <span className='mt-4'>C. San Vicente de Paul, 6, 30100 Murcia</span>
        <span>868 08 97 30</span>
        
        <div className='flex gap-4 justify-evenly mt-4'>
          <img className='cursor-pointer hover:shadow-md shadow-white' src="instagram.svg" alt="instagram" />
          <img className='cursor-pointer hover:shadow-md shadow-white' src="facebook.svg" alt="facebook" />
          <img className='cursor-pointer hover:shadow-md shadow-white' src="youtube.svg" alt="youtube" />
          <img className='cursor-pointer hover:shadow-md shadow-white' src="x-twitter.svg" alt="x-twitter" />
          <img className='cursor-pointer hover:shadow-md shadow-white' src="tiktok.svg" alt="tiktok" />
        </div>

        <span className='text-zinc-600/75 mt-8'>© Car Rentals, 2025. All rights reserved.</span>

      </div>
      <div className="flex">
        <iframe className='w-96 h-60' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6287.403874143237!2d-1.1500007247731776!3d38.00741227192753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63819baae4321b%3A0x7a6261663713684!2sCESUR%20Murcia%20Audiovisual%20Formaci%C3%B3n%20Profesional!5e0!3m2!1ses!2ses!4v1735749095476!5m2!1ses!2ses" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

    </footer>
  );
};

export default Footer;
