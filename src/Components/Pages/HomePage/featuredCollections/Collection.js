import React from "react";

function Collection(props) {
  return (
    <div className="collection-card">
      <a href="index.html"><img className="collection--image" src={props.url} alt="collection" /></a>
      <h2>{props.name}</h2>
    </div>
  );
}

export default Collection;