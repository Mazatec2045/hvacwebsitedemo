import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTopOnNavigate() {
    const location = useLocation();

    useEffect(() => {
        // In HashRouter, location.pathname might not change as expected
        // Using the full hash instead to detect navigation changes
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });

        // Log for debugging
        console.log('Scrolling to top due to navigation to', location.pathname, 'hash:', location.hash);
    }, [location.pathname, location.hash]);

    return null;
}

export default ScrollToTopOnNavigate; 