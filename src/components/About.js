import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const features = [
    {
      id: 1,
      title: 'Experienced Team',
      description: 'With over 20 years of experience in the HVAC industry, we have the knowledge and expertise to handle any project.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Customer Satisfaction',
      description: 'Our main priority is our customer\'s satisfaction. We strive to provide the highest quality service at all times.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Free Estimates',
      description: 'We provide free estimates for all your HVAC needs. Give us a call today to schedule yours!',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Our Company</h2>
            <div className="w-24 h-1 bg-orange-500 mb-6"></div>
            <p className="text-gray-600 mb-6 text-lg">
              We are a growing company that specializes in Residential and Commercial Heating and Air Conditioning. Located in the DFW area and with over 20 years of experience, we are here to help with your AC and Heating repair needs.
            </p>
            <p className="text-gray-600 mb-8 text-lg">
              Our main priority is our customer's satisfaction. Give us a call, we appreciate the opportunity to serve you!
            </p>

            <ul className="space-y-4">
              {features.map((feature) => (
                <motion.li
                  key={feature.id}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: feature.id * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 h-6 w-6 text-orange-500 mt-1">
                    {feature.icon}
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                    <p className="mt-1 text-gray-600">{feature.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              className="relative rounded-lg overflow-hidden h-auto col-span-1 mb-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/HvacTech.jpg"
                alt="HVAC Technicians"
                className="w-full object-contain"
                style={{ maxHeight: "400px" }}
              />
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="relative rounded-lg overflow-hidden h-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/hvac-residential.jpg"
                  alt="Residential HVAC"
                  className="w-full object-contain"
                  style={{ maxHeight: "300px" }}
                />
              </motion.div>

              <motion.div
                className="relative rounded-lg overflow-hidden h-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/hvac-commercial.jpg"
                  alt="Commercial HVAC"
                  className="w-full object-contain"
                  style={{ maxHeight: "300px" }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 