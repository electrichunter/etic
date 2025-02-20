"use client";
import React, { useState } from 'react';

import './menu.css'; 
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white shadow-md fixed w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold">Eticlogo</span>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <a href="#" className="hover:text-gray-400">Home</a>
            <a href="#" className="hover:text-gray-400">About</a>
            <a href="#" className="hover:text-gray-400">Contact</a>
          </div>
          <div className="flex items-center md:hidden">
            <button onClick={toggleMenu} className="text-gray-400 hover:text-white focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white">
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">Home</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">About</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">Contact</a>
        </div>
      )}
    </nav>
  );
}
