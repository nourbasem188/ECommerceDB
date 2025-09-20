import ProductModel from "../../DB/Models/product.model.js";

export const CreateProduct = async(req,res) => {
    try {
        const products = req.body;
        await ProductModel.create(products);
        return res.status(201).json({
            message : "Product created successfully",
            products : products
        })
    } catch (error) {
        return res.status(500).json({
            message : "Failed to create product",
            error : error.message
        })
    }
}

export const GetAllProducts = async(req,res) => {
    try {
        const products = await ProductModel.find()
        if(!products){
            return res.status(404).json({
                message : "No products found"
            })
        }
        return res.status(200).json({
        message : "Products fetched successfully",
        products : products
    })
    } catch (error) {
        return res.status(500).json({
            message : "Failed to fetch products",
            error : error.message
        })
    }
}

export const ProductsAbove30 = async(req,res) => {
    try {
        const products = await ProductModel.find({Price : {$gt : 30}})
    if(!products){
        return res.status(404).json({
            message : "No products found"
        })
    }
    return res.status(200).json({
        message : "Products fetched successfully",
        products : products
    })
    } catch (error) {
        return res.status(500).json({
            message : "Failed to fetch products",
            error : error.message
        })
    }
}

export const ElecProducts = async(req,res) => {
    try {
        const products = await ProductModel.find({Category : "Electronics"})
        if(!products){
            return res.status(404).json({
                message : "No products found"
            })
        }
        return res.status(200).json({
            message : "Products fetched successfully",
            products : products
        })
    } catch (error) {
        return res.status(500).json({
            message : "Failed to fetch products",
            error : error.message
        })
    }
}

export const UpdatePrice = async(req,res) => {
    try {
        const product = await ProductModel.findOne({ Name: "Bluetooth Speaker" });
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        const newPrice = product.Price + product.Price * 0.1;
        const updatedProduct = await ProductModel.findOneAndUpdate({ _id: product._id }, { Price: newPrice }, { new: true });
        return res.status(200).json({
            message: "Product updated successfully",
            updatedProduct: updatedProduct
        });

    } catch (error) {
        return res.status(500).json({
            message : "Failed to update product",
            error : error.message
        })
    }
}

export const DeleteProduct = async(req,res) => {
    try {
        const {productId} = req.params;
        const deletedProduct = await ProductModel.findOneAndDelete(productId)
        if(!deletedProduct){
            return res.status(404).json({
                message : "Product not found"
            })
        }
        return res.status(200).json({
            message : "Product deleted successfully",
            deletedProduct : deletedProduct
        })
    } catch (error) {
        return res.status(500).json({
            message : "Failed to delete product",
            error : error.message
        })
    }    
}