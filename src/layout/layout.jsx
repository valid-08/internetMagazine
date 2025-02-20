import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/images/logo.png";
import social from "../assets/images/social.png";
import imgDil from "../assets/images/Wishlist.png";
import corzinka from "../assets/images/corzinka.png";

const Layout = () => {
    return (
        <>
            <header className="w-full bg-white shadow-md fixed mb-[100px] z-2">
                <nav className="flex flex-wrap items-center justify-between max-w-6xl mx-auto p-4">
                    <Link to="/login">
                        <img src={logo} alt="Logo" className="w-[120px]" />
                    </Link>

                    <div className="hidden md:flex space-x-6">
                        <Link to="/" className="text-gray-700 hover:text-black">
                            Home
                        </Link>
                        <Link to="/contact" className="text-gray-700 hover:text-black">
                            Contact
                        </Link>
                        <Link to="/about" className="text-gray-700 hover:text-black">
                            About
                        </Link>
                        <Link to="/signUp" className="text-gray-700 hover:text-black">
                            Sign Up
                        </Link>
                    </div>

                    <div className="flex items-center space-x-4">
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            className="hidden sm:block p-2 border rounded-lg text-sm"
                        />
                        <Link to="/wishlist">
                        <img src={imgDil} className="w-8 h-8 cursor-pointer" alt="Wishlist" />
                        </Link>
                        <Link to="/cart">
                            <img src={corzinka} className="w-8 h-8 cursor-pointer" alt="Cart" />
                        </Link>
                    </div>
                </nav>
            </header>

            <main className="max-w-6xl mx-auto p-4">
                <Outlet />
            </main>

            <footer className="w-full bg-black text-white py-10 px-6">
                <div className="max-w-6xl mx-auto flex flex-wrap justify-between gap-6 text-sm sm:text-base">
                    <div className="w-full sm:w-[45%] lg:w-[20%]">
                        <p className="text-lg font-semibold">Exclusive</p>
                        <p className="mt-2">Subscribe</p>
                        <p className="text-gray-400">Get 10% off your first order</p>
                        <input
                            type="text"
                            placeholder="Enter your email"
                            className="mt-2 p-2 w-full border rounded-lg bg-white text-black"
                        />
                    </div>

                    <div className="w-full sm:w-[45%] lg:w-[20%]">
                        <p className="text-lg font-semibold">Support</p>
                        <p className="text-gray-400 mt-2">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                        <p className="text-gray-400">exclusive@gmail.com</p>
                        <p className="text-gray-400">+88015-88888-9999</p>
                    </div>

                    <div className="w-full sm:w-[45%] lg:w-[15%]">
                        <p className="text-lg font-semibold">Account</p>
                        <p className="text-gray-400 mt-2">My Account</p>
                        <p className="text-gray-400">Cart</p>
                        <p className="text-gray-400">Wishlist</p>
                        <p className="text-gray-400">Shop</p>
                    </div>

                    <div className="w-full sm:w-[45%] lg:w-[15%]">
                        <p className="text-lg font-semibold">Quick Links</p>
                        <p className="text-gray-400 mt-2">Privacy Policy</p>
                        <p className="text-gray-400">Terms Of Use</p>
                        <p className="text-gray-400">FAQ</p>
                        <p className="text-gray-400">Contact</p>
                    </div>

                    <div className="w-full sm:w-[45%] lg:w-[15%]">
                        <p className="text-lg font-semibold">Social</p>
                        <div className="mt-2">
                            <img src={social} alt="Social" className="w-24" />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Layout;
