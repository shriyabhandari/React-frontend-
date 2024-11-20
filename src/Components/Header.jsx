import React, { useState } from 'react';
import { Link } from 'react-scroll';
import image13 from "../images/image13.jpg";
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-between p-6 bg-white shadow-md fixed w-full z-50 h-24">
      <div className="flex items-center">
        <div className="w-28 h-auto mt-2 ms-8">
          <img src={image13} alt="" className="mb-4" />
        </div>
      </div>

      <div className="hidden lg:flex w-3/5 justify-around text-xl text-black list-none">
        <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-red-500">Home</Link>
        <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-red-500">About</Link>
        <Link to="features" smooth={true} duration={500} className="cursor-pointer hover:text-red-500">Features</Link>
        <Link to="who we are" smooth={true} duration={500} className="cursor-pointer hover:text-red-500">Who We Are</Link>
        <Link to="packages" smooth={true} duration={500} className="cursor-pointer hover:text-red-500">Packages</Link>
        <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-red-500">Contact</Link>
      </div>

      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className="text-3xl text-black">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/*Dropdown*/}
      {isOpen && (
        <div className="absolute top-20 right-0 bg-white shadow-lg p-6 rounded-lg w-48 text-center lg:hidden">
          <ul className="flex flex-col space-y-4 text-black text-lg">
            <li>
              <Link to="home" smooth={true} duration={500} onClick={toggleMenu} className="cursor-pointer hover:text-red-500">Home</Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} onClick={toggleMenu} className="cursor-pointer hover:text-red-500">About</Link>
            </li>
            <li>
              <Link to="features" smooth={true} duration={500} onClick={toggleMenu} className="cursor-pointer hover:text-red-500">Features</Link>
            </li>
            <li>
              <Link to="who we are" smooth={true} duration={500} onClick={toggleMenu} className="cursor-pointer hover:text-red-500">Who We Are</Link>
            </li>
            <li>
              <Link to="packages" smooth={true} duration={500} onClick={toggleMenu} className="cursor-pointer hover:text-red-500">Packages</Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} onClick={toggleMenu} className="cursor-pointer hover:text-red-500">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
