import "./heatmap.css";
import React, { useEffect, useState } from "react";

function Heatmap() {
  const [data, setData] = useState([]);

  // Generate last 90 days
  const generateDates = () => {
    const days = [];
    const today = new Date();

    for (let i = 89; i >= 0; i--) {
      const date = new Date();
      date.setDate(today.getDate() - i);

      const formatted = date.toISOString().split("T")[0];

      days.push({
        date: formatted,
        count: 0,
      });
    }

    return days;
  };

  useEffect(() => {
    const base = generateDates();

    // get stored history (you can customize this later)
    const stored = JSON.parse(localStorage.getItem("history")) || [];

    const merged = base.map((day) => {
      const found = stored.find((d) => d.date === day.date);
      return found ? found : day;
    });

    setData(merged);
  }, []);

  // color logic
  const getColor = (count) => {
    if (count === 0) return "color-empty";
    if (count < 3) return "color-1";
    if (count < 6) return "color-2";
    if (count < 10) return "color-3";
    return "color-4";
  };

  return (
    <div className="heatmap-container">
      <h2>Activity Tracker</h2>

      <div className="heatmap-grid">
        {data.map((day, index) => (
          <div
            key={index}
            className={`heatmap-box ${getColor(day.count)}`}
            title={`${day.date} - ${day.count}`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Heatmap;