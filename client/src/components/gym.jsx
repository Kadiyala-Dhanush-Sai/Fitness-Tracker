import React, { useState } from "react";
import "./gym.css";
import Exercise from "./exercise";
export default function Gym() {
    const [selectedPart, setSelectedPart] = useState("");
    const [workoutData, setWorkoutData] = useState({});
    const handleClick = (part) => {
        setSelectedPart(part);
    };
    const handleAdd = (exerciseName, reps) => {
        
        setWorkoutData((prev) => ({
            ...prev,
            [exerciseName]: (prev[exerciseName] || 0) + reps
        }));
        console.log(reps);
    };
    return (
        <>
            <div className="workout-container">

                <div className="headding">
                    <div>
                        <h2>Select Your Workout </h2>
                    </div>
                    <div className="description">
                        <p>Total number of reps today :<span>{Object.values(workoutData).reduce((sum, reps) => sum + reps, 0)}</span></p>
                        <button onClick={()=>{
                            setWorkoutData({})
                        }}>reset</button>
                    </div>
                </div>

                <div className="matter">you can select here 👇 </div>
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

                {/* 👇 Exercise Sections */}
                
                <div className={`exercise-section back ${selectedPart === "back" ? "active" : ""}`}>
                    <h4>Back Exercises</h4>
                    <div className="exercises">
                        <Exercise
                            name="Deadlift"
                            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8lpHNjl2mgqrKHH83PgZ-0F3Bux-IXDJfwg&s"
                            onAdd={handleAdd} />
                        <Exercise   
                            name="Crunches"
                            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8lpHNjl2mgqrKHH83PgZ-0F3Bux-IXDJfwg&s"
                            onAdd={handleAdd} />
                        <Exercise
                            name="Crunches"
                            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8lpHNjl2mgqrKHH83PgZ-0F3Bux-IXDJfwg&s"
                            onAdd={handleAdd} />
                    </div>
                </div>

                <div className={`exercise-section chest ${selectedPart === "chest" ? "active" : ""}`}>
                    <h4>Chest Exercises</h4>
                    <div className="exercises">
                        <Exercise
                            name="Bench press"
                            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8lpHNjl2mgqrKHH83PgZ-0F3Bux-IXDJfwg&s"
                            onAdd={handleAdd} />
                        <Exercise
                            name="Incline Bench press"
                            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8lpHNjl2mgqrKHH83PgZ-0F3Bux-IXDJfwg&s"
                            onAdd={handleAdd} />
                        <Exercise
                            name="Pushups"
                            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8lpHNjl2mgqrKHH83PgZ-0F3Bux-IXDJfwg&s"
                            onAdd={handleAdd} />
                    </div>
                </div>

                <div className={`exercise-section biceps ${selectedPart === "biceps" ? "active" : ""}`}>
                    <h4>Biceps Exercises</h4>
                    <div className="exercises">

                        <Exercise
                            name="Bicep curl"
                            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8lpHNjl2mgqrKHH83PgZ-0F3Bux-IXDJfwg&s"
                            onAdd={handleAdd} />
                        <Exercise
                            name="Bicep curl"
                            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8lpHNjl2mgqrKHH83PgZ-0F3Bux-IXDJfwg&s"
                            onAdd={handleAdd} />
                        <Exercise
                            name="Bicep curl"
                            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8lpHNjl2mgqrKHH83PgZ-0F3Bux-IXDJfwg&s"
                            onAdd={handleAdd} />
                    </div>
                </div>

                <div className={`exercise-section triceps ${selectedPart === "triceps" ? "active" : ""}`}>
                    <h4>Triceps Exercises</h4>
                    <div className="exercises">

                        <Exercise
                            name="Tricep pushdown"
                            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8lpHNjl2mgqrKHH83PgZ-0F3Bux-IXDJfwg&s"
                            onAdd={handleAdd} />
                        <Exercise
                            name="Tricep pushdown"
                            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8lpHNjl2mgqrKHH83PgZ-0F3Bux-IXDJfwg&s"
                            onAdd={handleAdd} />
                        <Exercise
                            name="Tricep pushdown"
                            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8lpHNjl2mgqrKHH83PgZ-0F3Bux-IXDJfwg&s"
                            onAdd={handleAdd} />
                    </div>
                </div>

                <div className={`exercise-section shoulders ${selectedPart === "shoulders" ? "active" : ""}`}>
                    <h4>Shoulders Exercises</h4>
                    <div className="exercises">

                        <Exercise
                            name="Overhead Press"
                            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8lpHNjl2mgqrKHH83PgZ-0F3Bux-IXDJfwg&s"
                            onAdd={handleAdd} />
                        <Exercise
                            name="Overhead Press"
                            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8lpHNjl2mgqrKHH83PgZ-0F3Bux-IXDJfwg&s"
                            onAdd={handleAdd} />
                        <Exercise
                            name="Overhead Press"
                            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8lpHNjl2mgqrKHH83PgZ-0F3Bux-IXDJfwg&s"
                            onAdd={handleAdd} />
                    </div>
                </div>

                <div className={`exercise-section abs ${selectedPart === "abs" ? "active" : ""}`}>
                    <h4>Abs Exercises</h4>
                    <div className="exercises">

                        <Exercise
                            name="Crunches"
                            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8lpHNjl2mgqrKHH83PgZ-0F3Bux-IXDJfwg&s"
                            onAdd={handleAdd} />
                        <Exercise
                            name="Crunches"
                            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8lpHNjl2mgqrKHH83PgZ-0F3Bux-IXDJfwg&s"
                            onAdd={handleAdd} />
                        <Exercise
                            name="Crunches"
                            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8lpHNjl2mgqrKHH83PgZ-0F3Bux-IXDJfwg&s"
                            onAdd={handleAdd} />
                    </div>
                </div>

                <div className={`exercise-section legs ${selectedPart === "legs" ? "active" : ""}`}>
                    <h4>Legs Exercises</h4>
                    <div className="exercises">

                        <Exercise
                            name="Squats"
                            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8lpHNjl2mgqrKHH83PgZ-0F3Bux-IXDJfwg&s"
                            onAdd={handleAdd} />
                        <Exercise
                            name="Squats"
                            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8lpHNjl2mgqrKHH83PgZ-0F3Bux-IXDJfwg&s"
                            onAdd={handleAdd} />
                        <Exercise
                            name="Squats"
                            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8lpHNjl2mgqrKHH83PgZ-0F3Bux-IXDJfwg&s"
                            onAdd={handleAdd} />
                    </div>
                </div>

                <div className={`exercise-section forearms ${selectedPart === "forearms" ? "active" : ""}`}>
                    <h4>Forearms Exercises</h4>
                    <div className="exercises">
                        <Exercise
                            name="wrist curl"
                            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8lpHNjl2mgqrKHH83PgZ-0F3Bux-IXDJfwg&s"
                            onAdd={handleAdd} />
                        <Exercise
                            name="wrist curl"
                            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8lpHNjl2mgqrKHH83PgZ-0F3Bux-IXDJfwg&s"
                            onAdd={handleAdd} />
                        <Exercise
                            name="wrist curl"
                            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8lpHNjl2mgqrKHH83PgZ-0F3Bux-IXDJfwg&s"
                            onAdd={handleAdd} />
                    </div>
                </div>

            </div>

        </>
    )
}