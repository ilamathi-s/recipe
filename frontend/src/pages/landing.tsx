import { useNavigate } from "react-router-dom";

const dishes = [
  {
    id: 1,
    name: "Veg Bowl",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
  },
  {
    id: 2,
    name: "Chicken Salad",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1"
  },
  {
    id: 3,
    name: "Healthy Breakfast",
    image: "https://images.unsplash.com/photo-1493770348161-369560ae357d"
  }
];

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-screen bg-main">
      {/* HERO */}
      <section className="container py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Smart Recipe Suggestions 🍽️
        </h1>
        <p className="text-gray-700 mb-8">
          Personalized recipes based on your food preferences & nutrition goals.
        </p>

        <button
          className="btn btn-primary"
          onClick={() => navigate("/login")}
        >
          Login to Get Started
        </button>
      </section>

      {/* DISH SHOWCASE */}
      <section className="container pb-16">
        <h2 className="heading text-center">Explore Popular Dishes</h2>

        <div className="grid-recipes">
          {dishes.map((dish) => (
            <div key={dish.id} className="card">
              <img
                src={dish.image}
                alt={dish.name}
                className="rounded-lg mb-3 h-48 w-full object-cover"
              />
              <h3 className="sub-heading">{dish.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Landing;
