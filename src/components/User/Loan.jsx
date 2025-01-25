import React from "react";

const LoanPage = () => {
    const loans = [
        {
            title: "Wedding Loan",
            description:
                "Plan your dream wedding with ease. Get a loan tailored for all your wedding needs.",
            image: "/loan-image.jpg", // Replace with actual image URL
        },
        {
            title: "Home Construction Loan",
            description:
                "Build your dream home with our easy and flexible construction loans.",
            image: "/loan-image.jpg", // Replace with actual image URL
        },
        {
            title: "Business Startup Loan",
            description:
                "Kickstart your business idea with financial assistance to turn dreams into reality.",
            image: "/loan-image.jpg", // Replace with actual image URL
        },
        {
            title: "Education Loan",
            description:
                "Invest in your future with our affordable education loans for students.",
            image: "/loan-image.jpg", // Replace with actual image URL
        },
    ];

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
            </div>
        </div>
    );
};

export default LoanPage;
