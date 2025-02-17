import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar';

const ConfigProfile = ({ active }) => {
  return (
    <nav className={`font-lato text-2xl text-white/75 p-4 basis-20% justify-center h-full ${active ? "" : "hidden"}`}>
      <form className="h-full flex flex-col justify-evenly gap-4 text-md" action="">
        <h1 className='text-4xl'>Profile</h1>
        <h3 className='text-xl'>Personal Information</h3>
        <hr />

        <div className="flex gap-4 mx-auto flex-col sm:flex-row">
          <input type="text" placeholder='First Name' className='bg-transparent rounded-lg px-3 py-1 text-lg shadow-inner-xl shadow-zinc-950/75'/>
          <input type="text" placeholder='Last Name' className='bg-transparent rounded-lg px-3 py-1 text-lg shadow-inner-xl shadow-zinc-950/75'/>
        </div>

        <div className="flex gap-4 mx-auto flex-col sm:flex-row">
          <input type="text" placeholder='Birth Date' className='bg-transparent rounded-lg px-3 py-1 text-lg shadow-inner-xl shadow-zinc-950/75'/>
          <input type="text" placeholder='Address' className='bg-transparent rounded-lg px-3 py-1 text-lg shadow-inner-xl shadow-zinc-950/75'/>
        </div>

        <div className="flex gap-4 mx-auto flex-col sm:flex-row">
          <input type="text" placeholder='Phone Number' className='bg-transparent rounded-lg px-3 py-1 text-lg shadow-inner-xl shadow-zinc-950/75'/>
          <input type="text" placeholder='E-mail' className='bg-transparent rounded-lg px-3 py-1 text-lg shadow-inner-xl shadow-zinc-950/75'/>
        </div>

        <input type="button" value="Save" className='bg-primary-700 rounded-lg px-3 py-1 text-lg mx-auto px-6'/>

        <h3 className='text-xl'>Profile Details</h3>
        <hr />
        <div className="flex items-center mx-auto flex-col sm:flex-row gap-y-4">
          <img className=' transition-all duration-200 size-24 mr-4 group-hover:brightness-75 group-hover:blur-sm' src="/avatar-default.svg" alt="avatar" />
          <div><input type="text" placeholder='Username' className='bg-transparent rounded-lg px-3 py-1 text-lg shadow-inner-xl shadow-zinc-950/75'/></div>
        </div>

      </form>
    </nav>
  );
};

export default ConfigProfile;
