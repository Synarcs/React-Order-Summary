import React from 'react'
import Css from '../App.css';

export default function Navbar() {
    return (
        <div>
        <nav className="navbar navbar-expand-md navbar-light bg-dark">
                    <div className="container">
                        <div className="navbar-brand text-primary">
                            <a href="#">Zakreb Restaurent</a>
                        </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto text-info">
                            <li className="nav-item active">Home</li>
                            <li className="nav-item ml-2">About</li>   
                        </ul>
                        <span className="navbar-text text-warning">
                            Famous for Burger and Pizza
                        </span>
                    </div>
                    </div>
            </nav>
        </div>
    )
}
