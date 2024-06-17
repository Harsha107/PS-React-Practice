import React from 'react';
import './CommunityPageStyles.css';
import Navbar from '../HomePage/Navbar/Navbar';
import PageFooter from '../HomePage/Footer/PageFooter';
import ScrollToTop from '../Scroll-To-The-Tap/sroll-to-top';

const CommunityPage = () => {
    return (
        <div className='community-page-container'>
            <Navbar/>
            <ScrollToTop/>
            <PageFooter/>
        </div>
    );
};

export default CommunityPage;