import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const TopHeader = () => {
    return (
        <div className="bg-gray-300 border-b-gray-800 text-white py-2">
            <div className="container mx-auto flex justify-between items-center px-4">
                <div className="flex items-center space-x-2">
                    <MdEmail size={20} className="text-gray-800" />
                    <span className="text-sm">info@example.com</span>
                </div>

                <div className="flex items-center space-x-2">
                    <FaPhoneAlt size={18} className="text-gray-800" />
                    <span className="text-sm">+123 456 7890</span>
                </div>

                <div className="flex items-center space-x-2">
                    <FaWhatsapp size={20} className="text-gray-800" />
                    <span className="text-sm">+123 456 7890</span>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;
