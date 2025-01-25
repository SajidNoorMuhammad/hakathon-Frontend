import React from "react";

const Footer = () => {
    return (
        <footer className="bg-teal-600 text-white py-10">
            <div className="container mx-auto px-4 space-y-6">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Column 1: Links */}
                    <div>
                        <h3 className="text-lg font-bold">Explore</h3>
                        <ul className="mt-4 space-y-2">
                            <li>WhatsApp</li>
                            <li>About</li>
                            <li>Introduction</li>
                            <li>Chairman Message</li>
                            <li>News</li>
                            <li>Media</li>
                            <li>Contact</li>
                            <li>Donation</li>
                        </ul>
                    </div>

                    {/* Column 2: Address */}
                    <div>
                        <h3 className="text-lg font-bold">Contact</h3>
                        <p className="mt-4">
                            1 E Erie St STE 525-2783<br />
                            Chicago, IL 60611<br />
                            <br />
                            <strong>UAN Pak:</strong> +92 021-111729526<br />
                            <strong>Email:</strong> info@SaylaniWelfareUSA.com<br />
                            <strong>Call:</strong> 833-786-0999<br />
                            <strong>Tax ID:</strong> 88-3709826
                        </p>
                    </div>

                    {/* Column 3: Istikhara Contact */}
                    <div>
                        <h3 className="text-lg font-bold">Muhammad Tahir</h3>
                        <p className="mt-4">For Istikhara Contact</p>
                        <p className="mt-4 flex items-center gap-2">
                            <span>WhatsApp</span>
                        </p>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-700 pt-6 text-center">
                    <p>Copyright © 2025 by Saylani Welfare Int Trust</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
