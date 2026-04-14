require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authModel = require('./models/auth');

const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(cors({
    origin: "https://athlletix.netlify.app", // Allow only your frontend
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}));

// ✅ routes FIRST
app.get("/", (req, res) => {
    res.status(200).send("Backend is LIVE 🚀");
});

app.get("/health", (req, res) => {
    res.status(200).send("OK");
});

app.post('/signup', (req, res) => {
    authModel.create(req.body)
        .then(authentication => res.json(authentication))
        .catch(err => {
            if (err.code === 11000) {
                return res.status(400).json("Email already exists");
            }
            res.status(500).json("Server error");
        });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    authModel.findOne({ email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json({ status: "success", user });
                } else {
                    res.json({ status: "password incorrect" });
                }
            } else {
                res.json({ status: "no user found" });
            }
        });
});

// ✅ DB AFTER routes
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected ✅");
    } catch (err) {
        console.log("DB ERROR:", err.message);
    }
};
connectDB();

// ✅ listen
app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
});