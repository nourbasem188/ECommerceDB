import {Router} from "express";
import * as ProductService from "../Products/product.service.js";
const router = Router();

router.post("/CreateProduct",ProductService.CreateProduct);

router.get("/GetAllProducts",ProductService.GetAllProducts);

router.get("/ProductsAbove30",ProductService.ProductsAbove30);

router.get("/ElecProducts",ProductService.ElecProducts);

router.patch("/UpdatePrice",ProductService.UpdatePrice);

router.delete("/DeleteProduct/:productId",ProductService.DeleteProduct);

export default router;