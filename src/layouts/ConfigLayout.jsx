import React from 'react';
import { Link } from 'react-router-dom';
import ConfigSidebar from '../components/ConfigSidebar';

const ConfigLayout = ({ children, activeSection, setActiveSection }) => {
  return (
    <div className="relative bg-zinc-900 min-h-screen w-screen overflow-x-hidden flex w-full">
      <ConfigSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className='overflow-y-auto h-screen basis-4/5'>
        {children}
      </main>
      <Link to='/inicio' >
        <img className='size-8 m-4 absolute top-0 right-0 cursor-pointer' src="x-icon.svg" alt="cerrar" />
      </Link>
    </div>
  );
};

export default ConfigLayout;
