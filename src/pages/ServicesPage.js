import React, { useEffect } from 'react';
import Services from '../components/Services';

const ServicesPage = () => {
    useEffect(() => {
        // Add a small delay to ensure the page has loaded
        const timer = setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="pt-16 md:pt-20">
            <Services />
        </div>
    );
};

export default ServicesPage; 