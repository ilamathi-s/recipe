import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <header className="bg-white shadow-sm">
      <div className="container flex justify-between items-center py-4">
        <h2
          className="text-xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          RecipeApp
        </h2>

        <nav className="flex gap-6">
          <button onClick={() => navigate("/about")}>About</button>

          {isLoggedIn ? (
            <button onClick={() => navigate("/home")}>My Recipes</button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
