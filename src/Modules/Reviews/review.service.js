import ReviewModel from "../../DB/Models/review.model.js";

export const CreateReview = async(req,res) => {

    try {
        const reviews = req.body;
        const newReviews = await ReviewModel.create(reviews);
        return res.status(201).json({
            message : "Reviews created successfully",
            reviews : newReviews
        })
    } catch (error) {
        return res.status(500).json({
            message : "Failed to create reviews",
            error : error.message
        })
    }
}

export const ShowReviews = async(req,res) => {
    try {
        const {productId} = req.params;
        const showReviews = await ReviewModel.find({ProductId : productId});
        return res.status(200).json({
            message : "Reviews fetched successfully",
            reviews : showReviews
        })
    } catch (error) {
        return res.status(500).json({
            message : "Failed to fetch reviews",
            error : error.message
        })
    }
}