import React from "react";
import AuthImg from "../assets/Auth.jpg";
import './Auth.css'
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function Authentication() {
    const [email, setEmail] = useState();
    const API = import.meta.env.VITE_API_URL;
    const [password, setPassword] = useState();
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const HandleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${API}/login`, { email, password })
            .then((result) => {
                console.log(result);
                if (result.data.status === "success") {
                    localStorage.setItem("username", result.data.user.name); // save name
                    // localStorage.setItem("userId", res.data.user._id);
                    window.location.href = "/";
                } else if (result.data.status === "password incorrect") {
                    setError("Password is incorrect");
                } else if (result.data.status === "no user found") {
                    setError("No user Found");
                } else {
                    setError("Something Went Wrong");
                }
            })
            .catch(err => console.log(err))
            console.log(result.data.user);
    }
    return (
        <>
            <div className="containerBox d-flex">
                <div className="left">
                    <img src={AuthImg} alt="Auth" className="w-100 h-100" />
                </div>
                <div className="right">

                    <div className="auth-form">
                        <div className="headding">
                            <h1>Welcome To Athletix</h1>
                            <h5>Login here To continue</h5>
                        </div>
                        <div className="card2">
                            <form action="">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }} />
                                </div>
                                <label htmlFor="inputPassword5" className="form-label">Password</label>
                                <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" placeholder="Enter you Password"
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                    }} />
                                {error && <p style={{ color: "red" }}>{error}</p>}
                                <div className="submitbtn d-flex justify-content-center align-items-center">
                                    <button type='submit' className="submit-btn w-75"
                                        onClick={HandleSubmit}>Login</button>
                                </div>
                                Don't Have an Account ?<Link className="atag" to='/signup'>Click Here</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Authentication;