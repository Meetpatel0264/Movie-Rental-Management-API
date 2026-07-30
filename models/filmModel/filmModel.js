const mongoose = require("mongoose");

const filmSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        trim: true
    },

    description: {
        type: String,
        required: true,
        trim: true
    },

    releaseYear: {
        type: Number,
        required: true
    },

    languageId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Language",
        required: true
    },

    originalLanguageId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Language",
        default: null
    },

    rentalDuration: {
        type: Number,
        required: true,
        default: 3
    },

    rentalRate: {
        type: Number,
        required: true,
        default: 4.99
    },

    length: {
        type: Number,
        required: true
    },

    replacementCost: {
        type: Number,
        required: true,
        default: 19.99
    },

    rating: {
        type: String,
        default: "5"
    },

    specialFeatures: [{
        type: String,
        enum: [
            "Trailers",
            "Commentaries",
            "Deleted Scenes",
            "Behind the Scenes"
        ]
    }],

    lastUpdate: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Film", filmSchema);