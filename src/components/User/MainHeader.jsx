import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <header className="bg-white text-white">
            <div className="container mx-auto flex items-center justify-between py-4 px-4">
                {/* Left: Logo */}
                <div className="text-xl font-bold">
                    <a href="/" className="flex items-center space-x-2">
                        <img
                            src="/saylanilogo.png"
                            alt="Logo"
                            className="w-100 h-10 rounded-full"
                        />
                    </a>
                </div>

                {/* Center: Navigation Links */}
                <nav className="hidden md:flex space-x-6 text-sm font-medium">
                    <a href="#home" className="text-gray-400 hover:text-teal-400">
                        Home
                    </a>
                    <a href="#about" className="text-gray-400 hover:text-teal-400">
                        About
                    </a>
                    <a href="#services" className="text-gray-400 hover:text-teal-400">
                        Services
                    </a>
                    <a href="#media" className="text-gray-400 hover:text-teal-400">
                        Media
                    </a>
                    <a href="#contact" className="text-gray-400 hover:text-teal-400">
                        Contact Us
                    </a>
                    <a href="#bank-detail" className="text-gray-400 hover:text-teal-400">
                        Bank Detail
                    </a>
                </nav>

                {/* Right: Buttons */}
                <div className="flex items-center space-x-4">
                    <button className="bg-teal-500 hover:bg-teal-600 text-white text-sm py-2 px-4 rounded-lg">
                        Donate Now
                    </button>
                    <Link href={'/user'} className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm py-2 px-4 rounded-lg">
                        Take Loan
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
