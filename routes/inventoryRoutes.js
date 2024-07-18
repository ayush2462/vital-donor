import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import {
  createInventoryController,
  getDonorsController,
  getHospitalController,
  getInventoryController,
  getInventoryHospitalController,
  getOrganisationController,
  getOrganisationForHospitalController,
  getRecentInventoryController,
} from "../controllers/inventoryController.js";

const router = express.Router();
// routes
//Add inventory || Post
router.post("/create-inventory", authMiddleware, createInventoryController);
//Get all inventory || Get
router.get("/get-inventory", authMiddleware, getInventoryController);
//Get recent blood record inventory || Get
router.get(
  "/get-recent-inventory",
  authMiddleware,
  getRecentInventoryController
);
//Get hospital blood records || Get
router.post(
  "/get-inventory-hospital",
  authMiddleware,
  getInventoryHospitalController
);
//get Donor Records
router.get("/get-donors", authMiddleware, getDonorsController);
// get hospital records
router.get("/get-hospitals", authMiddleware, getHospitalController);
// get organisation records
router.get("/get-organisation", authMiddleware, getOrganisationController);
// get organisation records
router.get(
  "/get-organisation-for-hospital",
  authMiddleware,
  getOrganisationForHospitalController
);
export default router;
