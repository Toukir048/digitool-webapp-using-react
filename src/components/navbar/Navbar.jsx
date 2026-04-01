import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

const Navbar = ({productCart}) => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm md:px-35">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Products</a></li>
                            <li><a>Features</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>
                        </ul>
                    </div>
                    <a className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] 
                        bg-clip-text text-transparent 
                        rounded-full text-[30px] font-bold">
                        DigiTools
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>

                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    <div className="relative sm:flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300">
                        <div className="w-8 h-8 rounded-full hover:bg-base-200 flex items-center justify-center transition">
                            <FiShoppingCart className="text-[20px] text-gray-600 hover:text-black transition" />
                        </div>

                        {productCart?.length > 0 && (
                            <span className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 bg-red-500 text-white text-[10px] font-bold min-w-4.5 h-4.5 px-1 rounded-full flex items-center justify-center shadow">
                                {productCart.length}
                            </span>
                        )}
                    </div>
                    <a href="#">Login</a>
                    <a className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full text-[16px] font-semibold text-white">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;