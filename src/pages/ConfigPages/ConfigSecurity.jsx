import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar';

const ConfigSecurity = ({ active }) => {
  return (
    <nav className={`font-lato text-2xl text-white/75 p-4 basis-20% justify-center h-full ${active ? "" : "hidden"}`}>
      <form className="h-full flex flex-col justify-evenly gap-4 text-md" action="">
        <h1 className='text-4xl'>Security</h1>
        <h3 className='text-xl'>Password</h3>
        <hr />

        <div className="flex gap-4 lg:mx-auto flex-col lg:flex-row">
          <input type="password" placeholder='Current Password' className='bg-transparent rounded-lg px-3 py-1 text-lg shadow-inner-xl shadow-zinc-950/75'/>
          <input type="button" value="Reset Password" className='bg-primary-700 rounded-lg px-3 py-1 text-lg lg:mx-auto px-6 shadow-lg shadow-zinc-950/75 cursor-pointer'/>
        </div>

        <h3 className='text-xl'>Authentication</h3>
        <hr />
        <div className="flex gap-8 lg:mx-auto flex-col lg:flex-row gap-y-4">
          <div className="flex flex-col justify-center gap-4">
            <h3 className='text-lg w-fit'>Authentication Method</h3>
            <input type="button" value="Authentication App" className='bg-primary-700 rounded-lg px-3 py-1 text-lg lg:mx-auto px-6 shadow-lg shadow-zinc-950/75 cursor-pointer'/>
            <input type="button" value="SMS (Text Message)" className='bg-primary-700 rounded-lg px-3 py-1 text-lg lg:mx-auto px-6 shadow-lg shadow-zinc-950/75 cursor-pointer'/>
            <input type="button" value="Email" className='bg-primary-700 rounded-lg px-3 py-1 text-lg lg:mx-auto px-6 shadow-lg shadow-zinc-950/75 cursor-pointer'/>
            <input type="button" value="Backup Codes" className='bg-primary-700 rounded-lg px-3 py-1 text-lg lg:mx-auto px-6 shadow-lg shadow-zinc-950/75 cursor-pointer'/>
          </div>
          <div className="flex flex-col justify-around gap-y-4">
            <input type="button" value="Activate/Deactivate 2FA" className='bg-primary-700 rounded-lg px-3 py-1 text-lg lg:mx-auto px-6 shadow-lg shadow-zinc-950/75 cursor-pointer'/>
            <input type="button" value="Generate Backup Code" className='bg-primary-700 rounded-lg px-3 py-1 text-lg lg:mx-auto px-6 shadow-lg shadow-zinc-950/75 cursor-pointer'/>
          </div>
        </div>

      </form>
    </nav>
  );
};

export default ConfigSecurity;
