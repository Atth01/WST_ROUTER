import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="bg-blue-600 shadow-md p-4">
      <div className="container mx-auto flex justify-start items-center">
        <div className="text-white text-2xl font-bold">
          Binaniaga Indonesia University
        </div>
      </div>
    </header>
  );
};

export default Header;
