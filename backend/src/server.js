import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import cors from "cors"
import authRouter from "./routes/authRouter.js";
import recipeRouter from "./routes/recipeRouter.js";
import preferenceRouter from "./routes/preferenceRouter.js";

dotenv.config();

const app = express();
app.use(cors({
  origin: "http://localhost:5173",
  credentials:true,
  allowedHeaders: ["Content-Type", "Authorization"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
}));
const PORT = process.env.PORT || 5000;

app.use(express.json()); 

app.use("/api/auth", authRouter);
app.use("/api/recipes", recipeRouter);
app.use("/api/preferences", preferenceRouter);

app.get("/", (req, res) => {
  res.status(200).send("Recipe Suggestion API is running");
});

connectDB();
app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
