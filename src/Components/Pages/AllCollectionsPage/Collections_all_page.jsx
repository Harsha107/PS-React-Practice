import React from 'react'
import Navbar from '../HomePage/Navbar/Navbar'
import PageFooter from '../HomePage/Footer/PageFooter'
import SearchBar from '../SearchPage/searchBar/SearchBar'
import BookData from '../SearchPage/Data.json'
import SomeCollections from './SomeCollections'
import FeaturedProducts from '../HomePage/featuredProducts/featuredProducts'
import './Collections_all_page_styles.css'
import ScrollToTop from '../Scroll-To-The-Tap/sroll-to-top'

const Collections_all_page = () => {
  const hStyle = {
    textAlign: 'center',
    paddingTop: '20px',
    fontSize: '30px'
  }
  return (
    <div className='cap-container'>
        <Navbar/>
        <SearchBar placeholder='Search for collections...' data={BookData}/>
        <h3 style={hStyle}>Some Collections...</h3>
        <div className='collections-container'>
            <SomeCollections url='1'/>
            <SomeCollections url='2'/>
            <SomeCollections url='3'/>
            <SomeCollections url='4'/>
            <SomeCollections url='5'/>
            <SomeCollections url='6'/>
            <SomeCollections url='7'/>
            <SomeCollections url='8'/>
        </div>
        <div className='vm-btn-container'>
            <a href='/' className='vm-btn'>View More</a>
        </div>
        <FeaturedProducts/>
        <ScrollToTop/>
        <PageFooter/>
    </div>
  )
}

export default Collections_all_page