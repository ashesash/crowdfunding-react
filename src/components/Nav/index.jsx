
import { Link, NavLink, useNavigate } from "react-router-dom";
import React from 'react';

const Nav = () => {

    let activeStyle = {
        textDecoration: "underline",
    };

    const isLogIn = window.localStorage.getItem("token") !== null;
    const username = window.localStorage.getItem("username");
    const navigate = useNavigate();

    const onLogOut = () => {
        localStorage.clear();
        navigate('/');


        // let button = <Link to="/login">Login</Link>
        // if (window.localStorage.getItem("token") != null) {
        //     button = <Link to="/logout">Logout</Link>
        // }
        return (
            // <div>
            //     <nav className="nav">
            //         <Link to="/">Home</Link>
            //         {button}
            //     </nav>
            // </div>
            <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink
                                to="/"
                                style={({ isActive }) => isActive ? activeStyle : undefined}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/projects"
                                style={({ isActive }) => isActive ? activeStyle : undefined}
                            >
                                Projects
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="nav-login">
                    {isLogIn && <p>Hi, {username}</p>}
                    {isLogIn && <Link to="/" onClick={onLogOut}>Log out</Link>}
                    {!isLogIn && <Link to="/login">Log in</Link>}
                </div>
            </header>
        );
    };
}

export default Nav;

