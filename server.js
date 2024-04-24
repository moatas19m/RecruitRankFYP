import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/authRoutes.js";
import userRoute from "./routes/userRoutes.js";
import jobRoute from "./routes/jobRoutes.js"
import applicationRoute from "./routes/applicationRoutes.js"


//configure env
dotenv.config();

//DB connection
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Dbconnection sucessfull"))
    .catch((err) => {
        console.log(err);
    });


//rest object
const app = express();

//middelwares
app.use(express.json());

//routes
app.use("/api/auth",authRoute);
app.use("/api/user",userRoute);
app.use("/api/job",jobRoute);
app.use("/api/application",applicationRoute);
//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
});