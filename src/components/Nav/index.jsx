
import { Link } from "react-router-dom";
import React from 'react';
import './style.css';

const Nav = () => {
    let button = <Link to="/login">Login</Link>
    if (window.localStorage.getItem("token") != null) {
        button = <Link to="/logout">Logout</Link>
    }
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                {button}
            </nav>
        </div>
    );
};

export default Nav;

