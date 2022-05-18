import mongoose from "mongoose";

export const orderSchema = new mongoose.Schema({
    userId:Number,
    description:String,
    quantity:Number
})