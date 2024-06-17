import React from "react";
import "./myCard.css"

function MyCard(props) {
    return (
        <div className="myCard">{props.cardNo}</div>
    );
}

export default MyCard;