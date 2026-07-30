const dotenv = require("dotenv");
dotenv.config();

const app = require("./routes/app");
const connectDB = require("./config/db");

connectDB();

const PORT = process.env.PORT || 9094;

app.listen(PORT, (err) => {
    if(!err){
        console.log(`Server Running On Port http://localhost:${PORT}`);
    } else{
        console.log("error ======> ", err);
    }

});