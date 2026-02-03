import express from "express";
import {
  getRecipesByMeal,
  getRecipeById
} from "../controllers/recipeController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getRecipesByMeal);
router.get("/:id", authMiddleware, getRecipeById);

export default router;
