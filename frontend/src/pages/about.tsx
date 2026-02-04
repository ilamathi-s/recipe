const About = () => {
  return (
    <div className="min-screen bg-main">
      <div className="container py-16">
        <h1 className="heading">About This App</h1>

        <p className="text-gray-700 mb-6">
          This recipe suggestion platform helps users discover meals that match
          their food preferences, dietary needs, and nutrition goals.
        </p>

        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>Personalized recipe recommendations</li>
          <li>Veg / Non-Veg / Green-based filtering</li>
          <li>Nutrition-focused suggestions</li>
          <li>Simple, fast & user-friendly interface</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
