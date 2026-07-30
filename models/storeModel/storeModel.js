const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema(
    {

        manager_staff: {
            type: String,
            required: true,
            trim: true
        },

        address_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Address",
            required: true
        }

    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Store", storeSchema);