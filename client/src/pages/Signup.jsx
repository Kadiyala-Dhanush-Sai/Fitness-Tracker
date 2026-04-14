import React from "react";
import { useState } from "react";
import AuthImg from "../assets/Auth.jpg";
import './Auth.css'
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
function Signup() {
    const API = import.meta.env.VITE_API_URL;
    const [name, SetName] = useState();
    const [email, SetEmail] = useState();
    const [password, SetPassword] = useState();
    const [error, SetError] = useState("");
    const navigate = useNavigate();
    const HandleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${API}/signup`, { name, email, password })
            .then((result) => {
                console.log(result)
                navigate('/login');
            })
            .catch((err) => {
                if (err.response) {
                    SetError(err.response.data);
                } else {
                    SetError("Something went wrong");
                }
            })
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
                            <h5>Create An Account Here</h5>
                        </div>
                        <div className="card2">
                            <form action="">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your full name"
                                        onChange={(e) => {
                                            SetName(e.target.value);
                                            console.log(e.target.value);
                                        }} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                                        onChange={(e) => {
                                            SetEmail(e.target.value)
                                        }} />
                                </div>
                                <label htmlFor="inputPassword5" className="form-label">Password</label>
                                <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" placeholder="Enter the Password"
                                    onChange={(e) => {
                                        SetPassword(e.target.value);
                                    }} />
                                <div id="passwordHelpBlock" className="form-text">
                                    Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                                </div>
                                {error && <p style={{color:"red"}}>{error}</p>}
                                <div className="submitbtn d-flex justify-content-center align-items-center">
                                    <button type="submit" className="submit-btn w-75"
                                        onClick={HandleSubmit}>Signup</button>
                                </div>
                                Already Have an Account ?<Link className="atag" to='/login'>Click Here</Link>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Signup;