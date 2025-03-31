import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Mechanical<span className="text-orange-500"> of DFW</span></h3>
            <p className="text-gray-400 mb-6">
              We specialize in Residential and Commercial Heating and Air Conditioning in the DFW area with over 20 years of experience.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://facebook.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-orange-500 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </motion.a>
              <motion.a 
                href="https://twitter.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-orange-500 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Twitter"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </motion.a>
              <motion.a 
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-orange-500 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.98 0a6.9 6.9 0 01.702.031c.631.04 1.05.1 1.523.231.545.142 1.058.34 1.55.627.494.291.94.64 1.35 1.05.41.41.758.855 1.05 1.35.288.49.486 1.004.627 1.55.13.472.19.891.231 1.523.039.632.043.893.043 2.616v5.819c0 1.723-.004 1.984-.043 2.616-.041.632-.1 1.05-.231 1.523a5.41 5.41 0 01-.627 1.55c-.29.493-.64.94-1.05 1.35-.41.41-.855.758-1.35 1.05a5.41 5.41 0 01-1.55.627c-.472.13-.89.19-1.523.231-.632.039-.893.043-2.616.043h-5.82c-1.723 0-1.984-.004-2.616-.043-.632-.04-1.05-.1-1.523-.231a5.41 5.41 0 01-1.55-.627 5.44 5.44 0 01-1.35-1.05 5.44 5.44 0 01-1.05-1.35 5.41 5.41 0 01-.627-1.55c-.13-.472-.19-.891-.231-1.523-.039-.632-.043-.893-.043-2.616v-5.82c0-1.723.004-1.984.043-2.616.04-.632.1-1.05.231-1.523.142-.545.34-1.058.627-1.55.291-.494.64-.94 1.05-1.35.41-.41.855-.758 1.35-1.05a5.41 5.41 0 011.55-.627c.472-.13.891-.19 1.523-.231C15.06.004 15.32 0 17.044 0h.438zm-2.464 2.175h-.476c-1.557 0-1.796.003-2.44.044-.591.038-.912.125-1.125.21-.283.11-.485.24-.697.452-.212.212-.342.414-.452.697-.085.213-.172.534-.21 1.125-.041.644-.044.883-.044 2.44v.476c0 1.557.003 1.796.044 2.44.038.591.125.912.21 1.125.11.283.24.485.452.697.212.212.414.342.697.452.213.085.534.172 1.125.21.644.041.883.044 2.44.044h.476c1.557 0 1.796-.003 2.44-.044.591-.038.912-.125 1.125-.21.283-.11.485-.24.697-.452.212-.212.342-.414.452-.697.085-.213.172-.534.21-1.125.041-.644.044-.883.044-2.44v-.476c0-1.557-.003-1.796-.044-2.44-.038-.591-.125-.912-.21-1.125-.11-.283-.24-.485-.452-.697-.212-.212-.414-.342-.697-.452-.213-.085-.534-.172-1.125-.21-.644-.041-.883-.044-2.44-.044zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm7.846-10.406a1.44 1.44 0 01-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-8 md:mt-0"
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'About', 'Contact', 'Financing', 'Blog'].map((item, index) => (
                <li key={index}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-orange-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 lg:mt-0"
          >
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                'AC Installations',
                'AC & Heating Repair',
                'AC Tune-Up',
                'HVAC Servicing',
                'Commercial HVAC',
                'Residential HVAC'
              ].map((item, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-400 hover:text-orange-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 lg:mt-0"
          >
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400">
                  Dallas-Fort Worth Area<br />
                  Serving all of DFW
                </span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-400">mechanicalofdfwllc@gmail.com</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-400">(817) 901-0001</span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Mechanical of DFW, LLC. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-8">
                <li>
                  <a href="/privacy-policy" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms-of-service" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">Terms of Service</a>
                </li>
                <li>
                  <a href="/cookie-policy" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">Cookie Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 