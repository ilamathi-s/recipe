import Recipe from "../models/Recipe.js";
import Preference from "../models/Preference.js";

export const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({});

  

    res.status(200).json(recipes);
  } catch (error) {
    console.error("Error fetching all recipes:", error);
    res.status(500).json({ message: "Failed to fetch recipes" });
  }
};
export const getRecipesByMeal = async (req, res) => {
  try {
    const { mealType } = req.query;
    const userId = req.user.id;

    if (!mealType) {
      return res.status(400).json({ message: "mealType is required" });
    }

    const preference = await Preference.findOne({ userId });

    // Base filter
    let filter = { mealType };

    if (preference) {
      // Food type filter (veg / non-veg)
      if (
        preference.foodType &&
        preference.foodType !== "both"
      ) {
        filter.foodType = preference.foodType;
      }

      // Green based filter
      if (preference.greenBasedOnly === true) {
        filter.isGreenBased = true;
      }

      // Nutrition filter (SAFE)
      if (
        Array.isArray(preference.nutritionFocus) &&
        preference.nutritionFocus.length > 0 &&
        !preference.nutritionFocus.includes("balanced")
      ) {
        filter.$or = [
          { nutritionTags: { $in: preference.nutritionFocus } },
          { nutritionTags: { $exists: false } },
          { nutritionTags: { $size: 0 } }
        ];
      }
    }

    const recipes = await Recipe.find(filter);
    res.status(200).json(recipes);
  } catch (error) {
    console.error("Recipe fetch error:", error);
    res.status(500).json({ message: "Failed to fetch recipes" });
  }
};

export const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    res.status(200).json(recipe);
  } catch (error) {
    console.error("Recipe fetch error:", error);
    res.status(500).json({ message: "Failed to fetch recipe" });
  }
};
