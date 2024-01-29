import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/Navbar.css"
export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-custom navbar-mainbg">
        <Link className="navbar-brand navbar-logo" to="/">Navbar</Link>
        <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <div className="hori-selector"><div className="left"></div><div className="right"></div></div>
                <li className="nav-item">
                    <Link className="nav-link" to="/"><i className="fas fa-tachometer-alt"></i>Home</Link>
                </li>


                <li className="nav-item">
                    <Link className="nav-link" to="/Register"><i className="far fa-calendar-alt"></i>Sign Up</Link>
                </li>


            </ul>
        </div>
    </nav>
    </div>
  )
}
