import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="text-2xl font-bold tracking-wider bg-gradient-to-r from-red-600 to-green-500 text-transparent bg-clip-text">FoodDelivery</a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6">
                    <NavItem href="#" label="Home" />
                    <NavItem href="#" label="Menu" />
                    <NavItem href="#" label="About" />
                    <NavItem href="#" label="Contact" />
                    <NavItem href="#" label="Cart" />
                </ul>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center space-x-4">
                    <a 
                        href="#" 
                        className="text-gray-700 hover:text-green-600 transition duration-300 ease-in-out"
                    >
                        Login
                    </a>
                    <a 
                        href="#" 
                        className="bg-gradient-to-r from-green-500 to-red-600 text-white px-6 py-2 rounded-full shadow-md hover:from-green-600 hover:to-green-700 transition duration-300 ease-in-out"
                    >
                        Sign Up
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-gray-700 hover:text-green-600 focus:outline-none transition duration-300 ease-in-out"
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-6 w-6" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </nav>
    );
};

// Subcomponent for Navigation Items
const NavItem = ({ href, label }) => (
    <li>
        <a 
            href={href} 
            className="text-gray-700 hover:text-green-600 font-medium transition duration-300 ease-in-out"
        >
            {label}
        </a>
    </li>
);

export default Navbar;