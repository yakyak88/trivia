import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./data/users.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());

const PORT = process.env.PORT || 4444;

app.get("/", (req, res) => {
    res.send(users);
});

// display data the request.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// console log the request.body
app.use("/", (req, res, next) => {
    console.log(req.body);
    next();
});

app.listen(
    PORT,
    console.log(
        `server is on ${process.env.NODE_ENV} environment running at PORT ${PORT}`
    )
);
