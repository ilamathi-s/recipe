import express from "express";
import {
  getRecipesByMeal,
  getRecipeById,
  getAllRecipes
} from "../controllers/recipeController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();
router.get("/all",getAllRecipes)
router.get("/", authMiddleware, getRecipesByMeal);
router.get("/:id",  getRecipeById);

export default router;
