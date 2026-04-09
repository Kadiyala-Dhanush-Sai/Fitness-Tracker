import React, { use, useEffect, useState } from "react";
import "./user.css";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";

export default function UserInfo() {
  const [userName, setuserName] = useState("");
  useEffect(() => {
    const name = localStorage.getItem("username");
    if (name) {
      setuserName(name)
    }
  }, [])
  const [user, setUser] = useState({
    age: "",
    height: "",
    weight: "",
    gender: "",
    activity: "",
    goal: "",
  });

  const [macros, setMacros] = useState({
    BMR: "",
    maintenanceCals: "",
    minCals: "",
    maxCals: "",
    minProt: "",
    maxProt: "",
    calsavg: "",
    protavg: "",
    water: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleCalculate = () => {
    let wt = Number(user.weight);
    let age = Number(user.age);
    let height = Number(user.height);
    let gen = user.gender;
    let act = user.activity;
    let gol = user.goal;

    if (!wt || !age || !height || !gen || !act || !gol) {
      alert("Please fill all fields");
      return;
    }

    let BMR = 0;
    let maintenanceCals = 0;
    let maxCals = 0;
    let minCals = 0;
    let maxProt = 0;
    let minProt = 0;
    let calsavg = 0;
    let protavg = 0;
    let waterIntake =  Math.round((30 * wt) / 1000);

    // 🔥 BMR
    if (gen === "male") {
      BMR = 10 * wt + 6.25 * height - 5 * age + 5;
    } else {
      BMR = 10 * wt + 6.25 * height - 5 * age - 161;
    }

    // 🔥 Activity
    if (act === "sedentary") maintenanceCals = BMR * 1.2;
    else if (act === "light") maintenanceCals = BMR * 1.375;
    else if (act === "moderate") maintenanceCals = BMR * 1.55;
    else if (act === "active") maintenanceCals = BMR * 1.9;

    maintenanceCals = Math.round(maintenanceCals);

    // 🔥 Goal
    if (gol === "loss") {
      maxCals = maintenanceCals - 300;
      minCals = maintenanceCals - 500;

      maxProt = 2.2 * wt;
      minProt = 1.5 * wt;
    } else if (gol === "gain") {
      maxCals = maintenanceCals + 500;
      minCals = maintenanceCals + 300;

      maxProt = 2.2 * wt;
      minProt = 1.6 * wt;
    } else {
      maxCals = maintenanceCals;
      minCals = maintenanceCals;

      maxProt = 1 * wt;
      minProt = 0.8 * wt;
    }

    // 🔥 Averages (ROUNDED)
    calsavg = Math.round((maxCals + minCals) / 2);
    protavg = Math.round((minProt + maxProt) / 2);

    setMacros({
      BMR: Math.round(BMR),
      maintenanceCals,
      minCals,
      maxCals,
      minProt: Math.round(minProt),
      maxProt: Math.round(maxProt),
      calsavg,
      protavg,
      water: Number(waterIntake.toFixed(2)),
    });
    localStorage.setItem("calorieGoal", calsavg);
    localStorage.setItem("proteinGoal", protavg);
    localStorage.setItem("age", age)
    localStorage.setItem("height", height)
    localStorage.setItem("weight", wt)
    localStorage.setItem("gender", gen)
    localStorage.setItem("activity", act)
    localStorage.setItem("goal", gol)


  };

  const sage = localStorage.getItem("age");
  const sheight = localStorage.getItem("height");
  const sweight = localStorage.getItem("weight");
  const sgender = localStorage.getItem("gender");
  const sactivity = localStorage.getItem("activity");
  const sgoal = localStorage.getItem("goal");

  return (
    <Box className="userinfo-container">

      {/* LEFT SIDE */}
      <Box className="userinfo-left">
        <div className="profile-card top-box">
          <div className="avatar"></div>
          <h2>{userName}</h2>
        </div>

        <div className="profile-card">
          <h2>User Information</h2>
          <div className="info">
            <p>👤 Age: {sage || "-"}</p>
            <p>📏 Height: {sheight || "-"} cm</p>
            <p>⚖ Weight: {sweight || "-"} kg</p>
            <p>🚻 Gender: {sgender || "-"}</p>
            <p>🏃 Activity: {sactivity || "-"}</p>
            <p>🔥 Goal: {sgoal || "-"}</p>
          </div>
        </div>
      </Box>

      {/* RIGHT SIDE */}
      <Box className="userinfo-right">
        <div className="form-card">
          <Typography variant="h5" className="title">
            Enter Your Details
          </Typography>

          <TextField label="Age" name="age" value={user.age} onChange={handleChange} fullWidth margin="normal" />
          <TextField label="Height (cm)" name="height" value={user.height} onChange={handleChange} fullWidth margin="normal" />
          <TextField label="Weight (kg)" name="weight" value={user.weight} onChange={handleChange} fullWidth margin="normal" />

          <TextField select label="Gender" name="gender" value={user.gender} onChange={handleChange} fullWidth margin="normal">
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </TextField>

          <TextField select label="Activity Level" name="activity" value={user.activity} onChange={handleChange} fullWidth margin="normal">
            <MenuItem value="sedentary">Sedentary</MenuItem>
            <MenuItem value="light">Light</MenuItem>
            <MenuItem value="moderate">Moderate</MenuItem>
            <MenuItem value="active">Active</MenuItem>
          </TextField>

          <TextField select label="Goal" name="goal" value={user.goal} onChange={handleChange} fullWidth margin="normal">
            <MenuItem value="loss">Weight Loss</MenuItem>
            <MenuItem value="maintain">Maintain</MenuItem>
            <MenuItem value="gain">Muscle Gain</MenuItem>
          </TextField>

          <Button variant="contained" className="btn" onClick={handleCalculate}>
            Calculate Plan
          </Button>
        </div>
      </Box>

      {/* RESULT */}
      <div className="profile-card">
        <h2>Your Diet Macros</h2>

        <div className="info">
          <p>🔥 BMR: {macros.BMR || "-"}</p>
          <p>🍽 Maintenance: {macros.maintenanceCals || "-"}</p>
          <p>📉 Calories Range: {macros.minCals} - {macros.maxCals}</p>
          <p>👉 Suggested Calories: {macros.calsavg}</p>
          <p>💪 Protein: {macros.minProt}g - {macros.maxProt}g</p>
          <p>👉 Suggested Protein: {macros.protavg}g</p>
          <p>💧 Water: {macros.water} - {Number(macros.water) + 1} L</p>
        </div>
      </div>

    </Box>
  );
}