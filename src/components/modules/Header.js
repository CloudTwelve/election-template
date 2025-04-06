import React from 'react';
import { Link } from 'react-router-dom'; // For navigation links
import './Header.css';

const Header = (props) => {
    return (
        <header>
            <div className="title">
                electioneer
            </div>
            <nav>
                <div className="non-drops">
                    <Link to="/candidates" className="nav-select">
                        Candidates
                    </Link>
                    <Link to="/updates/" className="nav-select">
                        Updates
                    </Link>
                    <Link to="/policies" className="nav-select">
                        Code of Conduct
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;