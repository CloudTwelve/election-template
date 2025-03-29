import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    return (
        <header>
            <div class="title">
                electioneer
            </div>
            <nav>
                <div class="dropdown">
                    <button class="nav-select">
                        Candidates
                    </button>
                    <div class="dropdown-content">
                        <a href="#">Presidential</a>
                        <a href="#">Treasurial</a>
                        <a href="#">Secretarial</a>
                    </div>
                </div>
                <div class="non-drops">
                    <a class="nav-select">
                        Updates  
                    </a>
                    <a class="nav-select">
                        Code of Conduct
                    </a>
                </div>
            </nav>
        </header>
    );
};