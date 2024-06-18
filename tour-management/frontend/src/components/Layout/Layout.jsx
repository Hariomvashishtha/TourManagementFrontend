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
    setAlertMessage('Backend is under progress !');
  }, []);
  return (
    <>
    <AlertMessage message={alertMessage} />
    <Header />
    <main>
    <Routers />
    </main>
    <Footer />
    </>
  )
}

export default Layout;