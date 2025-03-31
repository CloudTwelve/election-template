import React from 'react';
import './Header.css';

const Header = (props) => {
    return (
        <header>
            <div class="title">
                electioneer
            </div>
            <nav>
                <div class="non-drops">
                    <a class="nav-select">
                        Candidates
                    </a>
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