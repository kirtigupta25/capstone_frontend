// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">MyApp</div>
        <div>
          <a href="/" className="text-white hover:bg-blue-700 px-3 py-2 rounded">Home</a>
          <a href="/about" className="text-white hover:bg-blue-700 px-3 py-2 rounded">About</a>
          <a href="/contact" className="text-white hover:bg-blue-700 px-3 py-2 rounded">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
