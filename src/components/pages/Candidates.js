import React from 'react';
import './Candidates.css'; // Ensure you have the CSS file for styling
import Carousel from '../modules/Carousel'; // Import the Carousel component
import Lightbox from '../modules/Lightbox'; // Import the Lightbox component

const xOut = document.querySelector(".x");
const blur = document.querySelector(".blur");
const lightbox = document.querySelector(".lightbox");
const items = document.querySelectorAll(".item");
const popLightbox = (e) => {
  blur.style.display = "block";
  lightbox.style.display = "block";
  xOut.style.display = "block";
  xOut.addEventListener('click', unpopLightbox)
}

const unpopLightbox = (e) => {
  blur.style.display = "none";
  lightbox.style.display = "none";
  xOut.style.display = "none";
  xOut.removeEventListener('click', unpopLightbox)
}

Array.from(items).forEach(function(element) {
    element.addEventListener('click', popLightbox);
});

const Candidates = (props) => {
    return (
        <>
        <div className="small-title">
          View the Candidates:
        </div>
        <Carousel />
        <Lightbox />
        <div class="blur"></div>
        <div class="x">X</div>
        </>
    );
}

export default Candidates;