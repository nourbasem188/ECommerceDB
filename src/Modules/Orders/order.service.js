import OrderModel from "../../DB/Models/order.model.js";
import ProductModel from "../../DB/Models/product.model.js";


export const CreateOrders = async(req,res) => {
    try {
        const orders = req.body;
        const newOrder = await OrderModel.insertMany(orders);
        return res.status(201).json({
            message : "Order created successfully",
            order : newOrder
        })
    } catch (error) {
        return res.status(500).json({
            message : "Failed to create order",
            error : error.message
        })
    }
}

export const PendingOrders = async(req,res) => {
    try {
        const orders = await OrderModel.find({Status :"Pending"})
        if(!orders){
            return res.status(404).json({
                message : "No orders found"
            })
        }
        return res.status(200).json({
            message : "Orders fetched successfully",
            orders : orders
        })
    } catch (error) {
        return res.status(500).json({
            message : "Failed to fetch orders",
            error : error.message
        })
    }
}

export const UserProducts = async(req,res) => {
    try {
        const {userId} = req.params;
        
        const userProducts = await OrderModel.find({UserId : userId}).populate("Products.ProductId");

        if(!userProducts){
            return res.status(404).json({
                message : "User not found"
            })
        }
        return res.status(200).json({
            message : "User products fetched successfully",
            userProducts : userProducts
        })
    } catch (error) {
        return res.status(500).json({
            message : "Failed to fetch user products",
            error : error.message
        })
    }
}

export const updatedOrder = async(req,res) => {
    try {
        const {orderId} = req.params;
        const updatedOrder = await OrderModel.findOneAndUpdate({_id : orderId},{Status : "Delivered"},{new : true})
        return res.status(200).json({
            message : "Order updated successfully",
            order : updatedOrder
        })
    } catch (error) {
        return res.status(500).json({
            message : "Failed to update order",
            error : error.message
        })
    }
}

export const UpdatedStock = async(req,res) => {
    try {
        const soldProducts = await OrderModel.find({Status : "Delivered"})
        const updatedProducts = [];

        for(const order of soldProducts){
            for(const product of order.Products){
                const remainingStock = await ProductModel.findOneAndUpdate({_id : product.ProductId},{$inc : {Stock : -product.Quantity}},{new : true})
                updatedProducts.push(remainingStock);
                if(!remainingStock){
                    return res.status(404).json({
                        message : "Product not found"
                    })
                }
            }
        }
        return res.status(200).json({
            message : "Stock updated successfully",
            updatedProducts : updatedProducts
        })
    } catch (error) {
        return res.status(500).json({
            message : "Failed to update stock",
            error : error.message
        })
    }
}

export const UpdateStatus = async(req,res) => {
    try {
        const updatedStatus = await OrderModel.updateMany({Status : "Pending"},{Status : "Shipped"},{new : true}).find({Status : "Shipped"});
        return res.status(200).json({
            message : "Status updated successfully",
            updatedStatus : updatedStatus
        })
    } catch (error) {
        return res.status(500).json({
            message : "Failed to update status",
            error : error.message
        })
    }
}