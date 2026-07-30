const mongoose = require("mongoose");

const citySchema = new mongoose.Schema(
    {
        city: {
            type: String,
            required: true,
            trim: true
        },

        country_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Country",
            required: true
        },

        lastUpdate: {
            type: Date,
            default: Date.now
        }

    });

module.exports = mongoose.model("City", citySchema);