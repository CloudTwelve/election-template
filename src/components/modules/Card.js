import React from 'react';
import './Card.css';

const Card = (props) => {
    if (props.candType = )
    return (
        <div className="item" style={{"--position": props.position}}>
                <img src={props.src} alt="" />
                <span className="person-cont">
                  <span className="em-text" style={{
                                          color: "#FC9E4F",
                                          fontSize: "1rem"
                                               }}> President:
                  </span>
                  <span class="name">{props.pName}</span>
                </span>
                <span className="person-cont">
                  <span className="em-text" style={{
                                          color: "#ff521b",
                                          fontSize: "1rem"
                   }}> Vice President:
                  </span>
                  <span className="name">
                  {props.vpName}
                  </span>
                </span>
        </div>
    );
};

export default Card;