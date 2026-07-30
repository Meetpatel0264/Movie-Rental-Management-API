const mongoose = require("mongoose");

const filmActorSchema = new mongoose.Schema({

    actorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Actor",
        required: true
    },

    filmId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Film",
        required: true
    },

    lastUpdate: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("FilmActor", filmActorSchema);