const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
     email : {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: true
     },
     passwordHash : {
        type: String,
        required: true
     },
     role : {
        type: String,
        enum: ["ADMIN","USER"],
        default: "USER",
        required: true
     },
    },
    {
        timestamps: true
    }     
);

const User = mongoose.model("User", userSchema);

module.exports = User;