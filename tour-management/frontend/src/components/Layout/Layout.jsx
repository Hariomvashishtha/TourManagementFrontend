import React from 'react';
import { useEffect, useState } from 'react';
import Header from "../Header/Header.jsx";
import Footer from "../Footer/footer.jsx";
import Routers from '../../routes/Routers.jsx';
import AlertMessage from '../../pages/Alert.jsx';

const Layout = () => {
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    // Set the alert message when the component mounts
    setAlertMessage('Backend is under progress  and open in deskyop for better ui and mobile view is under progress!');
  }, []);

  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    // Initial check on component mount
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
     && <AlertMessage message={alertMessage} />
    <Header />
    <main>
    <Routers />
    </main>
    <Footer />
    </>
  )
}

export default Layout;