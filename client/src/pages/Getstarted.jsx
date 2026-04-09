import React from "react";
import { useNavigate } from "react-router-dom";
import "./GetStarted.css";

const GetStarted = () => {
  const navigate = useNavigate();

  return (
    <div className="getstarted-container">
      <div className="content">
        <h1>Welcome to FitTrack 💪</h1>
        <p>Track your workouts. Stay consistent. Build your body.</p>

        <button onClick={() => navigate("/home")}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default GetStarted;