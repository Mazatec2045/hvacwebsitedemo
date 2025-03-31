import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import PremiumServices from '../components/PremiumServices';
import QualityAndDeals from '../components/QualityAndDeals';
import LocallyTrustedTeam from '../components/LocallyTrustedTeam';

const HomePage = () => {
    useEffect(() => {
        // Add a small delay to ensure the page has loaded
        const timer = setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="home-page">
            <Hero />
            <PremiumServices />
            <QualityAndDeals />
            <LocallyTrustedTeam />
        </div>
    );
};

export default HomePage; 