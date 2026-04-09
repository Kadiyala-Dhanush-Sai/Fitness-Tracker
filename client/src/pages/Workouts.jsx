import React, { useState } from "react";
import "./workouts.css";
import { Link } from 'react-router-dom';
function Workouts() {
  return (
    <>
      <div className="headding">
        <h1>Select Your Workout Type</h1>
      </div>
      <div className="btnscontainer">
        <div className="gym">
          <Link to='/gym'>
            <button className="btn">
              🏋🏽Gym
            </button>
          </Link>
        </div>


        <div className="calisthenics">
          <Link to='/calisthenics'>
            <button className="btn">💪Calisthenics</button>
          </Link>
        </div></div>
    </>
  )
}

export default Workouts;