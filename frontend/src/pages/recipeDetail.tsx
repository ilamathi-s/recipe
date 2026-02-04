import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axiosConfig";
import Loader from "../components/Loader";
import Header from "../components/header";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchRecipe = async () => {
      try {
        const res = await axios.get(`/recipes/${id}`);
        setRecipe(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) return <Loader />;
  if (!recipe) return <p>Recipe not found</p>;

  return (
    <>
      <Header />
      <div className="p-6">
        <h1 className="text-2xl font-bold">{recipe.title}</h1>
        <p>Meal Type: {recipe.mealType}</p>
        <p>Food Type: {recipe.foodType}</p>

        <div className="mt-4">
          <h3 className="font-semibold">Nutrition Tags</h3>
          <ul>
            {recipe.nutritionTags?.map((tag: string) => (
              <li key={tag}>• {tag}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RecipeDetail;
