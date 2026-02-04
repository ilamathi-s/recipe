import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Login from "./pages/login";
import PreferencePage from "./pages/preferencePage";
import Home from "./pages/home";
import RecipeDetail from "./pages/recipeDetail";
import "./App.css";
import About from "./pages/about";

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About/>}/>
      <Route path="/preference" element={<PreferencePage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/recipe/:id" element={<RecipeDetail />} />
    </Routes>
  </Router>
);

export default App;
