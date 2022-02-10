const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const hospital = require("./routes/hospital");

dotenv.config({path:"./config/config.env"});

//connect mongodb
connectDB();

const app = express();

// add body parser
app.use(express.json());

app.use("/api/v1/hospitals",hospital);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, console.log("Server running in ",process.env.NODE_ENV, 'mode on port ', PORT));

process.on('unhandledRejection', (err,promise) => {
    console.log(`Error: ${err}`);
    //Close Server & exit process
    server.close(() => process.exit(1));
});