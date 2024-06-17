import React from 'react';
import Navbar from './Components/Pages/HomePage/Navbar/Navbar';
import PageFooter from './Components/Pages/HomePage/Footer/PageFooter';
import FeaturedProducts from './Components/Pages/HomePage/featuredProducts/featuredProducts';
import FeaturedCollections from './Components/Pages/HomePage/featuredCollections/featuredCollections'; 
import ScrollToTop from './Components/Pages/Scroll-To-The-Tap/sroll-to-top';

function App() {
  
  return (
    <React.Fragment>
      <Navbar />
      <FeaturedProducts />
      <FeaturedCollections />
      <PageFooter />
      <ScrollToTop/>
    </React.Fragment>
  );
}

export default App;
