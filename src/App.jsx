import React from 'react'
import Navbar from './components/Navbar';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <MainLayout>
      <Navbar activeLink="Catálogo"/>
      App
    </MainLayout>
  );
};

export default App;
