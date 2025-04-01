import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import LogoCarousel from './LogoCarousel';
import ReviewCarousel from './ReviewCarousel';

const QualityAndDeals = () => {
    return (
        <div className="relative">
            {/* Quality Matters Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                                Quality Matters.
                            </h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Breathe easy, Mechanical of DFW has you covered! Our team of HVAC experts knows that a well-functioning system doesn't just improve your quality of life. It improves your health, too! Our commitment to providing you with customizable, safe air quality means that we never cut corners on the materials and installation techniques we use. With industry leading products, you can count on us to help you get the most out of your HVAC system for years to come.
                            </p>
                        </motion.div>

                        <motion.div
                            className="rounded-lg overflow-hidden shadow-xl"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <img
                                src="https://placehold.co/600x400?text=HVAC+Technician"
                                alt="HVAC Technician servicing outdoor unit"
                                className="w-full h-auto object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Logo Carousel Section */}
            <section className="py-0 bg-white">
                <div className="container mx-auto px-4">
                    <LogoCarousel hideTitle={true} />
                </div>
            </section>

            {/* Reviews Carousel Section */}
            <ReviewCarousel />

            {/* Deals Section */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                        {/* Coupons and Offers - 3 columns */}
                        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* $25 Off Coupon */}
                            <motion.div
                                className="border-2 border-dashed border-orange-600 rounded-lg p-6 bg-white"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <h3 className="text-3xl font-bold text-orange-600 mb-2">$25 Off</h3>
                                <p className="font-medium mb-4">Your Next Repair</p>
                                <p className="text-sm text-gray-600">
                                    *Restrictions may apply. Call Mechanical of DFW for complete details.
                                </p>
                            </motion.div>

                            {/* FREE 2nd Opinion */}
                            <motion.div
                                className="border-2 border-dashed border-orange-600 rounded-lg p-6 bg-white"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <h3 className="text-3xl font-bold text-orange-600 mb-2">FREE</h3>
                                <p className="font-medium mb-4">2nd Opinion on Major HVAC Repairs</p>
                                <p className="text-sm text-gray-600">
                                    *Restrictions may apply. Call Mechanical of DFW for complete details.
                                </p>
                            </motion.div>

                            {/* $2,000 Rebates */}
                            <motion.div
                                className="border-2 border-dashed border-orange-600 rounded-lg p-6 bg-white"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <h3 className="text-3xl font-bold text-orange-600 mb-2">$2,000</h3>
                                <p className="font-medium mb-4">in Rebates on New HVAC System</p>
                                <p className="text-sm text-gray-600">
                                    *On qualifying equipment. Other restrictions may apply. Utility Rebates up to $1500. In-house rebates up to $500. Call us for complete details.
                                </p>
                            </motion.div>

                            {/* FREE Estimates */}
                            <motion.div
                                className="border-2 border-dashed border-orange-600 rounded-lg p-6 bg-white"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <h3 className="text-3xl font-bold text-orange-600 mb-2">FREE</h3>
                                <p className="font-medium mb-4">Estimates on System Replacement</p>
                                <p className="text-sm text-gray-600">
                                    *Not valid with any other offers. Restrictions may apply. Call Mechanical of DFW for complete details.
                                </p>
                            </motion.div>
                        </div>

                        {/* Year Round Deals - 2 columns */}
                        <motion.div
                            className="lg:col-span-2 flex flex-col justify-center"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="mb-6">
                                <h4 className="text-sm uppercase tracking-wider text-gray-600 mb-2">CURRENT SPECIALS</h4>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                                    Year Round Deals For Your Whole Home
                                </h2>
                                <p className="text-gray-600 mb-8">
                                    A broken HVAC system shouldn't break your budget! We offer a rotating selection of monthly deals designed to save you money, time, and stress. Choose the team that puts your needs first, every time!
                                </p>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link
                                        to="/specials"
                                        className="inline-block bg-orange-600 hover:bg-orange-700 text-white py-3 px-8 rounded-full font-medium shadow-lg transition-all"
                                    >
                                        View All Specials
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default QualityAndDeals; 