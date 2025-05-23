import React, { useState } from 'react';
import './Candidates.css'; // Ensure you have the CSS file for styling
import Carousel from '../modules/Carousel'; // Import the Carousel component
import Lightbox from '../modules/Lightbox'; // Import the Lightbox component

const Candidates = (props) => {
  const [selectedCand, setSelectedCand] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  const handleCardClick = (cand, candType) => {
    setSelectedCand(cand);
    setSelectedType(candType);
  };

  const handleClose = () => {
    setSelectedCand(null);
    setSelectedType(null);
  };
    return (
        <>
        <div className="small-title">
          View the Candidates:
        </div>
        <Carousel onCardClick={handleCardClick}/>
        {selectedCand && (
        <>
          <div className="blur" style={{display: "block"}}></div>
          <div className="x" style={{display: "block"}} onClick={handleClose}>X</div>
          <Lightbox cand={selectedCand} candType={selectedType} onClose={handleClose}/>
        </>
        )}
        {!selectedCand && (
        <>
          <div className="blur"></div>
          <div className="x">X</div>
        </>
      )}  
      </>
    );
}

export default Candidates;