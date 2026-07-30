const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema(
    {
        country: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },

        lastUpdate: {
            type: Date,
            default: Date.now
        }
    });

module.exports = mongoose.model("Country", countrySchema);