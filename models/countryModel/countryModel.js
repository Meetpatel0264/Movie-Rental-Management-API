const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema(
    {
        country: {
            type: String,
            required: true,
            trim: true,
            unique: true
        }
    });

module.exports = mongoose.model("Country", countrySchema);