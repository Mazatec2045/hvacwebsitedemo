import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

// Import all logos
import goodmanLogo from '../assets/images/logos/Goodman.png';
import lennoxLogo from '../assets/images/logos/Lennox.png';
import rheemLogo from '../assets/images/logos/Rheem.png';
import carrierLogo from '../assets/images/logos/Carrier.png';
import ruudLogo from '../assets/images/logos/Ruud.png';
import traneLogo from '../assets/images/logos/Trane.png';

const LogoCarousel = ({ hideTitle = false }) => {
    const logos = [
        { id: 1, src: goodmanLogo, alt: 'Goodman' },
        { id: 2, src: lennoxLogo, alt: 'Lennox' },
        { id: 3, src: rheemLogo, alt: 'Rheem' },
        { id: 4, src: carrierLogo, alt: 'Carrier' },
        { id: 5, src: ruudLogo, alt: 'Ruud' },
        { id: 6, src: traneLogo, alt: 'Trane' },
    ];

    const controls = useAnimationControls();
    const carouselRef = useRef(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        return () => setIsMounted(false);
    }, []);

    useEffect(() => {
        if (!isMounted) return;

        const startInfiniteScroll = async () => {
            const carousel = carouselRef.current;
            if (!carousel) return;

            // Get the width of a single set of logos
            const singleSetWidth = carousel.scrollWidth / 2;

            // Start animation sequence
            await controls.start({
                x: -singleSetWidth,
                transition: {
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop"
                }
            });
        };

        startInfiniteScroll();

        // Cleanup function
        return () => {
            controls.stop();
        };
    }, [controls, isMounted]);

    return (
        <div className="logo-carousel-container py-8 my-12 bg-white rounded-lg shadow-sm">
            {!hideTitle && (
                <h3 className="text-xl md:text-2xl font-semibold text-center mb-6">
                    Brands We Work With
                </h3>
            )}

            <div className="overflow-hidden relative">
                <motion.div
                    ref={carouselRef}
                    className="flex items-center"
                    animate={controls}
                    initial={{ x: 0 }}
                    style={{ width: '200%' }}
                >
                    {/* First set of logos */}
                    {logos.map((logo) => (
                        <div
                            key={`logo-${logo.id}`}
                            className="flex-shrink-0 px-8 md:px-12"
                        >
                            <motion.img
                                src={logo.src}
                                alt={logo.alt}
                                className="h-20 md:h-24 w-auto object-contain opacity-100"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    ))}

                    {/* Duplicate set of logos for continuous scrolling */}
                    {logos.map((logo) => (
                        <div
                            key={`logo-dup-${logo.id}`}
                            className="flex-shrink-0 px-8 md:px-12"
                        >
                            <motion.img
                                src={logo.src}
                                alt={logo.alt}
                                className="h-20 md:h-24 w-auto object-contain opacity-100"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default LogoCarousel; 