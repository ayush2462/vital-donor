import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import { bloodGroupDetailsController } from "../controllers/analyticsController.js";
const router = express.Router();
//routes

//get blood details
router.get("/bloodgroup-data", authMiddleware, bloodGroupDetailsController);
export default router;
