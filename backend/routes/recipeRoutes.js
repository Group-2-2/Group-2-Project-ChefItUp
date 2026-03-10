import { Router } from "express";
import {  createRecipe, getRecipes, getRecipeById, updateRecipe, deleteRecipe } from "../controllers/recipeController";

const router = Router();

router.post("/recipes", createRecipe);
router.get("/recipes", getRecipes);
router.get("/recipes/:id", getRecipeById);
router.put("/recipes/:id", updateRecipe);
router.delete("/recipes/:id", deleteRecipe);

export default router;
