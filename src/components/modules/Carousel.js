import React from 'react';
import './Carousel.css';
import Card from './Card';

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
    const [candidateType, setCandType] = React.useState("presidential"); // Default to presidential candidates

    const changeCandidates = (e) => {
        const selectedType = e.target.value;
        switch (selectedType) {
            case "presidential":
                setCandidates(presCands);
                setCandType("presidential");
                break;
            case "secretarial":
                setCandidates(secCands);
                setCandType("secretarial");
                break;
            case "treasurial":
                setCandidates(treasCands);
                setCandType("treasurial");
                break;
            default:
                setCandidates(presCands);
                setCandType("presidential");
        }
    }

    return (
        <>
            <div className="slider" style={{ 
    "--width": "250px", 
    "--height": "330px", 
    "--quantity": candidates.length.toString() 
  }}>
                <div className="list" style={{"--order": 0}}>
                    {candidates.map((cand, index) => (<Card candType={candidateType} key={index} cand={cand}/>))}
                </div>
                <div className="list" style={{"--order": 1}}>
                    {candidates.map((cand, index) => (<Card candType={candidateType} key={index} cand={cand} />))}
                </div>
                </div>
            <div className="message">
                <label forEach="runner-choice">You're viewing:</label>
                <select id="runner-choice" name="runner-choice" onChange={changeCandidates}>
                    <option value="presidential">Presidential</option>
                    <option value="secretarial">Secretarial</option>
                    <option value="treasurial">Treasurial</option>
                </select>
            </div>
        </>
    );
    };

export default Carousel;