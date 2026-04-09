import React from "react";
import "./workouts.css";
import { Link } from 'react-router-dom';
function Tutorials() {
    return (
        <>
         <div className="headding">
        <h1>Select Your Workout Type(To watch Tutorials)</h1>
      </div>
            <div className="btnscontainer">
                <div className="gym">
                    <Link to='/gym/tutorial'>
                        <button className="btn">
                            🏋🏽Gym
                        </button>
                    </Link>
                </div>
                <div className="calisthenics">
                    <Link to='/calisthenics/tutorial'>
                        <button className="btn">💪Calisthenics</button>
                    </Link>
                </div></div>
        </>
    )
}
export default Tutorials