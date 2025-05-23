import React from 'react';
import './Card.css';

const Card = (props) => {

  switch (props.candType) {
    case "presidential":
      return (
        <div className="item" style={{"--position": props.cand.position}} onClick={props.onClick}>
                <img src={props.cand.src} alt="" />
                <span className="person-cont">
                  <span className="em-text" style={{
                                          color: "#FC9E4F",
                                          fontSize: "1rem"
                                               }}> President:
                  </span>
                  <span className="name">{props.cand.pName}</span>
                </span>
                <span className="person-cont">
                  <span className="em-text" style={{
                                          color: "#ff521b",
                                          fontSize: "1rem"
                   }}> Vice President:
                  </span>
                  <span className="name">
                  {props.cand.vpName}
                  </span>
                </span>
        </div>
    );
    case "secretarial":
      return (
        <div className="item" style={{"--position": props.cand.position}}>
                <img src={props.cand.src} alt="" />
                <span className="person-cont">
                  <span className="em-text" style={{
                                          color: "#FC9E4F",
                                          fontSize: "1rem"
                                               }}> Secretary:
                  </span>
                  <span className="name">{props.cand.name}</span>
                </span>
        </div>
    );
    case "treasurial":
      return (
        <div className="item" style={{"--position": props.cand.position}}>
                <img src={props.cand.src} alt="" />
                <span className="person-cont">
                  <span className="em-text" style={{
                                          color: "#FC9E4F",
                                          fontSize: "1rem"
                                               }}> Treasurer:
                  </span>
                  <span className="name">{props.cand.name}</span>
                </span>
        </div>
    );
    default:
      return (
        <div className="item" style={{"--position": props.cand.position}}>
                <img src={props.cand.src} alt="" />
                <span className="person-cont">
                  <span className="em-text" style={{
                                          color: "#FC9E4F",
                                          fontSize: "1rem"
                                               }}> President:
                  </span>
                  <span className="name">{props.cand.pName}</span>
                </span>
                <span className="person-cont">
                  <span className="em-text" style={{
                                          color: "#ff521b",
                                          fontSize: "1rem"
                   }}> Vice President:
                  </span>
                  <span className="name">
                  {props.cand.vpName}
                  </span>
                </span>
        </div>
    );
  }
};

export default Card;