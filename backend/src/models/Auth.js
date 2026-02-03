import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  selectedMealType: {
    type: String,
    enum: ["breakfast", "lunch", "dinner", "all"],
    default: "all"
  }
}, { timestamps: true });

export default mongoose.model("Auth", userSchema);
