import React from "react";
import "./styles.css";
import workshops from "../../data/extracted/workshops";


const options = {
    year: "numeric",
    month: "long",
  };

const formatDate = (date) => new Date(
    date
  ).toLocaleDateString("en-US", options);


const Details = ({ children }) => (
  <div className="Details">
    <h1>workshops</h1>

    {workshops.map(workshop=> 
        <div>
            <h3>{workshop.title}</h3>
            <p>{workshop.location}</p>
            <p>{formatDate(workshop.from)} – {formatDate(workshop.to)}</p>
        </div>
        
        )}
  </div>
);

export default Details;
