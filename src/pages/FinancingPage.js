import React, { useEffect } from 'react';
import Financing from '../components/Financing';

const FinancingPage = () => {
    useEffect(() => {
        // Add a small delay to ensure the page has loaded
        const timer = setTimeout(() => {
            window.scrollTo(0, 0);
            console.log('FinancingPage loaded and scrolled to top');
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    console.log('Rendering FinancingPage component');

    return (
        <div className="pt-16 md:pt-20">
            <Financing />
        </div>
    );
};

export default FinancingPage; 