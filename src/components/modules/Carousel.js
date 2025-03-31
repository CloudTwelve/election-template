import React from 'react';
import './Carousel.css';

const presCands = [
    {
        pName: "Efosa Aimuanwosa",
        vpName: "Dinesh Babu",
        endorsedSec: "",
        endorsedTres: "",
        src: "https://example.com/image1.jpg"
    },
    {
        pName: "Mohamed Bouzaghou",
        vpName: "Maria Alves",
        endorsedSec: "",
        endorsedTres: "",
        src: "https://example.com/image1.jpg"
    },
    {
        pName: "Ayomide Osineye",
        vpName: "Rayford Adam",
        endorsedSec: "",
        endorsedTres: "",
        src: "https://example.com/image1.jpg"
    },
    {
        pName: "Jonathan Lumala",
        vpName: "Stephane Raymond",
        endorsedSec: "",
        endorsedTres: "",
        src: "https://example.com/image1.jpg"
    }
]
const secCands = [
    { name: "Camila Lima", src: "https://example.com/image5.jpg" },
    { name: "Maria-Eduarda Silva", src: "https://example.com/image6.jpg" },
    { name: "Yusra Makhlouf", src: "https://example.com/image7.jpg" },
    { name: "Ethan Sydavong", src: "https://example.com/image8.jpg" }
];

const treasCands = [
    { name: "Safiya Syed", src: "https://example.com/image9.jpg" },
    { name: "Angel Romero", src: "https://example.com/image10.jpg" },
    { name: "Sana Hasaba", src: "https://example.com/image11.jpg" }
];

const Carousel = (props) => {
    const [candidates, setCandidates] = React.useState(presCands); // Default to presidential candidates]
    return (
        <>
            <div class="slider" style={"--width: 200px; --height: 330px; --quantity: " + props.quantity + ""}>
                <div class="list">
                {candidates.map((cand, index) => (<Card key={index} {...cand} />))}
                </div>
            </div>
            <div class="message">
                <label for="runner-choice">You're viewing:</label>
                <select id="runner-choice" name="runner-choice">
                    <option value="presidential">Presidential</option>
                    <option value="secretarial">Secretarial</option>
                    <option value="treasurial">Treasurial</option>
                </select>
            </div>
        </>
    );
    };

export default Carousel;