const mongoose = require("mongoose");

const languageSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            unique: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Language", languageSchema);