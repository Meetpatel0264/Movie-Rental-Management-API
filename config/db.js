const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/movieRentalDB";

        await mongoose.connect(MONGO_URI);

        console.log("MongoDB Connected");
    } catch (err) {
        console.log("MongoDB Error:", err.message);
        process.exit(1);
    }
};

module.exports = connectDB;