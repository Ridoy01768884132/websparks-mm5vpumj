import React from 'react';

export const Header = () => {
  return (
    <header id="main-header" className="mb-8 text-center">
      <div className="inline-flex items-center justify-center p-3 mb-4 
                      bg-primary-50 rounded-2xl shadow-sm">
        <i className="bi bi-check2-square text-3xl text-primary-600"></i>
      </div>
      <h1 id="app-title" className="tracking-tight text-6xl font-extralight text-center text-lime-200 line-through mb-2">TaskMasterrrrr</h1>
      <p className="text-secondary-500 text-lg">
        Focus on what matters most.
      </p>
    </header>
  );
};
