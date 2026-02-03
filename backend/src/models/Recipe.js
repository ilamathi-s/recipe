import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  name: String,

  mealType: {
    type: String,
    enum: ["breakfast", "lunch", "dinner"],
    required: true
  },

  foodType: {
    type: String,
    enum: ["veg", "non-veg"],
    required: true
  },

  nutritionTags: {
    type: [String],
    enum: [
      "protein-rich",
      "fiber-rich",
      "vitamin-rich",
      "low-carb",
      "balanced"
    ],
    default: ["balanced"]
  },

  isGreenBased: {
    type: Boolean,
    default: false
  },

  ingredients: [String],
  shortSteps: String

}, { timestamps: true });

export default mongoose.model("Recipe", recipeSchema);
