import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import Banner from './components/Banner'
import Logo from './components/Logo'
import Menu from './components/Menu';
import SaibaMais from './components/SaibaMais';
import Footer from './components/Footer';
import './App.css';

function App() {

  const [width, setWidth] = useState(0);
  const [showCompleteBanner, setShowCompleteBanner] = useState((window.innerWidth > 800));
  
  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
      setShowCompleteBanner(newWidth > 800);
      console.log("updating width");
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions) 

  }, []);


  return (
    <div className="container-fluid App">
      <Header></Header>
      <Banner showCompleteBanner={showCompleteBanner}></Banner> 
      <SaibaMais></SaibaMais>
      <Footer></Footer>
    </div>
  );
}

export default App;
