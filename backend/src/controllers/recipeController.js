import Recipe from "../models/Recipe.js";
import Preference from "../models/Preference.js";

export const getRecipesByMeal = async (req, res) => {
  try {
    const { mealType } = req.query;
    const userId = req.user.id;

    const preference = await Preference.findOne({ userId });

    let filter = { mealType };

    if (preference) {
      // food type
      if (preference.foodType !== "both") {
        filter.foodType = preference.foodType;
      }

      // green based
      if (preference.greenBasedOnly) {
        filter.isGreenBased = true;
      }

      // nutrition focus
      if (
        preference.nutritionFocus &&
        !preference.nutritionFocus.includes("balanced")
      ) {
        filter.nutritionTags = { $in: preference.nutritionFocus };
      }
    }

    const recipes = await Recipe.find(filter);
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch recipes" });
  }
};

export const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe)
      return res.status(404).json({ message: "Recipe not found" });

    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch recipe" });
  }
};
