import React from 'react';
import './CollectionStyles.css';
import Navbar from '.../HomePage/Navbar/Navbar'
import PageFooter from '.../Footer/PageFooter'

const Collection = () => {
    return (
        <div className='collection-specific-container'>
            <Navbar/>
            <PageFooter/>
        </div>
    );
};

export default Collection;