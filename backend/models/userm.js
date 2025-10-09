const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, 'Please add a username'],
            // unic username 3amro t3awd
            unique: true,
            // kitfada les espaces
            trim: true,
            // ki7add a9sar klma
            minlength: 3,
        },
        email: {
            type: String,
            required: [true, 'Please add a Email'],
            unique: true,
            // ki7awl nass l 7orof sghira
            lowercase: true,
        },
        password: {
            type: String,
            required: [true, 'Please add a your Password'],
            minlength: 6,
        },
        // role: {
        //     type: String,
        //     enum: ["user", "admin"],
        //     default: "user",
        // },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
