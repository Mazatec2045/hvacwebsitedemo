import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

const ReviewCarousel = () => {
    // Static reviews data wrapped in useMemo to avoid recreation on every render
    const reviews = useMemo(() => [
        {
            id: 1,
            name: "Cheryl Beach",
            initials: "C",
            bgColor: "bg-pink-500",
            rating: 5,
            date: "6 days ago",
            isNew: true,
            text: "I want to thank Tony and Teo for making this Sr. Citizen lady feel so thankful for coming to my home in a very timely manner. Their kindness and courtesy were very appreciated, and their knowledge of the task at hand showed me I could..."
        },
        {
            id: 2,
            name: "T Otto",
            initials: "T",
            bgColor: "bg-gray-500",
            rating: 5,
            date: "a month ago",
            isNew: false,
            text: "They have given me more communication and ease than my actual property managers who hires them to handle all repairs. Hilda literally always answers the phone and does her best to answer all my questions along with updated and follow ups. Bless y'all!"
        },
        {
            id: 3,
            name: "Elva V",
            initials: "E",
            bgColor: "bg-purple-500",
            rating: 5,
            date: "8 months ago",
            isNew: false,
            text: "Great communication and speedy service. AC went out at 8PM, and they had me fixed up in less than 24 hrs. The technician was respectful and let me know what he was doing."
        },
        {
            id: 4,
            name: "DARRELL JOHNSON",
            initials: "D",
            bgColor: "bg-gray-600",
            rating: 5,
            date: "a week ago",
            isNew: true,
            text: "I highly recommend these guys, they installed a complete system for me last Year no issues at all had a problem with my other unit called them and they knocked it right out. They charged me but that was to be expected. if your house is hot call them."
        },
        {
            id: 5,
            name: "Sarah Reynolds",
            initials: "S",
            bgColor: "bg-orange-500",
            rating: 5,
            date: "a week ago",
            isNew: true,
            text: "Great service. Helped my mom who is a senior out and she absolutely would recommend him"
        }
    ], []);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleReviews, setVisibleReviews] = useState([]);

    // Determine how many reviews to show based on screen size
    const getReviewsPerPage = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth < 640) return 1; // Small screens
            if (window.innerWidth < 1024) return 2; // Medium screens
            return 3; // Large screens
        }
        return 3; // Default to 3 for SSR
    };

    const [reviewsPerPage, setReviewsPerPage] = useState(3);

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            setReviewsPerPage(getReviewsPerPage());
        };

        // Set initial value
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Update visible reviews when currentIndex or reviewsPerPage changes
    useEffect(() => {
        const visible = [];
        for (let i = 0; i < reviewsPerPage; i++) {
            const reviewIndex = (currentIndex + i) % reviews.length;
            visible.push(reviews[reviewIndex]);
        }
        setVisibleReviews(visible);
    }, [currentIndex, reviewsPerPage, reviews]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        What Our Customers Say
                    </h2>
                    <div className="flex items-center justify-center mb-2">
                        <span className="text-xl font-bold mr-2">4.6</span>
                        <div className="flex">
                            {/* First 4 full stars */}
                            {[1, 2, 3, 4].map((star) => (
                                <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}

                            {/* Partial (0.6) star */}
                            <div className="relative">
                                {/* Background empty star */}
                                <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>

                                {/* Foreground partial star (60% filled) */}
                                <div className="absolute inset-0 overflow-hidden" style={{ width: '60%' }}>
                                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <span className="text-gray-600 ml-2">Based on 57 reviews</span>
                    </div>

                    <a
                        href="https://www.google.com/search?sca_esv=f65d9110a0398786&sxsrf=AHTn8zqHbR1R6tnwXHhdiFz5OFpkr1sPkA:1743416597755&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzXvC1PhJc7GsJkc3py4EdJgmco632dDZ8nbf1j6aWqQHLYX__q4gyRq4El8IaUnSVCYKdfC451DwgZgzbn8H1piWGOBP-ZcLYogKO8dNdKnh5TlcOA%3D%3D&q=Mechanical+of+DFW,+LLC+Reviews&sa=X&ved=2ahUKEwjUyoT4jLSMAxXOD0QIHQjRHhsQ0bkNegQIPBAE&biw=1920&bih=911&dpr=1#lrd=0x864e7bbb08ecd825:0xa054fc9c0964fc2e,1,,,,"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-6 rounded-full inline-block mt-4 transition-colors"
                    >
                        Write a Review
                    </a>
                </div>

                <div className="relative">
                    {/* Left arrow */}
                    <button
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-2 hover:bg-gray-100 transition-colors"
                        onClick={prevSlide}
                        aria-label="Previous review"
                    >
                        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Reviews */}
                    <div className="mx-12">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {visibleReviews.map((review) => (
                                <motion.div
                                    key={review.id}
                                    className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="p-6">
                                        {/* Header with profile and rating */}
                                        <div className="flex items-center mb-4">
                                            {/* Profile initial circle */}
                                            <div className={`w-10 h-10 rounded-full ${review.bgColor} text-white flex items-center justify-center font-bold text-lg`}>
                                                {review.initials}
                                            </div>

                                            <div className="ml-3 flex-grow">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h4 className="font-medium text-gray-900">{review.name}</h4>
                                                        <div className="flex items-center mt-1">
                                                            <span className="text-xs text-gray-500">{review.date}</span>
                                                            {review.isNew && (
                                                                <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">NEW</span>
                                                            )}
                                                        </div>
                                                    </div>

                                                    {/* Google icon */}
                                                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                                                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                                        <path fill="none" d="M1 1h22v22H1z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Star rating */}
                                        <div className="flex mb-2">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className="w-4 h-4 text-yellow-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>

                                        {/* Review text */}
                                        <p className="text-gray-700 text-sm">{review.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right arrow */}
                    <button
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-2 hover:bg-gray-100 transition-colors"
                        onClick={nextSlide}
                        aria-label="Next review"
                    >
                        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Navigation dots */}
                    <div className="flex justify-center mt-8">
                        {reviews.map((_, index) => (
                            <button
                                key={index}
                                className={`w-2.5 h-2.5 mx-1 rounded-full transition-colors ${index === currentIndex ? 'bg-orange-600' : 'bg-gray-300'}`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to review ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReviewCarousel; 