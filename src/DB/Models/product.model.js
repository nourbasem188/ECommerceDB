import mongoose from "mongoose";
import {Schema, model} from "mongoose";
const ProductSchema = new Schema({

    ProductId : {type : mongoose.Schema.Types.ObjectId},

    Name : String,

    Description : String,

    Price : Number,

    Category : String,

    Stock : Number

},{
    timestamps : true
})

const ProductModel = model("Product",ProductSchema);

export default ProductModel;
