import {Router} from "express";
import * as ReviewService from "../Reviews/review.service.js";
const router = Router();

router.post("/CreateReview",ReviewService.CreateReview);

router.get("/ShowReviews/:productId",ReviewService.ShowReviews);

export default router;
