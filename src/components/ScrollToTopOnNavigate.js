import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTopOnNavigate() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });

        // Additional console log for debugging
        console.log('Scrolling to top due to navigation to', pathname);
    }, [pathname]);

    return null;
}

export default ScrollToTopOnNavigate; 