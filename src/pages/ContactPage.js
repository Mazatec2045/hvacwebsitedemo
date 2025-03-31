import React, { useEffect } from 'react';
import Contact from '../components/Contact';

const ContactPage = () => {
    useEffect(() => {
        // Add a small delay to ensure the page has loaded
        const timer = setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="pt-16 md:pt-20">
            <Contact />
        </div>
    );
};

export default ContactPage; 