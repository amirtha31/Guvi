import express from "express";
import expressAsyncHandler from "express-async-handler";
import User from "../models/User.js";

const UserRouter = express.Router();

UserRouter.post(
  "/create",
  expressAsyncHandler(async (req, res) => {
    console.log("enterd");
    const AddUser = new User({
      email: req.body.value.email,
      name: req.body.value.name,
      password: req.body.value.password,
      confirmpassword: req.body.value.confirmPassword,
      age: "",
      gender: "",
      dob: "",
      number: "",
    });
    console.log(req);
    const Add = await AddUser.save();
    res.send({
      email: Add.email,
      name: Add.name,
      password: Add.password,
      confirmpassword: Add.confirmpassword,
      age: "",
      gender: "",
      dob: "",
      number: "",
    });
  })
);
UserRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.value.email });
    if (user) {
      if (req.body.value.password === user.password) {
        res.send({
          email: user.email,
        });
        return;
      }
    }
    res.status(401).send({ message: "Invalid email or password" });
  })
);


UserRouter.put(
  "/update/profile/:email", 
  expressAsyncHandler(async (req, res) => {
    const param_email = req.params.email;
    console.log(param_email);
    console.log("Received data:", req.body);
    try {
      const user = await User.findOne({ email: param_email });

      if (user) {
        // console.log(user)
        const updatedProfile = await User.findOneAndUpdate(
          { email: param_email },
          { $set: req.body.ReqData }
        );
        if (updatedProfile) {
          return res.status(200).send({ message: "Success" });
        }
      }

      

      res.send(updatedProfile);
    } catch (error) {
      res.status(500).send({ message: "Internal server error" });
    }
  })
);

export default UserRouter;
