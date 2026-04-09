import React, { useState } from "react";
import "./gym.css";

function Exercise({ name, img, onAdd }) {
    const [value, setValue] = useState(" ");

    return (
        <div className="card">
            <p>{name}</p>

            <img src={img} alt={name} />

            <label>Reps counter</label>

            <div className="input-div">
                <input
                    type="text"
                    className="input-box"
                    value={value}
                    onChange={(e) => setValue(Number(e.target.value))}
                />

                <button
                    className="button_plus"
                    onClick={() => {
                        onAdd(name, value); // 🔥 send to parent
                        setValue(" ");
                    }}
                >
                    +
                </button>
            </div>
        </div>
    );
}

export default Exercise;