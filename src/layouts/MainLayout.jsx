import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div className="bg-zinc-900 min-h-screen">
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
