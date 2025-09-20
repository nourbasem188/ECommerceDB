import UserModel from "../../DB/Models/user.model.js";
//create bulk users

export const Signup = async(req,res) => {
    try {
        const users = req.body;
        const newUsers = await UserModel.create(users);
        return res.status(201).json({
            message : "Users created successfully",
            users : newUsers
        })
    } catch (error) {
        return res.status(500).json({
            message : "Failed to create users",
            error : error.message
        })
    }
}
    
export const UserProducts = async(req,res) => {
    try {
        const {userId} = req.params;
        const user = toArray(userId);
        
        const userProducts = await UserModel.findById({UserId : user}).populate("UserId").populate("Products.ProductId");

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