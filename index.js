import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./src/routers/user.router.js";
import connectDB from "./src/db/connectDB.js";
import noteRouter from "./src/routers/note.router.js";
import resumeRouter from "./src/routers/resume.router.js";

const app = express();

//middlewares
app.use(cors({
    origin: process.env.CLIENT_ORIGIN_URL,
    credentials: true,
}))
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


//end points
app.get("/", async (req, res) => {
    try {

        return res.status(200).json({ success: true, message: "Server running...." })
    } catch (error) {
        console.log(error);
    }
});

//  routes api
app.use("/user", userRouter)
app.use("/note", noteRouter)
app.use("/resume", resumeRouter);


const port = process.env.PORT;

connectDB().then(() => {
    app.listen((port), () => {
        console.log(`Server running on port ${port}`);
    })
}).catch(() => {
    console.log("MongoDb + Server connection error!");
})

