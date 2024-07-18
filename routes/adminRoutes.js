import express from "express";
import {
  deleteRecordController,
  getDonorListController,
  getHospitalListController,
  getOrganisationListController,
} from "../controllers/adminController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import adminMiddleware from "../middlewares/adminMiddleware.js";
const router = express.Router();
//routes
//get donor list
router.get(
  "/donor-list",
  authMiddleware,
  adminMiddleware,
  getDonorListController
);
// delete donor-list
router.delete(
  "/delete-donor/:id",
  authMiddleware,
  adminMiddleware,
  deleteRecordController
);
// delete hospital-list
router.delete(
  "/delete-hospital/:id",
  authMiddleware,
  adminMiddleware,
  deleteRecordController
);
// delete org-list
router.delete(
  "/delete-organisation/:id",
  authMiddleware,
  adminMiddleware,
  deleteRecordController
);
//get hospital list
router.get(
  "/hospital-list",
  authMiddleware,
  adminMiddleware,
  getHospitalListController
);
//get organisation list
router.get(
  "/organisation-list",
  authMiddleware,
  adminMiddleware,
  getOrganisationListController
);
export default router;
