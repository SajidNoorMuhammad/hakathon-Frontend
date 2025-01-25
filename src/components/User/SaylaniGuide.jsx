import React from "react";

const SaylaniGuide = () => {
  return (
    <div className="flex items-center justify-center w-[100%] bg-white">
      <div className="bg-white shadow-lg w-[100%] rounded-lg mt-10 p-6 text-center space-y-6">
        <h1 className="text-2xl font-bold text-teal-600">Saylani Guide</h1>
        <p className="text-gray-600">Subscribe to our guide for the latest updates!</p>
        <div className="flex flex-col items-center space-y-4">
          {/* Email Input */}
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          {/* Subscribe Button */}
          <button className="bg-teal-500 w-[50%] text-white px-6 py-2 rounded-lg hover:bg-teal-600">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default SaylaniGuide;
