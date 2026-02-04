export interface Recipe {
  _id: string;
  name: string;
  ingredients: string[];
  shortSteps: string;
  nutritionTags: string[];
  isGreenBased: boolean;
}

export interface Preference {
  mealType: "breakfast" | "lunch" | "dinner" | "all";
  foodType: "veg" | "non-veg" | "both";
  nutritionFocus: string[];
  greenBasedOnly: boolean;
}

export interface User {
  _id: string;
  name: string;
  email: string;
}
