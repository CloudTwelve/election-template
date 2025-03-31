import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div class="item" style={"--position: " + props.position}>
                <img src={props.src}></img>
                <span class="person-cont">
                  <span class="em-text" style="
                                          --color: #FC9E4F
                                          --size: 1rem;
                                               "> President:
                  </span>
                  <span class="name">{props.pName}</span>
                </span>
                <span class="person-cont">
                  <span class="em-text" style="
                                          --color: #ff521b
                                          --size: 1rem;
                                               "> Vice President:
                  </span>
                  <span class="name">
                  {props.vpName}
                  </span>
                </span>
              </div>
    );
};