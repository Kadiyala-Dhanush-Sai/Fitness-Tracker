import React, { useState, useEffect } from "react";
import './Navbar.css';
import logo from '../assets/favicon.png';
import { Link } from "react-router-dom";

function Navbar() {
    const [userName, setUserName] = useState(null); // ✅ use null

    useEffect(() => {
        const name = localStorage.getItem("username");
        if (name && name !== "null" && name !== "undefined") {
            setUserName(name);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("username");
        window.location.href = "/login";
    };

    return (
        <nav className="navbar navbar-expand-lg " style={{ backgroundColor: "#1a1a2e", color:"white" }}>
            <div className="container-fluid">

                {/* ✅ ALWAYS SHOW LOGO */}
                <Link to='/' className="navbar-brand">
                    <img src={logo} alt="logo" className="Logo" />
                </Link>
                <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarContent"
                        aria-controls="navbarContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarContent">

                    {/* ✅ ALWAYS SHOW MENU */}
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/home">Dashboard</Link>
                        <Link className="nav-link" to="/workouts">Workouts</Link>
                        <Link className="nav-link" to="/tutorials">Tutorials</Link>
                    </div>

                    {/* 🔥 RIGHT SIDE */}
                    <div className="navbar-nav ms-auto">

                        {userName ? (
                            <>
                                {/* SHOW ONLY WHEN LOGGED IN */}
                                <div className="userlogo">
                                    <img
                                        src="https://imgs.search.brave.com/Ve6pOMp4VWsQP7vM2QR2pBw65YVpWH56GuiZ2lcJNiQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDAv/NTUwLzczMS9zbWFs/bC91c2VyX2ljb25f/MDA0LmpwZw"
                                        alt="user"
                                        className="Logo1"
                                    />
                                </div>

                                <Link className="nav-link" to="/userinfo">
                                    {userName}
                                </Link>

                                <button
                                    className="nav-link btn-link"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            /* SHOW ONLY WHEN NOT LOGGED IN */
                            <Link className="nav-link" to="/login">
                                Login
                            </Link>
                        )}

                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;