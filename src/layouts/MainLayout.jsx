import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <header>
        <h1>Mi Aplicación</h1>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <p>© 2024 Mi Aplicación</p>
      </footer>
    </div>
  );
};

export default MainLayout;
