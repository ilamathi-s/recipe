import express from 'express'
import recipeRoutes from "./routes/recipeRouter.js"
const app=express();
app.use("/api/recipe",recipeRoutes);

app.listen(5000, () =>{
    console.log("Server started on PORT:5000");
});  