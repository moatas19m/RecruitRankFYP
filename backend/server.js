import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/authRoutes.js";
import userRoute from "./routes/userRoutes.js";
import jobRoute from "./routes/jobRoutes.js"
import applicationRoute from "./routes/applicationRoutes.js"
//import proxyMiddleware from "./proxy.mjs";
import cors from "cors"; // Import the cors middleware
//import uploadRoute from "./routes/upload.cjs"

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
app.use(cors());
//proxyMiddleware(app);
app.use(cors({
    origin: '*' // Allow requests from any origin
  }));
//routes
app.use("/api/auth",authRoute);
app.use("/api/user",userRoute);
app.use("/api/job",jobRoute);
app.use("/api/application",applicationRoute);
//app.use("/api/upload", uploadRoute);
//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
});