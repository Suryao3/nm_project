import React from 'react';
import './Toolbar.css';

export const Toolbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container container">
                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                    <ul className="menu-items">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Conferencing</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <h1 className="logo">Navbar</h1>
                </div>
            </nav>
        </>
    );
}
