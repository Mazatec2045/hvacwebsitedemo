import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PremiumServices = () => {
    // Service cards data
    const serviceCards = [
        {
            id: 1,
            title: 'Air Conditioning',
            description: 'We\'re your local AC experts! Whether you are looking for a new system, or want to maintain your existing one, we are here to help.',
            icon: (
                <svg className="w-10 h-10 text-red-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.25 14.25L15.7 15.2C15.3 15.77 14.9 16.34 14.5 16.92C14.44 17.01 14.25 17.2 14 17.2H10C9.73 17.2 9.57 17.01 9.5 16.91C9.11 16.34 8.71 15.77 8.3 15.2L7.75 14.25C7.67 14.11 7.67 13.89 7.75 13.75L8.3 12.79C8.71 12.22 9.11 11.65 9.5 11.08C9.57 10.99 9.73 10.8 10 10.8H14C14.27 10.8 14.43 10.99 14.5 11.09C14.89 11.66 15.29 12.23 15.7 12.8L16.25 13.75C16.33 13.89 16.33 14.11 16.25 14.25Z" />
                </svg>
            ),
            path: '/services'
        },
        {
            id: 2,
            title: 'Heating',
            description: 'Stay warm all winter long with our heating repairs, replacements, and maintenance services.',
            icon: (
                <svg className="w-10 h-10 text-red-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C9.79 2 8 3.79 8 6C8 7.09 8.4 8.1 9.09 8.83A7.56 7.56 0 007.58 13.59C7.5 13.95 7.5 14.33 7.5 14.71C7.5 17.31 10.08 19.5 13.5 19.5C16.92 19.5 19.5 17.31 19.5 14.71C19.5 14.33 19.5 13.95 19.42 13.59C19.08 11.97 17.93 10.62 16.33 9.83C17.09 9.09 17.5 8.1 17.5 7C17.5 4.79 15.71 3 13.5 3C12.81 3 12.17 3.19 11.6 3.53C12.17 4.25 12.5 5.15 12.5 6C12.5 8.21 10.71 10 8.5 10C8.18 10 7.86 9.96 7.55 9.88C7.83 10.61 8.53 11.22 9.5 11.55V13.47C9.5 13.96 9.81 14.69 10.17 15.04L12 16.71L13.83 15.04C14.19 14.7 14.5 13.96 14.5 13.47V11.24C14.5 10.07 15.4 9.17 16.56 9.17C18.37 9.17 18.75 11.97 16.53 12.46C16.93 13.14 17.15 13.91 17.15 14.71C17.15 16.1 15.71 17.4 13.5 17.4C11.29 17.4 9.85 16.1 9.85 14.71C9.85 13.91 10.06 13.14 10.47 12.46A1.43 1.43 0 008.95 11.57A3.37 3.37 0 008.25 12.46C7.85 13.14 7.63 13.91 7.63 14.71C7.63 17.3 10.2 19.5 13.5 19.5C16.8 19.5 19.37 17.3 19.37 14.71C19.37 13.91 19.15 13.14 18.75 12.46C18.41 11.91 17.91 11.44 17.31 11.08C19.55 9.47 19.04 5.89 16.72 4.72A4.96 4.96 0 0013.5 1C9.91 1 7 3.91 7 7.5C7 8.18 7.11 8.83 7.31 9.43A4.98 4.98 0 014 14C4 16.76 6.24 19 9 19A4.98 4.98 0 0013.57 16.69C17.9 16.95 21 13.83 21 10C21 6.68 18.31 4 15 4C14.22 4 13.47 4.16 12.79 4.44C13.69 5.01 14.35 5.92 14.6 7C17.85 8.11 17.3 12.29 14.87 12.97C14.2 13.19 14.3 14.11 15 14.25C17.34 14.74 20 12.75 20 10C20 8.58 19.5 7.23 18.66 6.17C18.17 5.56 17.61 5.04 16.97 4.64C16.41 4.28 15.81 4 15.17 3.83C15.74 4.17 15.89 4.55 16.22 5C16.47 5.34 16.64 5.73 16.75 6.13C16.85 6.47 16.94 6.82 16.94 7.19C16.94 9.96 13.67 11.05 12.68 8.32C12.28 7.32 11.15 6.7 9.95 7.04C8.75 7.38 8.01 8.83 8.5 10C8.5 10 8.27 10.3 8 10.56A9.14 9.14 0 006 15C6 18.87 9.13 22 13 22C16.87 22 20 18.87 20 15C20 11.25 17.54 8.76 13.81 8.18C13.91 8.22 13.77 8.53 13.69 8.65C13.14 9.5 12.07 10 11 10C9.35 10 8 8.65 8 7V3.41A6.995 6.995 0 0113.5 1C17.09 1 20 3.91 20 7.5C20 8.91 19.55 10.23 18.78 11.31C19.23 11.92 19.5 12.67 19.5 13.47V13.53C19.71 13.24 19.89 12.93 20 12.58C20.03 12.5 20.05 12.42 20.07 12.34A10.97 10.97 0 0022 7.5C22 2.8 18.2 -1 13.5 -1C8.8 -1 5 2.8 5 7.5C5 9.11 5.45 10.59 6.23 11.82A4 4 0 005 11C2.79 11 1 12.79 1 15C1 17.21 2.79 19 5 19C6.5 19 7.76 18.1 8.42 16.8C9.18 17.26 10.01 17.63 10.92 17.85A5.5 5.5 0 016 13.5C6 13.34 6.01 13.17 6.04 13A7.09 7.09 0 017.84 8.15A5.5 5.5 0 016 4C6 1.79 7.79 0 10 0C12.21 0 14 1.79 14 4C14 4.57 13.86 5.11 13.62 5.59C16.16 6.15 18 8.3 18 10.82C18 13.85 15.85 16.24 13 16.82V13A2 2 0 0115 11C15.15 11 15.3 11.01 15.45 11.05A2.5 2.5 0 0013 9.5V7.5A2.5 2.5 0 0015.5 5C16.88 5 18 6.12 18 7.5C18 8.37 17.5 9.12 16.76 9.5A4.74 4.74 0 0118.04 9.76C18.1 9.08 18 8.39 17.76 7.74A4.42 4.42 0 0019.18 5.2C18.5 2.83 16.23 1.5 14 1.5C12.75 1.5 11.5 1.89 10.5 2.62A3.99 3.99 0 0012 4Z" />
                </svg>
            ),
            path: '/services'
        },
        {
            id: 3,
            title: 'Indoor Air Quality',
            description: 'Breathe deep! That\'s the smell of fresh, purified air for your whole home! From filters to air cleaning systems, we help protect your health.',
            icon: (
                <svg className="w-10 h-10 text-red-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12,18.5A1.5,1.5 0 0,1 10.5,17A1.5,1.5 0 0,1 12,15.5A1.5,1.5 0 0,1 13.5,17A1.5,1.5 0 0,1 12,18.5M12,7A3,3 0 0,0 9,10A3,3 0 0,0 12,13A3,3 0 0,0 15,10A3,3 0 0,0 12,7M12,3C7.03,3 3,7.03 3,12C3,14.7 4.04,17.15 5.73,19L10,14.72C9.39,14.34 9,13.7 9,13C9,11.9 9.9,11 11,11H13C17.97,11 22,15.03 22,20C22,20.34 21.97,20.67 21.94,21H22C17.86,21 14.2,19.72 11.88,17.39L6.26,23L5.55,22.29L11.16,16.68C9.84,15.37 9,13.55 9,11.5C9,8.46 11.46,6 14.5,6H16C15.84,4.8 15.06,3.76 14,3.22C13.38,3.08 12.7,3 12,3Z" />
                </svg>
            ),
            path: '/services'
        },
        {
            id: 4,
            title: 'Water Heaters',
            description: 'Keep the hot water flowing all year long when you hire Smackk to install your water heater.',
            icon: (
                <svg className="w-10 h-10 text-red-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12,3.77L11.25,4.61C11.25,4.61 9.97,6.06 8.68,7.94C7.39,9.82 6,12.07 6,14.23A6,6 0 0,0 12,20.23A6,6 0 0,0 18,14.23C18,12.07 16.61,9.82 15.32,7.94C14.03,6.06 12.75,4.61 12.75,4.61L12,3.77M12,6.9C12.44,7.42 12.84,7.85 13.68,9.07C14.89,10.83 16,13.07 16,14.23C16,16.45 14.22,18.23 12,18.23C9.78,18.23 8,16.45 8,14.23C8,13.07 9.11,10.83 10.32,9.07C11.16,7.85 11.56,7.42 12,6.9Z" />
                </svg>
            ),
            path: '/services'
        }
    ];

    // Process steps data
    const processSteps = [
        {
            id: 1,
            title: 'Schedule An Inspection',
            description: 'Reach out via our contact form or phone number to schedule a complimentary inspection.',
            icon: (
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                </svg>
            )
        },
        {
            id: 2,
            title: 'Experience Easy Service',
            description: 'We make our repair and installation process extremely easy with minimal disruptions. With detailed estimates, and speedy installs / repairs, you can count on us!',
            icon: (
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.71,20.29L20.29,21.71C20.11,21.89 19.85,22 19.59,22C19.33,22 19.07,21.89 18.88,21.71L7,9.83V13.59C7.76,13.95 8.29,14.77 8.17,15.67C8.05,16.57 7.31,17.23 6.39,17.25C5.47,17.27 4.71,16.64 4.54,15.75C4.38,14.85 4.89,14 5.67,13.59V6H6A1,1 0 0,0 7,5V3A1,1 0 0,0 6,2H3A1,1 0 0,0 2,3V5A1,1 0 0,0 3,6H4V9.33C3.97,9.36 3.94,9.39 3.91,9.42C2.71,10.62 2.71,12.54 3.91,13.74C4.28,14.11 4.74,14.36 5.23,14.5V15.75C5.23,16.09 5.26,16.42 5.33,16.74L2.29,19.78C1.89,20.18 1.89,20.85 2.29,21.25C2.68,21.64 3.35,21.64 3.75,21.25L6.79,18.21C7.74,20.24 9.82,21.59 12,21.59C13.79,21.59 15.47,20.8 16.63,19.44L21.7,24.5L23.12,23.09L21.71,20.29M12,19.59C10.4,19.59 8.89,18.92 7.89,17.77C7.86,17.67 7.84,17.56 7.82,17.45L16.24,9.03C17.29,10.11 17.84,11.67 17.64,13.25C17.41,15.1 16.06,16.72 14.23,17.31C13.5,17.54 12.75,17.63 12,17.59V19.59Z" />
                </svg>
            )
        },
        {
            id: 3,
            title: 'Enjoy Comfort',
            description: 'Experience a lifetime of comfort and ease in your home!',
            icon: (
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                </svg>
            )
        }
    ];

    return (
        <div className="relative">
            {/* Premium Services Section */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-sm uppercase tracking-wider text-gray-600 mb-2">OUR PREMIUM SERVICES</h3>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                            We've Cared About Your Comfort<br />Since 2005.
                        </h2>
                        <p className="max-w-3xl mx-auto text-gray-600 mb-8">
                            Our team of experienced professionals is ready to help you with whatever HVAC needs you have!
                        </p>
                        <Link
                            to="/services"
                            className="inline-flex items-center text-red-600 font-medium hover:text-red-800 transition-colors"
                        >
                            Explore Our Services
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </motion.div>

                    {/* Service Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {serviceCards.map((card) => (
                            <motion.div
                                key={card.id}
                                className="bg-white rounded-lg shadow-lg overflow-hidden"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: card.id * 0.1 }}
                            >
                                <div className="relative">
                                    <div className="absolute top-0 left-0 w-full h-16 bg-red-600 rounded-t-lg" />
                                    <div className="absolute top-0 left-6 w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md">
                                        {card.icon}
                                    </div>
                                </div>
                                <div className="p-6 pt-16">
                                    <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                                    <p className="text-gray-600 mb-4">
                                        {card.description}
                                    </p>
                                    <Link
                                        to={card.path}
                                        className="inline-flex items-center text-red-600 font-medium hover:text-red-800 transition-colors"
                                    >
                                        Learn More
                                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16 bg-red-600 text-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-sm uppercase tracking-wider text-white mb-2">OUR PROCESS</h3>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                            HVAC Services Made Simple
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
                        {processSteps.map((step) => (
                            <motion.div
                                key={step.id}
                                className="flex gap-4"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: step.id * 0.2 }}
                            >
                                <div className="bg-white rounded-full p-4 h-16 w-16 flex-shrink-0 flex items-center justify-center">
                                    <div className="p-2 rounded-full bg-red-600">
                                        {step.icon}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">STEP {step.id}: {step.title}</h4>
                                    <p className="text-white/90">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center">
                        <motion.a
                            href="#contact"
                            className="inline-block bg-white text-red-600 hover:bg-gray-100 py-3 px-8 rounded-full font-medium shadow-lg transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            Start The Process
                        </motion.a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PremiumServices; 