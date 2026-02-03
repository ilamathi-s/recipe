import express from "express";
import {
  savePreference,
  getPreference
} from "../controllers/preferedController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, savePreference);
router.get("/", authMiddleware, getPreference);

export default router;
