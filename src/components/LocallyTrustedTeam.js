import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LocallyTrustedTeam = () => {
    // Service area locations - DFW Metroplex counties
    const locations = [
        { name: 'Collin County, TX', link: '#' },
        { name: 'Dallas County, TX', link: '#' },
        { name: 'Denton County, TX', link: '#' },
        { name: 'Ellis County, TX', link: '#' },
        { name: 'Hood County, TX', link: '#' },
        { name: 'Hunt County, TX', link: '#' },
        { name: 'Johnson County, TX', link: '#' },
        { name: 'Kaufman County, TX', link: '#' },
        { name: 'Parker County, TX', link: '#' },
        { name: 'Rockwall County, TX', link: '#' },
        { name: 'Somervell County, TX', link: '#' },
        { name: 'Tarrant County, TX', link: '#' },
        { name: 'Wise County, TX', link: '#' }
    ];

    return (
        <div className="relative">
            {/* Team Section */}
            <section className="bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Team Image */}
                    <motion.div
                        className="relative h-full min-h-[300px] md:min-h-[400px]"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src="https://placehold.co/800x600/red/white?text=HVAC+Service+Team"
                            alt="Our HVAC Service Team"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Team Info */}
                    <motion.div
                        className="bg-orange-600 text-white p-8 md:p-12 flex flex-col justify-center"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Your Locally Trusted Team
                        </h2>
                        <p className="text-white/90 mb-6 leading-relaxed">
                            For over 20 years, Mechanical of DFW HVAC has been the go-to choice for Dallas-Fort Worth area residents when it comes to their homes and health. As a local business, we're proud to serve the community we call home with our premium HVAC services and 100% Satisfaction Guarantee, that puts your needs first and builds trust. Don't settle for half-baked service and so-so results. Instead, discover the difference an expert team makes. Contact Smock HVAC to get started!
                        </p>
                        <div className="mt-4">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    to="/about"
                                    className="inline-block bg-white text-orange-600 hover:bg-gray-100 py-3 px-8 rounded-full font-medium shadow-lg transition-all"
                                >
                                    More About Us
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Service Area Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        {/* Service Area Text */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                                Serving the Dallas-Fort Worth Metroplex Since 2005
                            </h2>

                            <div className="flex flex-wrap gap-x-4 gap-y-2 mt-6">
                                {locations.map((location, index) => (
                                    <div key={index} className="inline-block">
                                        <Link
                                            to={location.link}
                                            className="text-orange-600 hover:text-orange-800 transition-colors text-sm md:text-base font-medium"
                                        >
                                            {location.name}
                                        </Link>
                                        {index < locations.length - 1 && (
                                            <span className="text-gray-400 ml-4 mr-0 hidden md:inline">|</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Map */}
                        <motion.div
                            className="rounded-lg overflow-hidden shadow-xl h-[300px] bg-gray-100"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <iframe
                                title="Business Location Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3355.1501141602177!2d-97.34939448441994!3d32.76557688097519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7171e60add47%3A0xb8c748d8a4b8ab62!2s602%20W%20Central%20Ave%2C%20Fort%20Worth%2C%20TX%2076164!5e0!3m2!1sen!2sus!4v1654793214930!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LocallyTrustedTeam; 