import React from 'react';
import Navbar from '../HomePage/Navbar/Navbar';
import PageFooter from '../HomePage/Footer/PageFooter'
import SearchBar from './searchBar/SearchBar';
import BookData from './Data.json'
import './searchPage.css'
import FeaturedCollections from '../HomePage/featuredCollections/featuredCollections';
import FeaturedProducts from '../HomePage/featuredProducts/featuredProducts';
import ScrollToTop from '../Scroll-To-The-Tap/sroll-to-top';

function searchPage() {
  return (
    <div>
        <Navbar/>
        <SearchBar placeholder='collections/products...' data={BookData} className='my-search-bar'/>
        <FeaturedProducts />
        <FeaturedCollections />
        <PageFooter/>
        <ScrollToTop/>
    </div>
  )
}

export default searchPage