import express from "express";
import {
  registerController,
  loginController,
  currentUserController,
} from "../controllers/authController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();
//routes
//Register || POST
router.post("/register", registerController);
// Login || Post
router.post("/login", loginController);
//Get Curent User || Get
router.get("/current-user", authMiddleware, currentUserController);
export default router;
