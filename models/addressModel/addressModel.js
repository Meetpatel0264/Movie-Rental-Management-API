const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
    {
        address: {
            type: String,
            required: true,
            trim: true
        },

        address2: {
            type: String,
            trim: true,
            default: ""
        },

        district: {
            type: String,
            required: true,
            trim: true
        },

        city_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "City",
            required: true
        },

        postal_code: {
            type: String,
            required: true,
            trim: true
        },

        phone: {
            type: String,
            required: true,
            trim: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Address", addressSchema);