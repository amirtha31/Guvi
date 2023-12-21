import mongoose from "mongoose";

const userSchema =  new mongoose.Schema(
    {
        name : {type:String,required:false},
        email : {type:String,required:false},
        password : {type:String,required:false},
        confirmpassword: {type:String,required:false},
        age : {type:Number,required:false},
        dob : {type:String,required:false},
        gender : {type:String,required:false},
        mobileno : {type:String,required:false},
        
    },
    {
        timestamps:true,
    }
);

const  User = mongoose.model('User',userSchema);

export default User;