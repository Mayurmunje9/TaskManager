import React from "react";
import { Link , useNavigate} from "react-router-dom";
import "../Styles/Navbar.css";

export default function Navbar() {
const history=useNavigate()
  let authToken = localStorage.getItem("authToken");
const logout=()=>{
    localStorage.removeItem("authToken");
    history("/Login");
    window.alert("Logout Successfull")
}
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-mainbg">
            <div className="container-fluid">
        <Link className="navbar-brand navbar-logo">
          Navbar
        </Link>
        <button class="navbar-toggler border-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" ></span>
    </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">

            {authToken ? (    <li className="nav-item">
                <Link className="nav-link " to="/Login" onClick={logout}> 
                  <i className="far fa-calendar-alt"></i>Home 
                </Link>
              </li>): null}
            {!authToken && (
              <li className="nav-item">
                <Link className="nav-link" to="/Register"> Sign Up
                </Link>
              </li>
            )}
            {authToken ? (    <li className="nav-item">
                <Link className="nav-link" to="/Login" onClick={logout}> 
                  <i className="far fa-calendar-alt"></i>Log Out
                </Link>
              </li>): (null
            )}
          </ul>
        </div>
        </div>
      </nav>
    </div>
  );
}

