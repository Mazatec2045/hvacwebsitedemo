import React from 'react';
import { motion } from 'framer-motion';

const Financing = () => {
    return (
        <section id="financing" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Financing Options</h2>
                    <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
                </motion.div>

                <motion.div
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                            Mechanical of DFW offers financing with Wells Fargo.
                        </h3>
                        <p className="text-xl text-gray-600">
                            Click "Learn More" for details.
                        </p>
                    </div>

                    {/* Wells Fargo Financing Card - Styled to match the image */}
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
                        <div className="p-8">
                            <h3 className="text-3xl font-bold text-red-600 mb-6">Buy today, pay over time</h3>

                            <h4 className="text-lg font-semibold text-gray-800 mb-4">This credit card also brings you:</h4>

                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start">
                                    <div className="text-gray-400 mr-2">•</div>
                                    <div>Revolving line of credit that you can use over and over again</div>
                                </li>
                                <li className="flex items-start">
                                    <div className="text-gray-400 mr-2">•</div>
                                    <div>Special financing where available</div>
                                </li>
                                <li className="flex items-start">
                                    <div className="text-gray-400 mr-2">•</div>
                                    <div>Convenient monthly payments to fit your budget</div>
                                </li>
                                <li className="flex items-start">
                                    <div className="text-gray-400 mr-2">•</div>
                                    <div>Easy-to-use online account management and bill payment options</div>
                                </li>
                            </ul>

                            <div className="flex flex-col md:flex-row justify-between items-center border-t pt-6">
                                <div className="text-sm text-gray-600 mb-4 md:mb-0">
                                    This credit card is issued with approved credit by Wells Fargo Bank, N.A.
                                    <div className="mt-1">© Equal Housing Lender</div>
                                </div>
                                <motion.a
                                    href="https://retailservices.wellsfargo.com/ahapp/init-app?m=0024332413&l=en_US"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-red-600 hover:bg-red-700 text-white py-3 px-10 rounded-lg font-medium text-lg shadow-md transition-all"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Learn More
                                </motion.a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-lg text-gray-700 mb-6">
                            We understand that HVAC investments can be significant. That's why we offer flexible financing options to help
                            make your comfort solutions more affordable.
                        </p>
                        <p className="text-lg text-gray-700">
                            Contact us today to learn more about our financing options and how we can help you stay comfortable
                            without breaking the bank.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Financing; 