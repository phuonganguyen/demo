import React from 'react';
import logo from '../../logo.svg';
import {Link} from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="logo" width="30" height="30"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/matches">Matches</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/leagues">Leagues</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;