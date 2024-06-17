import React from "react";
import './featuredProducts.css';
import MyCard from './myCard';

function FeaturedProducts() {
    let box = document.querySelector('.prod-container');
    const btnPressPrev = () => {
        let width = box.clientWidth;
        box.scrollLeft -= width;
    }

    const btnPressNxt = () => {
        let width = box.clientWidth;
        box.scrollLeft += width;
    }

    return (
        <div className="prod-carousel">
            <button className="pre-btn" onClick={btnPressPrev}><p>&lt;</p></button>
            <button className="nxt-btn" onClick={btnPressNxt}><p>&gt;</p></button>


            <div className="prod-container">
                <MyCard cardNo="1"/>
                <MyCard cardNo="2"/>
                <MyCard cardNo="3"/>
                <MyCard cardNo="4"/>
                <MyCard cardNo="5"/>
            </div>
        </div>
    );

}

export default FeaturedProducts;