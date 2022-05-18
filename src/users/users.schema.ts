import mongoose from "mongoose";

export let UserSchema = new mongoose.Schema({
    username:String,
    age:Number,
    email:String
})