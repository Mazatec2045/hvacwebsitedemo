import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Check if we're on the homepage
  const isHomePage = location.pathname === '/' || location.pathname === '';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Financing', path: '/financing' },
    { name: 'Contact', path: '/contact' }
  ];

  // Determine header background color
  const headerBgClass = isScrolled || !isHomePage
    ? 'bg-white shadow-lg py-2'
    : 'bg-transparent py-4';

  // Determine text color
  const textColorClass = isScrolled || !isHomePage
    ? 'text-gray-800'
    : 'text-white';

  return (
    <>
      <motion.header
        className={`fixed w-full z-50 transition-all duration-300 ${headerBgClass}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            {/* Logo */}
            <div
              className="flex items-center mr-4"
            >
              <Link to="/" onClick={isHomePage ? scrollToTop : undefined}>
                <img
                  src={process.env.PUBLIC_URL + "/images/logo.png"}
                  alt="Mechanical of DFW Logo"
                  className="h-10 w-10 md:h-12 md:w-12 mr-2 md:mr-3 rounded-full border border-gray-200"
                  style={{ objectFit: 'contain', backgroundColor: 'white' }}
                  loading="eager"
                  onError={(e) => {
                    console.log("Logo load error, using fallback");
                    e.target.onerror = null;
                    e.target.src = process.env.PUBLIC_URL + "/HvacTech.jpg";
                  }}
                />
              </Link>
              <Link to="/" onClick={isHomePage ? scrollToTop : undefined} className="no-underline">
                <span className={`text-xl md:text-2xl font-bold ${isScrolled || !isHomePage ? 'text-blue-600' : 'text-white'}`}>
                  Mechanical<span className="text-orange-500"> of DFW</span>
                </span>
              </Link>
            </div>

            {/* Navigation - Desktop */}
            <nav className="hidden lg:flex items-center space-x-5 xl:space-x-8 flex-grow justify-center max-w-xl">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.path}
                    onClick={(e) => {
                      // Add scroll to top for Home link on homepage
                      if (item.name === 'Home' && isHomePage) {
                        e.preventDefault();
                        scrollToTop();
                      }

                      // Add debugging for Financing link
                      if (item.name === 'Financing') {
                        console.log('Financing link clicked, navigating to', item.path);
                      }
                    }}
                    className={`font-medium hover:text-orange-500 transition-colors ${textColorClass} text-sm xl:text-base`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Right side buttons */}
            <div className="flex items-center space-x-2 md:space-x-4 ml-auto mr-2 lg:mr-0">
              <motion.a
                href="https://book.housecallpro.com/book/Mechanical-of-DFW/42d69bc459d74143a10f2616327b0fe9"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white py-1 md:py-2 px-3 md:px-6 rounded-full font-medium shadow-md transition-all hidden md:block text-sm lg:text-base whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book an Appointment
              </motion.a>

              <motion.a
                href="tel:+18179010001"
                className="bg-orange-500 hover:bg-orange-600 text-white py-1 md:py-2 px-3 md:px-4 rounded-full font-medium shadow-md transition-all text-sm lg:text-base whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                (817) 901-0001
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                className={textColorClass}
                onClick={toggleMobileMenu}
                aria-label="Open menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-blue-600 z-40 pt-20 px-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-6 items-center pt-10">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.path}
                    onClick={(e) => {
                      setMobileMenuOpen(false);

                      // Add scroll to top for Home link on homepage
                      if (item.name === 'Home' && isHomePage) {
                        e.preventDefault();
                        scrollToTop();
                      }

                      // Add debugging for Financing link
                      if (item.name === 'Financing') {
                        console.log('Mobile: Financing link clicked, navigating to', item.path);
                      }
                    }}
                    className="text-white text-xl font-medium"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.a
                href="https://book.housecallpro.com/book/Mechanical-of-DFW/42d69bc459d74143a10f2616327b0fe9"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 py-3 px-8 rounded-full font-medium shadow-md w-full text-center mt-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setMobileMenuOpen(false);
                }}
              >
                Book an Appointment
              </motion.a>
            </div>

            <button
              className="absolute top-4 right-4 text-white"
              onClick={toggleMobileMenu}
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header; 