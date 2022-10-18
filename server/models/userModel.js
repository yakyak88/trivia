// schema for user model
const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isAdmin: { type: Boolean, required: true, default: false },
    },
    {
        timestamps: true,
    }
);
//
// create a model
const userModel = mongoose.model("User", userSchema);
//
// export the model
export default userModel;
//
// Path: server\routes\userRoutes.js
// import express from "express";
// import expressAsyncHandler from "express-async-handler";
// import User from "../models/userModel.js";
//
// const userRouter = express.Router();
//
// userRouter.get(
//     "/seed",
//     expressAsyncHandler(async (req, res) => {
//         // await User.remove({});
//         const createdUsers = await User.insertMany(users);
//         res.send({ createdUsers });
//     })
// );
//
