

import mongoose from "mongoose";

const connectDB = async()=>{

    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/ECommerceDB");
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Failed to connect to MongoDB",error);
    }

}
export default connectDB;