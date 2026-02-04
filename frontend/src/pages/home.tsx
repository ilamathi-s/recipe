import { useEffect, useState } from "react";
import axios from "../api/axiosConfig";
import Header from "../components/header";
import Loader from "../components/Loader";
import RecipeCard from "../components/recipeCard";
import type { Recipe } from "../types";

const Home: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await axios.get<Recipe[]>(
          "/recipes/all"
        );
        setRecipes(res.data);
      } catch (err) {
        console.error("Fetch recipes failed:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Header />

      <div className="container mt-6">
        {recipes.length === 0 && (
          <p className="empty-state">No recipes found</p>
        )}

        <div className="grid-recipes">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
