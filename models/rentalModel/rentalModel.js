const mongoose = require("mongoose");

const rentalSchema = new mongoose.Schema({

    rentalDate: {
        type: Date,
        required: true
    },

    inventoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Inventory",
        required: true
    },

    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
        required: true
    },

    returnDate: {
        type: Date,
        default: null
    },

    staffId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Staff",
        required: true
    },

    lastUpdate: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Rental", rentalSchema);