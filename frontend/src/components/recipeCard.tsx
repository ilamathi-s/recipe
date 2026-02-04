import { useNavigate } from "react-router-dom";
import type { Recipe } from "../types";

interface Props {
  recipe: Recipe;
}

const RecipeCard: React.FC<Props> = ({ recipe }) => {
  const navigate = useNavigate();
  return (
    <div className="card" onClick={() => navigate(`/recipe/${recipe._id}`)}>
      <h3 className="sub-heading">{recipe.name}</h3>
      <p className="text-gray-600 mb-2">
        {recipe.nutritionTags.join(", ")} {recipe.isGreenBased && "| Green Based"}
      </p>
      <p className="text-gray-700">{recipe.shortSteps}</p>
    </div>
  );
};

export default RecipeCard;
