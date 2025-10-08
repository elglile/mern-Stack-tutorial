const mongoose = require("mongoose")

const goalSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User", // reference to User model
    },
    text: {
        type: String,
        // kdar bach nvalidiw linput
        required: [true, 'Please add a value']
    },
},
    {
        // kdar bach n3tiw created at w updated at
        timestamps: true,
    })

module.exports = mongoose.model('Goal', goalSchema)