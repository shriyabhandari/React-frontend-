import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMobileAlt, faGlobe, faDesktop, faShoppingCart, faSearch, faPalette, faServer, faStar } from '@fortawesome/free-solid-svg-icons';

const ITServices = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const services = [
    { title: "Software Development", icon: faCode },
    { title: "IT Outsourcing", icon: faMobileAlt },
    { title: "UI/UX Design", icon: faGlobe },
    { title: "Website Development", icon: faDesktop },
    { title: "E-Commerce Solution", icon: faShoppingCart },
    { title: "SEO", icon: faSearch },
    { title: "Graphics Designing", icon: faPalette },
    { title: "Server Management", icon: faServer },
    { title: "2D Animation", icon: faStar },
  ];

  const openModal = (title) => {
    setModalContent(title);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div id="features" className="py-12 px-4 sm:px-8 md:px-16 lg:px-32 mt-14 mb-5">
      <h2 className="text-2xl font-bold text-center mb-8 sm:mb-12 text-red-600">IT Services We Offer</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4 mt-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex items-center cursor-pointer gap-3 py-6 px-4 rounded-lg hover:shadow-lg transition-shadow duration-300"
            onClick={() => openModal(service.title)}
          >
            <FontAwesomeIcon icon={service.icon} className="text-red-600 text-2xl" />
            <span className="text-lg sm:text-xl">{service.title}</span>
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-lg text-center w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3">
            <h2 className="text-2xl mb-4 font-bold">{modalContent}</h2>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, nihil.</p>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ITServices;
