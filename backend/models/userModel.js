const mongoose = require("mongoose");

//Creating Schema
const userSchema = new mongoose.Schema({
    //defining data
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    age: {
        type: Number,
    }, 
},
    { timestamps: true }

);   //Schema is the structure that defines what types of date will be stored in the database

//Creating Model
const User = mongoose.model('User', userSchema)

module.exports = User;