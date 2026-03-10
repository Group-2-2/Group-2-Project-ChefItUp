import { Router } from "express";
import {  createRecipe, getRecipes, getRecipeById, updateRecipe, deleteRecipe } from "../controllers/recipeController";
import { protect } from "../middleware/auth";

const router = Router();

// public routes
router.get("/recipes", getRecipes);
router.get("/recipes/:id", getRecipeById);

// protect routes with auth middleware
router.post("/recipes", protect, createRecipe);
router.put("/recipes/:id", protect, updateRecipe);
router.delete("/recipes/:id", protect, deleteRecipe);

export default router;
