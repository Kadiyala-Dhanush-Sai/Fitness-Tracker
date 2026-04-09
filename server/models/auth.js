const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: String
})

const authModel = mongoose.model("authentication", authSchema);
module.exports = authModel;