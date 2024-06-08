import React from 'react';
import Header from "../Header/Header.jsx";
import Footer from "../Footer/footer.jsx";
import Routers from '../../routes/Routers.jsx';

const Layout = () => {
  return (
    <>
    <Header />
    <main>
    <Routers />
    </main>
    <Footer />
    </>
  )
}

export default Layout;