import React from "react";
import { useState, useEffect } from "react";
import { Box, Typography, LinearProgress } from "@mui/material";
import './Navbar.css'
import '../pages/Home.css'
let currValue1 = 0;
function Status() {
    return (
        <>
            <p>Today Goal is completed</p>
        </>
    )
}
const TrackerCard = ({ title, value, setValue, unit, goal, color, link }) => {
    const percentage = Math.min((value / goal) * 100, 100);
    const [inputValue, setInputValue] = useState("");

    return (
        <Box
            sx={{
                width: 300,
                padding: 2,
                height: 270,
                borderRadius: 3,
                boxShadow: 10,
                backgroundColor: "#fff",
            }}
        >
            <img className="cal-logo" src={link} alt="logo" />
            <Typography variant="h6" sx={{ color: "rgb(76, 85, 185)", fontWeight: "bold" }}>{title}</Typography>

            <Typography variant="h4" sx={{ fontWeight: "bold", mt: 1 }}>
                {value}
                <span style={{ fontSize: "16px" }}> {unit}</span>
            </Typography>

            {/* Progress Bar */}
            <LinearProgress
                variant="determinate"
                value={percentage}
                sx={{
                    height: 10,
                    borderRadius: 5,
                    mt: 2,
                    backgroundColor: "#eee",
                    "& .MuiLinearProgress-bar": {
                        backgroundColor: color,
                    },
                }}
            />

            <Typography variant="body2" sx={{ mt: 1 }}>
                Goal: {goal} {unit}
            </Typography>
            
            <input type="text" value={inputValue} placeholder="Add here" className="addinput"
                onChange={(e) => {
                    setInputValue(e.target.value)
                    // console.log(Protien)
                    console.log(e.target.value);
                }} />
            <button type="submit" className="addbtn"
                onClick={() => {
                    const num = Number(inputValue);
                    if (!isNaN(num)) {
                        setValue(prev => prev + num);
                        setInputValue("");
                    }
                    if (value >= goal) {
                        <Status />
                        console.log("completed");
                    }
                }}>+</button>

            <button type="submit" className="addbtn"
                onClick={() => {
                    const num = Number(inputValue);
                    if (!isNaN(num)) {
                        setValue((prev) => Math.max(prev - num, 0));
                        setInputValue("");
                        console.log(currValue1);
                    }
                    // console.log(value)
                }}>-</button>
        </Box>

    );
};

export default function Dashboard() {
    const [calories, setCalories] = useState(0);
    const [protein, setProtein] = useState(0);
    const [water, setWater] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [calorieGoal, setCalorieGoal] = useState(900);
    const [proteinGoal, setProteinGoal] = useState(120);
    // const [value,setValue]=useState(0);
    useEffect(() => {
        const sCalories = localStorage.getItem("calories");
        const sProtein = localStorage.getItem("protein");
        const sWater = localStorage.getItem("water");
        const storedDate = localStorage.getItem("date");

        const today = new Date().toDateString();

        if (storedDate === today) {
            setCalories(Number(sCalories) || 0);
            setProtein(Number(sProtein) || 0);
            setWater(Number(sWater) || 0);
        } else {
            localStorage.setItem("calories", 0);
            localStorage.setItem("protein", 0);
            localStorage.setItem("water", 0);
            localStorage.setItem("date", today);

            setCalories(0);
            setProtein(0);
            setWater(0);
        }

        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (!isLoaded) return;

        const today = new Date().toDateString();

        localStorage.setItem("calories", calories);
        localStorage.setItem("protein", protein);
        localStorage.setItem("water", water);
        localStorage.setItem("date", today);
    }, [calories, protein, water, isLoaded]);
    useEffect(() => {
        const storedCalGoal = localStorage.getItem("calorieGoal");
        const storedProtGoal = localStorage.getItem("proteinGoal");

        if (storedCalGoal) {
            setCalorieGoal(Number(storedCalGoal));
        }

        if (storedProtGoal) {
            setProteinGoal(Number(storedProtGoal));
        }
    }, []);
    return (
        <Box sx={{ display: "flex", gap: 3}}>

            <TrackerCard
                title="Calories Burned"
                value={calories}
                setValue={setCalories}
                unit="Cals"
                goal={calorieGoal}
                link="https://imgs.search.brave.com/MctzVjVFOiIsAP2gHga_uHwY9IIubJoz9gBRZy_1rd0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzE4LzM3LzI0LzI4/LzM2MF9GXzE4Mzcy/NDI4MzRfajZrMm5H/QUVsQUh0Z2NEdkJC/RUxrSDBhZTFpbkJm/RFIuanBn"
                color="#ff7043"
            />

            <TrackerCard
                title="Protein Tracker"
                value={protein}
                setValue={setProtein}
                unit="g"
                goal={proteinGoal}
                link="https://imgs.search.brave.com/Ee2Eq341vlOvKipu_mNlPyI0De8uo0P523hsRn2YYFo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2YwLzBk/LzhhL2YwMGQ4YTRm/MzQyZTA5MzMwMTc5/ODRlNDFhZjVkZDlk/LmpwZw"
                color="#060708"
            />

            <TrackerCard
                title="Water Tracker"
                value={water}
                setValue={setWater}
                unit="L"
                goal={3}
                link="https://imgs.search.brave.com/NQ48-aiRI3-L22wAxz0kjDsteRs3lGkT6k-g5wd7aSg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMw/NDAzMzIxMC92ZWN0/b3Ivd2F0ZXItZHJv/cC1pY29ucy1pc29s/YXRlZC1vbi13aGl0/ZS1iYWNrZ3JvdW5k/LXZlY3Rvci1pbGx1/c3RyYXRpb24uanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPURY/OWRYQ3hJVXExLVNE/eG5qQTkyTi1vYlpJ/b0Vvc3B4bEJVb3FE/Tjg5ZGc9"
                color="#29b6f6"
            />
        </Box>
    );
}   