import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import User from '../models/User.js';
// import bcrypt from 'bcryptjs';
// import { generatetoken } from '../utils.js';
const UserRouter = express.Router();

UserRouter.post('/create',
    expressAsyncHandler(async(req,res)=>{
        console.log('enterd');
        const AddUser = new User(
            {
                email : req.body.value.email,
                name:req.body.value.name,
                password : req.body.value.password,
                confirmpassword:req.body.value.confirmPassword
            }
        );
        console.log(req)
        const Add = await AddUser.save();
        res.send({
            email : Add.email,
            name:Add.name,
            password : Add.password,
            confirmpassword:Add.confirmpassword
        });
    })
);
UserRouter.post(
    '/signin',
    expressAsyncHandler(async (req,res)=>{
        const user = await User.findOne({ email:req.body.value.email});
        if(user) {
                if(req.body.value.password === user.password) {
                    res.send({
                        email : user.email,
                    });
                    return ;
                }
        }
        res.status(401).send({message:'Invalid email or password'});
    })
);

export default UserRouter;