import mongoose from "mongoose";
import {Schema,model} from "mongoose";


const ReviewSchema = new Schema({

    UserId : {type : mongoose.Schema.Types.ObjectId , ref : "User"},

    ProductId : {type : mongoose.Schema.Types.ObjectId , ref : "Product"},

    Rating : {type : Number , min : 1 , max : 5 , required : true},

    Comment : String,
},{
    timestamps : true
})

const ReviewModel = model("Review",ReviewSchema);

export default ReviewModel;
