import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav className="bg-purple-900 text-white p-6 w-full">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="text-white text-3xl md:text-3xl font-bold mb-4 md:mb-0">
                    <FontAwesomeIcon icon={faChartLine} className="text-yellow-400" /> FinPoint
                </div>
                <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-lg md:text-xl font-semibold">
                    <li>
                        <a href="#home" className="text-white hover:text-gray-300">Home</a>
                    </li>
                    <li>
                        <a href="#services" className="text-white hover:text-gray-300">Services</a>
                    </li>
                    <li>
                        <a href="#about" className="text-white hover:text-gray-300">About</a>
                    </li>
                    <li>
                        <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;