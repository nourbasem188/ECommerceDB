import mongoose from "mongoose";
import {Schema,model} from "mongoose";

const OrderSchema = new Schema({
    

    UserId : {type : mongoose.Schema.Types.ObjectId , ref : "User"},

    Products: [
        {
          ProductId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
          Quantity: Number
        }
      ],

    TotalAmount : Number,

    Status : {type : String, enum : ["Pending", "Shipped", "Delivered", "Cancelled"], default : "Pending"}

},{
    timestamps : true
})

const OrderModel = model("Order",OrderSchema);

export default OrderModel;

