import React from "react";
import "./gym.css";
import { useState } from "react";
import Exercise from "./exercise";
export default function GymTut() {
    const [selectedPart, setSelectedPart] = useState("");
    const handleClick = (part) => {
        setSelectedPart(part);
    };
    return (
        <>
            <div className="workout-container">

                <div className="headding">
                    <div>
                        <h2>Tutorials</h2>
                    </div>
                </div>


                <div className="body-grid">
                    <div onClick={() => handleClick("back")}>Back</div>
                    <div onClick={() => handleClick("chest")}>Chest</div>
                    <div onClick={() => handleClick("biceps")}>Biceps</div>
                    <div onClick={() => handleClick("triceps")}>Triceps</div>
                    <div onClick={() => handleClick("shoulders")}>Shoulders</div>
                    <div onClick={() => handleClick("abs")}>Abs</div>
                    <div onClick={() => handleClick("legs")}>Legs</div>
                    <div onClick={() => handleClick("forearms")}>Forearms</div>
                </div>


                <div className={`exercise-section back ${selectedPart === "back" ? "active" : ""}`}>
                    <h4>Back Exercises</h4>
                    <div className="exercises">
                        back
                    </div>
                </div>

                <div className={`exercise-section chest ${selectedPart === "chest" ? "active" : ""}`}>
                    <h4>Chest Exercises</h4>
                    <div className="exercises">
                        chest
                    </div>
                </div>

                <div className={`exercise-section biceps ${selectedPart === "biceps" ? "active" : ""}`}>
                    <h4>Biceps Exercises</h4>
                    <div className="exercises">
                        biceps
                    </div>
                </div>

                <div className={`exercise-section triceps ${selectedPart === "triceps" ? "active" : ""}`}>
                    <h4>Triceps Exercises</h4>
                    <div className="exercises">
                        triceps
                    </div>
                </div>

                <div className={`exercise-section shoulders ${selectedPart === "shoulders" ? "active" : ""}`}>
                    <h4>Shoulders Exercises</h4>
                    <div className="exercises">
                        sholders
                    </div>
                </div>

                <div className={`exercise-section abs ${selectedPart === "abs" ? "active" : ""}`}>
                    <h4>Abs Exercises</h4>
                    <div className="exercises">
                        abs
                    </div>
                </div>

                <div className={`exercise-section legs ${selectedPart === "legs" ? "active" : ""}`}>
                    <h4>Legs Exercises</h4>
                    <div className="exercises">
                        legs
                    </div>
                </div>

                <div className={`exercise-section forearms ${selectedPart === "forearms" ? "active" : ""}`}>
                    <h4>Forearms Exercises</h4>
                    <div className="exercises">
                        forearms
                    </div>
                </div>

            </div>
        </>
    )
}