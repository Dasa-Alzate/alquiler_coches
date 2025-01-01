import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div className="bg-zinc-900 min-h-screen">
      <main>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
