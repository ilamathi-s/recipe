import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axiosConfig";
import type { Preference } from "../types/index";

const PreferencePage: React.FC = () => {
  const navigate = useNavigate();
  const [mealType, setMealType] = useState<Preference["mealType"]>("all");
  const [foodType, setFoodType] = useState<Preference["foodType"]>("veg");
  const [nutritionFocus, setNutritionFocus] = useState<string[]>([]);
  const [greenBased, setGreenBased] = useState<boolean>(false);

  const options = ["protein-rich", "fiber-rich", "vitamin-rich", "balanced"];

  const handleCheckbox = (option: string) => {
    setNutritionFocus((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/preferences", {
        mealType,
        foodType,
        nutritionFocus,
        greenBasedOnly: greenBased,
      });
      navigate("/home");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-screen flex-center bg-main flex-col">
      <h2 className="heading">Set Your Preferences</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
        <select
          value={mealType}
          onChange={(e) =>
            setMealType(e.target.value as Preference["mealType"])
          }
          className="form-select"
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="all">All</option>
        </select>

        <select
          value={foodType}
          onChange={(e) =>
            setFoodType(e.target.value as Preference["foodType"])
          }
          className="form-select"
        >
          <option value="veg">Veg</option>
          <option value="non-veg">Non-Veg</option>
          <option value="both">Both</option>
        </select>

        <div className="flex flex-col">
          <span className="sub-heading">Nutrition Focus</span>
          {options.map((opt) => (
            <label key={opt} className="label-checkbox">
              <input
                type="checkbox"
                checked={nutritionFocus.includes(opt)}
                onChange={() => handleCheckbox(opt)}
              />
              {opt}
            </label>
          ))}
        </div>

        <label className="label-checkbox">
          <input
            type="checkbox"
            checked={greenBased}
            onChange={() => setGreenBased(!greenBased)}
          />
          Green Based Only
        </label>

        <button type="submit" className="btn btn-primary">
          Save Preferences
        </button>
      </form>
    </div>
  );
};

export default PreferencePage;
