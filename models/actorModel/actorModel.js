const mongoose = require("mongoose");

const actorSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: [true, "First Name is Required"],
        trim: true,
        minlength: 2,
        maxlength: 50
    },

    lastName: {
        type: String,
        required: [true, "Last Name is Required"],
        trim: true,
        minlength: 2,
        maxlength: 50
    },

     lastUpdate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Actor", actorSchema);