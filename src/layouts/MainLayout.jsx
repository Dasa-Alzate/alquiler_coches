import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div className="bg-zinc-900 min-h-screen w-screen overflow-x-hidden">
      <main>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
