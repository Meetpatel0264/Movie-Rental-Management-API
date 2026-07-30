const mongoose = require("mongoose");

const filmCategorySchema = new mongoose.Schema({

    filmId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Film",
        required: true
    },

    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },

    lastUpdate: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("FilmCategory", filmCategorySchema);