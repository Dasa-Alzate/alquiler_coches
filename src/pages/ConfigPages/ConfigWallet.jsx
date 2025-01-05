import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar';

const ConfigWallet = ({ active }) => {
  return (
    <nav className={`font-lato text-2xl text-white/75 p-4 basis-20% justify-center h-full ${active ? "" : "hidden"}`}>
      <h1 className='text-4xl mb-2'>Wallet</h1>
      <hr />
    </nav>
  );
};

export default ConfigWallet;
