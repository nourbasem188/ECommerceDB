import {Router} from "express";
import * as UserService from "../Users/user.service.js";
const router = Router();

router.post("/Signup",UserService.Signup);

router.get("/UserProducts/:userId",UserService.UserProducts);


export default router;
