const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({

    filmId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Film",
        required: true
    },

    storeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Store",
        required: true
    },

    lastUpdate: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Inventory", inventorySchema);