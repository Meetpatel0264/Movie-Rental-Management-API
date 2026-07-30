const mongoose = require("mongoose");

const languageSchema = new mongoose.Schema(
    {
        name: {
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

module.exports = mongoose.model("Language", languageSchema);