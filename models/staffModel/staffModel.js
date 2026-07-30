const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true,
        trim: true
    },

    lastName: {
        type: String,
        required: true,
        trim: true
    },

    address_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address",
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },

    store_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Store",
        required: true
    },

    active: {
        type: Boolean,
        default: true
    },

    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    password: {
        type: String,
        required: true
    },

    picture: {
        type: String,
        default: ""
    },

    last_update: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Staff", staffSchema);