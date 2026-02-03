import mongoose from "mongoose";

const preferenceSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  foodType: {
    type: String,
    enum: ["veg", "non-veg", "both"],
    default: "both"
  },

  nutritionFocus: {
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

  greenBasedOnly: {
    type: Boolean,
    default: false
  }

}, { timestamps: true });

export default mongoose.model("Preference", preferenceSchema);
