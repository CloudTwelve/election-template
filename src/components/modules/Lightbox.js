import React from 'react';
import './Lightbox.css';

const Lightbox = (props) => {
    console.log("cand:", props.cand);
    console.log("candType:", props.candType);
    switch (props.candType) {
        case "presidential":
            return (
                <div className="lightbox">
                        <img src={props.cand?.src} alt="" />
                        <span className="person-cont">
                            <span className="em-text" style={{
                                                        "--color": "#FC9E4F",
                                                        "--size": "1rem"
                                }}> President:
                            </span>
                            <span className="name">{props.cand.pName}</span>
                        <span className="person-cont">
                                <span className="em-text" style={{
                                                        "--color": "#ff521b",
                                                        "--size": "1rem"
                                }}> Vice President:
                                </span>
                                <span className="name">
                        {props.cand.vpName}
                        </span>
                        </span>
                    </span>
                </div>
        );
        case "secretarial":
          return (
            <div className="lightbox">
                <img src={props.cand?.src} alt="" />
                <span className="person-cont">
                    <span className="em-text" style={{
                                            "--color": "#FC9E4F",
                                            "--size": "1rem"
                    }}> Secretary:
                    </span>
                    <span className="name">{props.cand.name}</span>
                </span>
            </div>
        );
        case "treasurial":
          return (
            <div className="lightbox">
                <img src={props.cand?.src} alt="" />
                <span className="person-cont">
                    <span className="em-text" style={{
                                            "--color": "#FC9E4F",
                                            "--size": "1rem"
                    }}> Treasurer:
                    </span>
                    <span className="name">{props.cand.name}</span>
                </span>
            </div>
        );
        default:
            return (
                <div className="lightbox">
                        <img src={props.cand?.src} alt="" />
                        <span className="person-cont">
                            <span className="em-text" style={{
                                                        "--color": "#FC9E4F",
                                                        "--size": "1rem"
                                }}> President:
                            </span>
                            <span className="name">{props.cand.pName}</span>
                        <span className="person-cont">
                                <span className="em-text" style={{
                                                        "--color": "#ff521b",
                                                        "--size": "1rem"
                                }}> Vice President:
                                </span>
                                <span className="name">
                        {props.cand.vpName}
                        </span>
                        </span>
                    </span>
                </div>
        );
      }
};

export default Lightbox;