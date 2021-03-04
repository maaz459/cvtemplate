import React from "react";
import "./Navbar.css";
import logo from "./../../Assets/images/logo.png";
import {Link} from 'react-router-dom'
export default function Navbar(props) {
    return (
        <>
            <nav style={{ backgroundColor: "#FFFFFF", borderBottom: props.border ? "1px solid #ECECEC" : "" }} class="navbar navbar-expand-lg navbar-light">
                <Link to="/" class="navbar-brand" href="#"><img style={{ maxWidth: "60%" }} src={logo}></img></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link to="/" class="nav-link" href="#">Home</Link>
                        </li>
                        <li class="nav-item longName">
                            <Link to="/chooseTemplate" class="nav-link " href="#">Create CV</Link>
                        </li>
                        <li class="nav-item longName">
                            <Link to="/jobSearch" class="nav-link " href="#">Search Job</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/pricing" class="nav-link" href="#">Pricing</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/contact" class="nav-link" href="#">Contact</Link>
                        </li>
                        <li class="nav-item" >
                            <a id="loginButton" class="nav-link" href="#">Login</a>
                        </li>
                        <li class="nav-item signUp">
                            <form >
                                <button class="signUpButton" type="submit">Sign up</button>
                            </form>
                        </li>
                    </ul>

                </div>
            </nav>
        </>
    );
}