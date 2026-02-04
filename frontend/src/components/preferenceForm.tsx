import { useState } from "react";
import axios from "../api/axiosConfig";

const PreferenceForm: React.FC = () => {
  const [foodType, setFoodType] = useState("both");
  const [greenBasedOnly, setGreenBasedOnly] = useState(false);
  const [nutritionFocus, setNutritionFocus] = useState<string[]>([]);

  const toggleNutrition = (tag: string) => {
    setNutritionFocus((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    );
  };

  const submitPreferences = async () => {
    try {
      await axios.post("/preferences", {
        foodType,
        greenBasedOnly,
        nutritionFocus
      });
      alert("Preferences saved");
    } catch (err) {
      console.error(err);
      alert("Failed to save preferences");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Your Preferences</h2>

      <label className="block mb-2">Food Type</label>
      <select
        value={foodType}
        onChange={(e) => setFoodType(e.target.value)}
        className="border p-2 w-full mb-4"
      >
        <option value="both">Both</option>
        <option value="veg">Veg</option>
        <option value="non-veg">Non-Veg</option>
      </select>

      <label className="flex items-center mb-4">
        <input
          type="checkbox"
          checked={greenBasedOnly}
          onChange={(e) => setGreenBasedOnly(e.target.checked)}
        />
        <span className="ml-2">Green based only</span>
      </label>

      <label className="block mb-2">Nutrition Focus</label>
      {["high-protein", "low-carb", "balanced"].map((tag) => (
        <label key={tag} className="block">
          <input
            type="checkbox"
            checked={nutritionFocus.includes(tag)}
            onChange={() => toggleNutrition(tag)}
          />
          <span className="ml-2">{tag}</span>
        </label>
      ))}

      <button
        onClick={submitPreferences}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
      >
        Save Preferences
      </button>
    </div>
  );
};

export default PreferenceForm;
