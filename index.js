require("dotenv").config();
// const app = require("./routes/app");
const connectDB = require("./config/db");
const express = require('express');

connectDB();

const app = express();

const PORT = process.env.PORT || 9094;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", require("./routes/app"));

app.listen(PORT, (err) => {
    if (!err) {
        console.log(`Server Running On Port http://localhost:${PORT}`);
    } else {
        console.log("error ======> ", err);
    }

});