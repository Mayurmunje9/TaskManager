import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Navbar.css";

export default function Navbar() {
  const history = useNavigate();
  let authToken = localStorage.getItem("authToken");
  const logout = () => {
    localStorage.removeItem("authToken");
    history("/Login");
    window.alert("Logout Successfull");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-mainbg">
<<<<<<< HEAD
        <div className="container-fluid navcenter">
=======
        <div className="container-fluid">
>>>>>>> 1ca663af3a0df74c4a9993c7cc6599644728d365
          <Link className="navbar-brand text-light">Task Manager</Link>
          <div className="other" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              {authToken ? (
                <li className="nav-item">
                  <Link className="nav-link " to="/">
                    <i className="far fa-calendar-alt text-light"></i>Home
                  </Link>
                </li>
              ) : null}
              {!authToken && (
                <li className="nav-item">
                  <Link className="nav-link" to="/Register">
                    {" "}
                    Sign Up
                  </Link>
                </li>
              )}
              {authToken ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/Login" onClick={logout}>
<<<<<<< HEAD
                    <i className="far fa-calendar-alt"></i>LogOut
=======
                    <i className="far fa-calendar-alt"></i>Log Out
>>>>>>> 1ca663af3a0df74c4a9993c7cc6599644728d365
                  </Link>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
