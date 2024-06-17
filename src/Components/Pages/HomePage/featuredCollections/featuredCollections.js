import React from "react";
import './featuredCollections.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Collection from "./Collection";
import { collectionData, responsive } from "./data";

function FeaturedCollections() {
    const collection = collectionData.map((item) => (
        <Collection
            name={item.name}
            url={item.imageurl}
        />
    ));

    return (
        <div className="f-collections">
            <h1>Featured Collections</h1>
            <a className="fc-btn" href="index.html">View More</a>
            <Carousel className="fc-carousel"
                showDots={false} 
                responsive={responsive} 
                autoPlay={true}
                infinite={true}
            >
                {collection}
            </Carousel>
    </div>
  );
}

export default FeaturedCollections;