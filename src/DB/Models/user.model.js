import mongoose from "mongoose";
import {Schema, model} from "mongoose";
const UserSchema = new Schema({

    UserId : {type : mongoose.Schema.Types.ObjectId},

    Name : String,

    Email : {type : String, unique : true},

    Password : String

},{
    timestamps : true
})


const UserModel = model("User",UserSchema);

export default UserModel;
