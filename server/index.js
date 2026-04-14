require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authModel = require('./models/auth')
const port =process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected ✅")
    } catch (err) {
        console.log(err);
    }
};
connectDB();
app.post('/signup', (req, res) => {
    authModel.create(req.body)
        .then(authentication => { res.json(authentication) })
        .catch(err => {
            if (err.code === 11000) {
                return res.status(400).json("Email already exists");
            }
            console.log(err)
            res.status(500).json("Server error"); 
        })
})

app.post('/login', (req, res) => {
    const { name, email, password } = req.body;
    authModel.findOne({ email: email })
        .then((user) => {
            if (user) {
                if (user.password === password) {
                    res.json({status:"success",user : user});
                } else {
                    res.json("password incorrect");
                }
            } else {
                res.json({status:"no user found"});
            }
        })
})

app.listen(port, () => {
    console.log("Server started successfully");
})