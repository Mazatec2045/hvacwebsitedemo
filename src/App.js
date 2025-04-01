import React, { useEffect } from 'react';
import './index.css';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingAnimation from './components/LandingAnimation';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopOnNavigate from './components/ScrollToTopOnNavigate';

// Import page components
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import FinancingPage from './pages/FinancingPage';
import ContactPage from './pages/ContactPage';

// Create a PageLayout component to wrap all pages with the header and footer
const PageLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

// App Routes
const AppRoutes = () => {
  const location = useLocation();

  // Add location change debugging
  useEffect(() => {
    const currentPath = location.pathname;
    console.log('Current location:', currentPath);
  }, [location]);

  return (
    <>
      <ScrollToTopOnNavigate />
      <LandingAnimation />
      <Routes>
        <Route
          path="/"
          element={
            <PageLayout>
              <HomePage />
            </PageLayout>
          }
        />
        <Route
          path="/services"
          element={
            <PageLayout>
              <ServicesPage />
            </PageLayout>
          }
        />
        <Route
          path="/about"
          element={
            <PageLayout>
              <AboutPage />
            </PageLayout>
          }
        />
        <Route
          path="/financing"
          element={
            <PageLayout>
              {console.log('Rendering Financing route')}
              <FinancingPage />
            </PageLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <PageLayout>
              <ContactPage />
            </PageLayout>
          }
        />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
