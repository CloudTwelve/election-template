import React from 'react';
import './Candidates.css'; // Ensure you have the CSS file for styling
import Header from '../modules/Header'; // Import the Header component
import Carousel from '../modules/Carousel'; // Import the Carousel component

const Candidates = (props) => {
    return (
        <>
        <div className="small-title">
          View the Candidates:
        </div>
        <Carousel />
        </>
    );
}

export default Candidates;