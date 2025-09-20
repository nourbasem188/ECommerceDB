import { Router } from "express";
import * as OrderService from "../Orders/order.service.js";
const router = Router();

router.post("/CreateOrders",OrderService.CreateOrders);

router.get("/PendingOrders",OrderService.PendingOrders);

router.get("/UserProducts/:userId",OrderService.UserProducts);

router.patch("/UpdatedOrder/:orderId",OrderService.updatedOrder);

router.patch("/UpdatedStock",OrderService.UpdatedStock);

router.patch("/UpdateStatus",OrderService.UpdateStatus);

export default router;