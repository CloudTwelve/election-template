import React from 'react';
import './Header.css';

const Header = (props) => {
    return (
        <header>
            <div className="title">
                electioneer
            </div>
            <nav>
                <div className="non-drops">
                    <a class="nav-select">
                        Candidates
                    </a>
                    <a className="nav-select">
                        Updates
                    </a>
                    <a className="nav-select">
                        Code of Conduct
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Header;