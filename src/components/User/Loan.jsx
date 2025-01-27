"use client";

import { useRouter } from "next/navigation";
import axios from "axios";
import React, { useState } from "react";
import { AppRoutes } from "@/constant/constant";
import { useUser } from "@/context/UserContext";

const LoanPage = () => {
    const router = useRouter();
    const { user, setUser } = useUser(); // Access UserContext
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ cnic: "", name: "", email: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    console.log(user)
    const loans = [
        {
            title: "Wedding Loan",
            description:
                "Plan your dream wedding with ease. Get a loan tailored for all your wedding needs.",
            image: "/loan-image.jpg",
        },
        {
            title: "Home Construction Loan",
            description:
                "Build your dream home with our easy and flexible construction loans.",
            image: "/loan-image.jpg",
        },
    ];

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const obj = {
            cnic: e.target.value,
            name: e.target.value,
            email: e.target.value
        }

        try {
            axios.post(AppRoutes.register, obj)
                .then((res) => {
                    console.log(res)
                })
            // setUser(response?.data?.user);
            // console.log(user)
            setIsModalOpen(false);
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center text-teal-600 mb-8">
                    Loan Options
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {loans.map((loan, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                        >
                            <img
                                src={loan.image}
                                alt={loan.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-xl font-bold text-gray-800 mb-2">
                                    {loan.title}
                                </h2>
                                <p className="text-gray-600">{loan.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="mt-6 px-4 py-2 bg-teal-600 text-white rounded-md"
                >
                    Apply for loan
                </button>
            </div>

            {/* Modal for user input */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg w-96">
                        <h2 className="text-2xl font-bold text-center mb-4">
                            Apply for Loan
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label
                                    htmlFor="cnic"
                                    className="block text-sm font-semibold text-gray-700"
                                >
                                    CNIC
                                </label>
                                <input
                                    type="text"
                                    id="cnic"
                                    name="cnic"
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-semibold text-gray-700"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-semibold text-gray-700"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>

                            {error && (
                                <p className="text-red-500 text-sm text-center mb-4">
                                    {error}
                                </p>
                            )}

                            <button
                                type="submit"
                                className="w-full bg-teal-600 text-white py-2 rounded-md"
                                disabled={loading}
                            >
                                {loading ? "Submitting..." : "Submit"}
                            </button>
                        </form>

                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="mt-4 text-teal-600 underline"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* Display user data from context */}
            {user && (
                <div className="mt-6 p-4 bg-teal-100 rounded-md">
                    <h2 className="text-xl font-bold text-teal-700">
                        Registration Successful
                    </h2>
                    <p>
                        <strong>CNIC:</strong> {user.cnic}
                    </p>
                    <p>
                        <strong>Email:</strong> {user.email}
                    </p>
                    <p>
                        <strong>Generated Password:</strong> {user.password}
                    </p>
                </div>
            )}
        </div>
    );
};

export default LoanPage;
